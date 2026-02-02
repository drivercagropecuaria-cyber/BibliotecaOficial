import type { ReactNode } from 'react'

interface FilterSelectProps {
  id: string
  label: string
  value?: string
  onChange: (value: string) => void
  children: ReactNode
}

export const FilterSelect = ({ id, label, value = '', onChange, children }: FilterSelectProps) => {
  return (
    <div className="filter-group">
      <label className="filter-label" htmlFor={id}>
        {label}
      </label>
      <select
        className="filter-select"
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {children}
      </select>
    </div>
  )
}
