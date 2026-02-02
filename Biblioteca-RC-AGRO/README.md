# Biblioteca-RC-AGRO

Projeto base para catalogação e acesso a mídia com foco em performance, escalabilidade e governança de dados.

## Objetivos

- Estruturar um catálogo resiliente com Supabase (dados + storage).
- Garantir performance em listas extensas (virtualização + cache + lazy load).
- Preparar base para observabilidade, testes e segurança.

## Como evoluir (alto nível)

1. Configurar Vite + React + Tailwind e providers globais.
2. Definir o schema inicial no Supabase (media, tags, categorias, coleções).
3. Implementar serviços e hooks para leitura do catálogo.
4. Construir grid virtualizado e cards otimizados.
5. Adicionar upload e geração de thumbnails.

## Documentação

- [Arquitetura](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Plano de Implementação](docs/IMPLEMENTATION_PLAN.md)
- [Modelo de Dados](docs/DATA_MODEL.md)
- [Requisitos](docs/REQUIREMENTS.md)
- [Schema SQL](docs/DB_SCHEMA.sql)
- [Políticas RLS](docs/RLS_POLICIES.md)
- [Ambiente](docs/ENV.md)
- [Convenções](docs/CONVENTIONS.md)
- [Decisões](docs/DECISIONS.md)
- [Backlog](docs/BACKLOG.md)
- [Análise RC Acervo v2.0](docs/ANALYSIS_RC_ACERVO_V2.md)

## Estrutura inicial

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
├── tests/
│   ├── performance/
│   └── unit/
├── supabase/
│   └── functions/
└── docs/
```
