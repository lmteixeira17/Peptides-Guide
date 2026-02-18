# Guia Completo de Peptideos - CLAUDE.md

## Visao Geral do Projeto

Site de referencia cientifica sobre peptideos terapeuticos. Apresenta informacoes detalhadas sobre 91 peptideos individuais e 29 combinacoes (stacks) recomendadas, com dados baseados em estudos cientificos publicados.

**Idioma do conteudo:** Portugues (pt-BR)
**Publico-alvo:** Profissionais de saude e pesquisadores
**Repositorio:** https://github.com/lmteixeira17/Peptides-Guide

---

## Arquitetura

- **Stack tecnologico:** HTML5 + CSS3 + JavaScript puro (ES5)
- **Sem build tools:** Nao usa bundlers, transpilers ou package managers
- **Sem frameworks:** Nao usa React, Vue, Angular ou qualquer biblioteca JS
- **Sem Node.js:** O sistema nao tem Node.js instalado; scripts auxiliares devem usar Python3
- **Renderizacao:** Client-side com innerHTML (suporta tags HTML embutidas nos dados)

---

## Estrutura de Arquivos

```
_Peptides/
  index.html      - Pagina principal (carrega scripts na ordem correta)
  style.css       - Todos os estilos do site
  app.js          - Logica da aplicacao (filtros, busca, modais, renderizacao)
  data1.js        - 29 peptideos (categorias: weight-loss, growth-hormone)
  data2.js        - 34 peptideos (categorias: healing, anti-aging, skin, cognitive)
  data3.js        - 28 peptideos (categorias: immune, hormonal, sleep, body-comp, other)
  stacks.js       - 29 combinacoes de peptideos recomendadas
  .gitignore      - Ignora .claude/, nul e _ul/
  CLAUDE.md       - Este arquivo
```

### Ordem de Carregamento (critica)
Os scripts devem ser carregados nesta ordem exata no index.html:
1. `data1.js` → exporta `peptidesPart1`
2. `data2.js` → exporta `peptidesPart2`
3. `data3.js` → exporta `peptidesPart3`
4. `stacks.js` → exporta `peptideStacks`
5. `app.js` → combina todos os dados e inicializa a aplicacao

---

## Deploy e Infraestrutura

### Servidor de Producao
- **IP:** 45.63.90.69
- **OS:** Ubuntu 22.04.5 LTS
- **Acesso SSH:** root (porta 22)
- **URL do site:** http://45.63.90.69/peptides/

### Container Docker
- **Nome:** `peptides-guide`
- **Imagem:** `peptides-guide` (nginx:alpine com arquivos estaticos)
- **Rede:** `docker-infra_app-network`
- **Restart policy:** `unless-stopped`
- **Porta interna:** 80 (nao exposta diretamente, acessada via nginx-proxy)

### Arquivos no Servidor
- **Repositorio clonado:** `/var/www/peptides-guide/`
- **Nginx proxy config:** `/var/www/docker-infra/nginx/conf.d/`
  - `peptides.conf` - upstream para o container peptides-guide
  - `default.conf` - location block `/peptides/` no server block do IP
- **Landing page:** `/var/www/docker-infra/nginx/html/index.html` (card do projeto adicionado)
- **Deploy dashboard:** `/var/www/docker-infra/nginx/html/deploy-dashboard.html`

### Arquitetura do Servidor (multi-projetos)
O servidor roda multiplos projetos em containers Docker com um **nginx-proxy** central:

```
nginx-proxy (nginx:alpine) → porta 80/443
  ├── /peptides/       → peptides-guide (nginx:alpine, site estatico)
  ├── /erp/            → erp-backend (Django)
  ├── /crm/            → crm-frontend + crm-backend (React + NestJS)
  ├── /mkt/            → mkt-backend (Next.js)
  ├── /tradeia-news/   → tradeia-news (Django/Gunicorn)
  ├── /monitor-api/    → monitor-api (Node.js, porta 9001)
  └── /deploy-dashboard → pagina estatica no nginx-proxy
```

### Como Fazer Redeploy
1. SSH no servidor: `ssh root@45.63.90.69`
2. Atualizar codigo: `cd /var/www/peptides-guide && git pull`
3. Rebuild e restart:
   ```bash
   docker stop peptides-guide && docker rm peptides-guide
   docker build -t peptides-guide .
   docker run -d --name peptides-guide --restart unless-stopped --network docker-infra_app-network peptides-guide
   ```
4. Verificar: `curl -sI http://localhost/peptides/`

### Deploy Dashboard
- **URL:** http://45.63.90.69/deploy-dashboard
- Monitora todos os containers em tempo real via API do monitor-api (`/monitor-api/api/status`)
- Exibe: status dos containers, uso de CPU/memoria, disco, uptime, load average
- Visualizacao de logs de qualquer container (`/monitor-api/api/logs?container=nome&lines=50`)
- Filtros: Todos, Rodando, Parados, Healthy, Apps, Bancos, Infra
- Auto-refresh a cada 15 segundos
- Containers agrupados por projeto

