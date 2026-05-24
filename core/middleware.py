"""
Simple rate limiting middleware using Django cache.
No external dependencies required.
"""

import time

from django.core.cache import cache
from django.http import JsonResponse


class RateLimitMiddleware:
    """Rate limit API endpoints per IP address."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Only rate limit API endpoints
        if request.path == '/api/peptides.json':
            client_ip = self._get_client_ip(request)
            cache_key = f'ratelimit:{client_ip}'

            # Get current request count and timestamp
            data = cache.get(cache_key)
            now = time.time()
            window = 60  # 1 minute window
            limit = 60   # 60 requests per minute

            if data is None:
                data = {'count': 1, 'window_start': now}
                cache.set(cache_key, data, timeout=window)
            else:
                # Check if window has expired
                if now - data['window_start'] > window:
                    data = {'count': 1, 'window_start': now}
                    cache.set(cache_key, data, timeout=window)
                else:
                    data['count'] += 1
                    cache.set(cache_key, data, timeout=window)

                    if data['count'] > limit:
                        return JsonResponse(
                            {
                                'error': 'Rate limit exceeded.',
                                'retry_after': int(window - (now - data['window_start'])),
                            },
                            status=429,
                        )

        return self.get_response(request)

    def _get_client_ip(self, request):
        """Extract client IP from request headers."""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0].strip()
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip or 'unknown'
