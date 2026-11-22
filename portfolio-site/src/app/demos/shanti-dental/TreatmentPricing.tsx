'use client'

import { useState } from 'react'

interface Treatment {
  name: string
  from: number
  to: number
  note: string
  emi?: boolean
}

/**
 * Published price ranges. Indian patients overwhelmingly ask "kitna lagega?" before
 * anything else, and most clinic sites refuse to answer it — so putting real ranges on
 * the page, with the no-cost EMI line, removes the single biggest reason someone closes
 * the tab and rings a different clinic.
 */
const TREATMENTS: Record<string, Treatment[]> = {
  General: [
    { name: 'Consultation & check-up', from: 0, to: 0, note: 'Free, including OPG X-ray if needed' },
    { name: 'Scaling & polishing', from: 1200, to: 2000, note: 'Single sitting, about 40 minutes' },
    { name: 'Tooth filling (composite)', from: 1500, to: 3500, note: 'Per tooth, tooth-coloured' },
    { name: 'Extraction', from: 1500, to: 4000, note: 'Simple to surgical' },
  ],
  'Root canal': [
    { name: 'RCT — front tooth', from: 4500, to: 6500, note: 'Usually 2 sittings' },
    { name: 'RCT — molar', from: 6500, to: 9000, note: 'Rotary, single or two sittings' },
    { name: 'Crown — metal ceramic', from: 4000, to: 6000, note: 'After RCT', emi: true },
    { name: 'Crown — zirconia', from: 9000, to: 14000, note: 'Natural look, 10-year warranty', emi: true },
  ],
  Braces: [
    { name: 'Metal braces', from: 30000, to: 45000, note: '18–24 months, all visits included', emi: true },
    { name: 'Ceramic braces', from: 45000, to: 65000, note: 'Tooth-coloured brackets', emi: true },
    { name: 'Clear aligners', from: 90000, to: 180000, note: 'Removable, scan-based', emi: true },
  ],
  Implants: [
    { name: 'Single implant', from: 25000, to: 45000, note: 'Includes crown, Korean/Swiss options', emi: true },
    { name: 'Full-mouth (per arch)', from: 180000, to: 320000, note: 'All-on-4 or All-on-6', emi: true },
  ],
}

const TABS = Object.keys(TREATMENTS)

const inr = (n: number) =>
  n === 0 ? 'Free' : `₹${n.toLocaleString('en-IN')}`

export function TreatmentPricing() {
  const [tab, setTab] = useState(TABS[0])

  return (
    <div>
      <div role="tablist" aria-label="Treatment categories" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition ${
              tab === t
                ? 'bg-shanti-600 text-white'
                : 'bg-white text-shanti-900 ring-1 ring-shanti-100 hover:ring-shanti-500/40'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-5 divide-y divide-shanti-100 overflow-hidden rounded-2xl bg-white ring-1 ring-shanti-100">
        {TREATMENTS[tab].map((t) => (
          <li key={t.name} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-shanti-900">
                {t.name}
                {t.emi ? (
                  <span className="ml-2 rounded bg-shanti-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-shanti-600">
                    No-cost EMI
                  </span>
                ) : null}
              </p>
              <p className="mt-0.5 text-[13px] text-slate-500">{t.note}</p>
            </div>
            <p className="shrink-0 font-semibold text-shanti-700 sm:text-right">
              {t.from === 0 ? 'Free' : `${inr(t.from)} – ${inr(t.to)}`}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[13px] leading-relaxed text-slate-500">
        Ranges, not estimates pulled out of the air — the final figure depends on what the X-ray
        shows, and we tell you before we start, not after. No-cost EMI available from 3 to 12 months
        on treatments above ₹10,000.
      </p>
    </div>
  )
}
