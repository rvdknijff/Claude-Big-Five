import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'

export function NotFound() {
  return (
    <>
      <Seo title="404" description="This page does not exist." />
      <Marquee duration={18} className="border-b-2 border-bone bg-acid py-1.5 text-black">
        <span className="px-3 font-mono text-sm font-bold uppercase tracking-[0.1em]">
          404 · WRONG DOOR · 404 · WRONG DOOR ·&nbsp;
        </span>
        <span className="px-3 font-mono text-sm font-bold uppercase tracking-[0.1em]">
          404 · WRONG DOOR · 404 · WRONG DOOR ·&nbsp;
        </span>
      </Marquee>
      <div className="page-x mx-auto flex min-h-[60vh] max-w-[var(--container-page)] flex-col items-start justify-center py-20">
        <h1 className="font-display text-[clamp(4rem,22vw,16rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.05em]">
          <span className="block">Wrong</span>
          <span className="block text-acid">Door</span>
        </h1>
        <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-ash">
          Nothing playing here. Head back to the front and try again.
        </p>
        <Button to="/" variant="acid" className="mt-8">
          Back to home
        </Button>
      </div>
    </>
  )
}
