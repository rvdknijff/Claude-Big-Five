import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { euro } from '@/lib/money'

interface Project {
  name: string
  revenue: number
  before: number
  after: number
}

/** Per-project margin, before vs after, as paired horizontal bars. Handles negatives. */
export function MarginBars({ projects }: { projects: readonly Project[] }) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()

  const maxAbs = Math.max(...projects.flatMap((p) => [Math.abs(p.before), Math.abs(p.after)]), 20)
  // scale: -maxAbs..maxAbs mapped to 0..100% with 50% = zero
  const toLeft = (v: number) => 50 + (Math.min(0, v) / maxAbs) * 50
  const toWidth = (v: number) => (Math.abs(v) / maxAbs) * 50

  return (
    <div ref={ref} className="space-y-5">
      {projects.map((p, i) => (
        <div key={p.name}>
          <div className="flex items-baseline justify-between font-mono text-[0.7rem]">
            <span className="text-ink">{p.name}</span>
            <span className="text-ink-3">{euro(p.revenue)}</span>
          </div>
          <div className="relative mt-2 h-9 border border-line bg-page">
            {/* zero line */}
            <span className="absolute inset-y-0 left-1/2 w-px bg-line-strong" />
            {/* before */}
            <span
              className="absolute top-1 h-3 bg-ink-3 transition-[width,left] duration-700"
              style={{
                left: `${toLeft(p.before)}%`,
                width: `${inView ? toWidth(p.before) : 0}%`,
                transitionDelay: reduced ? '0s' : `${i * 0.05}s`,
              }}
            />
            {/* after */}
            <span
              className="absolute bottom-1 h-3 bg-accent transition-[width,left] duration-700"
              style={{
                left: `${toLeft(p.after)}%`,
                width: `${inView ? toWidth(p.after) : 0}%`,
                transitionDelay: reduced ? '0s' : `${0.15 + i * 0.05}s`,
              }}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[0.7rem] text-ink">
              {p.before}% → {p.after}%
            </span>
          </div>
        </div>
      ))}
      <div className="flex gap-5 pt-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-3 bg-ink-3" /> Before
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-3 bg-accent" /> After
        </span>
      </div>
    </div>
  )
}
