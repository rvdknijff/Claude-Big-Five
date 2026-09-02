import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { parentTopics } from '@/data/parents'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'
import { media } from '@/data/media'

export function VoorOuders() {
  return (
    <>
      <Seo
        title="Voor ouders"
        description="Praktische antwoorden voor ouders: wanneer het eerste tandartsbezoek, hoe vaak op controle, tandartsangst, melktanden, poetsen en wanneer een beugel aan de orde is."
      />
      <PageHero
        eyebrow="Voor ouders"
        title="Alles wat handig is om te weten"
        intro="Je bent de belangrijkste factor in hoe je kind naar de tandarts kijkt. Hieronder de vragen die we het vaakst krijgen, met eerlijke antwoorden."
        tone="sky"
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Accordion items={parentTopics} />

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Figure asset={media.brushingGirl} shape="blob-b" className="aspect-[4/5] w-full" />
            </Reveal>
            <div className="mt-6 rounded-[1.75rem] bg-sun-soft p-6">
              <h2 className="font-display text-xl font-semibold">Kort samengevat</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>Eerste bezoek rond 2 jaar.</li>
                <li>Poets na tot een jaar of tien.</li>
                <li>Zeg thuis niet “niet bang zijn”.</li>
                <li>Melktanden zijn belangrijk.</li>
                <li>Beugel meestal pas rond 9–13 jaar.</li>
              </ul>
              <Button to="/contact#afspraak" variant="blush" className="mt-5 w-full">
                Een afspraak maken
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
