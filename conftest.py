import sys

from django.template.context import BaseContext


def _patch_django_context_copy_for_python_314():
    if sys.version_info < (3, 14):
        return

    # Django 4.2 is not fully compatible with Python 3.14's copy(super()) behavior.
    def _compat_copy(self):
        duplicate = self.__class__.__new__(self.__class__)
        duplicate.__dict__ = self.__dict__.copy()
        duplicate.dicts = self.dicts[:]
        return duplicate

    BaseContext.__copy__ = _compat_copy


_patch_django_context_copy_for_python_314()