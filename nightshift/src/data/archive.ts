export interface Edition {
  readonly year: number
  readonly tagline: string
  readonly venues: number
  readonly acts: number
  readonly note: string
  readonly headliners: readonly string[]
  /** two poster colourway seeds, used by the generated poster */
  readonly poster: { readonly bg: string; readonly fg: string; readonly accent: string }
}

export const editions: readonly Edition[] = [
  {
    year: 2026,
    tagline: 'One night that runs into the next',
    venues: 4,
    acts: 18,
    note: 'The fourth edition. Four venues along the water, from the grain terminal to the cold store.',
    headliners: ['NULL POINTER', 'CONCRETE ANGEL', '13TH FLOOR'],
    poster: { bg: '#0a0a0a', fg: '#ece9dd', accent: '#ceff1a' },
  },
  {
    year: 2025,
    tagline: 'Below sea level',
    venues: 3,
    acts: 15,
    note: 'The year Sublevel opened. Sold out in a weekend and we swore we would stay small anyway.',
    headliners: ['MERKUR', 'STATIC BLOOM', 'HET APPARAAT'],
    poster: { bg: '#ece9dd', fg: '#0a0a0a', accent: '#0a0a0a' },
  },
  {
    year: 2024,
    tagline: 'Two rooms, no roof',
    venues: 2,
    acts: 11,
    note: 'Rained the whole of Saturday. Nobody left. Widely agreed to be the best one.',
    headliners: ['DJ RUÏNE', 'LOW COUNTRY', 'TRACKSUIT'],
    poster: { bg: '#0a0a0a', fg: '#ceff1a', accent: '#ece9dd' },
  },
  {
    year: 2023,
    tagline: 'A test',
    venues: 1,
    acts: 6,
    note: 'One warehouse, 300 people, a rig borrowed from a friend. This is where it started.',
    headliners: ['DE NACHTWACHT', 'SIGNAL LOSS'],
    poster: { bg: '#141414', fg: '#ece9dd', accent: '#86847a' },
  },
]
