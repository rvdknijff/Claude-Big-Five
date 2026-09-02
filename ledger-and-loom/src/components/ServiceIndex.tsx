import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { services, type Service } from '@/data/services'
import { cn } from '@/lib/cn'

/** Typographic index of services; hovering / focusing a row reveals its detail. */
export function ServiceIndex({ linkToServices = true }: { linkToServices?: boolean }) {
  const [active, setActive] = useState<string | null>(services[0].id)

  return (
    <ul className="border-t border-ink">
      {services.map((s) => {
        const on = active === s.id
        const activate = () => setActive(s.id)
        const inner = <RowInner service={s} on={on} />
        return (
          <li key={s.id} className="border-b border-line">
            {linkToServices ? (
              <Link
                to={`/services#${s.id}`}
                onMouseEnter={activate}
                onFocus={activate}
                className="group block py-6 outline-offset-2 md:py-8"
              >
                {inner}
              </Link>
            ) : (
              <div onMouseEnter={activate} className="group block py-6 md:py-8">
                {inner}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function RowInner({ service, on }: { service: Service; on: boolean }): ReactNode {
  return (
    <div className="grid12 items-baseline gap-y-3">
      <span className="col-span-2 font-mono text-sm text-line-strong md:col-span-1">
        {service.index}
      </span>
      <h3
        className={cn(
          'col-span-10 text-[clamp(1.75rem,4vw,3rem)] leading-[1] tracking-[-0.03em] transition-colors md:col-span-5',
          on ? 'text-ink' : 'text-ink-3 group-hover:text-ink',
        )}
      >
        {service.title}
      </h3>
      <div
        className={cn(
          'col-span-12 overflow-hidden transition-[max-height,opacity] duration-300 md:col-span-6 md:col-start-7',
          on ? 'max-h-40 opacity-100' : 'max-h-40 opacity-70 md:max-h-0 md:opacity-0',
        )}
      >
        <p className="text-sm leading-relaxed text-ink-2">{service.line}</p>
      </div>
    </div>
  )
}
