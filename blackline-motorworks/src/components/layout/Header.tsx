import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import { primaryNav, site } from '@/data/site'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Button } from '@/components/ui/Button'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = usePrefersReducedMotion()
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-base/90 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="page-x mx-auto flex h-16 max-w-[var(--container-page)] items-center justify-between md:h-20">
        <Logo onClick={closeMenu} />

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'label !text-[0.68rem] transition-colors duration-200 hover:text-fg',
                  isActive && 'text-fg',
                )
              }
            >
              {({ isActive }) => (
                <span className="relative inline-flex flex-col items-start">
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-1 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300',
                      isActive && 'scale-x-100',
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
          <Button to="/contact" variant="outline" className="!px-5 !py-2.5">
            Book an inspection
          </Button>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={cn(
                'absolute left-0 block h-[2px] w-6 bg-fg transition-all duration-300',
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 block h-[2px] w-6 bg-fg transition-all duration-300',
                menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : '',
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-16 z-40 bg-base md:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="page-x flex h-[calc(100dvh-4rem)] flex-col">
              <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1">
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={reduced ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          'flex items-baseline gap-4 border-b border-line py-5 font-display text-3xl font-bold uppercase tracking-tight',
                          isActive ? 'text-fg' : 'text-fg-muted',
                        )
                      }
                    >
                      <span className="label !text-[0.6rem]">{String(i + 1).padStart(2, '0')}</span>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="pb-10 pt-6">
                <Button to="/contact" className="w-full" onClick={closeMenu}>
                  Book an inspection
                </Button>
                <p className="label mt-6">{site.location}</p>
                <a href={site.phoneHref} className="mt-1 block font-mono text-sm text-fg">
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
