import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { faqGroups } from '@/data/faq'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'

export function Vragen() {
  return (
    <>
      <Seo
        title="Veelgestelde vragen"
        description="Antwoorden op vragen over afspraken maken, wat er tijdens een bezoek gebeurt, kosten en verzekering, en praktische zaken bij Bloom kindertandarts."
      />
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Even snel iets opzoeken"
        intro="Staat je vraag er niet bij? Bel of mail ons gerust — we denken graag mee."
        tone="sun"
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
        <div className="space-y-14">
          {faqGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <h2 className="mb-5 font-display text-2xl font-semibold text-ink">{group.title}</h2>
              <Accordion items={group.items} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-sage-soft p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-semibold">Nog een vraag?</h2>
          <p className="mx-auto mt-2 max-w-md leading-relaxed text-ink-soft">
            We zijn bereikbaar op werkdagen. Voor een ongeluk met tanden buiten openingstijden
            belt u de dienstdoende tandarts.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.phoneHref} variant="blush">
              Bel {site.phone}
            </Button>
            <Button to="/contact" variant="outline">
              Stuur een bericht
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
