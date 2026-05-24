# Guia de Peptideos

Aplicacao Django do Guia de Peptideos, publicada em:

- Producao: `https://guiadepeptideos.com.br/peptides/`
- API JSON: `https://guiadepeptideos.com.br/peptides/api/peptides.json`

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

A fonte atual do catalogo sao os arquivos:

- `data1.js`
- `data2.js`
- `data3.js`
- `stacks.js`

O comando `python manage.py seed_peptides` limpa as tabelas do catalogo e recria tudo a partir desses arquivos. Edicoes feitas apenas no admin Django podem ser perdidas no proximo seed.

## Testes

```bash
ruff check .
pytest --ignore=tests/e2e -q
pytest tests/e2e -q
pytest -q
```

A suite cobre:

- modelos, serializers, views, SEO e API;
- seed completo dos dados reais;
- crawler local de cobertura total para todas as paginas indexaveis;
- E2E Playwright para busca, filtros, modais, mobile e acessibilidade;
- regressao visual desktop/mobile com screenshots.
- CSP nonce-based e ausencia de handlers inline no frontend dinamico.

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
curl -s https://guiadepeptideos.com.br/peptides/api/peptides.json
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
- `GA4_MEASUREMENT_ID`: analytics, opcional.

## Pendencias Conhecidas

- Definir oficialmente se a fonte de verdade sera JS, admin Django ou um fluxo editorial hibrido.
- Versionar formalmente a API publica (`/api/v1/...`) antes de integracoes externas dependerem dela.
- Melhorar observabilidade de seed, deploy e falhas de importacao.
