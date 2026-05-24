"""
Simple rate limiting middleware using Django cache.
No external dependencies required.
"""

import ipaddress
import secrets
import time

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


class ContentSecurityPolicyMiddleware:
    """Attach a nonce-based Content-Security-Policy to public responses."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        request.csp_nonce = secrets.token_urlsafe(16)
        response = self.get_response(request)

        if response.has_header('Content-Security-Policy'):
            return response

        nonce = request.csp_nonce
        directives = [
            "default-src 'self'",
            "script-src 'self' 'nonce-" + nonce + "' https://www.googletagmanager.com https://www.google-analytics.com",
            "script-src-attr 'none'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: https:",
            "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
            "object-src 'none'",
            "base-uri 'self'",
            "frame-ancestors 'none'",
            "frame-src 'none'",
            "form-action 'self'",
            "manifest-src 'self'",
            "worker-src 'self'",
        ]
        if not settings.DEBUG:
            directives.append('upgrade-insecure-requests')

        response['Content-Security-Policy'] = '; '.join(directives)
        return response


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
