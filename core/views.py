import json
import sys
from datetime import timedelta
from functools import wraps

from django.conf import settings
from django.core.cache import cache
from django.db import connection
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render
from django.utils import timezone
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers

from .categories import CATEGORY_META
from .models import Peptide, PeptideReference, Stack, StackReference
from .serializers import serialize_peptide, serialize_stack


JSON_SCRIPT_ESCAPES = {
    ord('>'): '\\u003E',
    ord('<'): '\\u003C',
    ord('&'): '\\u0026',
}


def _running_under_tests():
    return 'pytest' in sys.modules or any(
        'pytest' in arg or 'py.test' in arg for arg in sys.argv
    )


def production_cache_page(timeout, *, cache_html=False):
    """Cache public, static-like views only in production.

    Tests and local development keep uncached responses so fixture-specific
    assertions do not leak across test cases.
    """
    def decorator(view_func):
        cached_view = cache_page(timeout)(view_func)

        @wraps(view_func)
        def wrapped(request, *args, **kwargs):
            if settings.DEBUG or _running_under_tests():
                return view_func(request, *args, **kwargs)
            if not cache_html:
                return view_func(request, *args, **kwargs)
            return cached_view(request, *args, **kwargs)

        return wrapped
    return decorator


def _site_prefix():
    return (getattr(settings, 'FORCE_SCRIPT_NAME', '') or '').rstrip('/')


def _site_url(path='/'):
    """Return an absolute production URL honoring FORCE_SCRIPT_NAME."""
    if not path.startswith('/'):
        path = f'/{path}'
    return f'{settings.SITE_BASE_URL}{_site_prefix()}{path}'


def _script_json(value):
    return json.dumps(value, ensure_ascii=False).translate(JSON_SCRIPT_ESCAPES)


def _site_counts(peptide_count=None, stack_count=None, reference_count=None):
    """Return current site-wide object counts for dynamic copy/SEO.

    Results are cached for 5 minutes to avoid repeated COUNT(*) queries
    on high-traffic pages (health checks, llms.txt, etc.).
    """
    cache_key = 'site:counts'
    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    result = {
        'peptide_count': peptide_count if peptide_count is not None else Peptide.objects.count(),
        'stack_count': stack_count if stack_count is not None else Stack.objects.count(),
        'reference_count': reference_count if reference_count is not None else (
            PeptideReference.objects.count() + StackReference.objects.count()
        ),
    }
    cache.set(cache_key, result, timeout=300)
    return result


@production_cache_page(300)
def index_view(request):
    """Serve the main peptides page with data from PostgreSQL."""
    peptides = list(Peptide.objects.prefetch_related(
        'benefits', 'side_effects', 'dosages', 'references'
    ).order_by('order', 'name'))

    stacks = list(Stack.objects.prefetch_related(
        'stack_peptides', 'references'
    ).order_by('order', 'name'))

    context = {
        'peptides': peptides,
        'stacks': stacks,
        'bootstrap_payload_json': _script_json({
            'peptides': [serialize_peptide(p) for p in peptides],
            'stacks': [serialize_stack(s) for s in stacks],
        }),
    }
    context.update(_site_counts(
        peptide_count=len(peptides),
        stack_count=len(stacks),
        reference_count=sum(len(p.references.all()) for p in peptides)
        + sum(len(s.references.all()) for s in stacks),
    ))
    return render(request, 'index.html', context)


