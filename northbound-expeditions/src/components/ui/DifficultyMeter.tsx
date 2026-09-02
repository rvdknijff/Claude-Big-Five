import { difficultyLabel } from '@/data/expeditions'
import { cn } from '@/lib/cn'

interface DifficultyMeterProps {
  level: number
  className?: string
  showLabel?: boolean
  tone?: 'dark' | 'light'
}

export function DifficultyMeter({ level, className, showLabel = true, tone = 'dark' }: DifficultyMeterProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="flex gap-1" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={cn(
              'h-3.5 w-1.5',
              i <= level
                ? 'bg-signal'
                : tone === 'light'
                  ? 'bg-paper/25'
                  : 'bg-ink/15',
            )}
          />
        ))}
      </span>
      {showLabel && (
        <span
          className={cn(
            'font-body text-xs font-medium',
            tone === 'light' ? 'text-paper/80' : 'text-ink-soft',
          )}
        >
          <span className="sr-only">Difficulty {level} of 5: </span>
          {difficultyLabel[level]}
        </span>
      )}
    </div>
  )
}
