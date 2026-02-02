import { memo, useEffect, useRef, useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: number
}

export const LazyImage = memo(({ src, alt, className = '', aspectRatio = 16 / 9 }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )

    const node = containerRef.current
    if (node) observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`lazy-image-container ${className}`} style={{ aspectRatio }}>
      {!isLoaded && !hasError && <div className="skeleton-pulse" />}
      {hasError ? (
        <div className="error-placeholder">Erro ao carregar</div>
      ) : (
        isInView && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{ opacity: isLoaded ? 1 : 0 }}
          />
        )
      )}
    </div>
  )
})

LazyImage.displayName = 'LazyImage'
