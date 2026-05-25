import html
import json
import re
from dataclasses import dataclass, field
from urllib.parse import urljoin, urlparse
from xml.etree import ElementTree

import pytest
from django.core.cache import cache
from django.core.management import call_command
from django.test import Client

from core.models import Peptide, Stack
from core.views import CATEGORY_META


@dataclass(frozen=True)
class PageSpec:
    label: str
    path: str
    expected_content_type: str
    markers: tuple[str, ...] = field(default_factory=tuple)
    headers: dict[str, str] = field(default_factory=dict)
    check_internal_links: bool = False


HTML_FAILURE_MARKERS = (
    "Traceback",
    "TemplateSyntaxError",
    "NoReverseMatch",
    "OperationalError",
    "Server Error (500)",
)

HREF_RE = re.compile(r'\bhref=["\']([^"\']+)["\']', re.IGNORECASE)
INTERNAL_HOSTS = {"guiadepeptideos.com.br", "www.guiadepeptideos.com.br", "testserver"}
IGNORED_INTERNAL_PREFIXES = ("/static/", "/media/")


@pytest.fixture()
def seeded_real_catalog(db):
    cache.clear()
    call_command("seed_peptides", verbosity=0)
    cache.clear()
    return {
        "peptides": list(Peptide.objects.order_by("order", "name")),
        "stacks": list(Stack.objects.order_by("order", "name")),
        "categories": list(CATEGORY_META.items()),
    }


def _indexable_page_specs(catalog):
    specs = [
        PageSpec("home", "/", "text/html", ("Guia de Peptídeos", "Buscar peptídeo"), check_internal_links=True),
        PageSpec("sobre", "/sobre/", "text/html", ("Sobre o Guia de Peptídeos",), check_internal_links=True),
        PageSpec("glossario", "/glossario/", "text/html", ("Glossário",), check_internal_links=True),
    ]

    for slug, meta in catalog["categories"]:
        specs.append(
            PageSpec(
                f"categoria:{slug}",
                f"/categorias/{slug}/",
                "text/html",
                (f"Peptídeos para {meta['label']}",),
                check_internal_links=True,
            )
        )

    for peptide in catalog["peptides"]:
        specs.append(
            PageSpec(
                f"peptideo:{peptide.id}",
                f"/peptideos/{peptide.id}/",
                "text/html",
                (peptide.name, peptide.category_label, "Referências Científicas"),
                check_internal_links=True,
            )
        )

    for stack in catalog["stacks"]:
        specs.append(
            PageSpec(
                f"combinacao:{stack.id}",
                f"/combinacoes/{stack.id}/",
                "text/html",
                (stack.name, stack.goal_label, "Peptídeos do Stack"),
                check_internal_links=True,
            )
        )

    return specs


def _operational_page_specs():
    return [
        PageSpec(
            "api-browser-page",
            "/api/peptides.json",
            "text/html",
            ("API JSON", "Abrir JSON bruto"),
            {"HTTP_ACCEPT": "text/html"},
            check_internal_links=True,
        ),
        PageSpec("api-json", "/api/peptides.json", "application/json", headers={"HTTP_ACCEPT": "application/json"}),
        PageSpec("api-json-format", "/api/peptides.json?format=json", "application/json"),
        PageSpec("api-v1-json", "/api/v1/peptides.json", "application/json", headers={"HTTP_ACCEPT": "application/json"}),
        PageSpec("api-v1-json-format", "/api/v1/peptides.json?format=json", "application/json"),
        PageSpec("health", "/health/", "application/json", ('"status": "ok"',)),
        PageSpec("robots", "/robots.txt", "text/plain", ("Sitemap:",)),
        PageSpec("security", "/.well-known/security.txt", "text/plain", ("Contact:", "Expires:")),
        PageSpec("security-legacy", "/security.txt", "text/plain", ("Contact:", "Expires:")),
        PageSpec("sitemap", "/sitemap.xml", "application/xml", ("<urlset",)),
        PageSpec("llms", "/llms.txt", "text/plain", ("# Guia Completo de Peptideos", "## Peptideos")),
    ]


def _decode(response):
    return response.content.decode(response.charset or "utf-8", errors="replace")


