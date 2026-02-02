import { useEffect, useRef, useState } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { MediaCard } from './MediaCard'
import type { MediaItem } from '@/types'

interface VirtualMediaGridProps {
  items: MediaItem[]
  onItemClick: (item: MediaItem) => void
}

const ITEM_HEIGHT = 320
const ITEM_MIN_WIDTH = 280

export const VirtualMediaGrid = ({ items, onItemClick }: VirtualMediaGridProps) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    const node = parentRef.current
    if (!node) return

    const updateColumns = () => {
      const width = node.clientWidth
      const nextColumns = Math.max(1, Math.floor(width / ITEM_MIN_WIDTH))
      setColumns(nextColumns)
    }

    updateColumns()

    const observer = new ResizeObserver(updateColumns)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const rowCount = Math.ceil(items.length / columns)

  const virtualizer = useVirtualizer({
    count: rowCount,
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
          const startIndex = virtualItem.index * columns
          const rowItems = items.slice(startIndex, startIndex + columns)
          if (rowItems.length === 0) return null

          return (
            <div
              key={`row-${virtualItem.index}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <div
                className="media-grid"
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
              >
                {rowItems.map((item) => (
                  <MediaCard key={item.id} item={item} onClick={() => onItemClick(item)} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
