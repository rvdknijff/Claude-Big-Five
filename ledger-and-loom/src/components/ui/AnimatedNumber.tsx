import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface AnimatedNumberProps {
  value: number
  /** format the eased value for display */
  format: (n: number) => string
  className?: string
  durationMs?: number
}

/** Eases the displayed number toward `value` whenever it changes. */
export function AnimatedNumber({ value, format, className, durationMs = 450 }: AnimatedNumberProps) {
  const [eased, setEased] = useState(value)
  const fromRef = useRef(value)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const from = fromRef.current
    const delta = value - from
    if (delta === 0) return
    let raf = 0
    let start = 0
    const tick = (now: number) => {
      if (!start) start = now
      const t = Math.min(1, (now - start) / durationMs)
      const k = 1 - Math.pow(1 - t, 3)
      setEased(from + delta * k)
      if (t < 1) raf = requestAnimationFrame(tick)
      else fromRef.current = value
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, durationMs, reduced])

  return <span className={className}>{format(reduced ? value : eased)}</span>
}
