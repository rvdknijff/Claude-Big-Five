import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

function canRunCursor(reduced: boolean) {
  if (reduced || typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

/**
 * A square lime cursor that trails the pointer and swells over interactive
 * elements. Only runs on fine pointers with motion allowed; otherwise the
 * native cursor is left alone (see index.css).
 */
export function Cursor() {
  const reduced = usePrefersReducedMotion()
  const enabled = canRunCursor(reduced)
  const dotRef = useRef<HTMLDivElement>(null)
  const [hot, setHot] = useState(false)
  const [down, setDown] = useState(false)

  useEffect(() => {
    if (!enabled) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      const el = e.target as HTMLElement | null
      setHot(!!el?.closest('a, button, input, select, textarea, [role="slider"], [data-cursor]'))
    }
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    const loop = () => {
      x += (tx - x) * 0.28
      y += (ty - y) * 0.28
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ willChange: 'transform' }}
    >
      <div
        className="border-2 border-acid transition-[width,height,background-color,transform] duration-150"
        style={{
          width: hot ? 34 : 12,
          height: hot ? 34 : 12,
          backgroundColor: down ? 'var(--color-acid)' : hot ? 'transparent' : 'var(--color-acid)',
          transform: `translate(-50%, -50%) rotate(${hot ? 45 : 0}deg)`,
        }}
      />
    </div>
  )
}
