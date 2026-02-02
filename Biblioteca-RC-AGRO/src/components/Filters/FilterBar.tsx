import { SearchInput } from './SearchInput'
import type { CatalogoFilters } from '@/types'

interface FilterBarProps {
  filters: CatalogoFilters
  onSearchChange: (value: string) => void
  onReset: () => void
}

export const FilterBar = ({ filters, onSearchChange, onReset }: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <div className="search-bar">
        <SearchInput value={filters.search ?? ''} onChange={onSearchChange} />
        <button className="btn-primary" type="button">
          <span>➕</span> Novo Upload
        </button>
      </div>
      <button className="btn-filter-clear" type="button" onClick={onReset}>
        🗑️ Limpar Filtros
      </button>
    </div>
  )
}
