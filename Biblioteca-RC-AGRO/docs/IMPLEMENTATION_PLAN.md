# Plano de Implementação (detalhado)

Este plano detalha entregas incrementais para o projeto. Cada etapa deve resultar em uma entrega funcional e testável.

## 0. Preparação
- Definir padrões de código (lint/format).
- Configurar git hooks e CI básico.
- Especificar ambientes e variáveis.

## 1. Base do Frontend
- Criar projeto Vite + React + TS.
- Configurar Tailwind + styles globais.
- Criar `queryClient` com políticas de cache.
- Configurar Provider do React Query no `main.tsx`.
- Integrar Supabase client e tipos do schema.
- Implementar layout base (Header/Sidebar/Footer).
- Configurar Router e rotas principais.

## 2. Dados e Supabase
- Configurar client do Supabase.
- Definir schema inicial com tabelas e índices.
- Criar policies RLS básicas.
- Definir tipos de domínio (`MediaItem`, `CatalogoFilters`, `PaginatedResponse`).
- Implementar services (fetchers + AbortSignal).
- Hooks para catálogo, filtros e detalhe.

## 3. Catálogo e performance
- Grid virtualizado com React Virtual.
- MediaCard otimizado.
- LazyImage com placeholder.
- Cache e prefetch com TanStack Query.

## 4. Upload
- UI de upload com progress.
- Envio para Storage e metadados.
- Edge function para thumbnail.

## 5. Observabilidade
- Lighthouse e testes de carga.
- Monitoramento de erros (Sentry).

## 6. Segurança
- RBAC básico.
- Rotas protegidas.
- Hardening de policies.

## 7. UX avançado
- Filtros avançados.
- Favoritos e coleções.
- Busca salva e histórico.
