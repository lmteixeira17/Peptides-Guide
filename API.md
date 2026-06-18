# API Publica - Guia de Peptideos

## Contrato atual

- Versao: `1.0`
- Endpoint principal: `https://guiadepeptideos.com.br/peptides/api/v1/peptides.json`
- Endpoint legado: `https://guiadepeptideos.com.br/peptides/api/peptides.json`
- Metodo: `GET`
- Formato: JSON UTF-8
- Cache publico: `Cache-Control: public, max-age=3600`
- CORS: `Access-Control-Allow-Origin: *`
- Uso: educacional/informativo; as referencias primarias devem ser consultadas para qualquer decisao clinica.

## Formato de resposta

```json
{
  "version": "1.0",
  "source": "https://guiadepeptideos.com.br/peptides/",
  "license": "Educational use only - consult references for primary sources",
  "last_updated": "2026-05-24",
  "peptides": [],
  "stacks": []
}
```

### Peptide

Campos estaveis:

- `id`
- `name`
- `aka`
- `category`
- `categoryLabel`
- `description`
- `mechanism`
- `benefits`
- `sideEffects`
- `dosage`
- `administration`
- `halfLife`
- `status`
- `statusLabel`
- `references`

### Stack

Campos estaveis:

- `id`
- `name`
- `goal`
- `goalLabel`
- `level`
- `description`
- `peptides`
- `synergy`
- `application`
- `duration`
- `warnings`
- `evidenceLevel`
- `references`

## Politica de compatibilidade

- Mudancas compativeis podem adicionar novos campos sem alterar a versao.
- Mudancas que removam ou renomeiem campos exigem novo endpoint versionado, por exemplo `/api/v2/peptides.json`.
- O endpoint legado `/api/peptides.json` deve continuar apontando para a versao estavel atual enquanto houver consumo conhecido.
- IDs de peptideos e stacks sao slugs estaveis e devem ser tratados como chaves publicas.

## Changelog

### 2026-06-18

- Homepage passou a usar bootstrap JSON server-side para render inicial sem depender de fetch.
- API publica permanece como fallback do frontend e contrato para integracoes externas.
- CI passou a validar `makemigrations --check --dry-run` e `seed_peptides --dry-run`.

### 2026-05-25

- Publicado endpoint versionado `/api/v1/peptides.json`.
- Mantido endpoint legado `/api/peptides.json` por compatibilidade.
