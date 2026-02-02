import { useMemo } from 'react'
import { FilterBar } from '@/components/Filters/FilterBar'
import { LoadingSpinner } from '@/components/Common/LoadingSpinner'
import { VirtualMediaGrid } from '@/components/Media/VirtualMediaGrid'
import { useCatalogo } from '@/hooks/useCatalogo'
import { useCatalogoFilters } from '@/hooks/useCatalogoFilters'
import { useDebounce } from '@/hooks/useDebounce'
import type { MediaItem } from '@/types'

export const CatalogoPage = () => {
  const { filters, setPage, setSearch, resetFilters } = useCatalogoFilters()
  const debouncedSearch = useDebounce(filters.search ?? '', 300)
  const queryFilters = useMemo(() => ({ ...filters, search: debouncedSearch }), [filters, debouncedSearch])

  const { data, isLoading, error } = useCatalogo(queryFilters)

  const handleItemClick = (item: MediaItem) => {
    console.info('Item selecionado:', item)
  }

  return (
    <section className="page">
      <div className="page-header">
        <h1 className="page-title">Catálogo de Mídia</h1>
        <div className="page-stats">
          <div className="stat-item">
            <div className="stat-value">{data?.total ?? 0}</div>
            <div className="stat-label">Total</div>
          </div>
        </div>
      </div>

      <FilterBar filters={filters} onSearchChange={setSearch} onReset={resetFilters} />

      {isLoading && <LoadingSpinner message="Carregando catálogo..." />}
      {error && !isLoading && (
        <div className="error-state">
          <div className="error-state-icon">⚠️</div>
          <div className="error-state-title">Erro ao carregar</div>
          <div className="error-state-text">Não foi possível carregar o catálogo.</div>
        </div>
      )}

      {data && !isLoading && data.items.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">📂</div>
          <div className="empty-state-title">Nenhum item encontrado</div>
          <div className="empty-state-text">Tente ajustar os filtros ou faça um novo upload.</div>
        </div>
      )}

      {data && !isLoading && data.items.length > 0 && (
        <VirtualMediaGrid items={data.items} onItemClick={handleItemClick} />
      )}

      {data && data.totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={filters.page <= 1}
            onClick={() => setPage(Math.max(1, filters.page - 1))}
            type="button"
          >
            ←
          </button>
          <span className="pagination-btn active" aria-current="page">
            {filters.page}
          </span>
          <button
            className="pagination-btn"
            disabled={filters.page >= data.totalPages}
            onClick={() => setPage(Math.min(data.totalPages, filters.page + 1))}
            type="button"
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}
