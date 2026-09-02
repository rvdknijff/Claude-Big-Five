import { useId, useMemo, useState } from 'react'
import { euro, pct } from '@/lib/money'
import { cn } from '@/lib/cn'
import { AnimatedNumber } from './ui/AnimatedNumber'

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (v: number) => string
}

function Slider({ label, value, min, max, step, onChange, format }: SliderProps) {
  const id = useId()
  const fill = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="label !text-ink-2">
          {label}
        </label>
        <output htmlFor={id} className="font-mono text-lg font-medium tabular-nums text-ink">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          'mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-none bg-line outline-offset-4',
          '[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:transition-colors hover:[&::-webkit-slider-thumb]:bg-accent',
          '[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ink',
        )}
        style={{
          background: `linear-gradient(to right, var(--color-ink) ${fill}%, var(--color-line) ${fill}%)`,
        }}
      />
    </div>
  )
}

export function CashflowDemo() {
  const [revenue, setRevenue] = useState(12500)
  const [costs, setCosts] = useState(7200)
  const [taxPct, setTaxPct] = useState(28)

  const calc = useMemo(() => {
    const profit = revenue - costs
    const taxReserve = profit > 0 ? (profit * taxPct) / 100 : 0
    const available = profit - taxReserve
    return { profit, taxReserve, available }
  }, [revenue, costs, taxPct])

  // bar segments as fraction of revenue (clamped for the loss case)
  const total = Math.max(revenue, costs)
  const seg = {
    costs: (costs / total) * 100,
    tax: (calc.taxReserve / total) * 100,
    available: (Math.max(0, calc.available) / total) * 100,
  }
  const loss = calc.profit < 0

  return (
    <div className="grid gap-10 border border-ink lg:grid-cols-[1fr_1.1fr]">
      {/* inputs */}
      <div className="border-b border-ink p-6 md:p-8 lg:border-b-0 lg:border-r">
        <p className="label">Adjust the inputs</p>
        <div className="mt-6 space-y-7">
          <Slider
            label="Monthly revenue"
            value={revenue}
            min={0}
            max={40000}
            step={250}
            onChange={setRevenue}
            format={euro}
          />
          <Slider
            label="Monthly costs"
            value={costs}
            min={0}
            max={30000}
            step={250}
            onChange={setCosts}
            format={euro}
          />
          <Slider
            label="Tax reserve"
            value={taxPct}
            min={0}
            max={45}
            step={1}
            onChange={setTaxPct}
            format={(v) => pct(v)}
          />
        </div>
      </div>

      {/* outputs */}
      <div className="p-6 md:p-8">
        <p className="label">This month, roughly</p>

        <dl className="mt-6 space-y-5">
          <Row label="Profit before tax" value={calc.profit} accent={loss} />
          <Row label="Less — tax reserve" value={calc.taxReserve} muted prefix="−" />
          <Row label="Available cash" value={calc.available} big accent={!loss} />
        </dl>

        {/* stacked bar */}
        <div className="mt-8">
          <div className="flex h-8 w-full overflow-hidden border border-ink">
            <span className="bg-line-strong" style={{ width: `${seg.costs}%` }} title="Costs" />
            <span className="bg-ink-2" style={{ width: `${seg.tax}%` }} title="Tax reserve" />
            <span
              className={cn(loss ? 'bg-accent/30' : 'bg-accent', 'transition-[width]')}
              style={{ width: `${seg.available}%` }}
              title="Available cash"
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-3">
            <Legend swatch="bg-line-strong" label="Costs" />
            <Legend swatch="bg-ink-2" label="Tax reserve" />
            <Legend swatch={loss ? 'bg-accent/30' : 'bg-accent'} label="Available" />
          </div>
        </div>

        <p className="mt-6 border-t border-line pt-4 font-mono text-[0.7rem] leading-relaxed text-ink-3">
          Illustration only — not financial advice. This ignores your business structure, VAT
          position, deductions and much else. It is a conversation starter.
        </p>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  big,
  muted,
  accent,
  prefix,
}: {
  label: string
  value: number
  big?: boolean
  muted?: boolean
  accent?: boolean
  prefix?: string
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4 last:border-b-0">
      <dt className={cn('text-sm', muted ? 'text-ink-3' : 'text-ink-2')}>{label}</dt>
      <dd
        className={cn(
          'font-mono font-medium tabular-nums',
          big ? 'text-2xl md:text-3xl' : 'text-lg',
          accent ? 'text-accent' : muted ? 'text-ink-3' : 'text-ink',
        )}
      >
        {prefix && <span className="mr-1">{prefix}</span>}
        <AnimatedNumber value={value} format={(n) => euro(n)} />
      </dd>
    </div>
  )
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('inline-block h-2.5 w-2.5', swatch)} />
      {label}
    </span>
  )
}
