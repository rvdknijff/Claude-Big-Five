import { media } from '@/data/media'
import { parentTopics } from '@/data/parents'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

const preview = parentTopics.slice(0, 4)

export function VoorOudersSection() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-3">Voor ouders</p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)]">De vragen die we het vaakst horen</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Korte, eerlijke antwoorden op de dingen waar ouders mee zitten — van het eerste bezoek
            tot melktanden, poetsen en de beugel.
          </p>
          <Reveal className="mt-8">
            <Figure asset={media.reading} shape="blob-b" className="aspect-[4/3] w-full" />
          </Reveal>
          <Button to="/voor-ouders" variant="sage" className="mt-8">
            Alle vragen voor ouders
          </Button>
        </div>

        <ul className="space-y-3">
          {preview.map((t, i) => (
            <Reveal key={t.q} delay={i * 0.05} as="li">
              <details className="group rounded-2xl bg-cream px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold">
                  {t.q}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-soft text-sage-deep transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{t.a}</p>
              </details>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
