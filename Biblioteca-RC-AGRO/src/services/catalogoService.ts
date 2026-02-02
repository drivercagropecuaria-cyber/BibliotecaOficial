import { supabase } from './supabase'
import type { CatalogoFilters, MediaItem, PaginatedResponse } from '@/types'

export const fetchCatalogo = async (
  filters: CatalogoFilters,
  signal: AbortSignal,
): Promise<PaginatedResponse<MediaItem>> => {
  const { statusId, areaId, temaId, tipoId, search, page, limit } = filters

  let query = supabase
    .from('acervo')
    .select('*', { count: 'exact' })
    .order('createdAt', { ascending: false })
    .range((page - 1) * limit, page * limit - 1)

  if (statusId) query = query.eq('status', statusId)
  if (areaId) query = query.eq('ponto', areaId)
  if (temaId) query = query.eq('temaPrincipal', temaId)
  if (tipoId) query = query.eq('tipoProjeto', tipoId)
  if (search) query = query.ilike('titulo', `%${search}%`)

  const { data, error, count } = await query.abortSignal(signal)

  if (error) throw error

  return {
    items: data ?? [],
    total: count ?? 0,
    page,
    totalPages: Math.ceil((count ?? 0) / limit),
  }
}
