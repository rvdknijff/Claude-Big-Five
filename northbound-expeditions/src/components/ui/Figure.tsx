import type { MediaAsset } from '@/data/media'
import { cn } from '@/lib/cn'

interface FigureProps {
  asset: MediaAsset
  alt?: string
  caption?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
}

/** Full-bleed-friendly image. Ships width/height; lazy by default. */
export function Figure({
  asset,
  alt,
  caption,
  className,
  imgClassName,
  priority = false,
  sizes,
}: FigureProps) {
  return (
    <figure className={cn('m-0', className)}>
      <div className="relative overflow-hidden bg-paper-dim">
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
      {caption && (
        <figcaption className="mt-2 font-body text-xs text-ink-faint">{caption}</figcaption>
      )}
    </figure>
  )
}
