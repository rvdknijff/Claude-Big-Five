import { Seo } from '@/components/Seo'
import { media } from '@/data/media'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page could not be found." />
      <section className="relative min-h-svh">
        <img
          src={media.icelandRiver.src}
          width={media.icelandRiver.width}
          height={media.icelandRiver.height}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bark/70" />
        <div className="page-x relative mx-auto flex min-h-svh max-w-[var(--container-page)] flex-col items-start justify-center py-32 text-paper">
          <p className="label !text-paper/60">Error · 404</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,6rem)] leading-[1.0]">
            Off the map
          </h1>
          <p className="mt-5 max-w-md text-lg text-paper/80">
            This page is not on any of our routes. Head back to the start and pick a trail.
          </p>
          <Button
            to="/"
            className="mt-8 !bg-paper !text-bark hover:!bg-signal hover:!text-paper"
            withArrow
          >
            Back to home
          </Button>
        </div>
      </section>
    </>
  )
}
