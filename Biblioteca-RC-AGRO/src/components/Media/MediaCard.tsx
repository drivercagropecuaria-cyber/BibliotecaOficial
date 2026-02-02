import { memo } from 'react'
import { LazyImage } from '../Common/LazyImage'
import type { MediaItem } from '@/types'

interface MediaCardProps {
  item: MediaItem
  onClick: () => void
}

const STATUS_BADGE_CLASSES: Record<string, string> = {
  ENT: 'ent',
  TRI: 'tri',
  CAT: 'cat',
  SEL: 'sel',
  PRO: 'pro',
  APR: 'apr',
  APO: 'apo',
  PUB: 'pub',
  ARQ: 'arq',
}

const statusLabel = (status?: string | null) => status ?? 'ENT'

export const MediaCard = memo(({ item, onClick }: MediaCardProps) => {
  const imageUrl = item.thumbnailUrl || item.arquivo?.urlThumbnail || item.arquivo?.url || '/placeholder.jpg'
  const isVideo = item.mimeType?.startsWith('video') || item.arquivo?.tipo === 'video'

  return (
    <article className="media-card" onClick={onClick}>
      <div className="media-card-image">
        <LazyImage src={imageUrl} alt={item.titulo} />
        {isVideo ? (
          <div className="video-badge">
            <div className="video-badge-icon">▶</div>
          </div>
        ) : null}
        <span className={`status-badge ${STATUS_BADGE_CLASSES[item.status] ?? 'ent'}`}>
          {statusLabel(item.status)}
        </span>
      </div>
      <div className="media-card-info">
        <h3 className="media-card-title" title={item.titulo}>
          {item.titulo}
        </h3>
        <div className="media-card-meta">
          <span>{item.ponto}</span>
          <span className="media-card-meta-dot" />
          <span>{item.dataCaptacao}</span>
        </div>
      </div>
    </article>
  )
})

MediaCard.displayName = 'MediaCard'
