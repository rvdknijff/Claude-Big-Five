import { Reveal } from './Reveal'

interface Item {
  q: string
  a: string
}

export function Accordion({ items }: { items: readonly Item[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={Math.min(i * 0.04, 0.24)} as="li">
          <details className="group rounded-2xl bg-cream px-5 py-4 open:bg-sage-soft/60 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
              {item.q}
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-sage-deep transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </ul>
  )
}
