import { FilterSelect } from './FilterSelect'
import { SearchInput } from './SearchInput'

interface FilterOption {
  id: string
  nome: string
}

interface FilterBarProps {
  filters: {
    statusId?: string
    areaId?: string
    temaId?: string
    tipoId?: string
    search?: string
  }
  areas?: FilterOption[]
  status?: FilterOption[]
  temas?: FilterOption[]
  tipos?: FilterOption[]
  onStatusChange: (value?: string) => void
  onAreaChange: (value?: string) => void
  onTemaChange: (value?: string) => void
  onTipoChange: (value?: string) => void
  onSearchChange: (value: string) => void
  onReset: () => void
}

export const FilterBar = ({
  filters,
  areas,
  status,
  temas,
  tipos,
  onStatusChange,
  onAreaChange,
  onTemaChange,
  onTipoChange,
  onSearchChange,
  onReset,
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <div className="search-bar">
        <SearchInput value={filters.search ?? ''} onChange={onSearchChange} />
        <button className="btn-primary" type="button">
          <span>➕</span> Novo Upload
        </button>
      </div>

      <div className="filter-grid">
        <FilterSelect id="filterArea" label="Área/Fazenda" value={filters.areaId ?? ''} onChange={onAreaChange}>
          <option value="">Todas as áreas</option>
          {areas?.map((area) => (
            <option key={area.id} value={area.id}>
              {area.nome}
            </option>
          ))}
        </FilterSelect>

        <FilterSelect id="filterStatus" label="Status" value={filters.statusId ?? ''} onChange={onStatusChange}>
          <option value="">Todos os status</option>
          {status?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </FilterSelect>

        <FilterSelect id="filterTema" label="Tema Principal" value={filters.temaId ?? ''} onChange={onTemaChange}>
          <option value="">Todos os temas</option>
          {temas?.map((tema) => (
            <option key={tema.id} value={tema.id}>
              {tema.nome}
            </option>
          ))}
        </FilterSelect>

        <FilterSelect id="filterTipo" label="Tipo de Projeto" value={filters.tipoId ?? ''} onChange={onTipoChange}>
          <option value="">Todos os tipos</option>
          {tipos?.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </option>
          ))}
        </FilterSelect>
      </div>

      <button className="btn-filter-clear" type="button" onClick={onReset}>
        🗑️ Limpar Filtros
      </button>
    </div>
  )
}
