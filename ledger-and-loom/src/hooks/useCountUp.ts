import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Options {
  readonly to: number
  readonly durationMs?: number
  readonly decimals?: number
}

/**
 * Counts from 0 to `to` once the returned ref enters the viewport.
 * Returns the current display value (already rounded) and the ref to attach.
 */
export function useCountUp<T extends HTMLElement>({ to, durationMs = 1100, decimals = 0 }: Options) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || reduced) return

    let raf = 0
    let start = 0
    const tick = (now: number) => {
      if (!start) start = now
      const t = Math.min(1, (now - start) / durationMs)
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setValue(to * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          raf = requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, durationMs, reduced])

  const factor = 10 ** decimals
  const display = reduced ? to : Math.round(value * factor) / factor
  return { ref, value: display }
}
