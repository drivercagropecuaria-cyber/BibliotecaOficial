export const UploadPage = () => {
  return (
    <section className="page">
      <div className="page-header">
        <h1 className="page-title">Novo Upload</h1>
      </div>
      <div className="upload-zone">
        <div className="upload-zone-icon">📤</div>
        <div className="upload-zone-text">Arraste arquivos aqui</div>
        <div className="upload-zone-hint">ou clique para selecionar (máx. 100MB)</div>
      </div>
      <div className="form-section">
        <div className="form-section-title">Metadados (TODO)</div>
        <p className="form-hint">TODO: formulário completo com taxonomia e geração de nome canônico.</p>
      </div>
    </section>
  )
}
