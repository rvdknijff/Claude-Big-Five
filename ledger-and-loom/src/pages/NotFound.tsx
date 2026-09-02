import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page could not be found." />
      <div className="page-x mx-auto flex min-h-[70vh] max-w-[var(--container-page)] flex-col items-start justify-center py-24">
        <p className="label">
          <span className="text-accent">404 —</span> Not found
        </p>
        <h1 className="mt-5 text-[clamp(3rem,12vw,9rem)] leading-[0.9] tracking-[-0.04em]">
          Off the<br />
          <span className="font-serif italic text-ink-2">balance sheet</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-2">
          This page isn&rsquo;t in the ledger. Head back to the homepage and start again.
        </p>
        <Button to="/" withArrow className="mt-8">
          Back to home
        </Button>
      </div>
    </>
  )
}
