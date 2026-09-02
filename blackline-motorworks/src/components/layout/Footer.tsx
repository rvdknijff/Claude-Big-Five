import { Link } from 'react-router-dom'
import { primaryNav, site } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-[0.12em]">
              Blackline<span className="text-signal">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              Performance engineering for Porsche, BMW&nbsp;M, Audi&nbsp;RS and Mercedes-AMG. One
              workshop, one calibration engineer, every figure measured.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="label mb-1">Pages</p>
            <Link to="/" className="text-sm text-fg-muted transition-colors hover:text-fg">
              Home
            </Link>
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="label mb-1">Workshop</p>
            <address className="text-sm not-italic leading-relaxed text-fg-muted">
              {site.address.slice(1).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={site.phoneHref}
              className="font-mono text-sm text-fg transition-colors hover:text-signal-bright"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {new Date().getFullYear()} Blackline Motorworks — fictional company, front-end demo.
          </p>
          <div className="flex gap-6 font-mono uppercase tracking-[0.16em]">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
