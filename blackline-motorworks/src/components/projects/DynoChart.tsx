import { useId, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { DynoPoint } from '@/data/projects'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface DynoChartProps {
  data: readonly DynoPoint[]
  className?: string
}

const W = 640
const H = 380
const PAD = { top: 24, right: 52, bottom: 44, left: 52 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom

export function DynoChart({ data, className }: DynoChartProps) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef, { once: true, margin: '0px 0px -15% 0px' })
  const reduced = usePrefersReducedMotion()
  const titleId = useId()

  const { rpmMin, rpmMax, powMax, trqMax, x, yP, yT } = useMemo(() => {
    const rpmMin = data[0].rpm
    const rpmMax = data[data.length - 1].rpm
    const powMax = Math.ceil((Math.max(...data.map((d) => d.buildPower)) * 1.08) / 50) * 50
    const trqMax = Math.ceil((Math.max(...data.map((d) => d.buildTorque)) * 1.08) / 50) * 50
    const x = (rpm: number) => PAD.left + ((rpm - rpmMin) / (rpmMax - rpmMin)) * plotW
    const yP = (v: number) => PAD.top + plotH - (v / powMax) * plotH
    const yT = (v: number) => PAD.top + plotH - (v / trqMax) * plotH
    return { rpmMin, rpmMax, powMax, trqMax, x, yP, yT }
  }, [data])

  const line = (key: keyof DynoPoint, y: (v: number) => number) =>
    data.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(d.rpm).toFixed(1)},${y(d[key] as number).toFixed(1)}`).join(' ')

  const paths = {
    stockPower: line('stockPower', yP),
    buildPower: line('buildPower', yP),
    stockTorque: line('stockTorque', yT),
    buildTorque: line('buildTorque', yT),
  }

  const rpmTicks = data.filter((_, i) => i % 2 === 0).map((d) => d.rpm)
  const active = hoverIdx != null ? data[hoverIdx] : null

  const handleMove = (clientX: number, target: SVGSVGElement) => {
    const rect = target.getBoundingClientRect()
    const px = ((clientX - rect.left) / rect.width) * W
    const rpm = rpmMin + ((px - PAD.left) / plotW) * (rpmMax - rpmMin)
    let nearest = 0
    let best = Infinity
    data.forEach((d, i) => {
      const dist = Math.abs(d.rpm - rpm)
      if (dist < best) {
        best = dist
        nearest = i
      }
    })
    setHoverIdx(nearest)
  }

  const drawTransition = reduced
    ? { duration: 0 }
    : { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }
  const initialLen = reduced ? 1 : 0

  return (
    <div ref={wrapRef} className={className}>
      <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-fg-dim">
        <Legend swatch="bg-signal" label="Power · Blackline" />
        <Legend swatch="bg-fg-muted" label="Power · stock" />
        <Legend swatch="bg-signal/40" label="Torque · Blackline" dashed />
        <Legend swatch="bg-fg-dim" label="Torque · stock" dashed />
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full touch-none"
        role="img"
        aria-labelledby={titleId}
        onPointerMove={(e) => handleMove(e.clientX, e.currentTarget)}
        onPointerLeave={() => setHoverIdx(null)}
      >
        <title id={titleId}>
          Power and torque against engine speed: stock versus Blackline build
        </title>

        {/* horizontal grid + left (hp) axis */}
        {Array.from({ length: 5 }, (_, i) => {
          const v = (powMax / 4) * i
          return (
            <g key={i}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={yP(v)}
                y2={yP(v)}
                stroke="var(--color-line)"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 10}
                y={yP(v) + 3}
                textAnchor="end"
                className="fill-[var(--color-fg-dim)] font-mono text-[9px]"
              >
                {v}
              </text>
            </g>
          )
        })}

        {/* right (Nm) axis labels */}
        {Array.from({ length: 5 }, (_, i) => {
          const v = (trqMax / 4) * i
          return (
            <text
              key={i}
              x={W - PAD.right + 10}
              y={yT(v) + 3}
              textAnchor="start"
              className="fill-[var(--color-fg-dim)] font-mono text-[9px]"
            >
              {v}
            </text>
          )
        })}

        {/* rpm ticks */}
        {rpmTicks.map((rpm) => (
          <text
            key={rpm}
            x={x(rpm)}
            y={H - PAD.bottom + 18}
            textAnchor="middle"
            className="fill-[var(--color-fg-dim)] font-mono text-[9px]"
          >
            {(rpm / 1000).toFixed(1)}k
          </text>
        ))}
        <text
          x={PAD.left}
          y={H - 6}
          className="fill-[var(--color-fg-dim)] font-mono text-[9px] uppercase tracking-[0.2em]"
        >
          engine speed · rpm
        </text>

        {/* curves */}
        <motion.path
          d={paths.stockTorque}
          fill="none"
          stroke="var(--color-fg-dim)"
          strokeWidth={1.5}
          strokeDasharray="3 3"
          initial={{ pathLength: initialLen }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={drawTransition}
        />
        <motion.path
          d={paths.buildTorque}
          fill="none"
          stroke="color-mix(in oklab, var(--color-signal) 45%, transparent)"
          strokeWidth={1.75}
          strokeDasharray="4 3"
          initial={{ pathLength: initialLen }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={drawTransition}
        />
        <motion.path
          d={paths.stockPower}
          fill="none"
          stroke="var(--color-fg-muted)"
          strokeWidth={2}
          initial={{ pathLength: initialLen }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={drawTransition}
        />
        <motion.path
          d={paths.buildPower}
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth={2.5}
          initial={{ pathLength: initialLen }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={drawTransition}
        />

        {/* hover guide */}
        {active && (
          <g>
            <line
              x1={x(active.rpm)}
              x2={x(active.rpm)}
              y1={PAD.top}
              y2={PAD.top + plotH}
              stroke="var(--color-fg)"
              strokeWidth={1}
              strokeDasharray="2 2"
            />
            <circle cx={x(active.rpm)} cy={yP(active.buildPower)} r={3.5} className="fill-[var(--color-signal)]" />
            <circle cx={x(active.rpm)} cy={yP(active.stockPower)} r={3} className="fill-[var(--color-fg-muted)]" />
          </g>
        )}
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs sm:grid-cols-4" aria-live="polite">
        <Readout label="RPM" value={active ? active.rpm.toLocaleString() : '—'} />
        <Readout label="hp · Blackline" value={active ? `${active.buildPower}` : '—'} accent />
        <Readout label="hp · stock" value={active ? `${active.stockPower}` : '—'} />
        <Readout
          label="Δ hp"
          value={active ? `+${active.buildPower - active.stockPower}` : '—'}
          accent
        />
      </div>
    </div>
  )
}

function Legend({ swatch, label, dashed }: { swatch: string; label: string; dashed?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-block h-[2px] w-5 ${swatch} ${dashed ? 'opacity-80' : ''}`} />
      {label}
    </span>
  )
}

function Readout({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="border-t border-line pt-2">
      <div className="text-[0.6rem] uppercase tracking-[0.14em] text-fg-dim">{label}</div>
      <div className={accent ? 'text-signal-bright' : 'text-fg'}>{value}</div>
    </div>
  )
}
