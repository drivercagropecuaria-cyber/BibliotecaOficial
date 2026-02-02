import { useState } from 'react'
import { CatalogoPage } from './pages/Catalogo'

const App = () => {
  const [page, setPage] = useState<'catalogo' | 'upload' | 'dashboard'>('catalogo')

  return (
    <div>
      <header className="header">
        <div className="logo">
          <div className="logo-icon">📚</div>
          <div className="logo-text">
            RC<span>Acervo</span>
          </div>
        </div>
        <nav className="nav-tabs">
          <button
            className={`nav-tab${page === 'catalogo' ? ' active' : ''}`}
            onClick={() => setPage('catalogo')}
            type="button"
          >
            <span>📁</span> Catálogo
          </button>
          <button
            className={`nav-tab${page === 'upload' ? ' active' : ''}`}
            onClick={() => setPage('upload')}
            type="button"
          >
            <span>⬆️</span> Upload
          </button>
          <button
            className={`nav-tab${page === 'dashboard' ? ' active' : ''}`}
            onClick={() => setPage('dashboard')}
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

      <main className="content">
        {page === 'catalogo' && <CatalogoPage />}
        {page === 'upload' && (
          <section className="page">
            <div className="page-header">
              <h1 className="page-title">Novo Upload</h1>
            </div>
            <div className="upload-zone">
              <div className="upload-zone-icon">📤</div>
              <div className="upload-zone-text">Arraste arquivos aqui</div>
              <div className="upload-zone-hint">ou clique para selecionar (máx. 100MB)</div>
            </div>
          </section>
        )}
        {page === 'dashboard' && (
          <section className="page">
            <div className="page-header">
              <h1 className="page-title">Dashboard</h1>
            </div>
            <div className="empty-state">
              <div className="empty-state-icon">📊</div>
              <div className="empty-state-title">Dashboard em Desenvolvimento</div>
              <div className="empty-state-text">
                Em breve você terá acesso a estatísticas completas e insights do acervo.
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
