/**
 * NIGHTSHIFT — image fetcher
 *
 * Downloads photography into `public/images/` as optimised WebP and regenerates
 * `public/images/CREDITS.md` and `src/data/media.ts`. Images are displayed
 * monochrome (CSS), so they are fetched fairly small.
 * Photos are from Unsplash (Unsplash License). Change an `id` / crop and run
 *   npm run fetch:images
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const IMG_DIR = resolve(root, 'public/images')
const DATA_DIR = resolve(root, 'src/data')

const SHOTS = [
  { key: 'hero', id: 'photo-1470229722913-7c0e2dbbafd3', w: 1900, h: 1200, fpY: 0.45,
    alt: 'A dense festival crowd seen from behind the decks under stage light',
    credit: 'Yvette de Wit', creditUrl: 'https://unsplash.com/@yvettedewit' },
  { key: 'heroPortrait', id: 'photo-1470229722913-7c0e2dbbafd3', w: 1080, h: 1500, fpY: 0.5,
    alt: 'A dense festival crowd seen from behind the decks under stage light',
    credit: 'Yvette de Wit', creditUrl: 'https://unsplash.com/@yvettedewit' },
  { key: 'crowd1', id: 'photo-1665035212282-3e117d618b36', w: 1400, h: 1000,
    alt: 'A festival crowd photographed from above',
    credit: 'Danny Howe', creditUrl: 'https://unsplash.com/@dannyhowe' },
  { key: 'crowd2', id: 'photo-1516450360452-9312f5e86fc7', w: 1400, h: 1000,
    alt: 'A crowd with raised hands at a concert',
    credit: 'Aleksandr Popov', creditUrl: 'https://unsplash.com/@5tep5' },
  { key: 'smoke', id: 'photo-1470229538611-16ba8c7ffbd7', w: 1400, h: 1000,
    alt: 'Stage lights cutting through heavy smoke',
    credit: 'Yvette de Wit', creditUrl: 'https://unsplash.com/@yvettedewit' },
  { key: 'redroom', id: 'photo-1555086156-e6c7353d283f', w: 1400, h: 1000,
    alt: 'Silhouettes of people in a dark room lit by intense red light',
    credit: 'Aleksandr Popov', creditUrl: 'https://unsplash.com/@5tep5' },
  { key: 'djFence', id: 'photo-1768885514803-c002833edcb3', w: 1400, h: 1000,
    alt: 'A DJ performing behind a chain-link fence under green light',
    credit: 'Rendy Novantino', creditUrl: 'https://unsplash.com/@novantino' },
  { key: 'djParty', id: 'photo-1589421425345-5bdf72b361b2', w: 1400, h: 1000,
    alt: 'A DJ playing to a packed room',
    credit: 'Valentin Houee', creditUrl: 'https://unsplash.com/@veeuoh' },
  { key: 'laserGreen', id: 'photo-1599739291413-87017131da6a', w: 1400, h: 1000,
    alt: 'A green light beam in darkness',
    credit: 'David von Diemar', creditUrl: 'https://unsplash.com/@davidvondiemar' },
  { key: 'lasers', id: 'photo-1580767675939-cb83e83500af', w: 1400, h: 1000,
    alt: 'Laser beams over a crowd',
    credit: 'Michal Czyz', creditUrl: 'https://unsplash.com/@digitalmike' },
  { key: 'concreteA', id: 'photo-1546414701-81cc6963c67f', w: 1300, h: 1000,
    alt: 'A brutalist concrete building',
    credit: 'Simone Hutsch', creditUrl: 'https://unsplash.com/@heysupersimi' },
  { key: 'concreteB', id: 'photo-1681228777355-b44db467454e', w: 1300, h: 1000,
    alt: 'A concrete building in black and white',
    credit: 'Fausto Ribeiro', creditUrl: 'https://unsplash.com/@shoku_shoku' },
  { key: 'bunker', id: 'photo-1591394197887-b27e1ba3b2f9', w: 1800, h: 620,
    alt: 'The long facade of a concrete bunker',
    credit: 'Michael Jasmund', creditUrl: 'https://unsplash.com/@jasmund' },
  { key: 'projection', id: 'photo-1771714430881-3ed05b032904', w: 1400, h: 1000,
    alt: 'An abstract geometric pattern projected onto a dark surface',
    credit: 'Jan Oblak', creditUrl: 'https://unsplash.com/@joblak01' },
  { key: 'neonRings', id: 'photo-1786521641447-6c6b56737e92', w: 1400, h: 1000,
    alt: 'Concentric green and blue neon light rings around a dark centre',
    credit: 'Samuel Isaacs', creditUrl: 'https://unsplash.com/@sisacreative' },
  { key: 'venueDark', id: 'photo-1582008558029-34f157a939b5', w: 1400, h: 1000,
    alt: 'The dark interior of a nightclub',
    credit: 'Hendo Wang', creditUrl: 'https://unsplash.com/@hendoo' },
  { key: 'strobe', id: 'photo-1574155376612-bfa4ed8aabfd', w: 1400, h: 1000,
    alt: 'Red light across a DJ set',
    credit: 'Antoine J.', creditUrl: 'https://unsplash.com/@antoinejulien' },
]

function url({ id, w, h, fpY }) {
  const crop = fpY === undefined ? 'entropy' : `focalpoint&fp-x=0.5&fp-y=${fpY}`
  return `https://images.unsplash.com/${id}?fm=webp&q=60&fit=crop&crop=${crop}&w=${w}&h=${h}`
}

async function download(shot) {
  const dest = resolve(IMG_DIR, `${shot.key}.webp`)
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url(shot))
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      if (buf.byteLength < 2000) throw new Error(`too small (${buf.byteLength}b)`)
      await writeFile(dest, buf)
      console.log(`  + ${shot.key}.webp  ${(buf.byteLength / 1024).toFixed(0)} KB`)
      return
    } catch (err) {
      console.warn(`  … ${shot.key} attempt ${attempt}: ${err.message}`)
      if (attempt === 3) throw err
      await new Promise((r) => setTimeout(r, 800 * attempt))
    }
  }
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true })
  await mkdir(DATA_DIR, { recursive: true })
  console.log(`Fetching ${SHOTS.length} images -> public/images/`)
  for (const shot of SHOTS) await download(shot)

  const media = Object.fromEntries(
    SHOTS.map((s) => [s.key, { src: `/images/${s.key}.webp`, width: s.w, height: s.h, alt: s.alt }]),
  )
  await writeFile(
    resolve(DATA_DIR, 'media.ts'),
    `// Generated by scripts/fetch-images.mjs — do not edit by hand.\n` +
      `export interface MediaAsset {\n  readonly src: string\n  readonly width: number\n  readonly height: number\n  readonly alt: string\n}\n\n` +
      `export const media = ${JSON.stringify(media, null, 2)} as const satisfies Record<string, MediaAsset>\n\n` +
      `export type MediaKey = keyof typeof media\n`,
  )
  console.log('  + src/data/media.ts')

  await writeFile(
    resolve(IMG_DIR, 'CREDITS.md'),
    `# Photo credits\n\nAll photography from [Unsplash](https://unsplash.com), used under the [Unsplash License](https://unsplash.com/license). Displayed monochrome.\n\n` +
      `| File | Photographer | Source |\n|------|--------------|--------|\n` +
      SHOTS.map(
        (s) => `| \`${s.key}.webp\` | ${s.credit} | [${s.id}](https://unsplash.com/photos/${s.id}) |`,
      ).join('\n') +
      '\n',
  )
  console.log('  + public/images/CREDITS.md')
}

main().catch((err) => {
  console.error('\nfetch-images failed:', err)
  process.exit(1)
})
