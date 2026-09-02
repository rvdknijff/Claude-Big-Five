import { media } from '@/data/media'
import { festival } from '@/data/festival'
import { HeroCanvas } from '@/components/effects/HeroCanvas'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const enter = () => {
    document.getElementById('after-hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-[calc(100svh-3.25rem)] flex-col overflow-hidden border-b-2 border-bone">
      {/* background */}
      <picture>
        <source media="(max-width: 640px)" srcSet={media.heroPortrait.src} />
        <img
          src={media.hero.src}
          width={media.hero.width}
          height={media.hero.height}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="mono absolute inset-0 h-full w-full object-cover opacity-40"
        />
      </picture>
      <HeroCanvas className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />

      {/* type */}
      <div className="page-x relative z-10 mx-auto flex w-full max-w-[var(--container-page)] flex-1 flex-col justify-center py-16">
        <h1 className="font-display text-[clamp(3.5rem,20vw,16rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.05em]">
          <span className="block">Night</span>
          <span className="block text-acid">Shift</span>
        </h1>
        <div className="mt-6 flex flex-col gap-1 font-mono text-sm font-bold uppercase tracking-[0.2em] text-bone sm:flex-row sm:gap-8 sm:text-base">
          <span>{festival.city}</span>
          <span className="text-acid">{festival.dates}</span>
          <span className="text-ash">Four venues · {festival.doors} → {festival.close}</span>
        </div>
      </div>

      {/* enter */}
      <div className="page-x relative z-10 mx-auto flex w-full max-w-[var(--container-page)] items-end justify-between pb-10">
        <button
          type="button"
          onClick={enter}
          className="group flex items-center gap-3 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-bone transition-colors hover:text-acid sm:text-3xl"
          data-cursor
        >
          Enter
          <span aria-hidden="true" className="transition-transform group-hover:translate-y-1">
            ↓
          </span>
        </button>
        <Button href={festival.ticketUrl} variant="acid" className="hidden sm:inline-flex">
          Get tickets
        </Button>
      </div>
    </section>
  )
}
