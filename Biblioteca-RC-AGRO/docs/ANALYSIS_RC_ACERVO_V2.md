# Análise Completa — RC Acervo v2.0

**Data da Análise:** Fevereiro 2026  
**Analisado por:** Engenheiro de Performance & Arquitetura de Software  
**Status:** Aplicação em Produção

## 1. Visão Geral do Projeto

### 1.1 O que é o RC Acervo?

O **RC Acervo v2.0** é um sistema completo de gestão de biblioteca de mídia desenvolvido para a **RC Agropecuária**. É uma **Casa de Memória Digital** que cataloga, organiza e preserva o acervo audiovisual da empresa.

### 1.2 Propósito Institucional

```
┌─────────────────────────────────────────────────────────────────┐
│                    MISSÃO DO RC ACERVO                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  "Transformar registros de campo em patrimônio cultural          │
│   e narrativa de legado para as futuras gerações"                │
│                                                                  │
│  • Documentar a história da RC Agropecuária                      │
│  • Preservar conhecimento técnico e cultural                    │
│  • Criar narrativa para documentários e filmes                  │
│  • Organizar conteúdo para comunicação institucional            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 Contexto da Empresa

| Aspecto | Descrição |
|---------|-----------|
| Setor | Agropecuária |
| Foco | Pecuária de corte (bovinos) |
| Diferencial | Sistema Qualidade Total, Genética Guzonel |
| Presença | Múltiplas fazendas em Minas Gerais |
| Cultura | Tradição, disciplina, inovação com raízes |

## 2. Arquitetura Técnica Atual

### 2.1 Stack Tecnológico

```
┌─────────────────────────────────────────────────────────────────┐
│                    STACK TECNOLÓGICO                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FRONTEND                    BACKEND                    STORAGE │
│  ┌─────────┐                ┌─────────┐              ┌────────┐ │
│  │  HTML5  │◄──────────────│  Node   │◄────────────│ Backblaze│
│  │  CSS3   │   HTTP/REST   │ Express │   S3 API    │    B2   │
│  │VanillaJS│               │         │              │         │
│  └─────────┘                └─────────┘              └────────┘ │
│       ▲                           │                              │
│       │                           ▼                              │
│       │                    ┌─────────────┐                       │
│       └────────────────────│ JSON File DB│                       │
│                            │  (/tmp)     │                       │
│                            └─────────────┘                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Componentes Detalhados

| Camada | Tecnologia | Função |
|--------|------------|--------|
| Frontend | HTML5 + CSS3 + Vanilla JS | Interface do usuário (SPA simples) |
| Backend | Node.js + Express | API RESTful |
| Banco de Dados | JSON file-based | Persistência em `/tmp` (Render) |
| Storage | Backblaze B2 | Armazenamento de arquivos (S3-compatible) |
| Deploy | Render.com | Hospedagem cloud |

### 2.3 Estrutura de Arquivos

```
rc-acervo-v2/
├── server.js
├── taxonomia.js
├── index.html
├── package.json
├── README.md
└── data/
    └── catalogo-v2.json
```

## 3. Taxonomia Institucional

### 3.1 Visão Geral

O sistema implementa uma taxonomia sofisticada com **530+ elementos classificatórios** organizados em 13 categorias principais.

### 3.2 Áreas/Fazendas (13 unidades)

| ID | Nome | Descrição |
|----|------|-----------|
| VILACAN | Vila Canabrava | Unidade central e símbolo do sistema |
| OLHOSAG | Olhos d'Água | Captação e produção com rotinas intensas |
| SANTAMA | Santa Maria | Operações de cria e manejo |
| JEQUITA | Jequitaí | Produção e captações do ciclo anual |
| TERRANO | Terra Nova | Operações e captações integradas |
| UNIAOXX | União | Reprodução e manejo estratégico |
| RETUNIA | Retiro União | Trabalho de campo (apartações, protocolos) |
| BHESCRI | Belo Horizonte (Escritório) | Centro de gestão e planejamento |
| ROTAEST | Rotas e Estradas | Deslocamentos e logística |
| LOCALEX | Locais Externos | Eventos e parceiros |
| TATEREC | Tatersal / Recinto de Leilão | Eventos de comercialização |
| EXPOMIN | Expominas | Congressos e representatividade |
| CURVELO | Curvelo | Marco histórico do fundador |

### 3.3 Núcleos da Pecuária (12 núcleos + 30 subnúcleos)

