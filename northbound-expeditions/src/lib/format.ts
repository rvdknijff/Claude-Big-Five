const fmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

/** "14 June 2026" from an ISO date string. */
export function formatDate(iso: string): string {
  return fmt.format(new Date(iso))
}
