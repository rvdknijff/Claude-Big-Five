interface SeoProps {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  return (
    <>
      <title>{`${title} — Ledger & Loom`}</title>
      <meta name="description" content={description} />
    </>
  )
}
