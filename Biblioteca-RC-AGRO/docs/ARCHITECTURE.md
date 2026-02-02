# Arquitetura Biblioteca-RC-AGRO

## Visão geral

O sistema é composto por uma camada de UI React, uma camada de dados via Supabase e armazenamento de mídia em buckets compatíveis com S3 (Supabase Storage). O foco principal é manter desempenho com listas grandes e otimizar carregamento de mídia.

```
Usuário → Frontend → Supabase → Storage (S3/B2)
            │
            ├─ TanStack Query (cache + revalidação)
            ├─ React Virtual (renderização parcial)
            └─ Lazy Images (thumbnails)
```

## Componentes principais

- **Frontend (React + Vite)**: UI principal, roteamento e state management.
- **TanStack Query**: cache e controle de dados do servidor.
- **React Virtual**: renderização de listas grandes com baixo custo de DOM.
- **Supabase**: banco de dados + autenticação + storage.
- **Storage**: arquivos de mídia e thumbnails.

## Princípios

1. **Performance primeiro**: listas virtualizadas, lazy load e cache agressivo.
2. **Escala de dados**: schema flexível, índices e políticas RLS desde o início.
3. **Evolução incremental**: roadmap em fases, entregas pequenas e testáveis.
4. **Observabilidade**: métricas e logs como parte do fluxo.

## Fluxo de dados (catálogo)

1. UI solicita lista de mídia via hooks com TanStack Query.
2. Service chama Supabase com filtros e paginação.
3. Dados são cacheados com staleTime curto.
4. Lista renderiza somente itens visíveis via React Virtual.
5. Thumbnails são carregados sob demanda via LazyImage.

## Pontos críticos de performance

- **Tamanho de thumbnails**: meta de ~50KB por imagem.
- **Virtualização**: 20–30 itens visíveis por viewport.
- **Caching**: prefetch em scroll e invalidação segura.
- **Paginação**: cursor-based quando possível.

## Segurança e governança

- RLS por perfil (admin, editor, viewer).
- Storage policies por bucket e prefixo.
- Auditoria de alterações em tabelas críticas.
