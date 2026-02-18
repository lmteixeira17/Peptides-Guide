import json

from django.http import JsonResponse
from django.shortcuts import render

from .models import Peptide, Stack
from .serializers import serialize_peptide, serialize_stack


def index_view(request):
    """Serve the main peptides page with data from PostgreSQL."""
    peptides = Peptide.objects.prefetch_related(
        'benefits', 'side_effects', 'dosages', 'references'
    ).order_by('order', 'name')

    stacks = Stack.objects.prefetch_related(
        'stack_peptides', 'references'
    ).order_by('order', 'name')

    peptides_list = [serialize_peptide(p) for p in peptides]
    stacks_list = [serialize_stack(s) for s in stacks]

    # Split peptides into 3 parts matching original JS files
    part1 = [p for p in peptides_list if p['category'] in ('weight-loss', 'growth-hormone')]
    part2 = [p for p in peptides_list if p['category'] in ('healing', 'anti-aging', 'skin', 'cognitive')]
    part3 = [p for p in peptides_list if p['category'] in ('immune', 'hormonal', 'sleep', 'body-comp', 'other')]

    return render(request, 'index.html', {
        'peptides_part1_json': json.dumps(part1, ensure_ascii=False),
        'peptides_part2_json': json.dumps(part2, ensure_ascii=False),
        'peptides_part3_json': json.dumps(part3, ensure_ascii=False),
        'stacks_json': json.dumps(stacks_list, ensure_ascii=False),
    })


def health_view(request):
    """Health check endpoint for Docker."""
    return JsonResponse({'status': 'ok'})
