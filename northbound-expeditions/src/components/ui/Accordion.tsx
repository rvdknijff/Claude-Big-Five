interface Item {
  q: string
  a: string
}

export function Accordion({ items }: { items: readonly Item[] }) {
  return (
    <div className="rule border-ink/20">
      {items.map((item) => (
        <details
          key={item.q}
          className="group border-b border-ink/12 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5">
            <span className="font-display text-lg leading-snug text-ink md:text-xl">{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-ink-faint transition-transform duration-300 group-open:rotate-45"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
