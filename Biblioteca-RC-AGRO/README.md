# Biblioteca-RC-AGRO

Projeto de catálogo de mídia focado em performance, governança e memória institucional.

## Stack
- React + Vite + TypeScript
- Supabase (DB/Auth/Storage)
- TanStack Query (cache)
- React Virtual (virtualização)
- Lazy Images + thumbnails

## Estrutura
```
Biblioteca-RC-AGRO/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── types/
│   ├── styles/
│   └── config/
├── supabase/
│   └── functions/
└── docs/
```

## Documentação
- [Arquitetura](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Plano de Implementação](docs/IMPLEMENTATION_PLAN.md)
- [Modelo de Dados](docs/DATA_MODEL.md)
- [Schema SQL](docs/DB_SCHEMA.sql)
- [Políticas RLS](docs/RLS_POLICIES.md)
- [Ambiente](docs/ENV.md)
- [Convenções](docs/CONVENTIONS.md)
- [Decisões](docs/DECISIONS.md)
- [Backlog](docs/BACKLOG.md)
- [Análise RC Acervo v2.0](docs/ANALYSIS_RC_ACERVO_V2.md)

## Ambiente
Copie `.env.example` para `.env` e preencha com as variáveis VITE_ do Supabase.
