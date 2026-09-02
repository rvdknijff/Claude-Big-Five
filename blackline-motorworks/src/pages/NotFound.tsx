import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page could not be found." />
      <div className="page-x mx-auto flex min-h-[70vh] max-w-[var(--container-page)] flex-col items-start justify-center py-32">
        <p className="label">Error · 404</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
          Off the<br />map
        </h1>
        <p className="mt-6 max-w-md text-lg text-fg-muted">
          That page isn&rsquo;t in our records. Head back to the workshop.
        </p>
        <div className="mt-9">
          <Button to="/" withArrow>
            Back to home
          </Button>
        </div>
      </div>
    </>
  )
}
