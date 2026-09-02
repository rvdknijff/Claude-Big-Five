import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { Cloud, Sparkle } from '@/components/ui/decor'

export function NietGevonden() {
  return (
    <>
      <Seo title="Pagina niet gevonden" description="Deze pagina bestaat niet." />
      <section className="relative overflow-hidden bg-sky-soft">
        <Cloud className="pointer-events-none absolute left-[10%] top-28 h-12 w-20 text-paper float-slow" />
        <Sparkle className="pointer-events-none absolute right-[12%] top-40 h-8 w-8 text-sun float-med" />
        <div className="page-x mx-auto flex min-h-[70vh] max-w-[var(--container-page)] flex-col items-start justify-center py-24">
          <p className="eyebrow mb-3">Foutje — 404</p>
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[1.02]">
            Deze pagina is<br />zoek geraakt
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Misschien is de link oud, of hebben we iets verplaatst. Ga terug naar het begin, dan
            wijzen we je de weg.
          </p>
          <Button to="/" variant="blush" size="lg" className="mt-8">
            Terug naar home
          </Button>
        </div>
      </section>
    </>
  )
}
