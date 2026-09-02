import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { BezoekJourney } from '@/components/home/BezoekJourney'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { media } from '@/data/media'
import { Figure } from '@/components/ui/Figure'

const bring = [
  'Een knuffel of iets vertrouwds — mag gewoon mee de stoel op.',
  'De naam en plaats van jullie huidige tandarts.',
  'Het pasje van de zorgverzekering.',
  'Eventuele bijzonderheden: medicijnen, allergieën, eerdere nare ervaringen.',
]

const parentTips = [
  {
    t: 'Vertel het kort en neutraal',
    d: '“We gaan naar de tandarts, die telt je tanden.” Meer hoeft je kind vooraf niet te weten.',
  },
  {
    t: 'Vermijd geruststellende woorden',
    d: '“Het doet geen pijn” of “niet bang zijn” zet je kind juist op een spoor. Laat die woorden weg.',
  },
  {
    t: 'Plan het op een goed moment',
    d: 'Niet vlak na school of tussen de middag door. Een uitgerust kind doet veel makkelijker mee.',
  },
]

export function EersteBezoek() {
  return (
    <>
      <Seo
        title="Het eerste bezoek"
        description="Wat er gebeurt tijdens het eerste bezoek bij Bloom kindertandarts: vijf rustige stappen, wat je meeneemt en hoe je je kind thuis voorbereidt."
      />
      <PageHero
        eyebrow="Het eerste bezoek"
        title="Wat er die eerste keer gebeurt"
        intro="Het eerste bezoek is geen behandeling. Het is kennismaken — met de ruimte, de mensen en de stoel. Je kind bepaalt mee hoe ver we die dag komen."
        tone="sage"
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-20">
        <BezoekJourney />
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="page-x mx-auto grid max-w-[var(--container-page)] gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)]">Wat neem je mee?</h2>
            <ul className="mt-6 space-y-3">
              {bring.map((b) => (
                <li key={b} className="flex gap-3 rounded-2xl bg-paper px-4 py-3">
                  <span aria-hidden="true" className="text-sage-deep">
                    ✓
                  </span>
                  <span className="leading-relaxed text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal from="left">
            <Figure asset={media.blocks} shape="blob-a" className="aspect-[4/3] w-full" />
          </Reveal>
        </div>
      </section>

      <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-20">
        <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)]">Hoe je je kind thuis voorbereidt</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {parentTips.map((tip, i) => (
            <Reveal key={tip.t} delay={i * 0.07}>
              <div className="h-full rounded-[1.75rem] bg-sky-soft p-6">
                <h3 className="font-display text-lg font-semibold">{tip.t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{tip.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/contact#afspraak" variant="blush" size="lg">
            Plan een eerste bezoek
          </Button>
        </div>
      </section>
    </>
  )
}
