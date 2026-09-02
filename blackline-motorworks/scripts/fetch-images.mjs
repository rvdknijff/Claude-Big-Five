/**
 * Blackline Motorworks — image fetcher
 *
 * Downloads the photography used by the site into `public/images/` as optimised
 * WebP, and (re)generates:
 *   - public/images/CREDITS.md      — attribution for every photo
 *   - src/data/media.ts             — typed { src, width, height, alt } manifest
 *
 * All photos are from Unsplash and free to use under the Unsplash License.
 * To swap an image: change the `id` (Unsplash photo id) or crop below and rerun
 *   npm run fetch:images
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const IMG_DIR = resolve(root, 'public/images')
const DATA_DIR = resolve(root, 'src/data')

/** @typedef {{ key: string, id: string, w: number, h: number, alt: string, credit: string, creditUrl: string, fpY?: number }} Shot */

/** @type {Shot[]} */
const SHOTS = [
  { key: 'hero', id: 'photo-1633348571818-60191bf2f3cb', w: 2000, h: 1050, fpY: 0.42,
    alt: 'The illuminated rear light bar of a Porsche 911 Carrera in low light',
    credit: 'Deniz Demirci', creditUrl: 'https://unsplash.com/@ddography' },
  { key: 'heroPortrait', id: 'photo-1633348571818-60191bf2f3cb', w: 1080, h: 1440, fpY: 0.34,
    alt: 'The illuminated rear light bar of a Porsche 911 Carrera in low light',
    credit: 'Deniz Demirci', creditUrl: 'https://unsplash.com/@ddography' },
  { key: 'workshopWide', id: 'photo-1727893119356-1702fe921cf9', w: 1500, h: 940,
    alt: 'Technicians working on cars in a bright, open workshop bay',
    credit: 'Mehmet Talha Onuk', creditUrl: 'https://unsplash.com/@mtonuk' },
  { key: 'workshopHands', id: 'photo-1619642751034-765dfdf7c58e', w: 1200, h: 1500,
    alt: 'A technician’s hands working on a car engine with a wrench',
    credit: 'Christian Buehner', creditUrl: 'https://unsplash.com/@christianbuehner' },
  { key: 'workshopEngine', id: 'photo-1625047509248-ec889cbff17f', w: 1280, h: 960,
    alt: 'A technician in a grey uniform inspecting a car engine',
    credit: 'Kate Ibragimova', creditUrl: 'https://unsplash.com/@kateibragimova' },
  { key: 'workshopAmbient', id: 'photo-1783207938137-286e6df9fecf', w: 1680, h: 1120,
    alt: 'A car in a dark workshop lit by a single shaft of daylight',
    credit: 'Bruno Guerrero', creditUrl: 'https://unsplash.com/@pray4bokeh' },
  { key: 'project992', id: 'photo-1615839399574-c842427f9862', w: 1760, h: 1140,
    alt: 'A dark blue 992-generation Porsche 911 Carrera, rear three-quarter, in a workshop',
    credit: 'Grégoire Céas', creditUrl: 'https://unsplash.com/@greg05200' },
  { key: 'projectM3', id: 'photo-1707626766720-fac33f6dbfb3', w: 1600, h: 1120,
    alt: 'A BMW M3 seen in side profile',
    credit: 'Kenan Kukalj', creditUrl: 'https://unsplash.com/@kenankukalj' },
  { key: 'projectRs6', id: 'photo-1762028160438-191f46f4d0f8', w: 1600, h: 1120,
    alt: 'A dark blue Audi RS6 Avant parked outdoors',
    credit: 'Willian Cittadin', creditUrl: 'https://unsplash.com/@_willpic' },
  { key: 'projectAmgGt', id: 'photo-1740001574106-327a951ee247', w: 1600, h: 1120,
    alt: 'A black Mercedes-AMG GT parked inside a garage',
    credit: 'Anil Baki Durmus', creditUrl: 'https://unsplash.com/@anldrms' },
  { key: 'detailBrakes', id: 'photo-1753908731588-02cfa8534189', w: 1000, h: 1250,
    alt: 'A red brake caliper behind a silver wheel',
    credit: 'Rob Wingate', creditUrl: 'https://unsplash.com/@robwingate' },
  { key: 'detailExhaust', id: 'photo-1783739486822-29569e1942f5', w: 1000, h: 1250,
    alt: 'Twin carbon-fibre exhaust tips on a performance car',
    credit: 'Myron Mott', creditUrl: 'https://unsplash.com/@s2killa' },
  { key: 'detailSuspension', id: 'photo-1785338215401-51c15e4037b8', w: 1000, h: 1250,
    alt: 'A red coil spring and black damper from an adjustable suspension unit',
    credit: 'Deepak Singh', creditUrl: 'https://unsplash.com/@123sani_qwe' },
  { key: 'engineDetail', id: 'photo-1787509449681-7bf6a6193b60', w: 1280, h: 940,
    alt: 'A BMW M engine bay fitted with a carbon-fibre strut brace',
    credit: 'Ian Edokov', creditUrl: 'https://unsplash.com/@edokov95' },
  { key: 'dynoBay', id: 'photo-1729810915640-d91054d2186d', w: 1500, h: 1000,
    alt: 'An engine bay photographed with the hood open',
    credit: 'Kailun Zhang', creditUrl: 'https://unsplash.com/@kailun2019' },
  { key: 'teamLead', id: 'photo-1568236700632-c0cfc08f486a', w: 960, h: 1200,
    alt: 'A race engineer inspecting a drivetrain component',
    credit: 'Glenn Hansen', creditUrl: 'https://unsplash.com/@hansenhouse' },
  { key: 'teamTech', id: 'photo-1767339736147-676bd47eddb6', w: 960, h: 1200,
    alt: 'A technician dismantling engine parts on the workshop floor',
    credit: 'Zoshua Colah', creditUrl: 'https://unsplash.com/@zoshuacolah' },
  { key: 'teamCalibration', id: 'photo-1581091224003-01e7c2e69f6f', w: 960, h: 1200,
    alt: 'An electronics engineer running vehicle diagnostics on a laptop',
    credit: 'ThisisEngineering', creditUrl: 'https://unsplash.com/@thisisengineering' },
  { key: 'track', id: 'photo-1620308545933-b47a5449ebec', w: 1600, h: 900,
    alt: 'A Porsche 911 on a circuit during a track day',
    credit: 'Wes Tindel', creditUrl: 'https://unsplash.com/@lonestarexotic' },
]

