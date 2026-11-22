'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { DemoImage, type DemoImageProps } from './DemoImage'

export interface GalleryShot extends Pick<DemoImageProps, 'src' | 'motif' | 'variant'> {
  label: string
}

interface ImageGalleryProps {
  shots: GalleryShot[]
  /** Tailwind classes for the main frame. */
  frameClass?: string
  /** Ring/active colour for the selected thumbnail, so each demo keeps its palette. */
  accentClass?: string
  /** Optional badge over the image, e.g. "Virtual tour". */
  badge?: string
}

/**
 * The property-gallery pattern: one large frame, a thumbnail strip, arrows, a counter,
 * arrow-key support and swipe. Photos are the single most-used feature on a listing
 * page, so this is the component that has to feel right on a phone.
 */
export function ImageGallery({
  shots,
  frameClass = 'aspect-[4/3] sm:aspect-[16/10]',
  accentClass = 'ring-slate-900',
  badge,
}: ImageGalleryProps) {
  const [index, setIndex] = useState(0)
  const touchX = useRef<number | null>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + shots.length) % shots.length),
    [shots.length]
  )

  // Arrow keys only once the gallery has focus — a page-wide listener would hijack
  // arrow keys from anyone scrolling the rest of the page with the keyboard.
  useEffect(() => {
    const node = frameRef.current
    if (!node) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    }
    node.addEventListener('keydown', onKey)
    return () => node.removeEventListener('keydown', onKey)
  }, [go])

  // Keep the highlighted thumbnail on screen. Without this, arrowing past the third
  // photo on a phone leaves the active thumbnail scrolled out of the strip.
  useEffect(() => {
    const strip = stripRef.current
    const active = strip?.children[index] as HTMLElement | undefined
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
  }, [index])

  const current = shots[index]

  return (
    // `min-w-0`: as a grid item this defaults to min-width:auto, and the thumbnail
    // strip's intrinsic width then widens the whole column past a phone screen.
    <div className="min-w-0">
      <div
        ref={frameRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Photo gallery"
        className="relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        <DemoImage
          src={current.src}
          label={current.label}
          motif={current.motif}
          variant={current.variant ?? index}
          className={frameClass}
          showCaption
        />

        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm">
            {badge}
          </span>
        ) : null}

        <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white tabular-nums">
          {index + 1} / {shots.length}
        </span>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          title="Previous photo"
          className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow transition hover:bg-white"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
            <path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          title="Next photo"
          className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow transition hover:bg-white"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
            <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div ref={stripRef} className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
        {shots.map((shot, i) => (
          <button
            key={shot.label + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${shot.label}`}
            aria-current={i === index}
            className={`shrink-0 overflow-hidden rounded-lg transition ${
              i === index ? `ring-2 ring-offset-2 ${accentClass}` : 'opacity-60 hover:opacity-100'
            }`}
          >
            <DemoImage
              src={shot.src}
              label={shot.label}
              motif={shot.motif}
              variant={shot.variant ?? i}
              className="h-16 w-24"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
