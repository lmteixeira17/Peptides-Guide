import os

from django.conf import settings


def analytics(request):
    """Add site metadata used across rendered templates."""
    site_prefix = (getattr(settings, 'FORCE_SCRIPT_NAME', '') or '').rstrip('/')
    site_url_prefix = f"{settings.SITE_BASE_URL}{site_prefix}"
    request_path = request.path_info if request else '/'
    canonical_url = f"{site_url_prefix}{request_path}"

    return {
        'ga4_id': os.environ.get('GA4_MEASUREMENT_ID', ''),
        'canonical_url': canonical_url,
        'site_base_url': settings.SITE_BASE_URL,
        'site_path_prefix': site_prefix,
        'site_url_prefix': site_url_prefix,
        'site_home_url': f'{site_url_prefix}/',
        'site_og_image_url': f'{site_url_prefix}/static/core/og-image.webp',
    }