---

## Modelo de Dados

### Peptideo (data1.js, data2.js, data3.js)

Cada arquivo exporta um array global (`peptidesPart1`, `peptidesPart2`, `peptidesPart3`):

```javascript
var peptidesPart1 = [
    {
        id: "semaglutide",           // Identificador unico (kebab-case)
        name: "Semaglutida",         // Nome de exibicao
        aka: "Ozempic, Wegovy",      // Nomes alternativos (opcional)
        category: "weight-loss",     // Categoria (deve coincidir com filtros do HTML)
        categoryLabel: "Perda de Peso", // Label para exibicao
        status: "approved",          // "approved" | "trial" | "research"
        statusLabel: "Aprovado",     // Label para exibicao
        description: "...",          // Texto descritivo
        mechanism: "...",            // Mecanismo de acao
        halfLife: "~7 dias",         // Meia-vida
        administration: "Subcutanea", // Via de administracao
        benefits: ["...", "..."],    // Array de beneficios
        sideEffects: [               // Array de efeitos colaterais
            { name: "Nausea", severity: "common" }  // severity: "common"|"occasional"|"rare"
        ],
        dosage: [                    // Array de protocolos de dosagem
            { protocol: "Inicio", dose: "0.25mg/semana", notes: "..." }
        ],
        references: [                // Array de referencias cientificas com links PubMed
            "Autor et al. (Ano). Titulo. Journal. <a href='https://pubmed.ncbi.nlm.nih.gov/PMID/' target='_blank'>[PubMed]</a>"
        ]
    }
];
```

### Categorias de Peptideos
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

### Stack / Combinacao (stacks.js)

```javascript
var peptideStacks = [
    {
        id: "weight-loss-beginner",     // Identificador unico
        name: "Stack Perda de Peso - Iniciante",
        goal: "weight-loss",            // Objetivo (mesmas categorias dos filtros)
        goalLabel: "Perda de Peso",
        level: "Iniciante",             // Nivel de experiencia
        description: "...",
        peptides: [                     // Peptideos da combinacao
            {
                id: "semaglutide",      // ID correspondente ao peptideo nos dados
                name: "Semaglutida",
                role: "Papel no protocolo",
                dose: "0.25-1mg/semana",
                timing: "1x por semana"
            }
        ],
        synergy: "...",                 // Explicacao da sinergia entre os peptideos
        application: "...",             // Guia de co-administracao (mistura em seringa, vias, separacao)
        duration: "12-16 semanas",      // Duracao recomendada
        warnings: "...",                // Avisos importantes
        evidenceLevel: "...",           // Nivel de evidencia cientifica
        references: ["..."]            // Referencias com links PubMed
    }
];
```

### Distribuicao de Stacks por Categoria
| Categoria | Quantidade |
|-----------|-----------|
| weight-loss | 6 |
| anti-aging | 4 |
| healing | 3 |
| growth-hormone | 3 |
| cognitive | 3 |
| immune | 2 |
| skin | 2 |
| body-comp | 2 |
| hormonal | 2 |
| sleep | 1 |
| longevity | 1 |
| **Total** | **29** |

---

## Convencoes de Codigo

### JavaScript
- **Usar ES5:** `var` em vez de `let`/`const`, `function(){}` em vez de arrow functions
- **Sem modulos:** Todos os dados sao variaveis globais carregadas via `<script>` tags
- **String concatenation:** HTML gerado por concatenacao de strings com `+=`
- **IDs kebab-case:** Todos os IDs de peptideos e stacks usam kebab-case
- **Escape Unicode:** Caracteres acentuados em strings JS devem usar Unicode escapes (`\u00e9` para e, `\u00e3` para a, etc.) dentro do app.js

### CSS
- Arquivo unico `style.css` com todas as regras
- Nenhum pre-processador (sem SASS/LESS)
- Responsivo com media queries (breakpoints em 768px e 480px)

### HTML
- Entidades HTML para acentos no index.html (`&iacute;`, `&atilde;`, etc.)
- Estrutura semantica com `<header>`, `<main>`, `<footer>`

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
- Total atual: 209 referencias com links PubMed (41 em data1 + 46 em data2 + 32 em data3 + 90 em stacks)

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

## Como Adicionar Novos Peptideos

1. Escolher o arquivo de dados correto baseado na categoria
2. Adicionar o objeto ao array com todos os campos obrigatorios
3. Garantir que o `id` e unico em todos os 3 arquivos de dados
4. Incluir pelo menos 1 referencia cientifica com link PubMed
5. Verificar a sintaxe JS (sem Node.js, usar `python3 -c "..."` para validacao)

## Como Adicionar Novas Combinacoes (Stacks)

