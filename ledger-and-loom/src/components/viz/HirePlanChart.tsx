import { useId } from 'react'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { euro } from '@/lib/money'

interface HirePlanChartProps {
  months: readonly string[]
  revenue: readonly number[]
  costsBaseline: readonly number[]
  costsWithHire: readonly number[]
  hireMonthIndex: number
}

const W = 640
const H = 300
const PAD = { t: 20, r: 16, b: 28, l: 56 }

/** Revenue against costs with and without the new hire; the gap is the buffer. */
export function HirePlanChart({
  months,
  revenue,
  costsBaseline,
  costsWithHire,
  hireMonthIndex,
}: HirePlanChartProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()
  const titleId = useId()

  const max = Math.max(...revenue, ...costsWithHire) * 1.1
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  const x = (i: number) => PAD.l + (i / (months.length - 1)) * innerW
  const y = (v: number) => PAD.t + innerH - (v / max) * innerH
  const line = (s: readonly number[]) =>
    s.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')

  // shaded buffer = area between revenue and costsWithHire, from the hire month on
  const idxs = months.map((_, i) => i).slice(hireMonthIndex)
  const bufferArea =
    `M ${idxs.map((i) => `${x(i)},${y(revenue[i])}`).join(' L ')} ` +
    `L ${[...idxs].reverse().map((i) => `${x(i)},${y(costsWithHire[i])}`).join(' L ')} Z`

  const drawClass = reduced ? '' : 'transition-[stroke-dashoffset] duration-[1300ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]'

  return (
    <div ref={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-labelledby={titleId}>
        <title id={titleId}>Twelve-month revenue against costs, with and without the new hire</title>

        {[0, max / 2, max].map((v, i) => (
          <g key={i}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="var(--color-line)" />
            <text x={PAD.l - 8} y={y(v) + 3} textAnchor="end" className="fill-[var(--color-ink-3)] font-mono text-[9px]">
              {euro(v).replace('€', '').trim()}
            </text>
          </g>
        ))}
        {months.map((m, i) => (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" className="fill-[var(--color-ink-3)] font-mono text-[9px]">
            {m}
          </text>
        ))}

        {/* buffer shading */}
        <path d={bufferArea} fill="var(--color-accent)" fillOpacity={inView ? 0.12 : 0} className="transition-opacity duration-700" style={{ transitionDelay: '0.6s' }} />

        {/* hire marker */}
        <line x1={x(hireMonthIndex)} x2={x(hireMonthIndex)} y1={PAD.t} y2={PAD.t + innerH} stroke="var(--color-ink)" strokeDasharray="3 3" />
        <text x={x(hireMonthIndex) + 4} y={PAD.t + 10} className="fill-[var(--color-ink)] font-mono text-[9px]">
          hire
        </text>

        <path d={line(costsBaseline)} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" strokeDasharray="1" pathLength={1} className={drawClass} style={{ strokeDashoffset: inView ? 0 : 1 }} />
        <path d={line(costsWithHire)} fill="none" stroke="var(--color-ink-2)" strokeWidth="2" strokeDasharray="1" pathLength={1} className={drawClass} style={{ strokeDashoffset: inView ? 0 : 1, transitionDelay: reduced ? '0s' : '0.15s' }} />
        <path d={line(revenue)} fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeDasharray="1" pathLength={1} className={drawClass} style={{ strokeDashoffset: inView ? 0 : 1, transitionDelay: reduced ? '0s' : '0.3s' }} />
      </svg>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-3">
        <span className="inline-flex items-center gap-1.5"><span className="inline-block h-[2px] w-4 bg-accent" /> Revenue</span>
        <span className="inline-flex items-center gap-1.5"><span className="inline-block h-[2px] w-4 bg-ink-2" /> Costs with hire</span>
        <span className="inline-flex items-center gap-1.5"><span className="inline-block h-[2px] w-4 bg-line-strong" /> Costs before</span>
      </div>
    </div>
  )
}
