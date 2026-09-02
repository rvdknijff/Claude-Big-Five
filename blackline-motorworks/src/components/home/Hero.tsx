import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { media } from '@/data/media'
import { marques } from '@/data/site'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '14%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9])

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden">
      {/* image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 will-change-transform">
        <picture>
          <source media="(max-width: 640px)" srcSet={media.heroPortrait.src} />
          <img
            src={media.hero.src}
            width={media.hero.width}
            height={media.hero.height}
            alt={media.hero.alt}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-base/25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-base via-base/70 to-transparent md:via-base/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-base to-transparent" />

      {/* coordinate marks — technical drawing motif */}
      <CornerMark className="left-5 top-24 md:left-10" />
      <CornerMark className="right-5 top-24 rotate-90 md:right-10" />

      {/* content */}
      <div className="page-x relative mx-auto flex min-h-[92vh] max-w-[var(--container-page)] flex-col justify-end pb-14 pt-32 md:pb-20">
        <p className="label mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-signal" aria-hidden="true" />
          Performance workshop · Utrecht
        </p>
        <h1 className="max-w-[14ch] font-display text-[clamp(2.75rem,8vw,7rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em]">
          Engineered<br />
          to perform<span className="text-signal">.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted">
          Performance, precision and craftsmanship for cars built to be driven. We develop on our
          own dyno, measure every change, and put the numbers in writing.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button to="/projects" withArrow>
            Explore our work
          </Button>
          <Button to="/contact" variant="outline">
            Book an inspection
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line/70 pt-5">
          <span className="label !text-fg-dim">Specialists in</span>
          {marques.map((m) => (
            <span key={m} className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
              {m}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 md:flex lg:right-10"
      >
        <span className="label [writing-mode:vertical-rl]">Scroll</span>
        <span className="h-12 w-px animate-pulse bg-fg-dim" />
      </div>
    </section>
  )
}

function CornerMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`pointer-events-none absolute hidden h-8 w-8 text-fg-dim md:block ${className ?? ''}`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 12V0h12M40 12V0H28" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