def health_view(request):
    """Health check endpoint for Docker and uptime checks.

    /health/ stays lightweight. /health/?deep=1 also checks DB connectivity
    and whether the public catalog has been seeded.
    """
    if request.GET.get('deep') not in ('1', 'true', 'yes'):
        return JsonResponse({'status': 'ok'})

    payload = {
        'status': 'ok',
        'checks': {},
        'counts': {},
    }
    status_code = 200

    try:
        with connection.cursor() as cursor:
            cursor.execute('SELECT 1')
            cursor.fetchone()
        payload['checks']['database'] = 'ok'
    except Exception as exc:
        payload['status'] = 'error'
        payload['checks']['database'] = exc.__class__.__name__
        return JsonResponse(payload, status=503)

    try:
        # Deep check intentionally refreshes the cached counts so the
        # catalog status reflects the current DB state. The cost is a
        # handful of COUNT(*) on small tables (~microseconds), well below
        # the 30s Docker poll cadence.
        cache.delete('site:counts')
        counts = _site_counts()
    except Exception as exc:
        payload['status'] = 'error'
        payload['checks']['catalog'] = exc.__class__.__name__
        return JsonResponse(payload, status=503)

    payload['counts'] = counts
    if counts['peptide_count'] > 0 and counts['stack_count'] > 0:
        payload['checks']['catalog'] = 'ok'
    else:
        payload['status'] = 'error'
        payload['checks']['catalog'] = 'empty'
        status_code = 503

    return JsonResponse(payload, status=status_code)


@production_cache_page(300)
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


@production_cache_page(300)
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


@production_cache_page(300)
def category_view(request, slug):
    """SEO landing page for a peptide category."""
    if slug not in CATEGORY_META:
        from django.http import Http404
        raise Http404(f'Category {slug} not found')
    meta = CATEGORY_META[slug]
    peptides = Peptide.objects.filter(category=slug).order_by('order', 'name')
    stacks = Stack.objects.filter(goal=slug).order_by('order', 'name')
    return render(request, 'category.html', {
        'slug': slug,
        'meta': meta,
        'peptides': peptides,
        'stacks': stacks,
    })


@production_cache_page(300)
def glossario_view(request):
    """Glossary of technical terms for SEO."""
    return render(request, 'glossario.html')


@production_cache_page(300)
def sobre_view(request):
    """About page with E-E-A-T signals."""
    return render(request, 'sobre.html', _site_counts())


@vary_on_headers('Accept')
def peptides_api(request):
    """Public JSON API endpoint for AI/LLM consumption."""
    accept_header = request.headers.get('Accept', '')
    wants_browser_page = (
        request.GET.get('format') != 'json'
        and 'text/html' in accept_header
        and 'application/json' not in accept_header
    )

    if wants_browser_page:
        context = _site_counts()
        context.update({
            'api_json_url': _site_url('/api/v1/peptides.json?format=json'),
            'api_endpoint_url': _site_url('/api/v1/peptides.json'),
            'api_legacy_url': _site_url('/api/peptides.json'),
            'api_source_url': _site_url('/'),
        })
        response = render(request, 'api.html', context)
        response['Cache-Control'] = 'no-cache'
        return response

    peptides = Peptide.objects.prefetch_related(
        'benefits', 'side_effects', 'dosages', 'references'
    ).order_by('order', 'name')
    stacks = Stack.objects.prefetch_related(
        'stack_peptides', 'references'
    ).order_by('order', 'name')
    data = {
        'version': '1.0',
        'source': _site_url('/'),
        'license': 'Educational use only - consult references for primary sources',
        'last_updated': '2026-05-24',
        'peptides': [serialize_peptide(p) for p in peptides],
        'stacks': [serialize_stack(s) for s in stacks],
    }
    response = JsonResponse(data)
    response['X-API-Version'] = '1.0'
    response['Access-Control-Allow-Origin'] = '*'
    response['Cache-Control'] = 'public, max-age=3600'
    return response


@production_cache_page(3600, cache_html=True)
def robots_txt(request):
    """Serve robots.txt for search engine crawlers and AI bots."""
    lines = [
        '# Guia de Peptideos - robots.txt',
        '# Conteudo educacional sobre peptideos terapeuticos',
        '',
        'User-agent: *',
        'Allow: /',
        'Disallow: /gestao/',
        'Disallow: /health/',
        '',
        '# AI Crawlers - explicitly allowed for accurate information dissemination',
        'User-agent: GPTBot',
        'Allow: /',
        '',
        'User-agent: ChatGPT-User',
        'Allow: /',
        '',
        'User-agent: OAI-SearchBot',
        'Allow: /',
        '',
        'User-agent: ClaudeBot',
        'Allow: /',
        '',
        'User-agent: Claude-Web',
        'Allow: /',
        '',
        'User-agent: PerplexityBot',
        'Allow: /',
        '',
        'User-agent: Google-Extended',
        'Allow: /',
        '',
        'User-agent: CCBot',
        'Allow: /',
        '',
        'Sitemap: ' + _site_url('/sitemap.xml'),
    ]
    return HttpResponse('\n'.join(lines), content_type='text/plain')


