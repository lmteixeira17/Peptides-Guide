# Guia Completo de Peptideos - CLAUDE.md

## Visao Geral do Projeto

Site de referencia cientifica sobre peptideos terapeuticos. Apresenta informacoes detalhadas sobre 108 peptideos individuais e 41 combinacoes (stacks) recomendadas, com dados baseados em estudos cientificos publicados.

**Idioma do conteudo:** Portugues (pt-BR)
**Publico-alvo:** Profissionais de saude e pesquisadores
**Repositorio:** https://github.com/lmteixeira17/Peptides-Guide
**Dominio de producao:** https://guiadepeptideos.com.br/ (Cloudflare + Let's Encrypt SSL)
**Dominio legado:** https://mlt.com.br/peptides/ (ainda funciona)

---

## Arquitetura

### Backend (Django + PostgreSQL)
- **Framework:** Django 4.2+ com Gunicorn (2 workers)
- **Banco de dados:** PostgreSQL 16-alpine (SQLite em dev/testes)
- **Static files:** WhiteNoise
- **Deploy:** Docker (multi-stage build)
- **Testes:** pytest + pytest-django (117 testes)

### Frontend (JavaScript puro)
- **Stack:** HTML5 + CSS3 + JavaScript puro (ES5) — zero mudancas no frontend
- **Sem frameworks:** Nao usa React, Vue, Angular ou qualquer biblioteca JS
- **Sem build tools:** Nao usa bundlers, transpilers ou package managers
- **Renderizacao:** Client-side com innerHTML (suporta tags HTML embutidas nos dados)

### Estrategia de Integracao
O Django serve os dados do PostgreSQL como JSON injetado no template via `<script>` tags, mantendo as mesmas variaveis globais (`peptidesPart1`, `peptidesPart2`, `peptidesPart3`, `peptideStacks`) que o app.js espera. O frontend funciona **sem nenhuma alteracao**.

```
Browser → nginx-proxy → peptides-web (Django/Gunicorn:8000) → peptides-db (PostgreSQL:5432)
```

---

## Estrutura de Arquivos

```
_Peptides/
├── peptides_project/              # Projeto Django
│   ├── __init__.py
│   ├── settings.py                # Configuracoes (PostgreSQL/SQLite, WhiteNoise, FORCE_SCRIPT_NAME)
│   ├── urls.py                    # URLs raiz (admin + core.urls)
│   └── wsgi.py                    # WSGI (Gunicorn)
├── core/                          # App Django principal
│   ├── __init__.py
│   ├── models.py                  # 8 modelos (Peptide, Stack, e relacionados)
│   ├── views.py                   # index_view (dados JSON) + health_view
│   ├── urls.py                    # / e /health/
│   ├── admin.py                   # Admin com TabularInlines para CRUD
│   ├── serializers.py             # Converte modelos → JSON (camelCase, formato JS)
│   ├── tests.py                   # Suite de testes completa (117 testes)
│   └── management/
│       └── commands/
│           └── seed_peptides.py   # Importa dados dos arquivos JS para o banco
├── templates/
│   └── index.html                 # Template Django (injeta JSON via {{ var|safe }})
├── static/
│   └── core/
│       ├── style.css              # Estilos do site
│       └── app.js                 # Logica da aplicacao (inalterado)
├── data1.js                       # 36 peptideos (backup/fonte para seed)
├── data2.js                       # 36 peptideos (backup/fonte para seed)
├── data3.js                       # 36 peptideos (backup/fonte para seed)
├── stacks.js                      # 41 combinacoes (backup/fonte para seed)
├── manage.py                      # Django CLI
├── requirements.txt               # Django, gunicorn, whitenoise, psycopg2-binary
├── pytest.ini                     # Configuracao pytest
├── Dockerfile                     # Multi-stage build (builder + runtime)
├── docker-compose.yml             # PostgreSQL + Django (porta 3007:8000)
├── .gitignore
└── CLAUDE.md                      # Este arquivo
```

---

## Modelos de Dados (core/models.py)

### Peptide (PK: SlugField)
| Campo | Tipo | Exemplo |
|-------|------|---------|
| `id` | SlugField (PK) | `"semaglutide"` |
| `name` | CharField(200) | `"Semaglutida"` |
| `aka` | CharField(300, blank) | `"Ozempic, Wegovy"` |
| `category` | CharField(30, choices) | `"weight-loss"` |
| `category_label` | CharField(100) | `"Perda de Peso"` |
| `description` | TextField | texto longo |
| `mechanism` | TextField | texto longo |
| `administration` | CharField(200) | `"Subcutânea (SC)"` |
| `half_life` | CharField(100) | `"~7 dias"` |
| `status` | CharField(20, choices) | `"approved"` |
| `status_label` | CharField(100) | `"Aprovado FDA"` |
| `order` | PositiveIntegerField | para ordenacao |

