import { useMemo, useState } from 'react'
import { sets, getArtist } from '@/data/lineup'
import { venues } from '@/data/venues'
import { festival, type DayId, type StageId } from '@/data/festival'
import { cn } from '@/lib/cn'

const DOORS_MIN = 20 * 60
const TOTAL_MIN = 11 * 60 // 20:00 -> 07:00

function toOffset(t: string): number {
  const [h, m] = t.split(':').map(Number)
  const abs = (h < 14 ? h + 24 : h) * 60 + m
  return abs - DOORS_MIN
}

const hours = Array.from({ length: 12 }, (_, i) => (20 + i) % 24)

export function TimetableGrid() {
  const [day, setDay] = useState<DayId>('FRI')
  const [mobileStage, setMobileStage] = useState<StageId>('TERMINAL')

  const rows = useMemo(
    () =>
      sets
        .filter((s) => s.day === day)
        .map((s) => {
          const artist = getArtist(s.artist)
          const b2b = s.b2b ? getArtist(s.b2b) : undefined
          return {
            ...s,
            name: b2b ? `${artist?.name} B2B ${b2b.name}` : (artist?.name ?? s.artist),
            genre: artist?.genre ?? '',
            top: toOffset(s.start),
            len: toOffset(s.end) - toOffset(s.start),
          }
        }),
    [day],
  )

  const scale = 1.15 // px per minute (desktop)

  return (
    <div>
      {/* day toggle */}
      <div role="group" aria-label="Choose day" className="inline-flex border-2 border-bone">
        {(['FRI', 'SAT'] as DayId[]).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDay(d)}
            aria-pressed={day === d}
            className={cn(
              'px-6 py-3 font-display text-xl font-extrabold uppercase tracking-[-0.02em] transition-colors',
              day === d ? 'bg-acid text-black' : 'bg-black text-bone hover:bg-bone hover:text-black',
            )}
          >
            {d === 'FRI' ? 'Friday 17' : 'Saturday 18'}
          </button>
        ))}
      </div>

      {/* ---------- desktop grid ---------- */}
      <div className="mt-8 hidden overflow-x-auto md:block">
        <div className="grid min-w-[52rem] grid-cols-[4rem_repeat(4,1fr)] border-2 border-bone">
          {/* header row */}
          <div className="sticky top-[3.25rem] z-20 border-b-2 border-r-2 border-bone bg-near" />
          {venues.map((v) => (
            <div
              key={v.id}
              className="sticky top-[3.25rem] z-20 border-b-2 border-l-2 border-bone bg-near px-3 py-3 first:border-l-0"
            >
              <p className="font-display text-sm font-extrabold uppercase leading-none tracking-[-0.02em] text-acid">
                {v.code}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase text-ash">{v.sound}</p>
            </div>
          ))}

          {/* time gutter */}
          <div className="relative border-r-2 border-bone" style={{ height: TOTAL_MIN * scale }}>
            {hours.map((h, i) => (
              <div
                key={h}
                className="absolute left-0 right-0 border-t border-line pl-2 font-mono text-[0.62rem] text-ash"
                style={{ top: i * 60 * scale }}
              >
                {String(h).padStart(2, '0')}:00
              </div>
            ))}
          </div>

          {/* stage columns */}
          {venues.map((v) => (
            <div
              key={v.id}
              className="relative border-l-2 border-line first:border-l-0"
              style={{ height: TOTAL_MIN * scale }}
            >
              {hours.map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 border-t border-line/60"
                  style={{ top: i * 60 * scale }}
                />
              ))}
              {rows
                .filter((r) => r.stage === v.id)
                .map((r) => (
                  <SetBlock key={`${r.start}-${r.artist}`} r={r} scale={scale} />
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- mobile: one stage at a time ---------- */}
      <div className="mt-8 md:hidden">
        <div className="flex flex-wrap gap-2">
          {venues.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setMobileStage(v.id)}
              aria-pressed={mobileStage === v.id}
              className={cn(
                'border-2 px-3 py-1.5 font-mono text-xs font-bold uppercase',
                mobileStage === v.id
                  ? 'border-acid bg-acid text-black'
                  : 'border-line text-bone',
              )}
            >
              {v.code}
            </button>
          ))}
        </div>
        <ul className="mt-4 border-t-2 border-bone">
          {rows
            .filter((r) => r.stage === mobileStage)
            .sort((a, b) => a.top - b.top)
            .map((r) => (
              <li
                key={`${r.start}-${r.artist}`}
                className="flex items-baseline justify-between gap-3 border-b-2 border-line py-3"
              >
                <span>
                  <span className="block font-display text-base font-extrabold uppercase leading-tight tracking-[-0.02em]">
                    {r.name}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase text-ash">{r.genre}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-acid">
                  {r.start}–{r.end}
                </span>
              </li>
            ))}
        </ul>
      </div>

      <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ash">
        Doors {festival.doors} · last set ends {festival.close} · times may still shift
      </p>
    </div>
  )
}

function SetBlock({
  r,
  scale,
}: {
  r: { name: string; genre: string; top: number; len: number }
  scale: number
}) {
  return (
    <div
      className="group absolute inset-x-1 border border-line bg-black p-2 transition-colors hover:border-acid hover:bg-near"
      style={{ top: r.top * scale + 1, height: r.len * scale - 2 }}
    >
      <p className="font-display text-[0.8rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-bone group-hover:text-acid">
        {r.name}
      </p>
      {r.len >= 90 && (
        <p className="mt-1 font-mono text-[0.58rem] uppercase text-ash">{r.genre}</p>
      )}
    </div>
  )
}
