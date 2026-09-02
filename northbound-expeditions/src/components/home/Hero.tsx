import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { media } from '@/data/media'
import { site } from '@/data/site'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.1])

  return (
    <section ref={ref} className="relative h-svh min-h-[36rem] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
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
      <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/25 to-bark/40" />

      <div className="page-x relative mx-auto flex h-full max-w-[var(--container-page)] flex-col justify-end pb-16 text-paper md:pb-24">
        <p className="label !text-paper/70">Small-group expeditions · max {site.groupMax} people</p>
        <h1 className="mt-4 max-w-[15ch] font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.98]">
          Go where the road <em>doesn&rsquo;t</em>.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/85 md:text-xl">
          Expeditions on foot, ski and water into the wildest landscapes of Norway, Iceland,
          Scotland, Swedish Lapland and the Faroe Islands.
        </p>
        <div className="mt-9">
          <Button to="/expeditions" variant="solid" withArrow className="!bg-paper !text-bark hover:!bg-signal hover:!text-paper">
            Explore expeditions
          </Button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-paper/60 md:block"
      >
        <span className="block h-12 w-px animate-pulse bg-paper/40" />
      </div>
    </section>
  )
}
