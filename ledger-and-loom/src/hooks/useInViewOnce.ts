import { useEffect, useRef, useState } from 'react'

interface Options {
  rootMargin?: string
  threshold?: number
}

/**
 * Returns [ref, inView]. `inView` flips to true once the element first
 * intersects the viewport and then stays true. Falls back to true when
 * IntersectionObserver is unavailable so content is never left hidden.
 */
export function useInViewOnce<T extends HTMLElement>({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.15,
}: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )
    observer.observe(node)
    // safety net: if for any reason the observer never fires, reveal anyway
    const timer = window.setTimeout(() => setInView(true), 2500)
    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [rootMargin, threshold])

  return [ref, inView] as const
}
