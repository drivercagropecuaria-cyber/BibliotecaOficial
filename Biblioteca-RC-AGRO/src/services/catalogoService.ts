import { supabase } from './supabase'
import type { CatalogoFilters, MediaItem, PaginatedResponse } from '@/types'

export const fetchCatalogo = async (
  filters: CatalogoFilters,
  signal: AbortSignal,
): Promise<PaginatedResponse<MediaItem>> => {
  const { tipoId, search, page, limit } = filters

  let query = supabase
    .from('media')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1)

  if (tipoId) query = query.eq('type', tipoId)
  if (search) {
    query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`)
  }

  const { data, error, count } = await query.abortSignal(signal)

  if (error) throw error

  return {
    items: data ?? [],
    total: count ?? 0,
    page,
    totalPages: Math.ceil((count ?? 0) / limit),
  }
}
