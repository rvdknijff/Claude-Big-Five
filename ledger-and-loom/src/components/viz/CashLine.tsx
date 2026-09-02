import { useId } from 'react'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { euro } from '@/lib/money'

interface CashLineProps {
  months: readonly string[]
  before: readonly number[]
  after: readonly number[]
}

const W = 640
const H = 300
const PAD = { t: 24, r: 16, b: 28, l: 56 }

/** Two cash-balance series over a year: the "before" (volatile) and "after" (climbing). */
export function CashLine({ months, before, after }: CashLineProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()
  const titleId = useId()

  const all = [...before, ...after]
  const min = Math.min(0, ...all)
  const max = Math.max(...all)
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  const x = (i: number) => PAD.l + (i / (months.length - 1)) * innerW
  const y = (v: number) => PAD.t + innerH - ((v - min) / (max - min)) * innerH

  const toPath = (s: readonly number[]) =>
    s.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')

  const zeroY = y(0)
  const drawClass = reduced ? '' : 'transition-[stroke-dashoffset] duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]'

  return (
    <div ref={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-labelledby={titleId}>
        <title id={titleId}>Cash balance over twelve months, before and after</title>

        {/* y ticks */}
        {[min, (min + max) / 2, max].map((v, i) => (
          <g key={i}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="var(--color-line)" />
            <text x={PAD.l - 8} y={y(v) + 3} textAnchor="end" className="fill-[var(--color-ink-3)] font-mono text-[9px]">
              {euro(v).replace('€', '').trim()}
            </text>
          </g>
        ))}
        {min < 0 && (
          <line x1={PAD.l} x2={W - PAD.r} y1={zeroY} y2={zeroY} stroke="var(--color-ink)" strokeWidth="1" />
        )}

        {/* month labels */}
        {months.map((m, i) => (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" className="fill-[var(--color-ink-3)] font-mono text-[9px]">
            {m}
          </text>
        ))}

        <path
          d={toPath(before)}
          fill="none"
          stroke="var(--color-ink-3)"
          strokeWidth="1.5"
          strokeDasharray="1"
          pathLength={1}
          className={drawClass}
          style={{ strokeDashoffset: inView ? 0 : 1 }}
        />
        <path
          d={toPath(after)}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeDasharray="1"
          pathLength={1}
          className={drawClass}
          style={{ strokeDashoffset: inView ? 0 : 1, transitionDelay: reduced ? '0s' : '0.25s' }}
        />
      </svg>
      <div className="mt-2 flex gap-5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-[2px] w-4 bg-ink-3" /> Before
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-[2px] w-4 bg-accent" /> After
        </span>
      </div>
    </div>
  )
}
