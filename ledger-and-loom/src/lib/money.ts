const eur0 = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const num0 = new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 })

/** "€ 12.500" */
export function euro(value: number): string {
  return eur0.format(Math.round(value))
}

/** "12.500" */
export function num(value: number): string {
  return num0.format(Math.round(value))
}

/** "28%" */
export function pct(value: number, digits = 0): string {
  return `${value.toFixed(digits)}%`
}