```
Cria
├── Nascimento e maternidade
├── Desmama
└── Formação de lote

Recria
└── Desenvolvimento a pasto

Engorda
└── Terminação

Reprodução
├── Inseminação artificial em tempo fixo (IATF)
├── Inseminação artificial (IA)
├── Transferência de embriões (TE)
└── Diagnóstico de gestação

Genética e Melhoramento
├── Seleção de reprodutores
├── Guzerá puro de origem
├── Nelore puro de origem
├── Cruzamento Zebu x Zebu (Guzonel)
└── Heterose e vigor híbrido

Sanidade
├── Vacinação
├── Controle parasitário
└── Bem-estar animal

Nutrição
├── Pasto e suplementação
├── Silagem
└── Ração proteica e balanceamento

Manejo
├── Apartação
├── Pesagem e conferência
├── Marcação e identificação
└── Andrológico e avaliação de touros

Confinamento
├── Entrada e adaptação
└── Rodada e saída

Logística Pecuária
└── Transporte e embarques

Qualidade Total (Controle)
├── Medir, anotar, avaliar e apartar
└── Sistemas e dados de campo

Comercialização
└── Leilões e oferta pública
```

### 3.4 Temas Principais (50 temas)

**Identidade e Cultura**
- Terra e Sertão
- Origem e Propósito
- Legado
- Fé e Espiritualidade
- Rotina do Campo
- O Vaqueiro
- O Cavalo

**Produção Pecuária**
- Cria, Maternidade, Desmama
- Manejo e Apartação
- Pesagem e Controle
- Sanidade, Nutrição, Silagem
- Confinamento
- Reprodução, IATF, Diagnóstico
- Andrológico de Touros

**Genética**
- Genética e Seleção
- Guzerá Puro de Origem
- Nelore Puro de Origem
- Cruzamento Zebu x Zebu (Guzonel)
- Heterose e Eficiência

**Gestão e Sistemas**
- Qualidade Total
- Gestão e Planejamento
- Sistemas e Dados

**Sustentabilidade**
- Água, Veredas e Nascentes
- Barragens e Reservas
- Irrigação
- Solo e Conservação
- Curvas de Nível
- Pastagens
- Agricultura do Sistema
- Bioinsumos
- Sustentabilidade

**Mercado e Comunicação**
- Logística e Embarques
- Leilão
- Clientes e Relacionamento
- Representatividade
- Congressos e Palestras
- Cultura Interna
- Treinamento e Disciplina
- Comunicação e Mídia
- Documentário e Filme
- Casa de Memória e Futuro
- Futuro do Agro

### 3.5 Status do Material (9 status)

| ID | Status | Descrição |
|----|--------|-----------|
| ENT | Entrada (Bruto) | Material recém-chegado |
| TRI | Em triagem | Seleção inicial |
| CAT | Catalogado | ID criado, pasta canônica |
| SEL | Selecionado para produção | Confirmado para entrega |
| PRO | Em produção | Edição/roteiro em andamento |
| APR | Em aprovação | Aguardando validação |
| APO | Aprovado | Autorizado para publicar |
| PUB | Publicado | Publicado na plataforma |
| ARQ | Arquivado | Final guardado na biblioteca |

## 4. Funcionalidades do Sistema

### 4.1 Dashboard

Painel com métricas operacionais (volume de itens, áreas, núcleos, temas, imagens, vídeos e espaço utilizado).

### 4.2 Catálogo

- Grid de mídias com cards
- Filtros por área, núcleo, tema, status
- Busca textual
- Visualização de detalhes
- Paginação

### 4.3 Upload

Fluxo recomendado:
1. Seleção de arquivo (drag & drop ou click)
2. Preenchimento de metadados
3. Geração de nome canônico
4. Upload para Backblaze B2
5. Registro no catálogo

