const fmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

/** "20 Jan 2026" */
export function formatDate(iso: string): string {
  return fmt.format(new Date(iso))
}
