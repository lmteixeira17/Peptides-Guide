# =============================================================================
# Peptides Guide - Multi-stage Dockerfile
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Builder
# -----------------------------------------------------------------------------
FROM python:3.11-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY . .

RUN SECRET_KEY='build-only-dummy-key-not-used-in-production' \
    DEBUG=True \
    python manage.py collectstatic --noinput

# -----------------------------------------------------------------------------
# Stage 2: Runtime
# -----------------------------------------------------------------------------
FROM python:3.11-slim AS runtime

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    libpq5 \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY --from=builder /app/core /app/core
COPY --from=builder /app/peptides_project /app/peptides_project
COPY --from=builder /app/templates /app/templates
COPY --from=builder /app/staticfiles /app/staticfiles
COPY --from=builder /app/static /app/static
COPY --from=builder /app/manage.py /app/manage.py
# Data files needed by seed_peptides management command
COPY --from=builder /app/data1.js /app/data1.js
COPY --from=builder /app/data2.js /app/data2.js
COPY --from=builder /app/data3.js /app/data3.js
COPY --from=builder /app/stacks.js /app/stacks.js

RUN useradd --create-home --shell /bin/bash appuser && \
    chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8000/health/ || exit 1

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "2", "--timeout", "120", "--max-requests", "1000", "--max-requests-jitter", "50", "peptides_project.wsgi:application"]
