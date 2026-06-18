# Guia de Peptideos

Aplicacao Django do Guia de Peptideos, publicada em:

- Producao: `https://guiadepeptideos.com.br/peptides/`
- API JSON v1: `https://guiadepeptideos.com.br/peptides/api/v1/peptides.json`
- API JSON legado: `https://guiadepeptideos.com.br/peptides/api/peptides.json`

## Setup Local

```powershell
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements-dev.txt
python manage.py migrate
python manage.py seed_peptides
python manage.py runserver
```

No ambiente local, o site abre em `http://127.0.0.1:8000/`.

## Dados

A fonte de verdade editorial do catalogo sao os arquivos versionados:

- `data1.js`
- `data2.js`
- `data3.js`
- `stacks.js`

O admin Django fica para consulta, emergencia operacional e pequenas correcoes temporarias. Toda alteracao editorial permanente deve voltar para os arquivos JS antes do proximo deploy.

O comando `python manage.py seed_peptides` valida todos os arquivos antes de tocar no banco, limpa as tabelas do catalogo e recria tudo a partir dos JS. Use os modos seguros antes de substituir dados:

```powershell
python manage.py seed_peptides --dry-run
python manage.py seed_peptides --backup-json backups/catalogo-pre-seed.json
```

No deploy de producao, o workflow gera snapshot SQL pre-deploy e backup JSON pre-seed em `/var/www/peptides-backups/`.

Catalogo atual em producao: 129 peptideos, 46 combinacoes e 338 referencias.

## Testes

```bash
ruff check .
python manage.py check
python manage.py makemigrations --check --dry-run
python manage.py seed_peptides --dry-run
pytest --ignore=tests/e2e -q
pytest tests/e2e -q
pytest -q
```

A suite cobre:

- modelos, serializers, views, SEO e API;
- seed completo dos dados reais, dry-run e backup JSON pre-substituicao;
- crawler local de cobertura total para todas as paginas indexaveis;
- E2E Playwright para busca, filtros, modais, mobile e acessibilidade;
- regressao visual desktop/mobile com screenshots.
- CSP nonce-based e ausencia de handlers inline no frontend dinamico.

Estado validado em 2026-06-18: `pytest -q` com 296 testes passando e 18 skips esperados; `pytest tests/e2e -q` com 20 testes passando. CI tambem roda E2E Playwright e publica o artefato `visual-regression-screenshots`. Django 5.2 LTS em Python 3.11/3.12/3.13 (3.14 experimental).

Para gerar screenshots visuais localmente:

```powershell
$env:VISUAL_SNAPSHOT_DIR="test-results/visual-local"
pytest tests/e2e/test_visual_regression.py -q
```

## Deploy

O deploy e automatico via GitHub Actions ao enviar para `master`.

Checklist minimo antes de dizer que producao foi atualizada:

```powershell
git status --short
ruff check .
pytest -q
git push origin master
gh run list --limit 4
```

Depois do deploy:

```bash
curl -sI https://guiadepeptideos.com.br/peptides/
curl -s https://guiadepeptideos.com.br/peptides/health/
curl -s https://guiadepeptideos.com.br/peptides/api/v1/peptides.json
```

Para uma varredura rapida das URLs publicadas, use o sitemap de producao e confirme que todas retornam `200`.

## Variaveis Relevantes

- `SECRET_KEY`: obrigatoria quando `DEBUG=False`.
- `DEBUG`: `False` em producao.
- `ALLOWED_HOSTS`: hosts aceitos pelo Django.
- `SITE_BASE_URL`: base canonica, hoje `https://guiadepeptideos.com.br`.
- `FORCE_SCRIPT_NAME`: prefixo de publicacao, hoje `/peptides` em producao.
- `DB_ENGINE`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`: banco em producao.
- `REDIS_URL`: cache/rate limit em producao.
- `TRUSTED_PROXIES`: lista de CIDRs (separados por virgula) autorizados a definir headers de IP do cliente. Vazio = padrao seguro (loopback + RFC1918 + link-local).
- `CACHE_MIDDLEWARE_KEY_PREFIX`: chave de cache versionada, usada para invalidar cache de paginas. Padrao `peptides-v6`.
- `GA4_MEASUREMENT_ID`: analytics, opcional.

## Pendencias Conhecidas

- Rotacionar o PAT usado pelo `GH_TOKEN` e revisar seus escopos na conta GitHub.
- Limpar o PDF comercial de commits antigos com `git filter-repo`, se houver janela aprovada para force-push e realinhamento de clones.
- Publicar contrato/changelog da API antes de integracoes externas criticas dependerem dela.
