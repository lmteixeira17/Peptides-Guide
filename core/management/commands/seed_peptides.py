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
import os
import re

from django.core.management.base import BaseCommand
from django.db import transaction

from core.models import (
    Peptide, PeptideBenefit, PeptideSideEffect, PeptideDosage, PeptideReference,
    Stack, StackPeptide, StackReference,
)


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

    def handle(self, *args, **options):
        from django.conf import settings
        data_dir = options['data_dir'] or str(settings.BASE_DIR)

        self.stdout.write('Importing peptide and stack data from JS files...')
        self.stdout.write(f'Data directory: {data_dir}')

        with transaction.atomic():
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

            # Import peptides from data1.js, data2.js, data3.js
            all_peptides = []
            for filename in ['data1.js', 'data2.js', 'data3.js']:
                filepath = os.path.join(data_dir, filename)
                if not os.path.exists(filepath):
                    self.stderr.write(f'File not found: {filepath}')
                    continue

                self.stdout.write(f'Reading {filename}...')
                with open(filepath, 'r', encoding='utf-8') as f:
                    js_text = f.read()

                json_text = js_to_json(js_text)
                try:
                    peptides_data = json.loads(json_text)
                except json.JSONDecodeError as e:
                    self.stderr.write(f'Error parsing {filename}: {e}')
                    # Try to find the problematic area
                    line_num = json_text[:e.pos].count('\n') + 1
                    self.stderr.write(f'Error near line {line_num}, position {e.pos}')
                    # Show context around error
                    start = max(0, e.pos - 100)
                    end = min(len(json_text), e.pos + 100)
                    self.stderr.write(f'Context: ...{json_text[start:end]}...')
                    raise

                all_peptides.extend(peptides_data)
                self.stdout.write(f'  Found {len(peptides_data)} peptides in {filename}')

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

            # Import stacks from stacks.js
            stacks_filepath = os.path.join(data_dir, 'stacks.js')
            if not os.path.exists(stacks_filepath):
                self.stderr.write(f'File not found: {stacks_filepath}')
                return

            self.stdout.write('Reading stacks.js...')
            with open(stacks_filepath, 'r', encoding='utf-8') as f:
                js_text = f.read()

            json_text = js_to_json(js_text)
            try:
                stacks_data = json.loads(json_text)
            except json.JSONDecodeError as e:
                self.stderr.write(f'Error parsing stacks.js: {e}')
                line_num = json_text[:e.pos].count('\n') + 1
                self.stderr.write(f'Error near line {line_num}, position {e.pos}')
                start = max(0, e.pos - 100)
                end = min(len(json_text), e.pos + 100)
                self.stderr.write(f'Context: ...{json_text[start:end]}...')
                raise

            self.stdout.write(f'  Found {len(stacks_data)} stacks')

            # Create stack records
            peptide_ids = set(Peptide.objects.values_list('id', flat=True))

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
                    linked_peptide = None
                    if sp_id in peptide_ids:
                        linked_peptide = Peptide.objects.get(id=sp_id)

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
