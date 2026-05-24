# Status do Projeto - Guia de Peptideos

## Checklist Obrigatorio de Deploy

> **REGRA:** NUNCA dizer "esta pronto" ou "foi publicado" sem completar TODOS os itens abaixo.

---

### 1. Pre-Commit (Local)

- [ ] `pytest` passa 100% (182 testes)
- [ ] Nao ha conflitos de merge pendentes (`git status` limpo)
- [ ] Arquivos novos estao adicionados (`git add`)
- [ ] Commit message descritiva em portugues ou ingles

### 2. Pos-Push (GitHub)

- [ ] Push enviado para `origin/master`
- [ ] CI passou (verificar via API ou GitHub Actions)
- [ ] Deploy workflow disparou automaticamente

### 3. Pos-Deploy (Producao) — VALIDACAO OBRIGATORIA

- [ ] Aguardar workflow "Deploy to Production" ficar `completed` + `success`
- [ ] Verificar health check: `curl -s https://guiadepeptideos.com.br/health/ | grep "ok"`
- [ ] Verificar pagina inicial carrega: `curl -sI https://guiadepeptideos.com.br/ | grep "200"`
- [ ] Se houver mudancas visuais: **capturar screenshot** ou verificar manualmente no browser
- [ ] Se houver mudancas em static files (CSS/JS): verificar se apareceu (pode precisar `Ctrl+F5`)
- [ ] Verificar que nao ha erro 500 em paginas principais:
  - `/`
  - `/peptideos/semaglutide/`
  - `/combinacoes/cjc-ipamorelin/`
  - `/api/peptides.json`

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
curl -s https://guiadepeptideos.com.br/ | grep -c "themeToggle"
curl -s https://guiadepeptideos.com.br/ | grep -c "scrollProgress"

# Verificar se CSS tem a regra nova
curl -s https://guiadepeptideos.com.br/static/core/style.css | grep -c "data-theme"
```

### Metodo 2: Browser + DevTools
1. Abrir `https://guiadepeptideos.com.br/`
2. `Ctrl+F5` (hard refresh)
3. Verificar Elementos:
   - Header tem `#themeToggle`?
   - Body tem `#scrollProgress`?
   - HTML tem `data-theme`?
4. Verificar Network → CSS/JS: status 200 e conteudo atualizado

### Metodo 3: Playwright (automatizado)
```python
# Rodar testes E2E contra producao
pytest tests/e2e/test_frontend.py -v --base-url=https://guiadepeptideos.com.br
```

---

## Status Atual

| Data | Commit | Descricao | Deploy OK? |
|------|--------|-----------|------------|
| 2026-05-23 | 6638749 | Dark mode, scroll progress, paginacao | SIM |
| 2026-05-23 | 2b99c73 | Rate limit middleware, backup_db | SIM |

---

## Notas

- O deploy e automatico via GitHub Actions (`.github/workflows/deploy.yml`)
- Static files usam WhiteNoise com hash, mas o browser pode cachear — sempre pedir hard refresh
- Cloudflare pode cachear static files — em caso de duvida, verificar via `curl` com cache-bypass
