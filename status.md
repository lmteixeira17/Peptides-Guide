# Status do Projeto - Guia de Peptideos

## Checklist Obrigatorio de Deploy

> **REGRA:** NUNCA dizer "esta pronto" ou "foi publicado" sem completar TODOS os itens abaixo.

---

### 1. Pre-Commit (Local)

- [ ] `ruff check .` passa
- [ ] `pytest -q` passa 100% (atual: 292 testes, 19 skips esperados)
- [ ] Nao ha conflitos de merge pendentes (`git status` limpo)
- [ ] Arquivos novos estao adicionados (`git add`)
- [ ] Commit message descritiva em portugues ou ingles

### 2. Pos-Push (GitHub)

- [ ] Push enviado para `origin/master`
- [ ] CI passou (verificar via API ou GitHub Actions)
- [ ] Deploy workflow disparou automaticamente

### 3. Pos-Deploy (Producao) — VALIDACAO OBRIGATORIA

- [ ] Aguardar workflow "Deploy to Production" ficar `completed` + `success`
- [ ] Verificar health check: `curl -s https://guiadepeptideos.com.br/peptides/health/ | grep "ok"`
- [ ] Verificar pagina inicial carrega: `curl -sI https://guiadepeptideos.com.br/peptides/ | grep "200"`
- [ ] Se houver mudancas visuais: conferir screenshots gerados pelo CI (`visual-regression-screenshots`)
- [ ] Se houver mudancas em static files (CSS/JS): verificar se apareceu (pode precisar `Ctrl+F5`)
- [ ] Verificar que nao ha erro 500 em paginas principais:
  - `/peptides/`
  - `/peptides/peptideos/semaglutide/`
  - `/peptides/combinacoes/gh-long-acting-options/`
  - `/peptides/api/v1/peptides.json`
  - `/peptides/api/peptides.json` (legado)

### 4. Rollback (se necessario)

Se o deploy quebrar algo:
```bash
git revert HEAD
git push origin master
```

---

## Como Verificar se o Site Realmente Atualizou

### Metodo 1: curl + grep (rapido)
```bash
# Verificar se uma classe/elemento novo existe no HTML
curl -s https://guiadepeptideos.com.br/peptides/ | grep -c "themeToggle"
curl -s https://guiadepeptideos.com.br/peptides/ | grep -c "scrollProgress"

# Verificar se CSS tem a regra nova
curl -s https://guiadepeptideos.com.br/peptides/static/core/style.css | grep -c "data-theme"
```

### Metodo 2: Browser + DevTools
1. Abrir `https://guiadepeptideos.com.br/peptides/`
2. `Ctrl+F5` (hard refresh)
3. Verificar Elementos:
   - Header tem `#themeToggle`?
   - Body tem `#scrollProgress`?
   - HTML tem `data-theme`?
4. Verificar Network → CSS/JS: status 200 e conteudo atualizado

### Metodo 3: Playwright (automatizado)
```powershell
# Rodar testes E2E locais
pytest tests/e2e -q

# Gerar screenshots visuais locais
$env:VISUAL_SNAPSHOT_DIR="test-results/visual-local"
pytest tests/e2e/test_visual_regression.py -q
```

---

## Status Atual

| Data | Commit | Descricao | Deploy OK? |
|------|--------|-----------|------------|
| 2026-05-23 | 6638749 | Dark mode, scroll progress, paginacao | SIM |
| 2026-05-23 | 2b99c73 | Rate limit middleware, backup_db | SIM |
| 2026-05-24 | 2c52372 | Expansao cientifica do catalogo para 129 peptideos e 46 stacks | SIM |
| 2026-05-24 | 5ea569b | Hardening de frontend, rotas, rate limit e menu sem API | SIM |
| 2026-05-24 | 0a09358 | Crawler de cobertura total do site | SIM |
| 2026-05-24 | eb49f24 | Regressao visual Playwright e screenshots no CI | SIM |
| 2026-05-24 | e79219f | CSP com nonce e remocao de handlers inline | SIM |
| 2026-05-24 | b94a2ae | Fix do compressor offline com script nonceado | SIM |
| 2026-05-24 | 08a43f2 | Nonce CSP consistente em HTML sem page cache | SIM |
| 2026-05-24 | f88b673 | Artifact CI atualizado para Node 24 nativo | SIM |
| 2026-05-24 | 8906912 | Documentacao operacional atualizada | SIM |
| 2026-05-25 | 25781b4 | API publica versionada em `/api/v1/peptides.json` | SIM |

---

## Notas

- O deploy e automatico via GitHub Actions (`.github/workflows/deploy.yml`)
- O CI roda testes unitarios/integracao, crawler de cobertura total e E2E Playwright
- Screenshots visuais ficam no artefato `visual-regression-screenshots`
- O app usa Content-Security-Policy com nonce para scripts e bloqueio de handlers inline
- HTML publico nao usa page cache server-side para evitar mismatch entre nonce do header CSP e nonce dos scripts
- Static files usam WhiteNoise com hash, mas o browser pode cachear — sempre pedir hard refresh
- Cloudflare pode cachear static files — em caso de duvida, verificar via `curl` com cache-bypass
