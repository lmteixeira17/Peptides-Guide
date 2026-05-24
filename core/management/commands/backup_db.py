"""
Management command to backup the database.

PostgreSQL: uses pg_dump to create a SQL dump.
SQLite: copies the database file.

Usage:
    python manage.py backup_db
    python manage.py backup_db --output /path/to/backups/
"""

import os
import shutil
import subprocess
from datetime import datetime
from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = 'Create a database backup (PostgreSQL or SQLite).'

    def add_arguments(self, parser):
        parser.add_argument(
            '--output',
            type=str,
            default='.',
            help='Directory to save the backup file (default: current directory).',
        )

    def handle(self, *args, **options):
        output_dir = Path(options['output']).resolve()
        output_dir.mkdir(parents=True, exist_ok=True)

        db_config = settings.DATABASES['default']
        engine = db_config['ENGINE']
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

        if 'postgresql' in engine:
            self._backup_postgresql(db_config, output_dir, timestamp)
        elif 'sqlite3' in engine:
            self._backup_sqlite(db_config, output_dir, timestamp)
        else:
            raise CommandError(f'Unsupported database engine: {engine}')

    def _backup_postgresql(self, db_config, output_dir, timestamp):
        db_name = db_config['NAME']
        db_user = db_config.get('USER', '')
        db_password = db_config.get('PASSWORD', '')
        db_host = db_config.get('HOST', 'localhost')
        db_port = db_config.get('PORT', '5432')

        filename = f'peptides_backup_{timestamp}.sql'
        filepath = output_dir / filename

        env = os.environ.copy()
        if db_password:
            env['PGPASSWORD'] = db_password

        cmd = [
            'pg_dump',
            '--host', db_host,
            '--port', str(db_port),
            '--username', db_user,
            '--dbname', db_name,
            '--verbose',
            '--file', str(filepath),
        ]

        self.stdout.write(self.style.NOTICE(f'Creating PostgreSQL backup: {filepath}'))

        try:
            result = subprocess.run(
                cmd,
                env=env,
                capture_output=True,
                text=True,
                check=True,
            )
            self.stdout.write(self.style.SUCCESS(f'Backup created successfully: {filepath}'))
        except FileNotFoundError:
            raise CommandError(
                'pg_dump not found. Ensure PostgreSQL client tools are installed.\n'
                'In Docker: docker exec peptides-db pg_dump ...'
            )
        except subprocess.CalledProcessError as e:
            raise CommandError(f'pg_dump failed:\n{e.stderr}')

    def _backup_sqlite(self, db_config, output_dir, timestamp):
        db_path = Path(db_config['NAME'])
        if not db_path.exists():
            raise CommandError(f'SQLite database not found: {db_path}')

        filename = f'peptides_backup_{timestamp}.sqlite3'
        filepath = output_dir / filename

        self.stdout.write(self.style.NOTICE(f'Creating SQLite backup: {filepath}'))
        shutil.copy2(str(db_path), str(filepath))
        self.stdout.write(self.style.SUCCESS(f'Backup created successfully: {filepath}'))
