import { Link } from 'react-router-dom'
import { nav, site } from '@/data/site'
import { expeditions } from '@/data/expeditions'

export function Footer() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Northbound Expeditions</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
              Small-group expeditions into the wildest parts of the North. Never more than eight
              people. Based in {site.base}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5 text-sm">
            <p className="label !text-paper/50 mb-1">Site</p>
            <Link to="/" className="text-paper/80 hover:text-paper">
              Home
            </Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-paper/80 hover:text-paper">
                {n.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Expeditions" className="flex flex-col gap-2.5 text-sm">
            <p className="label !text-paper/50 mb-1">Expeditions</p>
            {expeditions.map((e) => (
              <Link
                key={e.slug}
                to={`/expeditions/${e.slug}`}
                className="text-paper/80 hover:text-paper"
              >
                {e.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="rule mt-14 flex flex-col gap-3 border-paper/15 pt-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Northbound Expeditions — fictional company, front-end demo.</p>
          <div className="flex gap-6">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-paper">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
