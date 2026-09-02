import { useEffect, useRef, useState } from 'react'
import type { StoryBeat } from '@/data/expeditions'
import { cn } from '@/lib/cn'

interface ScrollStoryProps {
  beats: readonly StoryBeat[]
  /** which side the sticky image sits on at desktop */
  imageSide?: 'left' | 'right'
}

export function ScrollStory({ beats, imageSide = 'left' }: ScrollStoryProps) {
  const [active, setActive] = useState(0)
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.beat)
            setActive(idx)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    for (const el of beatRefs.current) if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [beats.length])

  return (
    <div
      className={cn(
        'grid gap-x-12 md:grid-cols-2',
        imageSide === 'right' && 'md:[&>*:first-child]:order-2',
      )}
    >
      {/* sticky image stack */}
      <div className="hidden md:block">
        <div className="sticky top-0 flex h-svh items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            {beats.map((b, i) => (
              <img
                key={b.marker}
                src={b.image.src}
                width={b.image.width}
                height={b.image.height}
                alt={b.image.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                  i === active ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}
            <span className="absolute bottom-4 left-4 bg-bark px-2.5 py-1 font-body text-xs font-medium tracking-widest text-paper">
              {beats[active].marker}
            </span>
          </div>
        </div>
      </div>

      {/* text beats */}
      <div>
        {beats.map((b, i) => (
          <div
            key={b.marker}
            ref={(el) => {
              beatRefs.current[i] = el
            }}
            data-beat={i}
            className="flex min-h-svh flex-col justify-center py-16 md:py-0"
          >
            <div className="md:hidden">
              <img
                src={b.image.src}
                width={b.image.width}
                height={b.image.height}
                alt={b.image.alt}
                loading="lazy"
                className="mb-6 aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="label !text-signal">{b.marker}</p>
            <h3 className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight">
              {b.headline}
            </h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{b.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