### Modelos Relacionados (FK → Peptide, CASCADE)
- **PeptideBenefit:** `text` (TextField), `order`
- **PeptideSideEffect:** `name` (CharField), `severity` (common/occasional/rare), `order`
- **PeptideDosage:** `protocol`, `dose`, `notes`, `order`
- **PeptideReference:** `text` (TextField com HTML/PubMed links), `order`

### Stack (PK: SlugField)
| Campo | Tipo | Exemplo |
|-------|------|---------|
| `id` | SlugField (PK) | `"weight-loss-beginner"` |
| `name` | CharField(300) | `"Stack Perda de Peso - Iniciante"` |
| `goal` | CharField(30, choices) | `"weight-loss"` |
| `goal_label` | CharField(100) | `"Perda de Peso"` |
| `level` | CharField(50) | `"Iniciante"` |
| `description`, `synergy`, `application`, `duration`, `warnings`, `evidence_level` | TextField/CharField | |
| `order` | PositiveIntegerField | para ordenacao |

### Modelos Relacionados (FK → Stack, CASCADE)
- **StackPeptide:** `peptide` (FK → Peptide, SET_NULL, null), `name`, `role`, `dose`, `timing`, `order`
- **StackReference:** `text` (TextField com HTML), `order`

### Choices
- **CATEGORY_CHOICES:** weight-loss, growth-hormone, healing, anti-aging, skin, cognitive, immune, hormonal, sleep, body-comp, other (11 categorias)
- **STATUS_CHOICES:** approved, trial, research
- **SEVERITY_CHOICES:** common, occasional, rare

---

## Serializacao (core/serializers.py)

Converte modelos Django para dicts com chaves **camelCase** (formato identico ao JS original):

```python
serialize_peptide(peptide) → {
    "id", "name", "aka", "category", "categoryLabel",
    "description", "mechanism", "benefits", "sideEffects",
    "dosage", "administration", "halfLife", "status",
    "statusLabel", "references"
}

serialize_stack(stack) → {
    "id", "name", "goal", "goalLabel", "level", "description",
    "peptides", "synergy", "application", "duration", "warnings",
    "evidenceLevel", "references"
}
```

### Particao de Peptideos no index_view
Os peptideos sao divididos em 3 partes por categoria (mantendo compatibilidade com o JS original):
- **Part1:** weight-loss + growth-hormone (36 peptideos)
- **Part2:** healing + anti-aging + skin + cognitive (36 peptideos)
- **Part3:** immune + hormonal + sleep + body-comp + other (36 peptideos)

---

## Seed Command (core/management/commands/seed_peptides.py)

Importa dados dos arquivos JS (data1.js, data2.js, data3.js, stacks.js) para o PostgreSQL:

```bash
python manage.py seed_peptides                    # usa diretorio raiz do projeto
python manage.py seed_peptides --data-dir /caminho # diretorio customizado
```

### Parser js_to_json
Converte notacao JS para JSON valido usando processamento boundary-aware:
1. Divide o texto em segmentos `code` e `string` (respeitando aspas e escapes)
2. Nos segmentos `code`: adiciona aspas em chaves, remove trailing commas, remove comentarios
3. Nos segmentos `string`: corrige `\'` (valido em JS, invalido em JSON) → `'`
4. Preserva conteudo HTML dentro de strings (refs com links PubMed)

---

## Deploy e Infraestrutura

### Servidor de Producao
- **IP:** 45.63.90.69
- **OS:** Ubuntu 22.04.5 LTS
- **Acesso SSH:** `ssh -i C:\Users\lm\.ssh\id_rsa root@45.63.90.69`
- **URL do site:** http://45.63.90.69/peptides/
- **Admin Django:** http://45.63.90.69/peptides/admin/ (credenciais no MEMORY.md)

### Containers Docker
| Container | Imagem | Porta | Funcao |
|-----------|--------|-------|--------|
| `peptides-web` | peptides (Django/Gunicorn) | 3007:8000 | Aplicacao web |
| `peptides-db` | postgres:16-alpine | interno | Banco de dados |

- **Rede:** `docker-infra_app-network`
- **Volumes:** `postgres-data` (dados persistentes)
- **FORCE_SCRIPT_NAME:** `/peptides` (subpath no nginx)

### Arquivos no Servidor
- **Repositorio clonado:** `/var/www/peptides-guide/`
- **Nginx proxy config:** `/var/www/docker-infra/nginx/conf.d/`
  - `peptides.conf` - upstream para o container peptides-web
  - `default.conf` - location block `/peptides/` no server block do IP

