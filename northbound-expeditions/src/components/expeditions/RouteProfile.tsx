import { useId, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Expedition } from '@/data/expeditions'
import { profile } from '@/data/expeditions'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

const W = 720
const H = 220
const PAD = { top: 16, right: 12, bottom: 22, left: 12 }

export function RouteProfile({ exp }: { exp: Expedition }) {
  const [active, setActive] = useState<number | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef, { once: true, margin: '0px 0px -20% 0px' })
  const reduced = usePrefersReducedMotion()
  const titleId = useId()

  const { path, area, dayMarks, maxH } = useMemo(() => {
    const pts = profile(exp)
    const maxH = Math.max(...pts) * 1.08
    const totalKm = exp.itinerary.reduce((s, d) => s + d.distanceKm, 0)
    const innerW = W - PAD.left - PAD.right
    const innerH = H - PAD.top - PAD.bottom
    const x = (i: number) => PAD.left + (i / (pts.length - 1)) * innerW
    const y = (h: number) => PAD.top + innerH - (h / maxH) * innerH

    const path = pts.map((h, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(h).toFixed(1)}`).join(' ')
    const area = `${path} L${x(pts.length - 1).toFixed(1)},${(H - PAD.bottom).toFixed(1)} L${PAD.left},${(H - PAD.bottom).toFixed(1)} Z`

    const cumKm = exp.itinerary.map((_, i) =>
      exp.itinerary.slice(0, i + 1).reduce((s, d) => s + d.distanceKm, 0),
    )
    const dayMarks = exp.itinerary.map((d, i) => {
      const frac = cumKm[i] / totalKm
      const idx = Math.round(frac * (pts.length - 1))
      return { day: d.day, px: x(idx), py: y(pts[idx]) }
    })
    return { path, area, dayMarks, maxH }
  }, [exp])

  return (
    <div ref={wrapRef}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-labelledby={titleId}
      >
        <title id={titleId}>
          Elevation profile for the {exp.name}, {exp.distanceKm} km with {exp.ascentM} m of ascent
        </title>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={PAD.left}
            x2={W - PAD.right}
            y1={PAD.top + (H - PAD.top - PAD.bottom) * (1 - f)}
            y2={PAD.top + (H - PAD.top - PAD.bottom) * (1 - f)}
            stroke="var(--color-ink)"
            strokeOpacity="0.08"
          />
        ))}
        <motion.path
          d={area}
          fill="var(--color-moss)"
          fillOpacity="0.18"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.6 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="var(--color-forest)"
          strokeWidth={2}
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: reduced ? 0 : 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        {dayMarks.map((m) => {
          const on = active === m.day
          return (
            <g key={m.day}>
              <line
                x1={m.px}
                x2={m.px}
                y1={m.py}
                y2={H - PAD.bottom}
                stroke="var(--color-ink)"
                strokeOpacity={on ? 0.35 : 0.12}
                strokeDasharray="2 2"
              />
              <circle
                cx={m.px}
                cy={m.py}
                r={on ? 5 : 3.5}
                fill={on ? 'var(--color-signal)' : 'var(--color-forest)'}
              />
              <text
                x={m.px}
                y={H - PAD.bottom + 14}
                textAnchor="middle"
                className={cn('font-body text-[9px]', on ? 'fill-[var(--color-signal)]' : 'fill-[var(--color-ink-faint)]')}
              >
                {m.day}
              </text>
            </g>
          )
        })}
        <text x={PAD.left} y={PAD.top + 4} className="fill-[var(--color-ink-faint)] font-body text-[9px]">
          {Math.round(maxH)} m
        </text>
      </svg>

      <ol className="rule mt-6 border-ink/15">
        {exp.itinerary.map((d) => (
          <li
            key={d.day}
            onMouseEnter={() => setActive(d.day)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              'grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-ink/12 py-4 transition-colors md:grid-cols-[3rem_1fr_auto]',
              active === d.day && 'bg-paper-dim/60',
            )}
          >
            <span className="font-display text-lg text-ink-faint">{String(d.day).padStart(2, '0')}</span>
            <div>
              <h3 className="font-display text-lg text-ink">{d.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d.note}</p>
            </div>
            <div className="col-span-2 mt-3 flex gap-x-6 gap-y-1 text-xs text-ink-faint md:col-span-1 md:mt-0 md:flex-col md:items-end">
              <span className="font-medium text-ink-soft">{d.distanceKm} km</span>
              <span>↑ {d.ascentM} m</span>
              <span>{d.sleep}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
