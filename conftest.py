"""Project-level pytest fixtures and configuration.

Note: The previous Python 3.14 compatibility monkey-patch for
`BaseContext.__copy__` (needed by Django 4.2) has been removed after the
upgrade to Django 5.2 LTS, which officially supports Python 3.10-3.13
and works correctly on 3.14 without patches.
"""
