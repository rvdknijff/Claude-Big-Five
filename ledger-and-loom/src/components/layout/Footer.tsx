import { Link } from 'react-router-dom'
import { nav, site } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-ink bg-page">
      <div className="page-x mx-auto max-w-[var(--container-page)] py-14 md:py-16">
        <div className="grid12 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <p className="font-serif text-3xl">
              Ledger <span className="text-accent">&amp;</span> Loom
            </p>
            <p className="mt-3 max-w-sm text-sm text-ink-2">{site.promise}</p>
          </div>

          <nav aria-label="Footer" className="col-span-6 flex flex-col gap-2 md:col-span-3 md:col-start-7">
            <p className="label mb-1">Pages</p>
            <Link to="/" className="text-sm text-ink-2 hover:text-ink">
              Home
            </Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm text-ink-2 hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="col-span-6 flex flex-col gap-2 md:col-span-3">
            <p className="label mb-1">Practice</p>
            <address className="text-sm not-italic leading-relaxed text-ink-2">
              {site.address.slice(1).map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <a href={site.emailHref} className="text-sm text-ink hover:text-accent">
              {site.email}
            </a>
            <a href={site.phoneHref} className="text-sm text-ink-2 hover:text-ink">
              {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.68rem] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ledger &amp; Loom — fictional practice, front-end demo.</p>
          <p>Not financial advice. Registered in Rotterdam since {site.founded}.</p>
        </div>
      </div>
    </footer>
  )
}
