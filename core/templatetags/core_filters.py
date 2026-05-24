from django import template
from django.utils.safestring import mark_safe
import bleach

register = template.Library()


ALLOWED_TAGS = ['a', 'br', 'em', 'strong']
ALLOWED_ATTRIBUTES = {
    'a': ['href', 'target', 'title', 'rel'],
    '*': [],
}
ALLOWED_PROTOCOLS = ['http', 'https', 'mailto', 'tel']


@register.filter(name='sanitize_ref')
def sanitize_ref(value):
    """Sanitize reference HTML, allowing only safe tags/attributes.

    Automatically adds rel="noopener noreferrer" to external links
    to prevent tabnabbing and improve security.
    """
    if not value:
        return value

    cleaned = bleach.clean(
        str(value),
        tags=ALLOWED_TAGS,
        attributes=ALLOWED_ATTRIBUTES,
        protocols=ALLOWED_PROTOCOLS,
        strip=True,
    )

    # Force rel="noopener noreferrer" on any link that has target="_blank"
    # bleach.clean doesn't modify attribute values, so we do a lightweight
    # post-processing here. This is safe because the HTML has already been
    # sanitized and only <a> tags with allowed attributes remain.
    import re
    def add_rel(match):
        attrs = match.group(1)
        if 'target="_blank"' in attrs or "target='_blank'" in attrs:
            if 'rel=' not in attrs:
                attrs += ' rel="noopener noreferrer"'
        return f'<a{attrs}>'

    cleaned = re.sub(r'<a([^>]*)>', add_rel, cleaned)
    return mark_safe(cleaned)
