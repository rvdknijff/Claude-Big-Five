import { useCallback, useId, useRef, useState } from 'react'
import type { MediaAsset } from '@/data/media'
import { cn } from '@/lib/cn'

interface BeforeAfterSliderProps {
  asset: MediaAsset
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

/**
 * A single photograph shown under two grades: a flat "stock" treatment on the
 * left and Blackline's contrast grade on the right. Drag the divider, or focus
 * it and use the arrow keys.
 */
export function BeforeAfterSlider({
  asset,
  beforeLabel = 'Stock',
  afterLabel = 'Blackline Stage 2',
  className,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(52)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const labelId = useId()

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    setFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    setFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      setPos((p) => Math.max(0, p - step))
      e.preventDefault()
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      setPos((p) => Math.min(100, p + step))
      e.preventDefault()
    } else if (e.key === 'Home') {
      setPos(0)
    } else if (e.key === 'End') {
      setPos(100)
    }
  }

  return (
    <figure className={cn('m-0', className)}>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden bg-surface-2"
      >
        {/* base layer — the Blackline grade */}
        <img
          src={asset.src}
          width={asset.width}
          height={asset.height}
          alt={asset.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover [filter:contrast(1.12)_saturate(1.05)_brightness(1.02)]"
        />
        <span className="pointer-events-none absolute bottom-4 right-4 z-10 bg-signal px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-base">
          {afterLabel}
        </span>

        {/* overlay layer — flat "stock" grade, clipped from the right */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={asset.src}
            width={asset.width}
            height={asset.height}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover [filter:grayscale(0.75)_brightness(0.62)_contrast(0.95)]"
          />
          <span className="pointer-events-none absolute bottom-4 left-4 border border-fg-muted/50 px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-fg">
            {beforeLabel}
          </span>
        </div>

        {/* divider + handle */}
        <div
          className="absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-fg"
          style={{ left: `${pos}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label="Reveal the Blackline grade"
            aria-labelledby={labelId}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% stock`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-fg bg-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-bright"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-fg" aria-hidden="true" fill="none">
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
      <figcaption id={labelId} className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-dim">
        Drag or use arrow keys — {beforeLabel} ↔ {afterLabel}
      </figcaption>
    </figure>
  )
}
