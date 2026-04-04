import os


def analytics(request):
    """Add analytics IDs to all template contexts."""
    return {
        'ga4_id': os.environ.get('GA4_MEASUREMENT_ID', ''),
    }
