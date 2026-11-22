'use client'

import { useRef, useState } from 'react'

interface DemoVideoProps {
  /** File under /media/video/ in the Nacovate repo, without the extension. */
  src: string
  heading: string
  blurb: string
  /** Tailwind classes for the play button, so each demo keeps its palette. */
  buttonClass?: string
  frameClass?: string
}

/**
 * A short vertical clip inside a demo page.
 *
 * ⚠️ The files live in the **Nacovate repo** at `media/video/`, not in this project's
 * `public/`. They resolve on the deployed site because both are served from the same
 * origin; running this project standalone with `npm run dev` will show the poster frame
 * and fail to play. That is expected — see CLAUDE.md in the Nacovate repo.
 *
 * `preload="metadata"` gets a first frame to show without pulling the whole file, so a
 * visitor on mobile data pays for the video only if they ask for it.
 */
export function DemoVideo({
  src,
  heading,
  blurb,
  buttonClass = 'bg-white text-slate-900',
  frameClass = 'ring-1 ring-black/10',
}: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <div
        className={`relative aspect-[9/16] w-full max-w-[13rem] shrink-0 overflow-hidden rounded-2xl bg-black ${frameClass}`}
      >
        <video
          ref={ref}
          src={`/media/video/${src}.mp4#t=0.1`}
          preload="metadata"
          playsInline
          muted
          className="absolute inset-0 h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false)
            if (ref.current) ref.current.currentTime = 0
          }}
        />
        <button
          type="button"
          onClick={() => {
            const v = ref.current
            if (!v) return
            if (v.paused) void v.play().catch(() => {})
            else v.pause()
          }}
          aria-label={playing ? 'Pause the video' : 'Play the video'}
          className="absolute inset-0 grid place-items-center transition"
        >
          {!playing ? (
            <span className={`grid h-14 w-14 place-items-center rounded-full shadow-lg ${buttonClass}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5 h-6 w-6">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          ) : null}
        </button>
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-semibold">{heading}</h3>
        <p className="mt-2 text-sm leading-relaxed opacity-75">{blurb}</p>
        <p className="mt-3 text-[11px] font-medium uppercase tracking-wider opacity-45">
          Demo clip · 9:16 · made for the feed
        </p>
      </div>
    </div>
  )
}
