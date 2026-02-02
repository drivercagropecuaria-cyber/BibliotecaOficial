interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  return (
    <div className="search-input-wrapper">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder ?? 'Buscar por título, ponto, tema...'}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