### Arquitetura do Servidor (multi-projetos)
```
nginx-proxy (nginx:alpine) → porta 80/443
  ├── /peptides/       → peptides-web (Django/Gunicorn, porta 3007)
  ├── /blood/          → blood-exams (Django/Gunicorn, porta 3008)
  ├── /erp/            → erp-backend (Django)
  ├── /crm/            → crm-frontend + crm-backend (React + NestJS)
  ├── /mkt/            → mkt-backend (Next.js)
  ├── /tradeia-news/   → tradeia-news (Django/Gunicorn)
  ├── /monitor-api/    → monitor-api (Node.js, porta 9001)
  └── /deploy-dashboard → pagina estatica no nginx-proxy
```

### Como Fazer Redeploy
1. SSH no servidor: `ssh -i C:\Users\lm\.ssh\id_rsa root@45.63.90.69`
2. Atualizar codigo:
   ```bash
   cd /var/www/peptides-guide && git pull
   ```
3. Rebuild e restart:
   ```bash
   docker compose down
   docker compose build
   docker compose up -d
   docker exec peptides-web python manage.py migrate
   docker exec peptides-web python manage.py seed_peptides
   ```
4. Reconectar a rede (se necessario):
   ```bash
   docker network connect docker-infra_app-network peptides-web
   docker network connect docker-infra_app-network peptides-db
   ```
5. Verificar:
   ```bash
   curl -sI http://localhost:3007/health/
   curl -sI http://localhost/peptides/
   ```

---

## SEO e Analytics

### Dominio e CDN
- **Dominio:** `guiadepeptideos.com.br` (registrado via Registro.br)
- **DNS/CDN:** Cloudflare (zone ID: `25b7723d5eddebf566bfaffd7316cdbe`)
- **Nameservers:** `rafe.ns.cloudflare.com`, `trace.ns.cloudflare.com`
- **SSL:** Flexible (Cloudflare emite certificado, proxy HTTP ao servidor)
- **Redirects:** Always HTTPS ativo + www→raiz (301 via page rule)

### Endpoints SEO
- `/robots.txt` - Allow todos exceto /admin/ e /health/, aponta sitemap
- `/sitemap.xml` - 150 URLs (main + 108 peptideos + 41 stacks com anchors)
- `/llms.txt` - Inventario completo para IAs (ChatGPT, Claude, Perplexity)
- `/favicon.svg` - Favicon SVG com emoji DNA

### Meta Tags e Structured Data
Em `templates/index.html`:
- Meta description, keywords, author, robots
- Canonical URL → `https://guiadepeptideos.com.br/`
- Open Graph (og:title, og:description, og:url, og:locale, og:site_name)
- Twitter Cards (summary_large_image)
- JSON-LD: `WebSite` (com SearchAction), `MedicalWebPage`, `ItemList`

### SEO para Crawlers (sem JavaScript)
Bloco `<noscript>` em `templates/index.html` com **149 articles** contendo:
- Todos os 108 peptideos com descricao, mecanismo, beneficios, efeitos colaterais, referencias
- Todos os 41 stacks com descricao, sinergia, duracao, referencias
- Googlebot e outros crawlers indexam esse conteudo completo

### SEO Dinamico (JavaScript)
Em `static/core/app.js`:
- `document.title` atualiza ao abrir modal (ex: "Semaglutida - Guia de Peptideos")
- URL hash atualiza via `history.replaceState` (ex: `#semaglutide`, `#stack-weight-loss-beginner`)
- Deep links funcionam: `guiadepeptideos.com.br/#bpc-157` abre modal direto
- Meta description atualiza dinamicamente com info do peptideo

### Google Search Console
- **Propriedade:** `sc-domain:guiadepeptideos.com.br`
- **Verificacao:** automatica via Cloudflare
- **Sitemap:** `https://guiadepeptideos.com.br/sitemap.xml` (submetido)
- **API OAuth:** configurado com refresh token permanente

### Consultar Dados do Search Console via API

**IMPORTANTE:** As credenciais OAuth (client_id, client_secret, refresh_token) NAO sao commitadas no repositorio. Estao salvas apenas na memoria local do Claude (`MEMORY.md` em `C:\Users\lm\.claude\projects\...\memory\reference_gsc_oauth.md`).

Endpoints disponiveis com as credenciais salvas:

```bash
# 1. Obter access token fresco usando refresh token
curl -X POST "https://oauth2.googleapis.com/token" \
  -d "client_id=<CLIENT_ID>" \
  -d "client_secret=<CLIENT_SECRET>" \
  -d "refresh_token=<REFRESH_TOKEN>" \
  -d "grant_type=refresh_token"

# 2. Listar sites acessiveis
GET https://www.googleapis.com/webmasters/v3/sites
Authorization: Bearer <ACCESS_TOKEN>

# 3. Search Analytics (impressoes, cliques, CTR, posicao)
POST https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Aguiadepeptideos.com.br/searchAnalytics/query
Authorization: Bearer <ACCESS_TOKEN>
Body: {"startDate":"YYYY-MM-DD","endDate":"YYYY-MM-DD","dimensions":["query"],"rowLimit":25}

# 4. Inspecionar status de indexacao de uma URL
POST https://searchconsole.googleapis.com/v1/urlInspection/index:inspect
Authorization: Bearer <ACCESS_TOKEN>
Body: {"inspectionUrl":"https://guiadepeptideos.com.br/","siteUrl":"sc-domain:guiadepeptideos.com.br"}
```

