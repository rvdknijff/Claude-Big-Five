import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/** Cheap drifting-bars + scan visual behind the hero. Static single frame if reduced. */
export function HeroCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const bars = Array.from({ length: 14 }, () => ({
      y: Math.random(),
      speed: 0.0004 + Math.random() * 0.0012,
      hh: 0.004 + Math.random() * 0.02,
      acid: Math.random() < 0.25,
    }))

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const b of bars) {
        const y = reduced ? b.y * h : ((b.y + t * b.speed) % 1.2 - 0.1) * h
        ctx.fillStyle = b.acid ? 'rgba(206,255,26,0.10)' : 'rgba(236,233,221,0.05)'
        ctx.fillRect(0, y, w, Math.max(1, b.hh * h))
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }
    if (reduced) draw(0)
    else raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduced])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
