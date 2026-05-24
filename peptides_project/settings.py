"""
Django settings for peptides_project.
"""

import os
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

_running_tests = (
    any(
        module_name == 'pytest'
        or module_name.startswith('_pytest')
        or module_name.startswith('pytest_')
        for module_name in sys.modules
    )
    or any('pytest' in arg.lower() or 'py.test' in arg.lower() for arg in sys.argv)
)
DEBUG = (
    True if _running_tests
    else os.environ.get('DEBUG', 'False').lower() in ('true', '1', 'yes')
)

SECRET_KEY = os.environ.get('SECRET_KEY')
if not SECRET_KEY:
    if DEBUG:
        SECRET_KEY = 'django-insecure-dev-only-key-do-not-use-in-production'
    else:
        raise ValueError(
            "SECRET_KEY environment variable is required when DEBUG=False. "
            "Generate one with: python -c \"from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())\""
        )

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', 'localhost,127.0.0.1,45.63.90.69,mlt.com.br,guiadepeptideos.com.br,www.guiadepeptideos.com.br').split(',')
SITE_BASE_URL = os.environ.get('SITE_BASE_URL', 'https://guiadepeptideos.com.br').rstrip('/')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'compressor',
    'core',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.gzip.GZipMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'core.middleware.RateLimitMiddleware',
    'core.middleware.AdminSecurityMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'peptides_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': False,
        'OPTIONS': {
            'loaders': [
                ('django.template.loaders.cached.Loader', [
                    'django.template.loaders.filesystem.Loader',
                    'django.template.loaders.app_directories.Loader',
                ]),
            ],
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'core.context_processors.analytics',
            ],
        },
    },
]

WSGI_APPLICATION = 'peptides_project.wsgi.application'

# Database
DB_ENGINE = os.environ.get('DB_ENGINE', '')

if DB_ENGINE == 'django.db.backends.postgresql':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('DB_NAME', 'peptides'),
            'USER': os.environ.get('DB_USER', 'peptides'),
            'PASSWORD': os.environ.get('DB_PASSWORD', ''),
            'HOST': os.environ.get('DB_HOST', 'db'),
            'PORT': os.environ.get('DB_PORT', '5432'),
            'OPTIONS': {
                'connect_timeout': 10,
            },
            'CONN_MAX_AGE': 60,
            'CONN_HEALTH_CHECKS': True,
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'data' / 'db.sqlite3',
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'pt-br'
TIME_ZONE = 'America/Sao_Paulo'
USE_I18N = True
USE_TZ = True

# Static files
FORCE_SCRIPT_NAME = os.environ.get('FORCE_SCRIPT_NAME', '')
USE_X_FORWARDED_HOST = True

STATIC_URL = f'{FORCE_SCRIPT_NAME}/static/' if FORCE_SCRIPT_NAME else '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR / 'static']
if _running_tests:
    staticfiles_storage = 'django.contrib.staticfiles.storage.StaticFilesStorage'
else:
    staticfiles_storage = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STORAGES = {
    'default': {
        'BACKEND': 'django.core.files.storage.FileSystemStorage',
    },
    'staticfiles': {
        'BACKEND': staticfiles_storage,
    },
}
WHITENOISE_AUTOREFRESH = DEBUG or _running_tests
WHITENOISE_USE_FINDERS = DEBUG or _running_tests

# django-compressor
COMPRESS_ENABLED = not DEBUG
COMPRESS_OFFLINE = True
COMPRESS_FILTERS = {
    'css': [
        'compressor.filters.css_default.CssAbsoluteFilter',
        'compressor.filters.cssmin.rCSSMinFilter',
    ],
    'js': [
        'compressor.filters.jsmin.rJSMinFilter',
    ],
}
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

_redis_url = os.environ.get('REDIS_URL', '')
if _redis_url:
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.redis.RedisCache',
            'LOCATION': _redis_url,
        }
    }
else:
    # Fallback: in-process cache for local dev / tests.
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'peptides-guide-cache',
        }
    }

RATE_LIMIT_API_REQUESTS = int(
    os.environ.get('RATE_LIMIT_API_REQUESTS', '1000' if _running_tests else '60')
)
RATE_LIMIT_API_WINDOW_SECONDS = int(os.environ.get('RATE_LIMIT_API_WINDOW_SECONDS', '60'))
RATE_LIMIT_ADMIN_REQUESTS = int(os.environ.get('RATE_LIMIT_ADMIN_REQUESTS', '5'))
RATE_LIMIT_ADMIN_WINDOW_SECONDS = int(os.environ.get('RATE_LIMIT_ADMIN_WINDOW_SECONDS', '300'))

# Cookies — unique names to avoid conflicts with other Django apps on the same domain
SESSION_COOKIE_NAME = 'peptides_sessionid'
CSRF_COOKIE_NAME = 'peptides_csrftoken'
SESSION_COOKIE_PATH = f'{FORCE_SCRIPT_NAME}/' if FORCE_SCRIPT_NAME else '/'
CSRF_COOKIE_PATH = f'{FORCE_SCRIPT_NAME}/' if FORCE_SCRIPT_NAME else '/'

# Security
X_FRAME_OPTIONS = 'DENY'
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_REFERRER_POLICY = 'strict-origin-when-cross-origin'
# HSTS subdomains/preload stay opt-in because this app can run under shared
# apex/path domains where forcing every subdomain to HTTPS may affect other apps.
SILENCED_SYSTEM_CHECKS = ['security.W005', 'security.W021']

if not DEBUG:
    SECURE_SSL_REDIRECT = os.environ.get('SECURE_SSL_REDIRECT', 'True').lower() in ('true', '1', 'yes')
    SESSION_COOKIE_SECURE = os.environ.get('SESSION_COOKIE_SECURE', 'True').lower() in ('true', '1', 'yes')
    CSRF_COOKIE_SECURE = os.environ.get('CSRF_COOKIE_SECURE', 'True').lower() in ('true', '1', 'yes')
    SECURE_HSTS_SECONDS = int(os.environ.get('SECURE_HSTS_SECONDS', '31536000'))
    SECURE_HSTS_INCLUDE_SUBDOMAINS = os.environ.get(
        'SECURE_HSTS_INCLUDE_SUBDOMAINS', 'False'
    ).lower() in ('true', '1', 'yes')
    SECURE_HSTS_PRELOAD = os.environ.get('SECURE_HSTS_PRELOAD', 'False').lower() in (
        'true', '1', 'yes'
    )
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'simple': {
            'format': '{levelname} {asctime} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': True,
        },
        'core': {
            'handlers': ['console'],
            'level': 'DEBUG' if DEBUG else 'INFO',
            'propagate': False,
        },
    },
}
