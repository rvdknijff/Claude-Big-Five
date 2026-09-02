import { media } from '@/data/media'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'
import { Cloud } from '@/components/ui/decor'

const points = [
  {
    title: 'Een stopteken dat echt werkt',
    body: 'Je kind spreekt met ons een handgebaar af. Steekt de hand omhoog, dan stoppen we — elke keer. Zo blijft je kind de baas.',
  },
  {
    title: 'Wij gaan nooit over een grens',
    body: 'Lukt een stap vandaag niet, dan is dat oké. We schrijven op waar we gebleven zijn en pakken het de volgende keer rustig op.',
  },
  {
    title: 'Een wenafspraak vooraf',
    body: 'Voor kinderen die het echt spannend vinden, plannen we eerst een korte afspraak zonder behandeling. Alleen kijken en kennismaken.',
  },
]

export function NervousSection() {
  return (
    <section className="relative overflow-hidden bg-sky-soft py-16 md:py-24">
      <Cloud className="pointer-events-none absolute right-[8%] top-12 h-10 w-16 text-paper float-slow" />
      <div className="page-x mx-auto grid max-w-[var(--container-page)] items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="relative">
          <Figure asset={media.peeking} shape="blob-a" className="aspect-[4/5] w-full max-w-sm rotate-2" />
        </Reveal>

        <div>
          <p className="eyebrow mb-3">Voor spannende bezoekjes</p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)]">Is jouw kind zenuwachtig?</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Bijna elk kind is dat wel eens, en dat is niet erg. Het gaat erom dat je kind merkt dat
            het zelf iets te zeggen heeft. Zo werken we:
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} as="li">
                <div className="rounded-2xl bg-paper/70 p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/voor-ouders" variant="sage">
              Meer tips voor thuis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
