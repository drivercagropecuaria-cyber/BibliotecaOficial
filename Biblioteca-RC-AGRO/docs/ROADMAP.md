# Roadmap Biblioteca-RC-AGRO

Este roadmap detalha a evolução incremental do projeto.

## Fase 0 — Preparação do repositório
- Definir convenções de código e versionamento.
- Configurar lint/format e commit hooks.

## Fase 1 — Fundamentos do Frontend
- Inicializar Vite + React + TS.
- Configurar Tailwind e styles globais.
- Configurar React Router e providers (QueryClient).

## Fase 2 — Dados e integração Supabase
- Configurar Supabase client + env.
- Criar schema base (media, tags, categorias, coleções).
- Implementar services com AbortSignal.

## Fase 3 — Performance do catálogo
- Grid virtualizado com `@tanstack/react-virtual`.
- LazyImage com placeholder e fallback.
- Prefetch, caching e staleTime.

## Fase 4 — Upload e processamento
- Upload de mídia + metadata.
- Edge function para thumbnails.

## Fase 5 — Observabilidade e qualidade
- Testes unitários e de performance.
- Monitoramento de erros.

## Fase 6 — Segurança e autenticação
- Auth + RBAC + políticas RLS.

## Fase 7 — UX avançado
- Filtros avançados, favoritos, coleções.
