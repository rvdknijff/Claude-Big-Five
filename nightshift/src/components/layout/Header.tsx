import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { festival, nav } from '@/data/festival'
import { venues } from '@/data/venues'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const reduced = usePrefersReducedMotion()
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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-stretch justify-between border-b-2 border-bone bg-black">
        <div className="flex items-center border-r-2 border-bone px-3 md:px-5">
          <Logo onClick={close} />
        </div>
        <div className="hidden flex-1 items-center px-4 font-mono text-xs uppercase tracking-[0.15em] text-ash md:flex">
          {festival.city} — {festival.dates}
        </div>
        <a
          href={festival.ticketUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center border-l-2 border-bone bg-acid px-4 font-mono text-xs font-bold uppercase tracking-[0.1em] text-black transition-colors hover:bg-bone md:px-6"
        >
          Tickets
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="index-menu"
          className="flex items-center border-l-2 border-bone px-4 font-mono text-xs font-bold uppercase tracking-[0.1em] text-bone transition-colors hover:bg-bone hover:text-black md:px-6"
        >
          {open ? 'Close' : 'Index'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="index-menu"
            className="fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-black"
            initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: reduced ? 0.15 : 0.4, ease: 'linear' }}
          >
            <div className="h-[3.25rem] shrink-0" />
            <div className="page-x mx-auto flex w-full max-w-[var(--container-page)] flex-1 flex-col justify-between py-10">
              <nav aria-label="Primary" className="border-t-2 border-bone">
                {nav.map((item, i) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={close}
                    className={({ isActive }) =>
                      cn(
                        'group flex items-baseline justify-between border-b-2 border-line py-4 font-display text-[clamp(2.25rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] transition-colors md:py-6',
                        isActive ? 'text-acid' : 'text-bone hover:text-acid',
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-sm text-ash">0{i + 1}</span>
                  </NavLink>
                ))}
              </nav>

              <div className="mt-10 grid gap-6 border-t-2 border-bone pt-6 sm:grid-cols-2 lg:grid-cols-4">
                {venues.map((v) => (
                  <div key={v.id}>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-acid">
                      {v.code}
                    </p>
                    <p className="mt-1 font-mono text-xs text-ash">{v.sound}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
