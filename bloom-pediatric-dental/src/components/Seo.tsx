interface SeoProps {
  title: string
  description: string
}

/** React 19 hoists <title>/<meta> to <head>; pages declare their own metadata here. */
export function Seo({ title, description }: SeoProps) {
  return (
    <>
      <title>{`${title} — Bloom kindertandarts Amersfoort`}</title>
      <meta name="description" content={description} />
    </>
  )
}
