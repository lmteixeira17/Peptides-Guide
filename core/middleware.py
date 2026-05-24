"""
Simple rate limiting middleware using Django cache.
No external dependencies required.
"""

import time
import ipaddress

from django.conf import settings
from django.core.cache import cache
from django.http import HttpResponseForbidden, HttpResponseNotFound, JsonResponse


def _valid_ip(value):
    """Return a normalized IP string or None for invalid input."""
    if not value:
        return None
    value = str(value).strip()
    try:
        return str(ipaddress.ip_address(value))
    except ValueError:
        return None


def get_client_ip(request):
    """Extract a usable client IP from common proxy headers."""
    for header in ('HTTP_CF_CONNECTING_IP', 'HTTP_X_REAL_IP'):
        ip = _valid_ip(request.META.get(header))
        if ip:
            return ip

    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        for part in x_forwarded_for.split(','):
            ip = _valid_ip(part)
            if ip:
                return ip

    return _valid_ip(request.META.get('REMOTE_ADDR')) or 'unknown'


class RateLimitMiddleware:
    """Rate limit API endpoints per IP address."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # path_info excludes FORCE_SCRIPT_NAME, so /peptides/api/... is covered.
        if request.path_info == '/api/peptides.json':
            client_ip = get_client_ip(request)
            cache_key = f'ratelimit:api:peptides:{client_ip}'

            data = cache.get(cache_key)
            now = time.time()
            window = max(1, int(getattr(settings, 'RATE_LIMIT_API_WINDOW_SECONDS', 60)))
            limit = int(getattr(settings, 'RATE_LIMIT_API_REQUESTS', 60))

            if limit <= 0:
                return self.get_response(request)

            if data is None:
                data = {'count': 1, 'window_start': now}
                cache.set(cache_key, data, timeout=window)
            else:
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
                                'retry_after': int(
                                    window - (now - data['window_start'])
                                ),
                            },
                            status=429,
                        )

        return self.get_response(request)


class AdminSecurityMiddleware:
    """Hide admin panel and rate-limit admin login attempts.

    - Returns 404 for the default /admin/ path to avoid revealing the
      real admin URL to scanners.
    - Rate-limits the admin login page to mitigate brute-force attacks.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        path = request.path_info

        # Block the default /admin/ path entirely.
        if path.startswith('/admin/'):
            return HttpResponseNotFound()

        # Rate limit admin login attempts.
        if path == '/gestao/login/':
            client_ip = get_client_ip(request)
            cache_key = f'ratelimit:admin:login:{client_ip}'

            data = cache.get(cache_key)
            now = time.time()
            window = max(1, int(getattr(settings, 'RATE_LIMIT_ADMIN_WINDOW_SECONDS', 300)))
            limit = int(getattr(settings, 'RATE_LIMIT_ADMIN_REQUESTS', 5))

            if limit <= 0:
                return self.get_response(request)

            if data is None:
                data = {'count': 1, 'window_start': now}
                cache.set(cache_key, data, timeout=window)
            else:
                if now - data['window_start'] > window:
                    data = {'count': 1, 'window_start': now}
                    cache.set(cache_key, data, timeout=window)
                else:
                    data['count'] += 1
                    cache.set(cache_key, data, timeout=window)

                    if data['count'] > limit:
                        return HttpResponseForbidden()

        return self.get_response(request)
