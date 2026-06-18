"""
Management command to import peptide and stack data from existing JS files
(data1.js, data2.js, data3.js, stacks.js) into PostgreSQL.

The JS files use a format like:
    var peptidesPart1 = [ { id: "semaglutide", ... }, ... ];

This command:
1. Strips the var declaration
2. Converts JS object notation to valid JSON (unquoted keys, single quotes, etc.)
3. Parses the JSON array
4. Creates Django model instances
"""

import json
import logging
import re
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils import timezone

from core.models import (
    Peptide, PeptideBenefit, PeptideSideEffect, PeptideDosage, PeptideReference,
    Stack, StackPeptide, StackReference,
)
from core.serializers import serialize_peptide, serialize_stack


logger = logging.getLogger(__name__)
PEPTIDE_DATA_FILES = ('data1.js', 'data2.js', 'data3.js')
STACK_DATA_FILE = 'stacks.js'


def js_to_json(js_text):
    """Convert JavaScript object/array notation to valid JSON.

    Handles: unquoted keys, comments, trailing commas, escaped single quotes.
    Uses string-boundary-aware processing to avoid corrupting string content.
    """
    # Remove the var declaration
    first_bracket = js_text.index('[')
    text = js_text[first_bracket:]
    text = text.rstrip().rstrip(';')

    # Split into string and non-string segments
    # All JS strings in these files use double quotes
    segments = []
    i = 0
    in_string = False
    current_start = 0

    while i < len(text):
        ch = text[i]

        if in_string:
            if ch == '\\':
                i += 2  # skip escaped character
                continue
            if ch == '"':
                segments.append(('string', text[current_start:i + 1]))
                current_start = i + 1
                in_string = False
        else:
            if ch == '"':
                segments.append(('code', text[current_start:i]))
                current_start = i
                in_string = True
            elif ch == '/' and i + 1 < len(text):
                if text[i + 1] == '/':
                    segments.append(('code', text[current_start:i]))
                    end = text.find('\n', i)
                    if end == -1:
                        end = len(text)
                    current_start = end
                    i = end
                    continue
                elif text[i + 1] == '*':
                    segments.append(('code', text[current_start:i]))
                    end = text.find('*/', i + 2)
                    if end == -1:
                        end = len(text)
                    else:
                        end += 2
                    current_start = end
                    i = end
                    continue
        i += 1

    if current_start < len(text):
        segments.append(('code', text[current_start:]))

    # Process segments
    result_parts = []
    for seg_type, seg_text in segments:
        if seg_type == 'code':
            # Quote unquoted keys
            seg_text = re.sub(r'(?<=[{,\n\[:])\s*(\w+)\s*:', r' "\1":', seg_text)
            seg_text = re.sub(r'^\s*(\w+)\s*:', r' "\1":', seg_text)
            # Remove trailing commas
            seg_text = re.sub(r',(\s*[}\]])', r'\1', seg_text)
        elif seg_type == 'string':
            # Fix \' (valid in JS, invalid in JSON) → just '
            seg_text = seg_text.replace("\\'", "'")
        result_parts.append(seg_text)

    return ''.join(result_parts)


