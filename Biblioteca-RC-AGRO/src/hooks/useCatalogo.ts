import { useQuery } from '@tanstack/react-query'
import { fetchCatalogo } from '@/services/catalogoService'
import type { CatalogoFilters } from '@/types'

const getQueryKey = (filters: CatalogoFilters) => [
  'catalogo',
  filters.statusId ?? 'all',
  filters.areaId ?? 'all',
  filters.temaId ?? 'all',
  filters.tipoId ?? 'all',
  filters.search ?? '',
  filters.page,
  filters.limit,
]

export const useCatalogo = (filters: CatalogoFilters) => {
  return useQuery({
    queryKey: getQueryKey(filters),
    queryFn: ({ signal }) => fetchCatalogo(filters, signal),
    staleTime: 60_000,
    gcTime: 900_000,
    refetchOnWindowFocus: false,
  })
}
