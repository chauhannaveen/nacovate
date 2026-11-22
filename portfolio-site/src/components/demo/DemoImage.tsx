const GRADIENTS = [
  'from-slate-200 via-slate-300 to-slate-400',
  'from-amber-100 via-stone-200 to-stone-400',
  'from-sky-100 via-slate-200 to-slate-400',
  'from-stone-200 via-amber-100 to-stone-400',
  'from-teal-100 via-slate-200 to-slate-400',
  'from-rose-100 via-stone-200 to-stone-400',
  'from-indigo-100 via-slate-200 to-slate-400',
  'from-emerald-100 via-stone-200 to-stone-400',
]

const MOTIFS: Record<string, string> = {
  house: 'M3 11.5 12 4l9 7.5M5.5 10v10h13V10M10 20v-5.5h4V20',
  room: 'M2 7h20v13H2zM2 7l10-5 10 5M7 20v-7h4v7',
  street: 'M2 20h20M6 20V9h5v11M13 20V5h5v15M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1',
  gym: 'M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8',
  plan: 'M3 3h18v18H3zM3 10h18M12 10v11M7 3v7',
  clinic: 'M12 7v10M7 12h10M4 4h16v16H4z',
  tooth: 'M8 3c-2 0-3 1.5-3 4 0 3 1 5 1.5 9 .3 2 2.5 2.2 2.8 0L10 12h4l.7 4c.3 2.2 2.5 2 2.8 0 .5-4 1.5-6 1.5-9 0-2.5-1-4-3-4-1.5 0-2 .7-4 .7S9.5 3 8 3Z',
  skyline: 'M2 21h20M4 21V9h5v12M11 21V4h6v17M6 12h1M6 15h1M13 8h2M13 12h2M13 16h2',
}

export interface DemoImageProps {
  /**
   * Path to a real image, relative to the site root — e.g. `/demo/aravali/hero.jpg`.
   * Files live in `demo/<slug>/` in the repo above this project, never in `public/`.
   * When absent, a drawn placeholder is shown,
   * so the demos work before any photography exists and improve the moment it does.
   */
  src?: string
  /** Describes the picture for screen readers and for the visible caption. */
  label?: string
  motif?: keyof typeof MOTIFS
  variant?: number
  className?: string
  /** Renders the caption chip over the image. */
  showCaption?: boolean
  priority?: boolean
}

export function DemoImage({
  src,
  label,
  motif = 'house',
  variant = 0,
  className = 'aspect-[4/3]',
  showCaption = false,
}: DemoImageProps) {
  const caption = showCaption && label ? (
    <span className="pointer-events-none absolute bottom-2.5 left-2.5 rounded bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
      {label}
    </span>
  ) : null

  if (src) {
    return (
      <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
        {/*
          A plain <img> rather than next/image: this project is a static export with
          image optimisation disabled, so next/image would add markup and a runtime for
          no benefit on what are decorative assets served from the same origin.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label ?? ''} loading="lazy" className="h-full w-full object-cover" />
        {caption}
      </div>
    )
  }

  const gradient = GRADIENTS[variant % GRADIENTS.length]

  return (
    <div
      role="img"
      aria-label={label ? `Placeholder image: ${label}` : 'Placeholder image'}
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      {/* Faint diagonal hatch — stops large placeholder areas reading as a loading error. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 9px)',
        }}
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 text-slate-900/20"
      >
        <path d={MOTIFS[motif]} stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {caption}
    </div>
  )
}
