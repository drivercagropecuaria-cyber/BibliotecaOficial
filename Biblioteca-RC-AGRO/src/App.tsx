import { useState } from 'react'
import { CatalogoPage } from './pages/Catalogo'
import { Header } from './components/Layout/Header'
import { Sidebar } from './components/Layout/Sidebar'
import { Footer } from './components/Layout/Footer'
import { UploadPage } from './pages/Upload'
import { DashboardPage } from './pages/Dashboard'

const App = () => {
  const [page, setPage] = useState<'catalogo' | 'upload' | 'dashboard'>('catalogo')

  return (
    <div className="app-shell">
      <Header currentPage={page} onNavigate={setPage} />
      <div className="main-container">
        {page === 'catalogo' ? <Sidebar /> : null}
        <main className="content">
          {page === 'catalogo' && <CatalogoPage />}
          {page === 'upload' && <UploadPage />}
          {page === 'dashboard' && <DashboardPage />}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
