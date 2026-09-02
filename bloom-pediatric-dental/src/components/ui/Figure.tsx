import type { MediaAsset } from '@/data/media'
import { cn } from '@/lib/cn'

interface FigureProps {
  asset: MediaAsset
  alt?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  /** shape of the frame */
  shape?: 'rounded' | 'blob-a' | 'blob-b' | 'pill'
  sizes?: string
}

const shapes = {
  rounded: 'rounded-[2rem]',
  'blob-a': 'blob-a',
  'blob-b': 'blob-b',
  pill: 'rounded-[9rem]',
}

export function Figure({
  asset,
  alt,
  className,
  imgClassName,
  priority = false,
  shape = 'rounded',
  sizes,
}: FigureProps) {
  return (
    <div className={cn('relative overflow-hidden bg-sage-soft', shapes[shape], className)}>
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
