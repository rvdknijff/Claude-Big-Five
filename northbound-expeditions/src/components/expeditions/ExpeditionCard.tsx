import { Link } from 'react-router-dom'
import type { Expedition } from '@/data/expeditions'
import { cn } from '@/lib/cn'
import { DifficultyMeter } from '@/components/ui/DifficultyMeter'

export function ExpeditionCard({
  exp,
  className,
  size = 'md',
}: {
  exp: Expedition
  className?: string
  size?: 'md' | 'lg'
}) {
  return (
    <article className={cn('group', className)}>
      <Link to={`/expeditions/${exp.slug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={exp.cardImage.src}
            width={exp.cardImage.width}
            height={exp.cardImage.height}
            alt={exp.cardImage.alt}
            loading="lazy"
            className={cn(
              'w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]',
              size === 'lg' ? 'aspect-[16/10]' : 'aspect-[4/3]',
            )}
          />
          <div className="absolute left-3 top-3 flex items-center gap-2 bg-paper/90 px-2.5 py-1 text-xs font-medium text-ink backdrop-blur-sm">
            {exp.country}
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3
              className={cn(
                'font-display text-ink',
                size === 'lg' ? 'text-2xl md:text-[1.9rem]' : 'text-xl',
              )}
            >
              {exp.name}
            </h3>
            <p className="mt-1 text-sm text-ink-faint">
              {exp.days} days · {exp.month} · {exp.distanceKm} km
            </p>
          </div>
          <span className="shrink-0 font-body text-xs text-ink-faint">from €{exp.priceFrom}</span>
        </div>
        <DifficultyMeter level={exp.difficulty} className="mt-3" />
      </Link>
    </article>
  )
}