class Command(BaseCommand):
    help = 'Import peptide and stack data from JS files into the database'

    def add_arguments(self, parser):
        parser.add_argument(
            '--data-dir',
            type=str,
            default=None,
            help='Directory containing the JS data files (default: project root)',
        )
        parser.add_argument(
            '--dry-run',
            action='store_true',
            help='Parse all data files and report counts without changing the database',
        )
        parser.add_argument(
            '--backup-json',
            type=str,
            default=None,
            help='Write a JSON snapshot of the current catalog before replacing it',
        )

    def _parse_data_file(self, filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            js_text = f.read()

        json_text = js_to_json(js_text)
        try:
            return json.loads(json_text)
        except json.JSONDecodeError as e:
            line_num = json_text[:e.pos].count('\n') + 1
            start = max(0, e.pos - 100)
            end = min(len(json_text), e.pos + 100)
            self.stderr.write(f'Error parsing {Path(filepath).name}: {e}')
            self.stderr.write(f'Error near line {line_num}, position {e.pos}')
            self.stderr.write(f'Context: ...{json_text[start:end]}...')
            raise

    def _load_seed_data(self, data_dir):
        required_files = [*PEPTIDE_DATA_FILES, STACK_DATA_FILE]
        missing = [
            str(Path(data_dir) / filename)
            for filename in required_files
            if not (Path(data_dir) / filename).exists()
        ]
        if missing:
            raise CommandError(
                'Missing required seed data file(s): ' + ', '.join(missing)
            )

        all_peptides = []
        for filename in PEPTIDE_DATA_FILES:
            filepath = Path(data_dir) / filename
            self.stdout.write(f'Reading {filename}...')
            peptides_data = self._parse_data_file(filepath)
            all_peptides.extend(peptides_data)
            self.stdout.write(f'  Found {len(peptides_data)} peptides in {filename}')

        self.stdout.write(f'Reading {STACK_DATA_FILE}...')
        stacks_data = self._parse_data_file(Path(data_dir) / STACK_DATA_FILE)
        self.stdout.write(f'  Found {len(stacks_data)} stacks')

        return all_peptides, stacks_data

    def _catalog_counts(self):
        return {
            'peptides': Peptide.objects.count(),
            'benefits': PeptideBenefit.objects.count(),
            'side_effects': PeptideSideEffect.objects.count(),
            'dosages': PeptideDosage.objects.count(),
            'peptide_references': PeptideReference.objects.count(),
            'stacks': Stack.objects.count(),
            'stack_peptides': StackPeptide.objects.count(),
            'stack_references': StackReference.objects.count(),
        }

    def _write_catalog_backup(self, backup_path):
        path = Path(backup_path)
        path.parent.mkdir(parents=True, exist_ok=True)
        peptides = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).order_by('order', 'name')
        stacks = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).order_by('order', 'name')
        payload = {
            'generated_at': timezone.now().isoformat(),
            'counts': self._catalog_counts(),
            'peptides': [serialize_peptide(p) for p in peptides],
            'stacks': [serialize_stack(s) for s in stacks],
        }
        path.write_text(
            json.dumps(payload, ensure_ascii=False, indent=2),
            encoding='utf-8',
        )
        return path

    def handle(self, *args, **options):
        from django.conf import settings
        data_dir = Path(options['data_dir'] or str(settings.BASE_DIR))

        self.stdout.write('Importing peptide and stack data from JS files...')
        self.stdout.write(f'Data directory: {data_dir}')

        all_peptides, stacks_data = self._load_seed_data(data_dir)
        logger.info(
            'seed_peptides parsed source files',
            extra={
                'peptide_count': len(all_peptides),
                'stack_count': len(stacks_data),
                'data_dir': str(data_dir),
                'dry_run': options['dry_run'],
            },
        )

        if options['dry_run']:
            self.stdout.write(self.style.SUCCESS(
                'Dry run OK: parsed '
                f'{len(all_peptides)} peptides and {len(stacks_data)} stacks; '
                'database unchanged.'
            ))
            return

        with transaction.atomic():
            if options['backup_json']:
                backup_path = self._write_catalog_backup(options['backup_json'])
                self.stdout.write(f'Catalog backup written: {backup_path}')

            # Clear existing data
            self.stdout.write('Clearing existing data...')
            StackReference.objects.all().delete()
            StackPeptide.objects.all().delete()
            Stack.objects.all().delete()
            PeptideReference.objects.all().delete()
            PeptideDosage.objects.all().delete()
            PeptideSideEffect.objects.all().delete()
            PeptideBenefit.objects.all().delete()
            Peptide.objects.all().delete()

            # Create peptide records
            order = 0
            for pdata in all_peptides:
                order += 1
                peptide = Peptide.objects.create(
                    id=pdata['id'],
                    name=pdata.get('name', ''),
                    aka=pdata.get('aka', ''),
                    category=pdata.get('category', 'other'),
                    category_label=pdata.get('categoryLabel', ''),
                    description=pdata.get('description', ''),
                    mechanism=pdata.get('mechanism', ''),
                    administration=pdata.get('administration', ''),
                    half_life=pdata.get('halfLife', ''),
                    status=pdata.get('status', 'research'),
                    status_label=pdata.get('statusLabel', ''),
                    order=order,
                )

                # Benefits
                for i, benefit_text in enumerate(pdata.get('benefits', [])):
                    PeptideBenefit.objects.create(
                        peptide=peptide,
                        text=benefit_text,
                        order=i,
                    )

                # Side effects
                for i, se in enumerate(pdata.get('sideEffects', [])):
                    if isinstance(se, dict):
                        PeptideSideEffect.objects.create(
                            peptide=peptide,
                            name=se.get('name', ''),
                            severity=se.get('severity', 'occasional'),
                            order=i,
                        )
                    elif isinstance(se, str):
                        PeptideSideEffect.objects.create(
                            peptide=peptide,
                            name=se,
                            severity='occasional',
                            order=i,
                        )

                # Dosages
                for i, dosage in enumerate(pdata.get('dosage', [])):
                    PeptideDosage.objects.create(
                        peptide=peptide,
                        protocol=dosage.get('protocol', ''),
                        dose=dosage.get('dose', ''),
                        notes=dosage.get('notes', ''),
                        order=i,
                    )

                # References
                for i, ref_text in enumerate(pdata.get('references', [])):
                    PeptideReference.objects.create(
                        peptide=peptide,
                        text=ref_text,
                        order=i,
                    )

            self.stdout.write(self.style.SUCCESS(
                f'Created {len(all_peptides)} peptides with all related data'
            ))

            # Create stack records
            peptides_by_id = Peptide.objects.in_bulk()

            order = 0
            for sdata in stacks_data:
                order += 1
                stack = Stack.objects.create(
                    id=sdata['id'],
                    name=sdata.get('name', ''),
                    goal=sdata.get('goal', 'other'),
                    goal_label=sdata.get('goalLabel', ''),
                    level=sdata.get('level', ''),
                    description=sdata.get('description', ''),
                    synergy=sdata.get('synergy', ''),
                    application=sdata.get('application', ''),
                    duration=sdata.get('duration', ''),
                    warnings=sdata.get('warnings', ''),
                    evidence_level=sdata.get('evidenceLevel', ''),
                    order=order,
                )

                # Stack peptides
                for i, sp in enumerate(sdata.get('peptides', [])):
                    sp_id = sp.get('id', '')
                    linked_peptide = peptides_by_id.get(sp_id)

                    StackPeptide.objects.create(
                        stack=stack,
                        peptide=linked_peptide,
                        name=sp.get('name', ''),
                        role=sp.get('role', ''),
                        dose=sp.get('dose', ''),
                        timing=sp.get('timing', ''),
                        order=i,
                    )

                # Stack references
                for i, ref_text in enumerate(sdata.get('references', [])):
                    StackReference.objects.create(
                        stack=stack,
                        text=ref_text,
                        order=i,
                    )

            self.stdout.write(self.style.SUCCESS(
                f'Created {len(stacks_data)} stacks with all related data'
            ))

            # Summary
            self.stdout.write('')
            self.stdout.write(self.style.SUCCESS('=== Import Summary ==='))
            self.stdout.write(f'Peptides: {Peptide.objects.count()}')
            self.stdout.write(f'Benefits: {PeptideBenefit.objects.count()}')
            self.stdout.write(f'Side Effects: {PeptideSideEffect.objects.count()}')
            self.stdout.write(f'Dosages: {PeptideDosage.objects.count()}')
            self.stdout.write(f'Peptide References: {PeptideReference.objects.count()}')
            self.stdout.write(f'Stacks: {Stack.objects.count()}')
            self.stdout.write(f'Stack Peptides: {StackPeptide.objects.count()}')
            self.stdout.write(f'Stack References: {StackReference.objects.count()}')
            logger.info(
                'seed_peptides replaced catalog',
                extra=self._catalog_counts(),
            )
