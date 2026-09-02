import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { team } from '@/data/team'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'
import { media } from '@/data/media'
import { cn } from '@/lib/cn'

const werkwijze = [
  {
    t: 'Op ooghoogte',
    d: 'We praten tegen je kind, niet over je kind heen. Vragen van ouders bespreken we het liefst even apart.',
  },
  {
    t: 'Kleine stappen, positief afsluiten',
    d: 'Elk bezoek eindigt met iets dat wél lukte. Ook als de rest voor de volgende keer is.',
  },
  {
    t: 'Dezelfde gezichten',
    d: 'Een klein team betekent dat je kind steeds dezelfde tandarts en assistente ziet.',
  },
  {
    t: 'Eerlijk over wat nodig is',
    d: 'Geen behandelingen “voor de zekerheid”. Wat kan wachten, laten we wachten.',
  },
]

export function OnsTeam() {
  return (
    <>
      <Seo
        title="Ons team"
        description="Maak kennis met het team van Bloom kindertandarts in Amersfoort: Dr. Sophie de Wit, Noor Bakker en Emma Vermeer."
      />
      <PageHero
        eyebrow="Ons team"
        title="Klein team, vaste gezichten"
        intro="Bij Bloom werken drie mensen. Je kind ziet elke keer dezelfde tandarts en dezelfde assistente — dat scheelt een hoop wennen."
        tone="sage"
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
        <div className="space-y-16">
          {team.map((m, i) => (
            <Reveal key={m.name} as="article">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
                <Figure
                  asset={m.image}
                  shape={i % 2 ? 'blob-b' : 'blob-a'}
                  className={cn('aspect-[4/5] w-full max-w-sm', i % 2 === 1 && 'md:order-2 md:ml-auto')}
                />
                <div className={cn(i % 2 === 1 && 'md:order-1')}>
                  <h2 className="font-display text-3xl font-semibold">{m.name}</h2>
                  <p className="mt-1 text-sm font-extrabold uppercase tracking-wide text-sage-deep">
                    {m.role}
                  </p>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{m.bio}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold text-ink">
                    <span aria-hidden="true">✦</span>
                    {m.likes}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <p className="eyebrow mb-3">Hoe we werken</p>
          <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)]">Vier dingen die bij ons altijd zo gaan</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {werkwijze.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold">{w.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Figure asset={media.grass} shape="pill" className="aspect-[21/9] w-full" />
          </Reveal>
          <div className="mt-10">
            <Button to="/contact#afspraak" variant="blush" size="lg">
              Kom eens langs
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
