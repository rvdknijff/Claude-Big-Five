import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { nav, site } from '@/data/site'
import { expeditions } from '@/data/expeditions'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduced = usePrefersReducedMotion()
  const { pathname } = useLocation()
  const close = () => setOpen(false)

  // light controls over the home hero until the user scrolls
  const light = pathname === '/' && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled && !open ? 'bg-paper/92 backdrop-blur-sm' : 'bg-transparent',
      )}
    >
      {light && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bark/45 to-transparent"
        />
      )}
      <div className="page-x relative mx-auto flex h-16 max-w-[var(--container-page)] items-center justify-between md:h-20">
        <Logo tone={light ? 'light' : 'auto'} />

        <div className={cn('flex items-center gap-6', light && 'text-paper')}>
          <Link
            to="/expeditions"
            className={cn(
              'hidden text-sm font-medium underline-offset-4 hover:text-signal hover:underline sm:block',
              light ? 'text-paper' : 'text-ink',
            )}
          >
            Expeditions
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className={cn('flex items-center gap-2.5 text-sm font-medium', light ? 'text-paper' : 'text-ink')}
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 transition-all duration-300',
                  light ? 'bg-paper' : 'bg-ink',
                  open ? 'top-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 transition-all duration-300',
                  light ? 'bg-paper' : 'bg-ink',
                  open ? 'top-1/2 -rotate-45' : 'bottom-0',
                )}
              />
            </span>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-forest-deep text-paper"
            initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="page-x mx-auto max-w-[var(--container-page)] pb-16 pt-24 md:pt-28">
              <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
                <nav aria-label="Primary" className="flex flex-col">
                  {nav.map((item, i) => (
                    <MenuLink key={item.to} to={item.to} onClick={close} index={i} reduced={reduced}>
                      {item.label}
                    </MenuLink>
                  ))}
                </nav>

                <div>
                  <p className="label !text-paper/50 mb-5">The expeditions</p>
                  <ul className="rule border-paper/15">
                    {expeditions.map((e) => (
                      <li key={e.slug} className="border-b border-paper/15">
                        <Link
                          to={`/expeditions/${e.slug}`}
                          onClick={close}
                          className="group flex items-center gap-4 py-4"
                        >
                          <img
                            src={e.cardImage.src}
                            width={e.cardImage.width}
                            height={e.cardImage.height}
                            alt=""
                            loading="lazy"
                            className="h-14 w-20 shrink-0 object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                          />
                          <span className="min-w-0 flex-1">
                            <span className="block font-display text-lg text-paper group-hover:text-signal">
                              {e.name}
                            </span>
                            <span className="text-xs text-paper/60">
                              {e.country} · {e.days} days · {e.month}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-paper/70">
                    <a href={site.emailHref} className="hover:text-paper">
                      {site.email}
                    </a>
                    <a href={site.phoneHref} className="hover:text-paper">
                      {site.phone}
                    </a>
                    <span>Based in {site.base}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MenuLink({
  to,
  onClick,
  index,
  reduced,
  children,
}: {
  to: string
  onClick: () => void
  index: number
  reduced: boolean
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          cn(
            'block border-b border-paper/15 py-3 font-display text-3xl transition-colors md:text-4xl',
            isActive ? 'text-signal' : 'text-paper hover:text-signal',
          )
        }
      >
        {children}
      </NavLink>
    </motion.div>
  )
}
