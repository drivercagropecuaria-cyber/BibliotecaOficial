# Arquitetura — Biblioteca RC Agro

## Visão Geral

A aplicação Biblioteca-RC-AGRO é um catálogo de mídia focado em performance e governança de dados. O frontend é React + Vite + TypeScript, com cache e virtualização via TanStack Query e React Virtual. O backend é Supabase (DB/Auth/Storage), com Edge Functions para tarefas privilegiadas (ex.: geração de thumbnails).

```
Usuário -> Frontend (React) -> Supabase (DB/Auth) -> Storage
                      |-> TanStack Query cache
                      |-> React Virtual grid
                      |-> Lazy Images/Thumbnails
```

## Princípios

- Frontend apenas com env VITE_.
- Service role nunca exposto no cliente.
- Catálogo paginado e virtualizado.
- Thumbnails ~50KB, carregamento lazy.
- Edge Functions para processamento.
