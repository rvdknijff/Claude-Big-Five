import type { SVGProps } from 'react'

/**
 * Small hand-drawn-feeling illustration marks used to sprinkle the Bloom
 * layouts. All are single-path, currentColor, and decorative (aria-hidden).
 */

export function Leaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 3c1 6-1 11-5 14s-9 4-13 3c-1-6 1-11 5-14S16 5 20 3Zm-3 4c-4 1-7 3-9 6s-3 6-3 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Sprout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3 2-5 6-5 0 3-2 5-6 5Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 15c0-3-2-5-6-5 0 3 2 5 6 5Z" fill="currentColor" fillOpacity="0.18" />
    </svg>
  )
}

export function Cloud(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11 21a7 7 0 0 1-1-13.9A9 9 0 0 1 27 6a6 6 0 0 1 3 11.6c-.5.3-1 .4-1.6.4H11Z" />
    </svg>
  )
}

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c.6 4.6 2.8 6.8 7.4 7.4-4.6.6-6.8 2.8-7.4 7.4-.6-4.6-2.8-6.8-7.4-7.4C9.2 8.8 11.4 6.6 12 2Z" />
    </svg>
  )
}

export function Flower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3" fillOpacity="0.9" />
      <g fillOpacity="0.55">
        <ellipse cx="12" cy="5" rx="3" ry="4.2" />
        <ellipse cx="12" cy="19" rx="3" ry="4.2" />
        <ellipse cx="5" cy="12" rx="4.2" ry="3" />
        <ellipse cx="19" cy="12" rx="4.2" ry="3" />
      </g>
    </svg>
  )
}

/** A soft organic blob used behind photos and as a background shape. */
export function Blob({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M46.4 -63.9C58.6 -55.1 65.2 -38.5 69.4 -21.4C73.6 -4.3 75.4 13.4 69.6 28C63.9 42.6 50.6 54.1 35.7 61.9C20.8 69.7 4.3 73.8 -12.9 72.8C-30.1 71.8 -48 65.7 -60.2 53.7C-72.4 41.7 -78.9 23.8 -79.8 5.4C-80.7 -13 -76 -31.9 -64.7 -45.3C-53.4 -58.7 -35.5 -66.6 -18.3 -70.4C-1.1 -74.2 15.4 -73.9 46.4 -63.9Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
