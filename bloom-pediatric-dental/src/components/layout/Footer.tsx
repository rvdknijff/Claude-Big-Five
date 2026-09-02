import { Link } from 'react-router-dom'
import { nav, site } from '@/data/site'
import { Sprout } from '@/components/ui/decor'

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-sage-deep text-paper">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute -top-px left-0 h-10 w-full text-paper"
        aria-hidden="true"
      >
        <path d="M0 60V30c180 30 360 30 540 6S900-6 1080 6s240 30 360 24v30Z" fill="currentColor" />
      </svg>

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-12 pt-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold lowercase">bloom</p>
            <p className="mt-3 max-w-xs leading-relaxed text-paper/80">
              Kindertandarts in {site.city} voor kinderen van {site.ages}. {site.claim}
            </p>
            <Sprout className="mt-5 h-8 w-8 text-sun" />
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <p className="mb-1 text-sm font-extrabold uppercase tracking-wider text-paper/60">
              Op deze site
            </p>
            <Link to="/" className="text-paper/85 transition-colors hover:text-paper">
              Home
            </Link>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-paper/85 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="mb-1 text-sm font-extrabold uppercase tracking-wider text-paper/60">
              Praktijk
            </p>
            <address className="not-italic leading-relaxed text-paper/85">
              {site.address.slice(1).map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <a href={site.phoneHref} className="font-bold text-paper transition-colors hover:text-sun">
              {site.phone}
            </a>
            <a href={site.emailHref} className="text-paper/85 transition-colors hover:text-paper">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/20 pt-6 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bloom kindertandarts — fictieve praktijk, front-end demo.</p>
          <p>{site.emergency}</p>
        </div>
      </div>
    </footer>
  )
}
