from django import template
from django.core.cache import cache
from django.utils.safestring import mark_safe
import bleach
import hashlib

register = template.Library()


ALLOWED_TAGS = ['a', 'br', 'em', 'strong']
ALLOWED_ATTRIBUTES = {
    'a': ['href', 'target', 'title', 'rel'],
    '*': [],
}
ALLOWED_PROTOCOLS = ['http', 'https', 'mailto', 'tel']

_RE_ADD_REL = None


def _add_rel_to_blank_links(cleaned):
    """Force rel="noopener noreferrer" on any link that has target="_blank".

    bleach.clean doesn't modify attribute values, so we do a lightweight
    post-processing here. This is safe because the HTML has already been
    sanitized and only <a> tags with allowed attributes remain.
    """
    import re

    def add_rel(match):
        attrs = match.group(1)
        if 'target="_blank"' in attrs or "target='_blank'" in attrs:
            if 'rel=' not in attrs:
                attrs += ' rel="noopener noreferrer"'
        return f'<a{attrs}>'

    return re.sub(r'<a([^>]*)>', add_rel, cleaned)


def _sanitize_cached(value):
    """Sanitize reference HTML with memoization.

    Reference text is content-controlled (imported from the seed JS files),
    so the same input always yields the same output. Cache for 1h to avoid
    re-running bleach + regex on the 338+ references of every render.
    """
    # Deterministic SHA1 so all gunicorn workers share the same cache key
    # (Python's built-in hash() is randomized per process).
    digest = hashlib.sha1(str(value).encode('utf-8')).hexdigest()
    cache_key = 'sanitize_ref:' + digest
    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    cleaned = bleach.clean(
        str(value),
        tags=ALLOWED_TAGS,
        attributes=ALLOWED_ATTRIBUTES,
        protocols=ALLOWED_PROTOCOLS,
        strip=True,
    )
    cleaned = _add_rel_to_blank_links(cleaned)

    cache.set(cache_key, cleaned, timeout=3600)
    return cleaned


@register.filter(name='sanitize_ref')
def sanitize_ref(value):
    """Sanitize reference HTML, allowing only safe tags/attributes.

    Automatically adds rel="noopener noreferrer" to external links
    to prevent tabnabbing and improve security.
    """
    if not value:
        return value

    return mark_safe(_sanitize_cached(value))
