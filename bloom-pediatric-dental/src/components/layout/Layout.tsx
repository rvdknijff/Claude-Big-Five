import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return (
    <>
      <a
        href="#hoofd"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sage-deep focus:px-5 focus:py-2.5 focus:font-bold focus:text-paper"
      >
        Naar de inhoud
      </a>
      <Header />
      <main id="hoofd">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