### 4.4 API REST

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/health` | GET | Status do servidor |
| `/api/taxonomia/*` | GET | Taxonomia completa e parcial |
| `/api/upload/presigned` | POST | Gera URL para upload |
| `/api/upload/complete` | POST | Confirma upload e cataloga |
| `/api/catalogo` | GET | Lista itens (com filtros) |
| `/api/catalogo/:id` | GET | Detalhes do item |
| `/api/catalogo/:id` | PUT | Atualiza item |
| `/api/catalogo/:id/status` | PATCH | Atualiza status |
| `/api/estatisticas/geral` | GET | Estatísticas completas |

## 5. Estrutura de Dados

### 5.1 Estrutura de Pastas no B2

```
rc-acervo-midia/
├── 00_ENTRADA/
│   └── YYYY/MM/DD/
├── 01_CATALOGADO/
│   └── YYYY/MM/DD/
├── 02_EM_PRODUCAO/
│   └── YYYY/MM/DD/
├── 03_EM_APROVACAO/
│   └── YYYY/MM/DD/
├── 04_APROVADO/
│   └── YYYY/MM/DD/
├── 05_PUBLICADO/
│   └── YYYY/MM/DD/
└── 06_ARQUIVADO/
    └── YYYY/MM/DD/
```

### 5.2 Nome Canônico de Arquivos

```
Formato: AAAAMMDD_AREA_NUCLEO_TEMA_STATUS_UUID

Exemplo: 20250201_VILACAN_CRIA_NASCIMENTO_ENT_a1b2c3d4
```

### 5.3 Schema do Item de Catálogo (resumo)

```typescript
interface CatalogoItem {
  id: string
  identificador: string
  titulo: string
  dataCaptacao: string
  responsavel: string
  observacoes: string
  areaFazenda: string
  ponto: string
  tipoProjeto: string
  nucleoPecuaria: string | null
  subnucleoPecuaria: string | null
  nucleoAgro: string | null
  subnucleoAgro: string | null
  nucleoOperacoes: string | null
  subnucleoOperacoes: string | null
  nucleoMarca: string | null
  subnucleoMarca: string | null
  temaPrincipal: string
  temaSecundario: string
  eventoPrincipal: string | null
  funcaoHistorica: string | null
  capituloFilme: string
  fraseMemoria: string
  status: string
  historicoStatus: Array<{
    status: string
    data: string
    responsavel: string
    observacao: string
  }>
  arquivo: {
    nomeOriginal: string
    nomeSistema: string
    nomeCanonico: string
    tipo: 'imagem' | 'video' | 'outro'
    formato: string
    tamanhoBytes: number
    tamanhoFormatado: string
    duracao: number | null
    duracaoFormatada: string | null
    resolucao: string | null
    url: string
    urlThumbnail: string
    checksum: string
    pastaStorage: string
  }
  links: {
    drive: string
    pastaProjeto: string
    frameio: string
    asana: string
    publicacao: string
  }
  metadadosTecnicos: object
  versao: number
  createdAt: string
  updatedAt: string
}
```

## 6. Análise de Performance

### 6.1 Pontos Fortes

| Aspecto | Avaliação |
|---------|-----------|
| Taxonomia | ⭐⭐⭐⭐⭐ Excelente - 530+ elementos bem estruturados |
| Workflow | ⭐⭐⭐⭐⭐ Completo - 9 status com transições claras |
| Metadados | ⭐⭐⭐⭐⭐ Rico - Captura contexto narrativo completo |
| Nome Canônico | ⭐⭐⭐⭐⭐ Inteligente - Automático e semântico |
| Estrutura de Pastas | ⭐⭐⭐⭐⭐ Organizada - Workflow + data |

### 6.2 Pontos de Atenção

| Aspecto | Problema | Impacto |
|---------|----------|---------|
| Frontend | Vanilla JS sem framework | Manutenibilidade, escalabilidade |
| Banco de Dados | JSON file-based | Concorrência, backup, queries complexas |
| Cache | Sem cache de dados | Performance em catálogo grande |
| Virtualização | Sem virtualização no grid | Travamento com muitos itens |
| Thumbnails | Sem geração automática | Carregamento pesado no grid |

### 6.3 Métricas de Performance Atuais

| Cenário | Comportamento Esperado |
|---------|------------------------|
| Catálogo com <100 itens | ✅ Funciona bem |
| Catálogo com 500+ itens | ⚠️ Pode travar (sem virtualização) |
| Troca de abas | ⚠️ Recarrega dados (sem cache) |
| Upload de arquivo grande | ✅ Funciona (streaming para B2) |

## 7. Recomendações de Otimização

### 7.1 Curto Prazo (Quick Wins)

1. Implementar paginação no frontend (24 itens por página).
2. Adicionar debounce nos filtros (300ms).
3. Lazy loading de imagens com placeholders.

### 7.2 Médio Prazo

1. Migrar para React + TanStack Query.
2. Implementar virtualização (`@tanstack/react-virtual`).
3. Gerar thumbnails automaticamente.

### 7.3 Longo Prazo

1. Migrar banco de dados para PostgreSQL (Supabase).
2. Implementar autenticação por perfil.
3. Adicionar realtime para colaboração.

## 8. Conclusão

O RC Acervo v2.0 é um sistema funcional e bem estruturado, com taxonomia institucional completa, workflow de aprovação e boas práticas de organização de acervo. As recomendações apontam para a migração progressiva para React, cache e virtualização, além de melhorias de infraestrutura e governança de dados.
