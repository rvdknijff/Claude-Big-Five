import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { nav } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-full px-3.5 py-2 text-[0.95rem] font-bold transition-colors',
      isActive ? 'bg-sage-soft text-sage-deep' : 'text-ink-soft hover:bg-ink/[0.05] hover:text-ink',
    )

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="mx-auto flex max-w-[var(--container-page)] items-center justify-between gap-4 rounded-full border border-ink/10 bg-paper/85 px-4 py-2.5 shadow-[0_10px_30px_-18px_rgba(56,71,63,0.45)] backdrop-blur-md md:px-5">
        <Logo onClick={close} />

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-1 lg:flex">
          {nav.slice(0, -1).map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                'hidden rounded-full px-3.5 py-2 text-[0.95rem] font-bold lg:block',
                isActive ? 'text-sage-deep' : 'text-ink-soft hover:text-ink',
              )
            }
          >
            Contact
          </NavLink>
          <Button to="/contact#afspraak" variant="blush">
            Plan een eerste bezoek
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/[0.06] md:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobiel-menu"
          className="animate-[fadeIn_0.2s_ease] fixed inset-x-3 top-[4.75rem] z-40 rounded-[2rem] border border-ink/10 bg-paper p-5 shadow-[0_30px_60px_-20px_rgba(56,71,63,0.4)] md:hidden"
        >
          <nav aria-label="Menu" className="flex flex-col">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-3.5 font-display text-xl font-semibold transition-colors',
                    isActive ? 'bg-sage-soft text-sage-deep' : 'text-ink hover:bg-ink/[0.04]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/contact#afspraak" variant="blush" className="mt-4 w-full" onClick={close}>
            Plan een eerste bezoek
          </Button>
        </div>
      )}
    </header>
  )
}