**Dimensoes disponiveis no searchAnalytics:** `query`, `page`, `country`, `device`, `searchAppearance`, `date`

**Quando o usuario perguntar "como esta o SEO" ou "mostra os dados do Google":** usar as credenciais salvas em `reference_gsc_oauth.md` (memoria local) para consultar a API.

---

## Testes Automatizados

### Configuracao
- **Framework:** pytest + pytest-django
- **Arquivo:** `core/tests.py` (117 testes)
- **Config:** `pytest.ini` (DJANGO_SETTINGS_MODULE = peptides_project.settings)
- **Banco de testes:** SQLite in-memory (automatico, sem necessidade de PostgreSQL)

### Como Executar
```bash
# Todos os testes
python -m pytest core/tests.py -v

# Testes especificos por classe
python -m pytest core/tests.py::TestPeptideModel -v
python -m pytest core/tests.py::TestSerializePeptide -v
python -m pytest core/tests.py::TestIndexView -v
python -m pytest core/tests.py::TestJsToJson -v
python -m pytest core/tests.py::TestSeedCommand -v
python -m pytest core/tests.py::TestRealDataFiles -v

# Com cobertura (requer pytest-cov)
python -m pytest core/tests.py --cov=core -v
```

### Categorias de Testes (114 total)

| Categoria | Classe de Teste | Qtd | O que testa |
|-----------|----------------|-----|-------------|
| **Modelos** | TestPeptideModel | 9 | Criacao, __str__, ordering, PK slug, choices, verbose_name |
| | TestPeptideBenefitModel | 4 | Criacao, truncamento __str__, ordering, cascade delete |
| | TestPeptideSideEffectModel | 3 | Criacao, __str__ com severity, cascade delete |
| | TestPeptideDosageModel | 3 | Criacao, __str__, cascade delete |
| | TestPeptideReferenceModel | 2 | HTML preservado, cascade delete |
| | TestStackModel | 3 | Criacao, __str__, verbose_name |
| | TestStackPeptideModel | 5 | Link com peptideo, sem link, SET_NULL, cascade, __str__ |
| | TestStackReferenceModel | 1 | Cascade delete |
| **Serializers** | TestSerializePeptide | 9 | Campos basicos, camelCase, benefits, sideEffects, dosage, refs HTML, JSON serializable, empty, keys |
| | TestSerializeStack | 7 | Campos, camelCase, peptides, orphan peptide, refs, keys, JSON |
| **Views** | TestIndexView | 10 | 200 OK, variaveis JS, particao, JSON valido, stacks, DB vazio, static refs, HTML, banner, unicode |
| | TestHealthView | 3 | 200 OK, Content-Type JSON, status ok |
| **Admin** | TestAdminRegistration | 10 | Paginas acessiveis, list_display, filters, search, inlines, change pages |
| **Parser JS** | TestJsToJson | 14 | Array simples, var declaration, comentarios, chaves, trailing commas, escaped quotes, HTML, nested, multiplos objetos, complexo, URLs, colons |
| **Seed Command** | TestSeedCommand | 11 | Peptides, benefits, side effects, dosages, refs, stacks, links, stack refs, idempotente, ordem, data3 vazio |
| **Integracao** | TestEndToEndFlow | 2 | Seed→render, logica de particao (11 categorias) |
| **URLs** | TestURLRouting | 3 | Resolve index, health, admin |
| **Dados Reais** | TestRealDataFiles | 14 | Parse data1/2/3/stacks, 108 peptideos, campos obrigatorios, IDs unicos, categorias/status/severity validos, PubMed links, 282 refs, seed completo |
| **Deploy Config** | TestDeploymentConfig | 3 | ALLOWED_HOSTS inclui mlt.com.br, FORCE_SCRIPT_NAME, docker-compose.yml |

### Dados Reais vs Dados de Teste
- **Fixtures (pytest):** criam objetos minimos para testes isolados
- **TestRealDataFiles:** parseia os arquivos JS reais (data1.js, data2.js, data3.js, stacks.js) e valida integridade dos dados
  - Skip automatico se os arquivos JS nao estiverem presentes (ex: CI sem dados)

---

## Convencoes de Codigo

### Python (Django)
- **Models:** verbose_name em portugues, ordering por `order`
- **Serializers:** chaves em camelCase (para manter compatibilidade com o JS frontend)
- **Views:** prefetch_related para evitar N+1 queries
- **Admin:** TabularInlines para todos os modelos relacionados

