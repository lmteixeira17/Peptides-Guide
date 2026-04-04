import json

from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render

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
        'peptides': peptides,
        'stacks': stacks,
    })


def health_view(request):
    """Health check endpoint for Docker."""
    return JsonResponse({'status': 'ok'})


def peptide_detail_view(request, slug):
    """SEO-friendly individual peptide detail page."""
    peptide = get_object_or_404(
        Peptide.objects.prefetch_related('benefits', 'side_effects', 'dosages', 'references'),
        id=slug,
    )
    # Related peptides (same category, exclude current)
    related = Peptide.objects.filter(
        category=peptide.category
    ).exclude(id=peptide.id).order_by('order', 'name')[:6]
    return render(request, 'peptide_detail.html', {
        'peptide': peptide,
        'related': related,
    })


def stack_detail_view(request, slug):
    """SEO-friendly individual stack detail page."""
    stack = get_object_or_404(
        Stack.objects.prefetch_related('stack_peptides__peptide', 'references'),
        id=slug,
    )
    related = Stack.objects.filter(
        goal=stack.goal
    ).exclude(id=stack.id).order_by('order', 'name')[:6]
    return render(request, 'stack_detail.html', {
        'stack': stack,
        'related': related,
    })


def robots_txt(request):
    """Serve robots.txt for search engine crawlers."""
    lines = [
        'User-agent: *',
        'Allow: /',
        'Disallow: /admin/',
        'Disallow: /health/',
        '',
        'Sitemap: https://guiadepeptideos.com.br/sitemap.xml',
    ]
    return HttpResponse('\n'.join(lines), content_type='text/plain')


def sitemap_xml(request):
    """Generate sitemap.xml with all peptide and stack URLs."""
    from datetime import date
    today = date.today().isoformat()
    peptides = Peptide.objects.order_by('order', 'name')
    stacks = Stack.objects.order_by('order', 'name')

    urls = []
    # Main page
    urls.append({
        'loc': 'https://guiadepeptideos.com.br/',
        'lastmod': today,
        'changefreq': 'weekly',
        'priority': '1.0',
    })
    # Individual peptide detail pages (SEO-friendly URLs)
    for p in peptides:
        urls.append({
            'loc': 'https://guiadepeptideos.com.br/peptideos/' + p.id + '/',
            'lastmod': today,
            'changefreq': 'monthly',
            'priority': '0.9',
        })
    # Individual stack detail pages
    for s in stacks:
        urls.append({
            'loc': 'https://guiadepeptideos.com.br/combinacoes/' + s.id + '/',
            'lastmod': today,
            'changefreq': 'monthly',
            'priority': '0.8',
        })

    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for u in urls:
        xml += '  <url>\n'
        xml += '    <loc>' + u['loc'] + '</loc>\n'
        xml += '    <lastmod>' + u['lastmod'] + '</lastmod>\n'
        xml += '    <changefreq>' + u['changefreq'] + '</changefreq>\n'
        xml += '    <priority>' + u['priority'] + '</priority>\n'
        xml += '  </url>\n'
    xml += '</urlset>'

    return HttpResponse(xml, content_type='application/xml')


def llms_txt(request):
    """Serve llms.txt for AI/LLM discoverability."""
    peptides = Peptide.objects.order_by('order', 'name')
    stacks = Stack.objects.order_by('order', 'name')

    lines = [
        '# Guia Completo de Peptideos',
        '',
        '> Referencia cientifica sobre peptideos terapeuticos com dosagens, efeitos colaterais e referencias PubMed.',
        '',
        'URL: https://guiadepeptideos.com.br/',
        'Idioma: Portugues (pt-BR)',
        'Publico: Profissionais de saude e pesquisadores',
        '',
        '## Dados Disponiveis',
        '',
        '- ' + str(peptides.count()) + ' peptideos terapeuticos individuais',
        '- ' + str(stacks.count()) + ' combinacoes (stacks) recomendadas',
        '- Cada peptideo inclui: descricao, mecanismo de acao, beneficios, efeitos colaterais (com severidade), dosagens, administracao, meia-vida, status regulatorio e referencias PubMed',
        '',
        '## Categorias',
        '',
        '- Perda de Peso (Semaglutida, Tirzepatida, Retatrutide, Orforglipron)',
        '- Hormonio do Crescimento (Ipamorelin, CJC-1295, Tesamorelin, MK-677)',
        '- Cura e Recuperacao (BPC-157, TB-500, Pentadecarginia)',
        '- Anti-Envelhecimento (Epithalon, GHK-Cu, NAD+, SS-31)',
        '- Pele e Estetica (Melanotan II, PT-141, AHK-Cu)',
        '- Cognitivo (Semax, Selank, Dihexa, Cerebrolysin)',
        '- Sistema Imunologico (Thymosin Alpha 1, LL-37)',
        '- Hormonal (Kisspeptin, Gonadorelin, HCG)',
        '- Sono (DSIP, Epitalon)',
        '- Composicao Corporal (AOD-9604, MOTS-c, CBL-514, 5-Amino-1MQ)',
        '',
        '## Peptideos',
        '',
    ]
    for p in peptides:
        lines.append('- ' + p.name + ' (' + p.id + '): ' + p.category_label)

    lines.append('')
    lines.append('## Combinacoes Recomendadas')
    lines.append('')
    for s in stacks:
        lines.append('- ' + s.name + ' (' + s.id + '): ' + s.goal_label + ' - ' + s.level)

    return HttpResponse('\n'.join(lines), content_type='text/plain; charset=utf-8')
