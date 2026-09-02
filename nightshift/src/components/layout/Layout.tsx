import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Grain } from '@/components/effects/Grain'
import { Cursor } from '@/components/effects/Cursor'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const { pathname, hash } = useLocation()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    document.body.classList.toggle('reduced-motion', reduced)
  }, [reduced])

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:uppercase focus:text-black"
      >
        Skip to content
      </a>
      <Grain />
      <Cursor />
      <Header />
      <main id="main" className="pt-[3.25rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
