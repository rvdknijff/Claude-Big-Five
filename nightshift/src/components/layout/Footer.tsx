import { Link } from 'react-router-dom'
import { festival, nav } from '@/data/festival'
import { Marquee } from '@/components/ui/Marquee'

export function Footer() {
  return (
    <footer className="border-t-2 border-bone bg-black">
      <Marquee duration={26} className="border-b-2 border-bone py-2">
        <span className="px-4 font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-acid">
          17 — 18 OCT 2026 · ROTTERDAM · FOUR VENUES · 20:00 → 07:00 · 18+ ·&nbsp;
        </span>
      </Marquee>

      <div className="page-x mx-auto max-w-[var(--container-page)] py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em]">
              NIGHT<span className="text-acid">/</span>SHIFT
            </p>
            <p className="mt-3 max-w-xs font-mono text-xs leading-relaxed text-ash">
              An underground electronic music and culture festival across four industrial venues in
              Rotterdam.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 font-mono text-sm">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-ash">Index</p>
            <Link to="/" className="text-bone/80 hover:text-acid">
              Home
            </Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-bone/80 hover:text-acid">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 font-mono text-sm">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-ash">Contact</p>
            <a href={festival.emailHref} className="text-bone hover:text-acid">
              {festival.email}
            </a>
            <a href={festival.instagram} target="_blank" rel="noreferrer" className="text-bone/80 hover:text-acid">
              Instagram
            </a>
            <a href={festival.resident} target="_blank" rel="noreferrer" className="text-bone/80 hover:text-acid">
              Resident Advisor
            </a>
          </div>
        </div>

        <p className="mt-12 border-t-2 border-line pt-6 font-mono text-[0.68rem] text-ash">
          © {new Date().getFullYear()} NIGHTSHIFT — fictional festival, front-end demo. All artists,
          venues and editions are invented.
        </p>
      </div>
    </footer>
  )
}
