import { useCallback, useState } from 'react'
import type { CatalogoFilters } from '@/types'

const DEFAULT_FILTERS: CatalogoFilters = {
  page: 1,
  limit: 50,
}

export const useCatalogoFilters = () => {
  const [filters, setFilters] = useState<CatalogoFilters>(DEFAULT_FILTERS)

  const setPage = useCallback((page: number) => {
    setFilters((prev) => ({ ...prev, page }))
  }, [])

  const setStatusId = useCallback((statusId?: string) => {
    setFilters((prev) => ({ ...prev, statusId, page: 1 }))
  }, [])

  const setAreaId = useCallback((areaId?: string) => {
    setFilters((prev) => ({ ...prev, areaId, page: 1 }))
  }, [])

  const setTemaId = useCallback((temaId?: string) => {
    setFilters((prev) => ({ ...prev, temaId, page: 1 }))
  }, [])

  const setTipoId = useCallback((tipoId?: string) => {
    setFilters((prev) => ({ ...prev, tipoId, page: 1 }))
  }, [])

  const setSearch = useCallback((search?: string) => {
    setFilters((prev) => ({ ...prev, search, page: 1 }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS)
  }, [])

  return {
    filters,
    setPage,
    setStatusId,
    setAreaId,
    setTemaId,
    setTipoId,
    setSearch,
    resetFilters,
  }
}