### JavaScript (Frontend)
- **Usar ES5:** `var` em vez de `let`/`const`, `function(){}` em vez de arrow functions
- **Sem modulos:** Dados injetados como variaveis globais pelo Django template
- **String concatenation:** HTML gerado por concatenacao de strings com `+=`
- **IDs kebab-case:** Todos os IDs de peptideos e stacks usam kebab-case
- **Escape Unicode:** Caracteres acentuados em strings JS devem usar Unicode escapes (`\u00e9` para e, `\u00e3` para a, etc.) dentro do app.js

### CSS
- Arquivo unico `static/core/style.css` com todas as regras
- Nenhum pre-processador (sem SASS/LESS)
- Responsivo com media queries (breakpoints em 768px e 480px)

### HTML (Template Django)
- Usa `{% load static %}` e `{% static 'core/...' %}` para CSS/JS
- Entidades HTML para acentos (`&iacute;`, `&atilde;`, etc.)
- Estrutura semantica com `<header>`, `<main>`, `<footer>`

---

## Categorias de Peptideos

| Valor | Label |
|-------|-------|
| `weight-loss` | Perda de Peso |
| `growth-hormone` | Hormonio do Crescimento |
| `healing` | Cura e Recuperacao |
| `anti-aging` | Anti-Envelhecimento |
| `skin` | Pele e Estetica |
| `cognitive` | Cognitivo |
| `immune` | Sistema Imunologico |
| `hormonal` | Hormonal |
| `sleep` | Sono |
| `body-comp` | Composicao Corporal |
| `other` | Outros |

---

## Referencias Cientificas

### Formato obrigatorio
Todas as referencias devem incluir um link PubMed clicavel:
```
"Autor et al. (Ano). Titulo do estudo. Nome do Journal, Volume(Numero), Paginas. <a href='https://pubmed.ncbi.nlm.nih.gov/PMID/' target='_blank'>[PubMed]</a>"
```

### Regras
- Usar aspas simples dentro das tags `<a>` (o array JS usa aspas duplas)
- `target='_blank'` e obrigatorio em todos os links
- PMID deve ser um numero valido do PubMed
- Toda referencia DEVE ter um link PubMed verificavel
- Total atual: 282 referencias com links PubMed (57 em data1 + 52 em data2 + 50 em data3 + 123 em stacks)

---

## Funcionalidades da Aplicacao (app.js)

### Secoes
- **Peptideos Individuais:** Grid de cards com filtro por categoria e busca por texto
- **Combinacoes Recomendadas:** Grid de stack cards com filtro por objetivo

### Busca
- Busca em tempo real (evento `input`)
- Busca por: nome, aka, descricao, categoryLabel (peptideos) ou nome, descricao, nome dos peptideos (stacks)

### Modais
- **Peptideo:** descricao, mecanismo, beneficios, efeitos colaterais (com severidade), dosagem (tabela), referencias
- **Stack:** descricao, peptideos com dose/timing (clicaveis para ver detalhes), aplicacao (co-administracao), sinergia, duracao, nivel de evidencia, referencias
- **Navegacao stack→peptideo:** ao abrir um peptideo a partir de um stack, exibe botao "Voltar para [nome do stack]"
- **Fechamento:** botao X, clique fora, tecla Escape

### Estado global
```javascript
var currentCategory = "all";     // Filtro de categoria ativo
var currentSearch = "";           // Termo de busca atual
var currentSection = "peptides";  // Secao ativa: "peptides" | "stacks"
var currentStackGoal = "all";     // Filtro de objetivo de stack ativo
var sourceStackId = null;         // Stack de origem (para navegacao de volta)
```

---

## Como Adicionar/Editar Dados

### Via Django Admin (recomendado)
1. Acessar http://45.63.90.69/peptides/admin/
2. Peptideos e stacks podem ser criados/editados diretamente com inlines para beneficios, efeitos colaterais, dosagens, referencias

### Via Arquivos JS (seed)
1. Editar o arquivo JS correspondente (data1.js, data2.js, data3.js, stacks.js)
2. Executar o seed: `python manage.py seed_peptides`
   - **ATENCAO:** o seed limpa TODOS os dados antes de reimportar

### Checklist para Novos Peptideos
- `id` unico em kebab-case
- Todos os campos obrigatorios preenchidos
- Pelo menos 1 referencia cientifica com link PubMed
- Categoria valida (uma das 11 listadas)

### Checklist para Novos Stacks
- `id` unico em kebab-case
- `peptides[].id` deve corresponder a IDs existentes no banco
- Todos os campos obrigatorios: id, name, goal, goalLabel, level, description, peptides, synergy, application, duration, warnings, evidenceLevel, references

### Regras para o Campo `application` (Aplicacao)
O campo `application` deve descrever quais peptideos podem ser co-administrados:

1. **PODEM ser misturados:** CJC-1295+Ipamorelin, Tesamorelin+Ipamorelin, BPC-157+TB-500
2. **NUNCA misturar:** GHK-Cu, NAD+, HCG, Cerebrolysin
3. **Vias diferentes = sempre separados:** Oral vs SC, Intranasal vs SC, Topico vs SC, IV vs SC, IM vs SC

---

## Git

- **Repositorio:** https://github.com/lmteixeira17/Peptides-Guide
- **Branch principal:** `master`
- Mensagens de commit em ingles com prefixo convencional: `feat:`, `fix:`, `docs:`, `refactor:`
- Nao commitar a pasta `.claude/`
- Nao commitar arquivos PDF, temporarios ou a pasta `_ul/`

---

## Notas Importantes

- O conteudo e exclusivamente informativo e educacional
- Todas as dosagens sao baseadas em estudos publicados
- O site inclui disclaimers legais no header, modais e footer
- Caracteres especiais do portugues precisam de tratamento especial (Unicode em JS, entidades em HTML)
- HGH Fragment 176-191 e AOD-9604 sao relacionados (AOD-9604 = versao estabilizada do fragmento)
- MK-677 nao e um peptideo (e um mimetico de grelina nao-peptidico), mas esta incluido por relevancia clinica
- Site integrado com Blood Lab (link no banner): https://mlt.com.br/blood/

---

## Acesso ao Servidor (SSH)

Usar chave SSH a partir do ambiente Windows:
```
ssh -i C:\Users\lm\.ssh\id_rsa root@45.63.90.69 "comando"
scp -i C:\Users\lm\.ssh\id_rsa arquivo_local root@45.63.90.69:/caminho/remoto
```

---
---

# Blood Lab - Sistema de Gerenciamento de Exames de Sangue

## Visao Geral

Plataforma Django para gerenciamento de exames de sangue com extracao e analise via IA (GPT-4 Vision). Usuarios enviam PDFs/imagens de exames, o sistema extrai biomarcadores automaticamente, compara com valores de referencia, e gera analises de saude com recomendacoes.

**Idioma do conteudo:** Portugues (pt-BR)
**URL:** https://mlt.com.br/blood/
**Admin Django:** https://mlt.com.br/blood/admin/ (credenciais no MEMORY.md)

---

## Arquitetura

### Stack Tecnologico
| Componente | Tecnologia |
|-----------|-----------|
| Backend | Django 4.2+/5.2 com Gunicorn (2 workers, 300s timeout) |
| Banco de dados | PostgreSQL 16-alpine |
| IA | OpenAI GPT-4 Vision |
| PDF | pdf2image + Pillow |
| Charts | Chart.js 4.4.1 |
| Deploy | Docker Compose |
| Auth | django-allauth (Google OAuth + username/password) |
| Testes | pytest + pytest-django (256 testes) |
| Tema | Dark/Light com CSS custom properties + OS preference detection |

### Fluxo de Dados
```
Browser → nginx-proxy → blood-exams (Django/Gunicorn:8000) → blood-db (PostgreSQL:5432)
                                    → OpenAI API (GPT-4 Vision)
```

---

## Estrutura de Arquivos

```
_BloodExams/ (servidor: /var/www/blood-exams/)
├── manage.py
├── docker-compose.yml             # PostgreSQL + Django (porta 3006:8000)
├── Dockerfile                     # Multi-stage build
├── requirements.txt               # Django, gunicorn, openai, pdf2image, Pillow, bleach
│
├── blood_exams/                   # Django project (settings module: blood_exams)
│   ├── settings.py                # FORCE_SCRIPT_NAME = '/blood'
│   ├── urls.py
│   └── wsgi.py
│
├── core/                          # App principal
│   ├── models.py                  # 10 modelos (+Medication, UserMedication, ExamMedication)
│   ├── views.py                   # 23 views (+6 medication CRUD views)
│   ├── forms.py                   # 6 forms (+UserMedicationForm)
│   ├── correlations.py            # Analise de correlacoes entre biomarcadores (rule-based)
│   ├── ai_service.py              # GPT-4 Vision extracao + fuzzy matching + analise IA
│   ├── admin.py
│   ├── urls.py
│   ├── management/commands/
│   │   ├── seed_biomarkers.py     # Popula catalogo de biomarcadores
│   │   └── seed_medications.py    # Popula catalogo de medicamentos (56 itens)
│   ├── templatetags/
│   │   └── blood_extras.py
│   └── templates/core/
│       ├── base.html              # Template base (navbar, theme toggle, Chart.js CDN)
│       ├── dashboard.html         # Dashboard principal com AI panel + charts
│       ├── upload.html
│       ├── exam_detail.html
│       ├── exam_history.html
│       ├── biomarker_chart.html   # Grafico detalhado por biomarcador
│       ├── profile.html
│       ├── register.html
│       ├── admin_users.html
│       ├── medications.html       # Lista de medicamentos do usuario
│       ├── medication_form.html   # Add/edit medicamento
│       └── exam_medications.html  # Vincular medicamentos a um exame
│
├── static/core/
│   ├── app.js                     # Chart.js rendering, theme management, gauge charts
│   └── style.css                  # Dark/light theme com CSS custom properties
│
└── media/exams/                   # Uploads de exames (por data)
```

