export interface MediaFile {
  tipo: 'imagem' | 'video' | 'outro'
  formato: string
  tamanhoBytes: number
  url: string
  urlThumbnail?: string | null
}

export interface MediaItem {
  id: string
  titulo: string
  dataCaptacao: string
  ponto: string
  tipoProjeto: string
  status: string
  responsavel: string | null
  temaPrincipal: string
  temaSecundario?: string | null
  areaFazenda?: string | null
  nucleoPecuaria?: string | null
  fraseMemoria: string | null
  linkArquivo: string
  thumbnailUrl: string | null
  mimeType: string | null
  arquivo?: MediaFile
  createdAt: string
}

export interface CatalogoFilters {
  statusId?: string
  areaId?: string
  temaId?: string
  tipoId?: string
  search?: string
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  totalPages: number
}
