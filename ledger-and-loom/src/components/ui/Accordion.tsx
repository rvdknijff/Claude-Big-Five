interface Item {
  q: string
  a: string
}

export function Accordion({ items }: { items: readonly Item[] }) {
  return (
    <div className="border-t border-ink">
      {items.map((item) => (
        <details
          key={item.q}
          className="group border-b border-line [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-start gap-4 py-5">
            <span className="text-lg tracking-[-0.02em] text-ink md:text-xl">{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-1 font-mono text-ink-3 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-2">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