---

## Modelos de Dados (core/models.py)

### UserProfile
- OneToOne com User
- Campos: `date_of_birth`, `gender` (M/F), `is_active_subscriber`
- Auto-criado via Django signal ao criar usuario

### Biomarker (Catalogo de Referencia)
- Definicoes padrao de biomarcadores com valores cientificos de referencia
- Campos: `name` (unico), `code` (unico), `unit`, `category`, `description`, `aliases`
- Referencia por genero: `ref_min_male`, `ref_max_male`, `ref_min_female`, `ref_max_female`
- Metodo: `get_ref_range(gender)` → retorna (ref_min, ref_max) por genero
- **Importante:** Estes sao os valores CIENTIFICOS padrao, usados como fonte de verdade

### Exam
- Upload de exame com status de processamento
- Campos: `user` (FK), `file`, `file_type` (pdf/image), `exam_date`, `lab_name`
- Status: `pending` → `processing` → `completed` | `error`
- `ai_raw_response`: JSON bruto da extracao GPT-4 Vision

### ExamResult
- Resultado individual de biomarcador extraido do exame
- Campos: `exam` (FK), `biomarker` (FK), `value` (Decimal), `ref_min`, `ref_max`, `is_abnormal`
- Unique: `['exam', 'biomarker']`
- **save() customizado:** SEMPRE sobrescreve ref_min/ref_max com valores padrao do Biomarker model baseado no genero do usuario, e recalcula is_abnormal automaticamente

### AIAnalysis
- OneToOne com Exam
- Campos JSON: `summary`, `alerts` (list), `improvements` (list), `deteriorations` (list), `recommendations`, `comparison_text`
- Tracking: `model_used`, `input_tokens`, `output_tokens`

### Medication (Catalogo)
- Catalogo compartilhado de medicamentos, vitaminas, suplementos e hormonios
- Campos: `name` (unico), `type` (medication/vitamin/supplement/hormone/other), `common_doses`, `description`, `affects_biomarkers`
- Seed command: `python manage.py seed_medications` (56 itens: 9 vitaminas, 18 suplementos, 13 hormonios, 16 medicamentos)
- Ordering: `['type', 'name']`

### UserMedication
- Medicamentos que o usuario esta tomando (cadastro pessoal)
- Campos: `user` (FK), `medication` (FK), `dose`, `frequency` (9 opcoes), `start_date`, `end_date` (nullable), `notes`, `is_active`
- Frequency choices: daily, twice_daily, three_daily, weekly, twice_weekly, three_weekly, biweekly, monthly, as_needed
- Cascade delete: usuario ou medicamento deletado remove o registro

### ExamMedication
- Snapshot dos medicamentos na data de um exame especifico
- Campos: `exam` (FK), `medication` (FK), `dose`, `frequency`
- Unique together: `['exam', 'medication']`
- Auto-link: ao enviar exame, medicamentos ativos do usuario sao vinculados automaticamente
- Manual link: via pagina de detalhe do exame, botao "Adicionar/Editar"

---

## Dashboard (Visualizacoes)

### Stats Cards
- Total de exames, valores normais/alterados, alertas com icones gradientes

### Painel de Analise IA
- Resumo geral (`summary`) com borda roxa e icone IA
- Alertas filtrados contra dados reais (`filter_abnormal=True` - so mostra biomarcadores efetivamente is_abnormal)
- Melhorias/pioras com setas coloridas
- Recomendacoes em cards compactos
- Items clicaveis linkando para `/blood/biomarker/{code}/`

### Graficos Chart.js
1. **Radar Chart** - Saude por categoria (% biomarcadores normais)
2. **Donut Chart** - Normal vs Alterado
3. **Gauge Charts** - Biomarcadores criticos (clicaveis, linkam para pagina de detalhe)
4. **Deviation Bars** - Desvio % dos alterados (clicaveis)
5. **Line Charts** - Evolucao temporal dos top 12 biomarcadores com faixa de referencia sombreada

### Tema Dark/Light
- CSS custom properties em `:root` (dark) e `[data-theme="light"]`
- Toggle com botao na navbar (sol/lua)
- Persistencia via `localStorage('blood-lab-theme')`
- Script inline no `<head>` previne flash de tema
- Chart.js: todas as instancias sao destruidas e recriadas ao trocar tema

---

## Servico de IA (ai_service.py)

### Passo 1: Extracao de Biomarcadores (GPT-4 Vision)
- Converte PDF em imagens (pdf2image)
- Envia cada pagina como base64 para GPT-4 Vision
- Retorna JSON com lab_name, exam_date, biomarkers[]

