import { media } from '@/data/media'
import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Figure } from '@/components/ui/Figure'
import { Cloud, Leaf, Sparkle, Sprout } from '@/components/ui/decor'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-soft pb-8 pt-28 md:pb-16 md:pt-36">
      {/* floating decor */}
      <Cloud className="pointer-events-none absolute left-[6%] top-24 hidden h-12 w-20 text-paper/80 sm:block float-slow" />
      <Cloud className="pointer-events-none absolute right-[12%] top-40 hidden h-9 w-16 text-paper/70 md:block float-med" />
      <Leaf className="pointer-events-none absolute bottom-16 left-[3%] hidden h-10 w-10 text-sage md:block float-med" />
      <Sparkle className="pointer-events-none absolute right-[6%] top-24 hidden h-7 w-7 text-sun sm:block float-slow" />

      <div className="page-x mx-auto grid max-w-[var(--container-page)] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow mb-4 inline-flex items-center gap-2">
            <Sprout className="h-4 w-4" />
            Kindertandarts in {site.city} · {site.ages}
          </p>
          <h1 className="text-[clamp(2.6rem,6.5vw,4.75rem)] leading-[1.02]">
            Big smiles<br />start small.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Een kindertandarts­praktijk waar kinderen op hun eigen tempo kunnen wennen, ontdekken
            en groeien.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact#afspraak" variant="blush" size="lg">
              Plan een eerste bezoek
            </Button>
            <Button to="/eerste-bezoek" variant="outline" size="lg">
              Zo bereiden we je kind voor
            </Button>
          </div>
        </div>

        <div className="relative">
          <Figure
            asset={media.hero}
            priority
            shape="blob-a"
            className="aspect-[5/4] w-full rotate-1"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 shadow-[0_12px_30px_-14px_rgba(56,71,63,0.5)] md:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-soft text-lg">
              🦷
            </span>
            <span className="text-sm font-extrabold text-ink">Geen haast. Beloofd.</span>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="mt-10 block h-8 w-full text-paper md:h-12"
        aria-hidden="true"
      >
        <path d="M0 60V26c200 28 380 30 620 8S1060-4 1260 10s100 22 180 18v32Z" fill="currentColor" />
      </svg>
    </section>
  )
}
