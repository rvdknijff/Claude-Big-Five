import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Flower, Sparkle, Sprout } from '@/components/ui/decor'

export function AfspraakCTA() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-blush-soft px-6 py-14 text-center md:px-16 md:py-20">
        <Flower className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 text-paper/70 float-slow" />
        <Sprout className="pointer-events-none absolute bottom-6 right-8 h-12 w-12 text-sage float-med" />
        <Sparkle className="pointer-events-none absolute right-10 top-10 h-7 w-7 text-sun" />

        <h2 className="mx-auto max-w-[18ch] text-[clamp(1.9rem,4.5vw,3.25rem)]">
          Klaar voor een eerste, rustige kennismaking?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
          Vul het formulier in of bel ons. We bellen binnen één werkdag terug om samen een moment
          te kiezen dat voor jullie werkt.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact#afspraak" variant="blush" size="lg">
            Plan een eerste bezoek
          </Button>
          <a
            href={site.phoneHref}
            className="font-extrabold text-sage-deep underline decoration-2 underline-offset-4 hover:text-ink"
          >
            of bel {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
