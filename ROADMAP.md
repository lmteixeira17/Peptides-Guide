# Roadmap Tecnico

## Objetivo

Organizar as correcoes estruturais do projeto antes de ampliar funcionalidades, sem quebrar o frontend legado nem o deploy atual.

## Fase 0 - Base versionada

- [x] Gerar a migracao inicial oficial do app `core`
- [x] Aplicar `migrate` nos ambientes que usam este repositorio como fonte de verdade
- [x] Confirmar que banco local e producao estao alinhados com a migracao versionada

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
- [ ] EXTERNO: revisar escopos do token GitHub e rotacionar o PAT exposto nesta sessao

## Fase 3 - Higiene do repositorio

- [x] Confirmar que os arquivos duplicados da raiz (`app.js`, `style.css`, `index.html`) ja estavam fora do repo
- [x] Remover codigo bootstrap morto em `app.js` (legacy `peptidesPart1/2/3`)
- [x] Criar documentacao operacional minima (`README.md`) com setup, testes e deploy
- [ ] DESTRUTIVO: limpar PDF comercial do historico do git (`git filter-repo`) se confirmado

## Fase 4 - Dados e deploy

- [x] Revisar o fluxo do `seed_peptides` que apaga e recria todo o conteudo
- [x] Definir oficialmente que a fonte de verdade editorial sao os arquivos JS versionados
- [x] Evitar perda silenciosa de ajustes editoriais com `--dry-run`, validacao pre-delete e backup JSON pre-seed no deploy

## Fase 5 - Melhorias de produto

- [x] Centralizar os metadados de categoria para reduzir duplicacao entre modelos e views
- [x] Revisar a estrategia de API publica e versionamento do endpoint JSON
- [x] Cachear sanitizacao `bleach.clean` das referencias (1h, hash determinista) para reduzir custo por render
- [x] `CACHE_MIDDLEWARE_KEY_PREFIX` exposto como env var
- [x] Melhorar observabilidade basica de deploy, seed e falhas de importacao
- [x] Priorizar backlog funcional apos estabilizacao da base tecnica
- [x] Hidratar UI dos cards por bootstrap JSON server-side e manter API como fallback

## Itens que exigem confirmacao externa

- Rotacionar o PAT usado pelo `GH_TOKEN`: exige acao segura na conta GitHub do usuario, pois revogar automaticamente pode cortar o acesso de deploy no meio da sessao.
- Reescrever historico com `git filter-repo`: o PDF comercial aparece em commits antigos, mas o arquivo nao esta mais trackeado e novos PDFs estao bloqueados pelo `.gitignore`. A limpeza exige force-push e alinhamento dos clones.

## Execucao imediata

- [x] Migracao inicial versionada
- [x] Dependencias de teste declaradas
- [x] Validar ambiente de testes
- [x] Publicar estas correcoes no GitHub
