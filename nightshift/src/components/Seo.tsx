interface SeoProps {
  title: string
  description: string
}

/**
 * React 19 hoists <title> and <meta> to <head> automatically, so pages can
 * declare their own metadata inline through this small wrapper.
 */
export function Seo({ title, description }: SeoProps) {
  return (
    <>
      <title>{`${title} — Blackline Motorworks`}</title>
      <meta name="description" content={description} />
    </>
  )
}