def _normalize_internal_href(current_path, href):
    href = html.unescape(href).strip()
    if (
        not href
        or href.startswith("#")
        or href.startswith(("mailto:", "tel:", "javascript:", "data:"))
    ):
        return None

    parsed = urlparse(href)
    if parsed.scheme in {"http", "https"}:
        if parsed.netloc not in INTERNAL_HOSTS:
            return None
        path = parsed.path or "/"
    elif parsed.scheme:
        return None
    else:
        resolved = urlparse(urljoin(current_path, href))
        path = resolved.path or "/"
        parsed = resolved

    if path.startswith("/peptides/"):
        path = path.removeprefix("/peptides") or "/"

    if path.startswith(IGNORED_INTERNAL_PREFIXES):
        return None

    query = f"?{parsed.query}" if parsed.query else ""
    return f"{path}{query}"


def _assert_page_response(spec, response, failures):
    content_type = response.headers.get("Content-Type", "")
    if response.status_code != 200:
        failures.append(f"{spec.label} {spec.path}: status {response.status_code}")
        return

    if spec.expected_content_type not in content_type:
        failures.append(
            f"{spec.label} {spec.path}: Content-Type {content_type!r}, esperado {spec.expected_content_type!r}"
        )

    body = _decode(response)
    searchable_body = html.unescape(body)
    for marker in spec.markers:
        if marker not in searchable_body:
            failures.append(f"{spec.label} {spec.path}: marcador ausente {marker!r}")

    if spec.expected_content_type == "text/html":
        if '<html lang="pt-BR">' not in body:
            failures.append(f"{spec.label} {spec.path}: HTML base ausente")
        if 'rel="canonical"' not in body:
            failures.append(f"{spec.label} {spec.path}: canonical ausente")
        for marker in HTML_FAILURE_MARKERS:
            if marker in body:
                failures.append(f"{spec.label} {spec.path}: contem marcador de erro {marker!r}")


def test_full_site_crawler_renders_every_catalog_and_operational_page(seeded_real_catalog):
    crawler = Client(raise_request_exception=False)
    specs = _indexable_page_specs(seeded_real_catalog) + _operational_page_specs()
    failures = []
    internal_links = set()
    link_status_cache = {}

    for spec in specs:
        response = crawler.get(spec.path, **spec.headers)
        _assert_page_response(spec, response, failures)

        if response.status_code == 200 and spec.check_internal_links:
            body = _decode(response)
            for href in HREF_RE.findall(body):
                normalized = _normalize_internal_href(spec.path, href)
                if normalized:
                    internal_links.add((spec.path, normalized))

    for source_path, target_path in sorted(internal_links):
        if target_path not in link_status_cache:
            link_status_cache[target_path] = crawler.get(target_path).status_code
        status_code = link_status_cache[target_path]
        if status_code >= 400:
            failures.append(f"link interno quebrado em {source_path}: {target_path} retornou {status_code}")

    assert not failures, "Crawler de cobertura total encontrou problemas:\n" + "\n".join(failures)


def test_sitemap_matches_all_indexable_catalog_pages(seeded_real_catalog):
    crawler = Client(raise_request_exception=False)
    expected_paths = {spec.path for spec in _indexable_page_specs(seeded_real_catalog)}

    response = crawler.get("/sitemap.xml")
    assert response.status_code == 200

    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ElementTree.fromstring(response.content)
    actual_paths = set()
    for loc in root.findall(".//sm:loc", namespace):
        parsed = urlparse(loc.text or "")
        path = parsed.path
        if path.startswith("/peptides/"):
            path = path.removeprefix("/peptides") or "/"
        actual_paths.add(path)

    assert actual_paths == expected_paths


def test_full_site_api_inventory_matches_seeded_catalog(seeded_real_catalog):
    crawler = Client(raise_request_exception=False)
    legacy_response = crawler.get("/api/peptides.json", HTTP_ACCEPT="application/json")
    v1_response = crawler.get("/api/v1/peptides.json", HTTP_ACCEPT="application/json")
    assert legacy_response.status_code == 200
    assert v1_response.status_code == 200
    assert legacy_response["X-API-Version"] == "1.0"
    assert v1_response["X-API-Version"] == "1.0"

    payload = json.loads(v1_response.content)
    assert payload["last_updated"] == "2026-05-24"
    assert {item["id"] for item in payload["peptides"]} == {
        peptide.id for peptide in seeded_real_catalog["peptides"]
    }
    assert {item["id"] for item in payload["stacks"]} == {
        stack.id for stack in seeded_real_catalog["stacks"]
    }
