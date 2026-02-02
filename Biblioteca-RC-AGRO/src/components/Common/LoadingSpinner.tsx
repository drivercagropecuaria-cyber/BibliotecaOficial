interface LoadingSpinnerProps {
  message?: string
}

export const LoadingSpinner = ({ message = 'Carregando...' }: LoadingSpinnerProps) => {
  return (
    <div className="loading-state">
      <div className="loading-spinner-large" />
      <p>{message}</p>
    </div>
  )
}
