import { useState } from 'react'
import { cn } from '@/lib/cn'
import { visitSteps } from '@/data/firstVisit'

type Voice = 'kind' | 'ouder'

export function BezoekJourney() {
  const [active, setActive] = useState(0)
  const [voice, setVoice] = useState<Voice>('kind')
  const step = visitSteps[active]

  return (
    <div>
      {/* voice toggle */}
      <div
        role="group"
        aria-label="Kies wiens verhaal je leest"
        className="mb-8 inline-flex rounded-full bg-cream p-1"
      >
        {(['kind', 'ouder'] as Voice[]).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setVoice(v)}
            aria-pressed={voice === v}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-extrabold transition-colors',
              voice === v ? 'bg-sage text-paper' : 'text-ink-soft hover:text-ink',
            )}
          >
            {v === 'kind' ? 'Voor je kind' : 'Voor ouders'}
          </button>
        ))}
      </div>

      {/* step rail */}
      <ol className="relative flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-5 md:gap-3 md:overflow-visible">
        <span
          aria-hidden="true"
          className="absolute left-6 right-6 top-6 hidden h-0.5 bg-sage-soft md:block"
        />
        {visitSteps.map((s, i) => {
          const isActive = i === active
          return (
            <li key={s.n} className="min-w-[8.5rem] shrink-0 md:min-w-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive ? 'step' : undefined}
                className="group relative flex w-full flex-col items-center text-center"
              >
                <span
                  className={cn(
                    'relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-semibold transition-all duration-300',
                    isActive
                      ? 'scale-110 bg-blush text-ink shadow-[0_8px_20px_-8px_var(--color-blush-deep)]'
                      : i < active
                        ? 'bg-sage text-paper'
                        : 'bg-cream text-ink-faint group-hover:bg-sage-soft',
                  )}
                >
                  {s.n}
                </span>
                <span
                  className={cn(
                    'mt-3 text-sm font-extrabold transition-colors',
                    isActive ? 'text-ink' : 'text-ink-faint group-hover:text-ink-soft',
                  )}
                >
                  {s.title}
                </span>
                <span className="mt-0.5 text-xs text-ink-faint">{s.minutes}</span>
              </button>
            </li>
          )
        })}
      </ol>

      {/* active step panel */}
      <div className="mt-8 rounded-[2rem] bg-cream p-7 md:p-10">
        <p className="eyebrow mb-2">
          Stap {step.n} · {step.title}
        </p>
        <p key={`${active}-${voice}`} className="max-w-2xl text-xl leading-relaxed text-ink animate-[fadeIn_0.3s_ease]">
          {voice === 'kind' ? step.kid : step.parent}
        </p>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="rounded-full border-2 border-ink/15 px-4 py-2 text-sm font-extrabold text-ink disabled:opacity-40"
          >
            Vorige
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => Math.min(visitSteps.length - 1, a + 1))}
            disabled={active === visitSteps.length - 1}
            className="rounded-full bg-sage px-4 py-2 text-sm font-extrabold text-paper disabled:opacity-40"
          >
            Volgende stap
          </button>
        </div>
      </div>
    </div>
  )
}
