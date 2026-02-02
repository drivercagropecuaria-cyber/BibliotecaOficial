# Modelo de Dados (proposta inicial)

## media
- id (uuid)
- title (text)
- description (text)
- type (enum: image | video | audio | document)
- storage_path (text)
- thumbnail_path (text)
- created_at (timestamp)
- updated_at (timestamp)
- tags (relation)
- categories (relation)
- collection_id (relation)

## tags
- id (uuid)
- name (text)

## categories
- id (uuid)
- name (text)

## collections
- id (uuid)
- name (text)
- description (text)

## Próximos passos
- Refinar campos obrigatórios e índices.
- Definir políticas RLS e permissões por perfil.
- Planejar tabelas auxiliares (audit logs, favorites, search history).
