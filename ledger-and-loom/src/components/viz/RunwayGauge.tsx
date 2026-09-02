import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

/** A 0–9 month scale with 'before' and 'after' runway markers and a 6-month safe threshold. */
export function RunwayGauge({ before, after }: { before: number; after: number }) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()
  const scaleMax = 9
  const p = (v: number) => `${Math.min(100, (v / scaleMax) * 100)}%`

  return (
    <div ref={ref}>
      <div className="relative h-16 border border-ink bg-page">
        {/* safe zone */}
        <span
          className="absolute inset-y-0 bg-panel"
          style={{ left: p(6), right: 0 }}
          aria-hidden="true"
        />
        {/* before */}
        <span
          className="absolute inset-y-0 left-0 border-r border-ink-3 bg-ink-3/20 transition-[width] duration-700"
          style={{ width: inView ? p(before) : '0%' }}
        />
        {/* after */}
        <span
          className="absolute inset-y-0 left-0 border-r-2 border-accent bg-accent/25 transition-[width] duration-[900ms]"
          style={{ width: inView ? p(after) : '0%', transitionDelay: reduced ? '0s' : '0.2s' }}
        />
        {/* month ticks */}
        {Array.from({ length: scaleMax + 1 }, (_, i) => (
          <span
            key={i}
            className={cn(
              'absolute bottom-1 -translate-x-1/2 font-mono text-[9px] text-ink-3',
              i === 6 && 'text-ink',
            )}
            style={{ left: p(i) }}
          >
            {i}
          </span>
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[0.7rem] text-ink-3">
        <span>
          Before: <span className="text-ink">{before} months</span>
        </span>
        <span>
          After: <span className="text-accent">{after} months</span>
        </span>
        <span>6 months = comfortable</span>
      </div>
    </div>
  )
}
