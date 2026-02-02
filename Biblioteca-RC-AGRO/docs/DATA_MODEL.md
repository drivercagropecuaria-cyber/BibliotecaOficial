# Modelo de Dados (stub)

## media
- id (uuid)
- title (text)
- description (text)
- type (image | video | audio | document)
- storage_path (text)
- thumbnail_path (text)
- created_at (timestamptz)
- updated_at (timestamptz)

## lookups
- areas (id, nome, descricao)
- status (id, nome, descricao)
- temas (id, nome)
- tipos_projeto (id, nome)

TODO: adicionar campos de taxonomia completa e metadados narrativos.
