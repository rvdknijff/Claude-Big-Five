import type { Edition } from '@/data/archive'

/** A generated brutalist poster for one past edition. Pure SVG, no image. */
export function ArchivePoster({ edition }: { edition: Edition }) {
  const { bg, fg, accent } = edition.poster
  const y = String(edition.year)

  return (
    <svg
      viewBox="0 0 400 566"
      className="h-full w-full"
      role="img"
      aria-label={`NIGHTSHIFT ${y} poster — ${edition.tagline}`}
    >
      <rect width="400" height="566" fill={bg} />
      {/* top bar */}
      <rect x="18" y="18" width="364" height="34" fill={accent} />
      <text x="28" y="41" fontFamily="'Space Mono', monospace" fontSize="14" fontWeight="700" fill={bg} letterSpacing="2">
        NIGHTSHIFT
      </text>
      <text x="372" y="41" textAnchor="end" fontFamily="'Space Mono', monospace" fontSize="12" fill={bg}>
        ROTTERDAM
      </text>

      {/* edition marker */}
      <text x="28" y="90" fontFamily="'Space Mono', monospace" fontSize="12" fontWeight="700" fill={accent} letterSpacing="2">
        EDITION {['04', '03', '02', '01'][2026 - edition.year] ?? '00'} · EST. 2023
      </text>

      {/* giant year */}
      <text
        x="200"
        y="285"
        textAnchor="middle"
        fontFamily="'Unbounded', sans-serif"
        fontSize="150"
        fontWeight="800"
        fill={fg}
        letterSpacing="-8"
      >
        {y}
      </text>

      {/* tagline */}
      <text
        x="200"
        y="330"
        textAnchor="middle"
        fontFamily="'Space Mono', monospace"
        fontSize="15"
        fontWeight="700"
        fill={fg}
        letterSpacing="1"
      >
        {edition.tagline.toUpperCase()}
      </text>

      {/* headliner strip */}
      <line x1="18" y1="380" x2="382" y2="380" stroke={fg} strokeWidth="2" />
      {edition.headliners.map((h, i) => (
        <text
          key={h}
          x="200"
          y={412 + i * 34}
          textAnchor="middle"
          fontFamily="'Unbounded', sans-serif"
          fontSize="22"
          fontWeight="800"
          fill={i === 0 ? accent : fg}
          letterSpacing="-1"
        >
          {h}
        </text>
      ))}

      {/* footer bar */}
      <rect x="18" y="514" width="364" height="34" fill={fg} />
      <text
        x="200"
        y="537"
        textAnchor="middle"
        fontFamily="'Space Mono', monospace"
        fontSize="11"
        fontWeight="700"
        fill={bg}
        letterSpacing="2"
      >
        {edition.venues} VENUE{edition.venues > 1 ? 'S' : ''} · {edition.acts} ACTS · 18+
      </text>
    </svg>
  )
}
