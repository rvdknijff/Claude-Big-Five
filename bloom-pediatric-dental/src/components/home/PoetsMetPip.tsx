import { useCallback, useMemo, useRef, useState, type CSSProperties } from 'react'
import { cn } from '@/lib/cn'
import { Sparkle } from '@/components/ui/decor'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Spot {
  id: number
  x: number
  y: number
  r: number
}

const SPOTS: Spot[] = [
  { id: 1, x: 80, y: 78, r: 11 },
  { id: 2, x: 132, y: 70, r: 10 },
  { id: 3, x: 150, y: 112, r: 11 },
  { id: 4, x: 74, y: 120, r: 9 },
  { id: 5, x: 118, y: 146, r: 10 },
  { id: 6, x: 104, y: 96, r: 8 },
]

export function PoetsMetPip() {
  const [cleaned, setCleaned] = useState<Set<number>>(new Set())
  const [brush, setBrush] = useState<{ x: number; y: number } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const reduced = usePrefersReducedMotion()

  const allClean = cleaned.size === SPOTS.length

  const toLocal = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    return {
      x: ((clientX - rect.left) / rect.width) * 220,
      y: ((clientY - rect.top) / rect.height) * 260,
    }
  }, [])

  const brushAt = useCallback(
    (x: number, y: number) => {
      setBrush({ x, y })
      setCleaned((prev) => {
        let changed = false
        const next = new Set(prev)
        for (const s of SPOTS) {
          if (!next.has(s.id) && Math.hypot(s.x - x, s.y - y) < s.r + 20) {
            next.add(s.id)
            changed = true
          }
        }
        return changed ? next : prev
      })
    },
    [],
  )

  const onPointerMove = (e: React.PointerEvent) => {
    const p = toLocal(e.clientX, e.clientY)
    if (p) brushAt(p.x, p.y)
  }

  const face = useMemo(() => cleaned.size / SPOTS.length, [cleaned])

  return (
    <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="eyebrow mb-3">Poets met Pip</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Beweeg de tandenborstel over Pip
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Pip is de tand die bij ons woont. Sleep de borstel over de vlekjes — met de muis of je
          vinger — tot Pip weer blinkt. Dit is precies hoe we het samen met je kind doen: rustig,
          plekje voor plekje.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCleaned(new Set(SPOTS.map((s) => s.id)))}
            className="rounded-full bg-sage px-5 py-2.5 font-extrabold text-paper transition-colors hover:bg-sage-deep"
          >
            Poets Pip in één keer schoon
          </button>
          <button
            type="button"
            onClick={() => {
              setCleaned(new Set())
              setBrush(null)
            }}
            className="rounded-full border-2 border-ink/20 px-5 py-2.5 font-extrabold text-ink transition-colors hover:border-ink/40"
          >
            Opnieuw
          </button>
        </div>
        <p aria-live="polite" className="mt-4 text-sm font-bold text-sage-deep">
          {allClean ? 'Pip blinkt weer! Goed gepoetst.' : `Nog ${SPOTS.length - cleaned.size} vlekjes te gaan`}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="blob-a absolute inset-x-2 inset-y-6 bg-sky-soft" aria-hidden="true" />
        <svg
          ref={svgRef}
          viewBox="0 0 220 260"
          className="relative w-full cursor-none touch-none"
          role="img"
          aria-label={
            allClean ? 'Pip de tand lacht en blinkt' : 'Pip de tand met plekjes die nog gepoetst moeten worden'
          }
          onPointerMove={onPointerMove}
          onPointerLeave={() => setBrush(null)}
        >
          {/* tooth body — friendly symmetric molar */}
          <path
            d="M110 24c30 0 54 16 58 52 3 27-6 44-11 66-4 19-6 47-15 66-6 12-21 12-26-1-6-16-8-40-12-56-2-8-4-10-6-10s-4 2-6 10c-4 16-6 40-12 56-5 13-20 13-26 1-9-19-11-47-15-66-5-22-14-39-11-66 4-36 28-52 58-52Z"
            fill="#fffdf8"
            stroke="#e7ddca"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* plaque spots */}
          {SPOTS.map((s) => {
            const done = cleaned.has(s.id)
            return (
              <circle
                key={s.id}
                cx={s.x}
                cy={s.y}
                r={s.r}
                className="transition-[opacity,transform] duration-500"
                style={{
                  transformOrigin: `${s.x}px ${s.y}px`,
                  transform: done ? 'scale(0)' : 'scale(1)',
                  opacity: done ? 0 : 1,
                }}
                fill="#cbb684"
                fillOpacity="0.8"
              />
            )
          })}
          {/* face */}
          <g opacity={0.35 + face * 0.65}>
            <circle cx="95" cy="104" r="5" fill="#38473f" />
            <circle cx="125" cy="104" r="5" fill="#38473f" />
            <path
              d={allClean ? 'M88 122c6 16 38 16 44 0' : 'M92 124c8 7 20 7 28 0'}
              fill="none"
              stroke="#38473f"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {allClean && (
              <>
                <circle cx="80" cy="118" r="5" fill="#f2a99a" opacity="0.55" />
                <circle cx="140" cy="118" r="5" fill="#f2a99a" opacity="0.55" />
              </>
            )}
          </g>

          {/* sparkles when clean */}
          {allClean &&
            [
              [40, 60],
              [180, 90],
              [170, 190],
              [46, 170],
            ].map(([x, y], i) => (
              <g key={i} className={reduced ? '' : 'float-med'} style={{ '--r': `${i * 20}deg` } as CSSProperties}>
                <path
                  d={`M${x} ${y - 8}c.5 5 2 6.5 7 7-5 .5-6.5 2-7 7-.5-5-2-6.5-7-7 5-.5 6.5-2 7-7Z`}
                  fill="#f6cf72"
                />
              </g>
            ))}

          {/* toothbrush cursor */}
          {brush && (
            <g transform={`translate(${brush.x} ${brush.y}) rotate(35)`} className="pointer-events-none">
              <rect x="-4" y="-2" width="46" height="9" rx="4.5" fill="#6fae92" />
              <rect x="-16" y="-6" width="16" height="17" rx="4" fill="#4a8a6f" />
              {Array.from({ length: 5 }).map((_, i) => (
                <rect key={i} x={-15 + i * 3} y={-11} width="1.6" height="6" rx="0.8" fill="#fffdf8" />
              ))}
            </g>
          )}
        </svg>
        <Sparkle
          className={cn(
            'absolute -right-3 -top-3 h-9 w-9 text-sun transition-opacity duration-500',
            allClean ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
    </div>
  )
}
