-- Biblioteca-RC-AGRO: schema inicial

create table if not exists media (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  type text not null check (type in ('image','video','audio','document')),
  storage_path text not null,
  thumbnail_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists areas (
  id text primary key,
  nome text not null,
  descricao text
);

create table if not exists status (
  id text primary key,
  nome text not null,
  descricao text
);

create table if not exists temas (
  id text primary key,
  nome text not null
);

create table if not exists tipos_projeto (
  id text primary key,
  nome text not null
);

create table if not exists tags (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists collections (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  description text
);

create table if not exists media_tags (
  media_id uuid references media(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  primary key (media_id, tag_id)
);

create table if not exists media_categories (
  media_id uuid references media(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  primary key (media_id, category_id)
);

alter table media add column if not exists collection_id uuid references collections(id);

create index if not exists idx_media_type on media(type);
create index if not exists idx_media_created_at on media(created_at);
create index if not exists idx_media_collection_id on media(collection_id);
