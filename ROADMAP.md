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
- [ ] Adicionar um check de CI para testes basicos e `manage.py check`

## Fase 2 - Seguranca e operacao

- [x] Remover secrets hardcoded do `docker-compose.yml`
- [x] Exigir `SECRET_KEY` sem fallback inseguro em ambiente de deploy
- [x] Documentar variaveis de ambiente obrigatorias por ambiente
- [ ] Revisar escopos do token GitHub e rotacionar o PAT exposto nesta sessao

## Fase 3 - Higiene do repositorio

- [ ] Decidir o destino dos arquivos duplicados da raiz (`app.js`, `style.css`, `index.html`) versus os arquivos servidos pelo Django
- [ ] Limpar artefatos e placeholders nao essenciais do repositorio
- [ ] Criar documentacao operacional minima (`README.md`) com setup, testes e deploy

## Fase 4 - Dados e deploy

- [ ] Revisar o fluxo do `seed_peptides` que apaga e recria todo o conteudo
- [ ] Definir oficialmente se a fonte de verdade sao os arquivos JS, o admin Django ou ambos com regras claras
- [ ] Evitar que ajustes editoriais feitos apenas no admin sejam perdidos no proximo deploy

## Fase 5 - Melhorias de produto

- [ ] Centralizar os metadados de categoria para reduzir duplicacao entre modelos, views e frontend
- [ ] Revisar a estrategia de API publica e versionamento do endpoint JSON
- [ ] Melhorar observabilidade basica de deploy, seed e falhas de importacao
- [ ] Priorizar backlog funcional apos estabilizacao da base tecnica

## Execucao imediata

- [x] Migracao inicial versionada
- [x] Dependencias de teste declaradas
- [x] Validar ambiente de testes
- [ ] Publicar estas correcoes no GitHub