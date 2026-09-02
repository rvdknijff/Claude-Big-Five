import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { nav } from '@/data/site'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || open ? 'border-line bg-page/95 backdrop-blur-sm' : 'border-transparent',
      )}
    >
      <div className="page-x mx-auto flex h-14 max-w-[var(--container-page)] items-center justify-between md:h-16">
        <Logo onClick={close} />

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'group inline-flex items-baseline gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors',
                  isActive ? 'text-ink' : 'text-ink-3 hover:text-ink',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className={cn('text-[0.62rem]', isActive ? 'text-accent' : 'text-line-strong')}>
                    {item.index}
                  </span>
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu"
          className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div id="menu" className="fixed inset-x-0 top-14 bottom-0 z-40 bg-page md:hidden">
          <nav aria-label="Menu" className="page-x mx-auto flex max-w-[var(--container-page)] flex-col pt-6">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    'flex items-baseline gap-4 border-b border-line py-5 text-3xl tracking-tight transition-colors',
                    isActive ? 'text-ink' : 'text-ink-2',
                  )
                }
              >
                <span className="font-mono text-sm text-line-strong">{item.index}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
