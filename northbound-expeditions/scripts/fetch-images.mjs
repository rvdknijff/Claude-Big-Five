/**
 * Northbound Expeditions — image fetcher
 *
 * Downloads photography into `public/images/` as optimised WebP and regenerates
 * `public/images/CREDITS.md` and `src/data/media.ts`.
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
  { key: 'hero', id: 'photo-1697222564085-6c3a135d0b46', w: 2000, h: 1180, fpY: 0.5,
    alt: 'A lone walker on a mountain ridge with peaks receding into the distance at sunset',
    credit: 'Adrià Sánchez Roqué', creditUrl: 'https://unsplash.com/@asr_optical' },
  { key: 'heroPortrait', id: 'photo-1697222564085-6c3a135d0b46', w: 1080, h: 1440, fpY: 0.5,
    alt: 'A lone walker on a mountain ridge with peaks receding into the distance at sunset',
    credit: 'Adrià Sánchez Roqué', creditUrl: 'https://unsplash.com/@asr_optical' },
  { key: 'groupHiking', id: 'photo-1621414050946-1b936a78491f', w: 1500, h: 1000,
    alt: 'A line of hikers walking uphill through moss and heather in the mountains',
    credit: 'Crispin Jones', creditUrl: 'https://unsplash.com/@cavespider' },
  { key: 'ridge', id: 'photo-1785058101111-7ad10b24d99b', w: 1500, h: 1000,
    alt: 'A person standing on a mountain ridge looking towards distant peaks',
    credit: 'Thomas Tygreat', creditUrl: 'https://unsplash.com/@thomastygreat' },
  { key: 'lofoten', id: 'photo-1516916950307-ae2b188c70c1', w: 1700, h: 1130,
    alt: 'The view from Volandstinden across the peaks of Lofoten, Norway',
    credit: 'Cyrill Hänni', creditUrl: 'https://unsplash.com/@cyrillhaenni' },
  { key: 'lofotenTent', id: 'photo-1579971043200-9bbde2f26006', w: 1600, h: 1067,
    alt: 'A small tent pitched on a summit in Lofoten under a pale night sky',
    credit: 'William Christen', creditUrl: 'https://unsplash.com/@bobzepplin' },
  { key: 'iceland', id: 'photo-1778872782874-22257be2fc9a', w: 1500, h: 940,
    alt: 'Three dramatic peaks rising above an open plain in the Icelandic highlands',
    credit: '35MM North', creditUrl: 'https://unsplash.com/@35mm_north' },
  { key: 'icelandVolcanic', id: 'photo-1767987501833-8c52105854f5', w: 1500, h: 1000,
    alt: 'Layers of volcanic hills in muted reds, greys and earth tones',
    credit: 'Danny Rienecker', creditUrl: 'https://unsplash.com/@danny_rienecker' },
  { key: 'icelandRiver', id: 'photo-1758461479768-bdbce375e005', w: 1600, h: 1067,
    alt: 'A river carving through black volcanic sand seen from above',
    credit: 'Jonatan Pie', creditUrl: 'https://unsplash.com/@r3dmax' },
  { key: 'lapland', id: 'photo-1636533676978-d42e9f4a8231', w: 1600, h: 1067,
    alt: 'A snow-covered forest and frozen river in northern Sweden',
    credit: 'Sofia Pettersson', creditUrl: 'https://unsplash.com/@sofiapettersson' },
  { key: 'laplandRiver', id: 'photo-1635792106034-20a7b625f962', w: 1600, h: 1000,
    alt: 'A river winding through snow-covered ground and trees',
    credit: 'Niklas Jonasson', creditUrl: 'https://unsplash.com/@niklasjonasson' },
  { key: 'skye', id: 'photo-1544944268-63c39b4a8c50', w: 1700, h: 1130,
    alt: 'Open Scottish wilderness under a heavy sky',
    credit: '0xdosa', creditUrl: 'https://unsplash.com/@theborklar' },
  { key: 'skyeStorr', id: 'photo-1560506796-d843f7cd01b2', w: 1500, h: 1000,
    alt: 'The rock pinnacles of the Old Man of Storr on the Isle of Skye',
    credit: 'Kyle Pasalskyj', creditUrl: 'https://unsplash.com/@kylepasalskyj' },
  { key: 'faroe', id: 'photo-1719778155031-7cfbc9b72b41', w: 1700, h: 1130,
    alt: 'The village of Tjørnuvík between steep cliffs in the Faroe Islands',
    credit: 'Joshua Kettle', creditUrl: 'https://unsplash.com/@joshuakettle' },
  { key: 'aurora', id: 'photo-1670370808824-1986df86f793', w: 1800, h: 1130,
    alt: 'The aurora borealis over a mountain landscape',
    credit: 'Jon Anders Dalan', creditUrl: 'https://unsplash.com/@jonandersdalan' },
  { key: 'campNight', id: 'photo-1783286595243-e80081e379c9', w: 1600, h: 1067,
    alt: 'A glowing tent in a mountain valley under a starry sky',
    credit: 'Onur Polat', creditUrl: 'https://unsplash.com/@onurpolatt' },
  { key: 'kayak', id: 'photo-1521336575822-6da63fb45455', w: 1700, h: 1130,
    alt: 'A sea kayak below steep valley sides and moody clouds on a fjord',
    credit: 'Benjamin Davies', creditUrl: 'https://unsplash.com/@bendavisual' },
  { key: 'arctic', id: 'photo-1585488657832-6f2cfb99a362', w: 1600, h: 1067,
    alt: 'A person looking out over a vast arctic landscape',
    credit: 'Nicolas Lafargue', creditUrl: 'https://unsplash.com/@nicolaslafargue' },
  { key: 'frozenLake', id: 'photo-1737860622746-7b862d8fe6f7', w: 1600, h: 1067,
    alt: 'Two people walking out onto a frozen lake at dusk',
    credit: 'Ed Wingate', creditUrl: 'https://unsplash.com/@ed_wingate' },
  { key: 'gear', id: 'photo-1648904803235-e0db84e93298', w: 1400, h: 1050,
    alt: 'A topographic map, compass and notebook laid out on a table',
    credit: 'Andrew Neel', creditUrl: 'https://unsplash.com/@andrewtneel' },
  { key: 'guideElin', id: 'photo-1785679339397-ad1bc1d1a26b', w: 1000, h: 1200, fpY: 0.35,
    alt: 'A guide in a winter jacket smiling in front of a snowy mountain view',
    credit: 'Kristina Bekher', creditUrl: 'https://unsplash.com/@ninjagexly' },
  { key: 'guideTom', id: 'photo-1598966739654-5e9a252d8c32', w: 1000, h: 1200, fpY: 0.35,
    alt: 'A guide in a green jacket smiling outdoors',
    credit: 'Ali Kazal', creditUrl: 'https://unsplash.com/@lureofadventure' },
  { key: 'guideMarek', id: 'photo-1603415526960-f7e0328c63b1', w: 1000, h: 1200, fpY: 0.35,
    alt: 'A guide in a dark jacket and cap',
    credit: 'Ben den Engelsen', creditUrl: 'https://unsplash.com/@bendenengelsen' },
]

function url({ id, w, h, fpY }) {
  const crop = fpY === undefined ? 'entropy' : `focalpoint&fp-x=0.5&fp-y=${fpY}`
  return `https://images.unsplash.com/${id}?fm=webp&q=58&fit=crop&crop=${crop}&w=${w}&h=${h}`
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
      console.log(`  ✓ ${shot.key}.webp  ${(buf.byteLength / 1024).toFixed(0)} KB`)
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
  console.log(`Fetching ${SHOTS.length} images → public/images/`)
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
  console.log('  ✓ src/data/media.ts')

  await writeFile(
    resolve(IMG_DIR, 'CREDITS.md'),
    `# Photo credits\n\nAll photography from [Unsplash](https://unsplash.com), used under the [Unsplash License](https://unsplash.com/license).\n\n` +
      `| File | Photographer | Source |\n|------|--------------|--------|\n` +
      SHOTS.map(
        (s) => `| \`${s.key}.webp\` | ${s.credit} | [${s.id}](https://unsplash.com/photos/${s.id}) |`,
      ).join('\n') +
      '\n',
  )
  console.log('  ✓ public/images/CREDITS.md')
}

main().catch((err) => {
  console.error('\nfetch-images failed:', err)
  process.exit(1)
})
