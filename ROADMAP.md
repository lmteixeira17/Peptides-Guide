# Roadmap Tecnico

## Objetivo

Organizar as correcoes estruturais do projeto antes de ampliar funcionalidades, sem quebrar o frontend legado nem o deploy atual.

## Fase 0 - Base versionada

- [x] Gerar a migracao inicial oficial do app `core`
- [ ] Aplicar `migrate` nos ambientes que usam este repositorio como fonte de verdade
- [ ] Confirmar que banco local, staging e producao estao alinhados com a migracao versionada

## Fase 1 - Qualidade e repetibilidade

- [x] Declarar dependencias de teste em arquivo dedicado de desenvolvimento
- [x] Instalar dependencias de desenvolvimento na `.venv`
- [x] Rodar `pytest core/tests.py`
- [x] Adicionar um check de CI para testes basicos e `manage.py check`
- [x] Rodar todos os testes nao-E2E no CI, incluindo crawler de cobertura total
- [x] Adicionar testes visuais Playwright desktop/mobile com screenshots
- [x] Suportar Django 5.2 LTS em Python 3.11/3.12/3.13/3.14 (experimental)

## Fase 2 - Seguranca e operacao

- [x] Remover secrets hardcoded do `docker-compose.yml`
- [x] Exigir `SECRET_KEY` sem fallback inseguro em ambiente de deploy
- [x] Documentar variaveis de ambiente obrigatorias por ambiente
- [x] Adicionar Content-Security-Policy com nonce para scripts
- [x] Remover `SECURE_BROWSER_XSS_FILTER` (header X-XSS-Protection descontinuado)
- [x] `get_client_ip` agora valida REMOTE_ADDR contra TRUSTED_PROXY_CIDRS antes de confiar em headers de proxy
- [x] Remover PDF comercial do tracking do git e bloquear novos arquivos de negocio via `.gitignore`
- [ ] Revisar escopos do token GitHub e rotacionar o PAT exposto nesta sessao

## Fase 3 - Higiene do repositorio

- [x] Confirmar que os arquivos duplicados da raiz (`app.js`, `style.css`, `index.html`) ja estavam fora do repo
- [x] Remover codigo bootstrap morto em `app.js` (legacy `peptidesPart1/2/3`)
- [x] Criar documentacao operacional minima (`README.md`) com setup, testes e deploy
- [ ] Limpar PDF comercial do historico do git (`git filter-repo`) se necessario

## Fase 4 - Dados e deploy

- [ ] Revisar o fluxo do `seed_peptides` que apaga e recria todo o conteudo
- [ ] Definir oficialmente se a fonte de verdade sao os arquivos JS, o admin Django ou ambos com regras claras
- [ ] Evitar que ajustes editoriais feitos apenas no admin sejam perdidos no proximo deploy

## Fase 5 - Melhorias de produto

- [ ] Centralizar os metadados de categoria para reduzir duplicacao entre modelos, views e frontend
- [x] Revisar a estrategia de API publica e versionamento do endpoint JSON
- [x] Cachear sanitizacao `bleach.clean` das referencias (1h, hash determinista) para reduzir custo por render
- [x] `CACHE_MIDDLEWARE_KEY_PREFIX` exposto como env var
- [ ] Melhorar observabilidade basica de deploy, seed e falhas de importacao
- [ ] Priorizar backlog funcional apos estabilizacao da base tecnica
- [ ] Hidratar UI dos cards direto do `<noscript>` para evitar fetch duplicado dos mesmos dados

## Execucao imediata

- [x] Migracao inicial versionada
- [x] Dependencias de teste declaradas
- [x] Validar ambiente de testes
- [x] Publicar estas correcoes no GitHub
