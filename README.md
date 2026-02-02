# BibliotecaOficial

Base de dados e aplicação Biblioteca RC Agro para catalogação e acesso a mídia, com foco em performance (virtualização, cache e lazy loading) e integração com Supabase.

## Visão geral

A arquitetura proposta contempla Frontend em React + Vite, dados com Supabase, armazenamento em B2/S3 e otimizações com TanStack Query, React Virtual e Lazy Images.

```
Usuário → Frontend → Supabase → B2/S3
            │
            ├─ TanStack Query (staleTime 1m)
            ├─ React Virtual (20 itens visíveis)
            └─ Lazy Images (thumbnails ~50KB)
```

## Objetivo

Construir uma base de dados robusta e escalável no repositório, com um plano de evolução incremental. O objetivo é maximizar a capacidade do sistema em **performance**, **observabilidade**, **manutenibilidade** e **escala** para o projeto **Biblioteca-RC-AGRO**.

## Plano de trabalho (macro)

> **Nota:** Nem tudo será feito de uma vez. Este plano divide o trabalho em etapas incrementais para entregar valor rapidamente e manter a evolução contínua.

### Fase 0 — Preparação do repositório
- [ ] Criar estrutura de pastas do projeto `Biblioteca-RC-AGRO`.
- [ ] Documentar padrões de código, linting e convenções.
- [ ] Definir estratégia de versionamento e branchs.

### Fase 1 — Fundamentos do Frontend
- [ ] Inicializar projeto Vite + React + TS.
- [ ] Configurar Tailwind CSS (globals, tokens, base UI).
- [ ] Configurar React Router (rotas públicas/privadas).
- [ ] Configurar QueryClient e Providers globais.

### Fase 2 — Dados e Integração Supabase
- [ ] Configurar Supabase JS client e env.
- [ ] Modelar entidades base (media, tags, categorias, coleção).
- [ ] Implementar services com fetchers + AbortSignal.
- [ ] Hooks com TanStack Query para catalogo e detalhes.

### Fase 3 — Performance e escala do catálogo
- [ ] Implementar lista virtualizada com `@tanstack/react-virtual`.
- [ ] Implementar LazyImage + placeholders e fallback.
- [ ] Aplicar cache, staleTime e prefetch.

### Fase 4 — Upload e processamento
- [ ] Upload de mídia e thumbnail.
- [ ] Edge function para geração de thumbnail.
- [ ] Integração Storage + metadados.

### Fase 5 — Observabilidade e qualidade
- [ ] Métricas (Lighthouse, mem/CPU, load tests).
- [ ] Testes unitários e de performance.
- [ ] Monitoramento de erros (Sentry ou similar).

### Fase 6 — Segurança e autenticação
- [ ] Auth com Supabase (OAuth, email, magic link).
- [ ] Rotas protegidas e RBAC.
- [ ] Políticas de storage e RLS.

### Fase 7 — UX avançado
- [ ] Filtros com debounce e saved searches.
- [ ] Modo grid/list, colunas responsivas.
- [ ] Favoritos, coleções, tags e recomendações.

## Estrutura planejada (alvo)

```
Biblioteca-RC-AGRO/
├── public/
│   ├── favicon.ico
│   └── placeholder.jpg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── types/
│   ├── styles/
│   └── config/
├── tests/
│   ├── performance/
│   └── unit/
├── supabase/
│   └── functions/
└── ...
```

## Próximos passos sugeridos (curto prazo)

1. Definir o dataset inicial (schema + campos essenciais).
2. Inicializar Vite + Tailwind + Router.
3. Configurar Supabase (projeto + env + tabela base).
4. Criar os primeiros componentes do catálogo (grid + card).

## Como contribuir

- Atualize o plano conforme a evolução.
- Mantenha as decisões registradas.
- Priorize entregas incrementais e testáveis.