### Passo 2: Matching de Biomarcadores
- Estrategia fuzzy multi-nivel: nome exato → codigo → aliases → substring
- **Problemas conhecidos de mapeamento IA:**
  - DHT (Di-hidrotestosterona) mapeado erroneamente para HCT (Hematocrito)
  - SHBG (Globulina Ligadora de Hormonios Sexuais) mapeado para GLOB (Globulinas)
  - Calcio Ionico (mmol/L) mapeado para Calcio Total (mg/dL) - unidades incompativeis
  - Neutrofilos extraidos como % quando referencia e valor absoluto (/uL)

### Passo 3: Analise IA
- Compara resultados atuais com ultimos 3 exames
- Gera summary, alerts, improvements, deteriorations, recommendations
- Alertas do dashboard sao filtrados contra is_abnormal real (evita falsos positivos da IA)

---

## Padronizacao de Valores de Referencia

### Decisao Arquitetural
Valores de referencia nos ExamResults **SEMPRE** usam os valores cientificos padrao do modelo Biomarker, NAO os valores do relatorio do laboratorio. Isso evita inconsistencias entre laboratorios diferentes.

### Implementacao
- `ExamResult.save()` sobrescreve ref_min/ref_max com `Biomarker.ref_min_male/max_male` ou `ref_min_female/max_female` baseado no genero do usuario
- `is_abnormal` e recalculado automaticamente apos normalizar as referencias
- Biomarcadores com apenas ref_max (ex: Colesterol Total ≤190) ou apenas ref_min sao tratados corretamente nos templates (exibem ≤ ou ≥)

### Backfill
Script `backfill_refs.py` disponivel para atualizar registros antigos:
```python
# Executar via manage.py shell no container Docker
docker exec -it blood-exams python manage.py shell -c "exec(open('backfill_refs.py').read())"
```

---

## Deploy do Blood Lab

### Containers Docker
| Container | Imagem | Porta | Funcao |
|-----------|--------|-------|--------|
| `blood-exams` | blood-exams (Django/Gunicorn) | 3006:8000 | Aplicacao web |
| `blood-db` | postgres:16-alpine | interno | Banco de dados |

- **Rede:** `docker-infra_app-network`
- **FORCE_SCRIPT_NAME:** `/blood` (subpath no nginx)

### Workflow de Deploy (Windows → Servidor)

**Staging local:** `C:\Users\lm\AppData\Local\Temp\blood-upload\`

1. Editar arquivos localmente no staging
2. Upload via scp:
   ```
   scp -i C:\Users\lm\.ssh\id_rsa arquivo_local root@45.63.90.69:/var/www/blood-exams/caminho/
   ```
3. Build e restart:
   ```bash
   cd /var/www/blood-exams && docker compose build --no-cache && docker compose up -d
   ```
4. Reconectar rede:
   ```bash
   docker network connect docker-infra_app-network blood-exams
   ```
5. Reload nginx:
   ```bash
   docker exec nginx-proxy nginx -s reload
   ```

### Comandos Uteis
```bash
# Logs do container
docker logs blood-exams --tail 50

# Shell Django no container
docker exec -it blood-exams python manage.py shell

# Verificar saude
curl -s http://localhost:3006/health/

# Corrigir dados via shell
docker exec -it blood-exams python manage.py shell -c "from core.models import ExamResult; ..."
```

---

## Problemas Conhecidos e Solucoes

### Mapeamento Incorreto de Biomarcadores pela IA
| Problema | Causa | Solucao |
|----------|-------|---------|
| HCT=239 | DHT (239 pg/mL) mapeado para HCT | Corrigir valor manualmente via shell |
| GLOB com valores de SHBG | SHBG (nmol/L) mapeado para Globulinas (g/dL) | Deletar registros errados |
| CA com valores de Ca Ionico | Ca Ionico (mmol/L) mapeado para Ca Total (mg/dL) | Deletar registros errados |
| NEUT como % | Neutrofilos extraidos como % em vez de valor absoluto | Converter: % × WBC = valor absoluto |

### Deteccao de Outliers
Para encontrar valores suspeitos, verificar registros com valor >3x ref_max ou <ref_min/3:
```python
from core.models import ExamResult
for r in ExamResult.objects.select_related('biomarker').all():
    if r.ref_max and float(r.value) > 3 * float(r.ref_max):
        print(f"OUTLIER: {r.biomarker.code} = {r.value} (max: {r.ref_max})")
```

### Alertas Falsos no Dashboard
A IA pode marcar biomarcadores como alerta mesmo quando estao dentro da faixa de referencia. Solucao: o `_enrich()` no views.py usa `filter_abnormal=True` para filtrar alertas contra o campo `is_abnormal` real do ExamResult.