@production_cache_page(3600, cache_html=True)
def security_txt(request):
    """Expose security contact metadata for responsible disclosure."""
    expires = (timezone.now() + timedelta(days=180)).date().isoformat()
    lines = [
        'Contact: ' + _site_url('/sobre/'),
        'Expires: ' + expires + 'T23:59:59Z',
        'Preferred-Languages: pt-BR, en',
        'Canonical: ' + _site_url('/.well-known/security.txt'),
        'Policy: ' + _site_url('/sobre/'),
        '',
    ]
    return HttpResponse('\n'.join(lines), content_type='text/plain; charset=utf-8')


@production_cache_page(3600, cache_html=True)
def sitemap_xml(request):
    """Generate sitemap.xml with all peptide, stack, category, and static URLs."""
    from datetime import date
    today = date.today().isoformat()
    peptides = Peptide.objects.order_by('order', 'name')
    stacks = Stack.objects.order_by('order', 'name')

    urls = []
    # Main page
    urls.append({'loc': _site_url('/'), 'lastmod': today, 'changefreq': 'weekly', 'priority': '1.0'})
    # Static pages
    urls.append({'loc': _site_url('/sobre/'), 'lastmod': today, 'changefreq': 'monthly', 'priority': '0.7'})
    urls.append({'loc': _site_url('/glossario/'), 'lastmod': today, 'changefreq': 'monthly', 'priority': '0.8'})
    # Category landing pages
    for cat_slug in CATEGORY_META.keys():
        urls.append({
            'loc': _site_url('/categorias/' + cat_slug + '/'),
            'lastmod': today, 'changefreq': 'weekly', 'priority': '0.85',
        })
    # Individual peptide detail pages
    for p in peptides:
        urls.append({
            'loc': _site_url('/peptideos/' + p.id + '/'),
            'lastmod': today, 'changefreq': 'monthly', 'priority': '0.9',
        })
    # Individual stack detail pages
    for s in stacks:
        urls.append({
            'loc': _site_url('/combinacoes/' + s.id + '/'),
            'lastmod': today, 'changefreq': 'monthly', 'priority': '0.8',
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


@production_cache_page(3600, cache_html=True)
def llms_txt(request):
    """Serve llms.txt for AI/LLM discoverability (https://llmstxt.org spec)."""
    peptides = Peptide.objects.order_by('category', 'order', 'name')
    stacks = Stack.objects.order_by('goal', 'order', 'name')
    counts = _site_counts(peptide_count=peptides.count(), stack_count=stacks.count())

    lines = [
        '# Guia Completo de Peptideos',
        '',
        '> Referencia cientifica independente sobre peptideos terapeuticos em portugues brasileiro, com ' + str(counts['peptide_count']) + ' peptideos individuais, ' + str(counts['stack_count']) + ' combinacoes (stacks) recomendadas e ' + str(counts['reference_count']) + ' referencias PubMed verificaveis. Conteudo educacional para profissionais de saude e pesquisadores.',
        '',
        '**Dominio:** ' + _site_url('/'),
        '**Idioma:** Portugues (pt-BR)',
        '**Licenca:** Conteudo educacional gratuito, sem fins lucrativos',
        '**API JSON:** ' + _site_url('/api/v1/peptides.json'),
        '',
        '## Paginas Principais',
        '',
        '- [Pagina inicial](' + _site_url('/') + '): Lista completa de peptideos e stacks',
        '- [Sobre e Metodologia](' + _site_url('/sobre/') + '): Criterios editoriais, fontes, principios',
        '- [Glossario](' + _site_url('/glossario/') + '): Termos tecnicos e definicoes',
        '- [API JSON](' + _site_url('/api/v1/peptides.json') + '): Dados estruturados completos',
        '- [Sitemap](' + _site_url('/sitemap.xml') + '): Todas as paginas indexaveis',
        '',
        '## Categorias de Peptideos',
        '',
        '- [Perda de Peso](' + _site_url('/categorias/weight-loss/') + ') - Semaglutida, Tirzepatida, Retatrutide, Orforglipron, Liraglutida',
        '- [Hormonio do Crescimento](' + _site_url('/categorias/growth-hormone/') + ') - Ipamorelin, CJC-1295, Tesamorelin, MK-677, Sermorelin',
        '- [Cura e Recuperacao](' + _site_url('/categorias/healing/') + ') - BPC-157, TB-500, Pentadecarginia',
        '- [Anti-Envelhecimento](' + _site_url('/categorias/anti-aging/') + ') - Epithalon, NAD+, SS-31, Humanin',
        '- [Pele e Estetica](' + _site_url('/categorias/skin/') + ') - GHK-Cu, Melanotan II, PT-141, AHK-Cu',
        '- [Cognitivo](' + _site_url('/categorias/cognitive/') + ') - Semax, Selank, Dihexa, Cerebrolysin, Noopept',
        '- [Sistema Imunologico](' + _site_url('/categorias/immune/') + ') - Thymosin Alpha 1, LL-37, Thymulin',
        '- [Hormonal](' + _site_url('/categorias/hormonal/') + ') - Kisspeptin, Gonadorelin, HCG, Oxitocina',
        '- [Sono](' + _site_url('/categorias/sleep/') + ') - DSIP, Epitalon',
        '- [Composicao Corporal](' + _site_url('/categorias/body-comp/') + ') - AOD-9604, MOTS-c, CBL-514, 5-Amino-1MQ, Bimagrumab',
        '- [Outros](' + _site_url('/categorias/other/') + ') - Peptideos e compostos diversos',
        '',
        '## Estrutura dos Dados',
        '',
        'Cada peptideo possui:',
        '- Nome, nomes alternativos (aka), categoria, status regulatorio',
        '- Descricao completa e mecanismo de acao',
        '- Lista de beneficios documentados',
        '- Efeitos colaterais classificados por frequencia (comum, ocasional, raro)',
        '- Protocolos de dosagem com notas',
        '- Via de administracao e meia-vida',
        '- Referencias cientificas com links PubMed',
        '',
        'Cada stack (combinacao) possui:',
        '- Objetivo, nivel de dificuldade, duracao',
        '- Lista de peptideos com papel, dose e timing',
        '- Sinergia farmacologica explicada',
        '- Regras de co-administracao (quais podem ser misturados)',
        '- Nivel de evidencia e referencias',
        '',
        '## Peptideos (' + str(peptides.count()) + ' total)',
        '',
    ]
    current_cat = None
    for p in peptides:
        if p.category != current_cat:
            current_cat = p.category
            lines.append('')
            lines.append('### ' + p.category_label)
            lines.append('')
        aka = ' (' + p.aka + ')' if p.aka else ''
        lines.append('- [' + p.name + aka + '](' + _site_url('/peptideos/' + p.id + '/') + '): ' + p.description[:150].replace('\n', ' ') + '...')

    lines.append('')
    lines.append('## Combinacoes Recomendadas (' + str(stacks.count()) + ' total)')
    lines.append('')
    current_goal = None
    for s in stacks:
        if s.goal != current_goal:
            current_goal = s.goal
            lines.append('')
            lines.append('### ' + s.goal_label)
            lines.append('')
        lines.append('- [' + s.name + '](' + _site_url('/combinacoes/' + s.id + '/') + ') - ' + s.level + ': ' + s.description[:150].replace('\n', ' ') + '...')

    lines.append('')
    lines.append('## Como Citar')
    lines.append('')
    lines.append('Ao usar informacoes deste guia, cite como:')
    lines.append('"Guia de Peptideos. Disponivel em: ' + _site_url('/') + '. Acesso em: [data]"')
    lines.append('')
    lines.append('Para decisoes clinicas, sempre consulte as fontes primarias (PubMed) linkadas em cada peptideo.')
    lines.append('')

    return HttpResponse('\n'.join(lines), content_type='text/plain; charset=utf-8')
