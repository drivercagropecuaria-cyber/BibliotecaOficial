import { useAreas, useStatus, useTemas, useTipos } from '@/hooks/useLookups'
import { useCatalogoFilters } from '@/hooks/useCatalogoFilters'
import { FilterSelect } from '../Filters/FilterSelect'

export const Sidebar = () => {
  const { filters, setAreaId, setStatusId, setTemaId, setTipoId, resetFilters } = useCatalogoFilters()
  const { data: areas } = useAreas()
  const { data: status } = useStatus()
  const { data: temas } = useTemas()
  const { data: tipos } = useTipos()

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Filtros Rápidos</div>
        <FilterSelect id="filterArea" label="Área/Fazenda" value={filters.areaId ?? ''} onChange={setAreaId}>
          <option value="">Todas as áreas</option>
          {areas?.map((area) => (
            <option key={area.id} value={area.id}>
              {area.nome}
            </option>
          ))}
        </FilterSelect>
        <FilterSelect id="filterStatus" label="Status" value={filters.statusId ?? ''} onChange={setStatusId}>
          <option value="">Todos os status</option>
          {status?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </FilterSelect>
        <FilterSelect id="filterTema" label="Tema Principal" value={filters.temaId ?? ''} onChange={setTemaId}>
          <option value="">Todos os temas</option>
          {temas?.map((tema) => (
            <option key={tema.id} value={tema.id}>
              {tema.nome}
            </option>
          ))}
        </FilterSelect>
        <FilterSelect id="filterTipo" label="Tipo de Projeto" value={filters.tipoId ?? ''} onChange={setTipoId}>
          <option value="">Todos os tipos</option>
          {tipos?.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </option>
          ))}
        </FilterSelect>
        <button className="btn-filter-clear" onClick={resetFilters} type="button">
          🗑️ Limpar Filtros
        </button>
      </div>
    </aside>
  )
}
