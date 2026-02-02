interface HeaderProps {
  currentPage: 'catalogo' | 'upload' | 'dashboard'
  onNavigate: (page: 'catalogo' | 'upload' | 'dashboard') => void
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">📚</div>
        <div className="logo-text">
          RC<span>Acervo</span>
        </div>
      </div>
      <nav className="nav-tabs">
        <button
          className={`nav-tab${currentPage === 'catalogo' ? ' active' : ''}`}
          onClick={() => onNavigate('catalogo')}
          type="button"
        >
          <span>📁</span> Catálogo
        </button>
        <button
          className={`nav-tab${currentPage === 'upload' ? ' active' : ''}`}
          onClick={() => onNavigate('upload')}
          type="button"
        >
          <span>⬆️</span> Upload
        </button>
        <button
          className={`nav-tab${currentPage === 'dashboard' ? ' active' : ''}`}
          onClick={() => onNavigate('dashboard')}
          type="button"
        >
          <span>📊</span> Dashboard
        </button>
      </nav>
      <div className="header-actions">
        <button className="btn-icon" title="Notificações" type="button">
          🔔
        </button>
        <button className="btn-icon" title="Configurações" type="button">
          ⚙️
        </button>
        <button className="btn-icon" title="Perfil" type="button">
          👤
        </button>
      </div>
    </header>
  )
}
