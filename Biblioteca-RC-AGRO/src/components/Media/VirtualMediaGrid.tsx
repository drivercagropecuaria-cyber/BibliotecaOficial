import { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { MediaCard } from './MediaCard'
import type { MediaItem } from '@/types'

interface VirtualMediaGridProps {
  items: MediaItem[]
  onItemClick: (item: MediaItem) => void
}

const ITEM_HEIGHT = 320

export const VirtualMediaGrid = ({ items, onItemClick }: VirtualMediaGridProps) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  })

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <div ref={parentRef} className="virtual-grid-container">
      <div
        className="virtual-grid-content"
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualItem) => {
          const item = items[virtualItem.index]
          if (!item) return null

          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <MediaCard item={item} onClick={() => onItemClick(item)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