1. Adicionar o objeto ao array `peptideStacks` em `stacks.js`
2. Posicionar no local correto (agrupado por `goal`)
3. Os `peptides[].id` devem corresponder aos IDs existentes nos dados (para links clicaveis)
4. Os `peptides[].name` devem corresponder aos nomes existentes nos dados
5. Incluir referencias com links PubMed
6. Definir TODOS os campos obrigatorios (ver checklist abaixo)

### Checklist de Campos Obrigatorios para Stacks

| Campo | Descricao | Exemplo |
|-------|-----------|---------|
| `id` | Identificador unico kebab-case | `"weight-loss-beginner"` |
| `name` | Nome descritivo do stack | `"Perda de Peso - Iniciante"` |
| `goal` | Categoria do objetivo | `"weight-loss"` |
| `goalLabel` | Label para exibicao | `"Perda de Peso"` |
| `level` | Nivel de experiencia | `"Iniciante"` / `"Intermediario"` / `"Avancado"` |
| `description` | Descricao detalhada do protocolo | Texto longo |
| `peptides[]` | Array de peptideos com id, name, role, dose, timing | Ver modelo |
| `synergy` | Explicacao cientifica da sinergia entre os peptideos | Texto longo |
| `application` | Guia de co-administracao e mistura | Ver regras abaixo |
| `duration` | Duracao recomendada do protocolo | `"12-16 semanas"` |
| `warnings` | Avisos e precaucoes | Texto |
| `evidenceLevel` | Nivel de evidencia de cada componente | Texto |
| `references[]` | Array de referencias com links PubMed | Ver formato |

### Regras para o Campo `application` (Aplicacao)

O campo `application` deve descrever claramente quais peptideos da combinacao podem ser
co-administrados (misturados na mesma seringa) e quais devem ser aplicados separadamente.

**Regras de compatibilidade para mistura em seringa:**

1. **PODEM ser misturados** (pares classicos e bem estabelecidos):
   - CJC-1295 sem DAC + Ipamorelin (combo padrao)
   - Tesamorelin + Ipamorelin (combo de GH)
   - BPC-157 + TB-500 (combo de recuperacao)

2. **NUNCA misturar:**
   - GHK-Cu (cobre) com qualquer outro peptideo (cobre catalisa degradacao)
   - NAD+ com peptideos (pH incompativel, degrada outros compostos)
   - HCG com peptideos (glicoproteina grande, formulacao incompativel)
   - Cerebrolysin com outros compostos (volume alto, formulacao complexa)

3. **Vias diferentes = sempre separados:**
   - Oral (MK-677, 5-Amino-1MQ, Dihexa, Melatonina oral) vs SC
   - Intranasal (Semax, Selank) vs SC
   - Topico (Snap-8, GHK-Cu topico) vs SC
   - IV (NAD+ IV, Glutationa IV) vs SC
   - IM (Cerebrolysin, B12 IM) vs SC
   - Canetas pre-preenchidas (Semaglutide, Tirzepatide) nunca misturar

4. **Formato do texto:**
   - Listar cada peptideo ou grupo com instrucao clara
   - Usar MAIUSCULAS para enfatizar: PODEM, DEVEM, NUNCA, SEPARADAMENTE
   - Mencionar a via de administracao (SC, IM, oral, intranasal, topica, IV)
   - Explicar brevemente o motivo quando nao podem ser misturados

## Como Adicionar Novas Categorias

1. Adicionar botao de filtro no `index.html` (secao `.filters` e/ou `#stacksFilters`)
2. Usar a nova categoria nos dados dos peptideos/stacks
3. Adicionar regra CSS para a cor do icone (`.card-icon.nova-categoria`)
4. Adicionar regra CSS para header do stack (`.stack-card-header.nova-categoria`)

---

## Validacao e Testes

- **Sem testes automatizados** - validacao manual abrindo o HTML no navegador
- **Validacao de sintaxe JS:** `python3 -c "open('arquivo.js').read(); print('OK')"`
  Ou contar brackets: verificar que `{` e `}` estao balanceados, sem `,,` duplicados
- **Verificar no navegador:** Abrir index.html, testar filtros, busca, modais, links PubMed
- **Verificar deploy:** `curl -sI http://45.63.90.69/peptides/` deve retornar HTTP 200

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
- Ao usar scripts Python para edicao em massa dos arquivos .js, cuidado com matching de caracteres acentuados
- HGH Fragment 176-191 e AOD-9604 sao relacionados (AOD-9604 = versao estabilizada do fragmento); ambos estao na categoria weight-loss
- MK-677 nao e um peptideo (e um mimetico de grelina nao-peptidico), mas esta incluido por relevancia clinica

---

## Acesso ao Servidor (SSH)

Para operacoes no servidor, usar PuTTY (plink/pscp) a partir do ambiente Windows:
```
plink -ssh -batch -pw "SENHA" root@45.63.90.69 "comando"
pscp -batch -pw "SENHA" arquivo_local root@45.63.90.69:/caminho/remoto
```

Python com paramiko tambem esta disponivel no ambiente local para scripts mais complexos.