function url({ id, w, h, fpY }) {
  const crop = fpY === undefined ? 'entropy' : `focalpoint&fp-x=0.5&fp-y=${fpY}`
  return `https://images.unsplash.com/${id}?fm=webp&q=68&fit=crop&crop=${crop}&w=${w}&h=${h}`
}

async function download(shot) {
  const dest = resolve(IMG_DIR, `${shot.key}.webp`)
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url(shot))
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      if (buf.byteLength < 2000) throw new Error(`suspiciously small (${buf.byteLength} bytes)`)
      await writeFile(dest, buf)
      console.log(`  ✓ ${shot.key}.webp  ${(buf.byteLength / 1024).toFixed(0)} KB`)
      return
    } catch (err) {
      console.warn(`  … ${shot.key} attempt ${attempt} failed: ${err.message}`)
      if (attempt === 3) throw err
      await new Promise((r) => setTimeout(r, 800 * attempt))
    }
  }
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true })
  await mkdir(DATA_DIR, { recursive: true })

  console.log(`Fetching ${SHOTS.length} images →  public/images/`)
  for (const shot of SHOTS) await download(shot)

  const media = Object.fromEntries(
    SHOTS.map((s) => [s.key, { src: `/images/${s.key}.webp`, width: s.w, height: s.h, alt: s.alt }]),
  )
  const ts =
    `// Generated by scripts/fetch-images.mjs — do not edit by hand.\n` +
    `// Run \`npm run fetch:images\` to refresh.\n\n` +
    `export interface MediaAsset {\n  readonly src: string\n  readonly width: number\n  readonly height: number\n  readonly alt: string\n}\n\n` +
    `export const media = ${JSON.stringify(media, null, 2)} as const satisfies Record<string, MediaAsset>\n\n` +
    `export type MediaKey = keyof typeof media\n`
  await writeFile(resolve(DATA_DIR, 'media.ts'), ts)
  console.log('  ✓ src/data/media.ts')

  const credits =
    `# Photo credits\n\n` +
    `All photography from [Unsplash](https://unsplash.com), used under the [Unsplash License](https://unsplash.com/license).\n` +
    `Images are fetched and optimised by \`scripts/fetch-images.mjs\`.\n\n` +
    `| File | Photographer | Source |\n|------|--------------|--------|\n` +
    SHOTS.map(
      (s) => `| \`${s.key}.webp\` | ${s.credit} | [${s.id}](https://unsplash.com/photos/${s.id}) |`,
    ).join('\n') +
    `\n`
  await writeFile(resolve(IMG_DIR, 'CREDITS.md'), credits)
  console.log('  ✓ public/images/CREDITS.md')
}

main().catch((err) => {
  console.error('\nfetch-images failed:', err)
  process.exit(1)
})
