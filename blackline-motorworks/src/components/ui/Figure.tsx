import type { MediaAsset } from '@/data/media'
import { cn } from '@/lib/cn'

interface FigureProps {
  asset: MediaAsset
  /** override the generated alt text when the image is decorative or contextual */
  alt?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
}

/**
 * Image wrapper that always ships width/height (no layout shift), lazy-loads by
 * default and crops with object-cover inside whatever box the parent sets.
 */
export function Figure({
  asset,
  alt,
  className,
  imgClassName,
  priority = false,
  sizes,
}: FigureProps) {
  return (
    <div className={cn('relative overflow-hidden bg-surface-2', className)}>
      <img
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt={alt ?? asset.alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'auto' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    </div>
  )
}
