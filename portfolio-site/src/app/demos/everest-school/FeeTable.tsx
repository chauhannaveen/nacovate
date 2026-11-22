'use client'

import { useState } from 'react'

interface Band {
  label: string
  admission: number
  term: number
  annual: number
  transport: number
}

const BANDS: Band[] = [
  { label: 'Nursery – UKG', admission: 25_000, term: 18_500, annual: 74_000, transport: 1_400 },
  { label: 'Class I – V', admission: 28_000, term: 21_000, annual: 84_000, transport: 1_600 },
  { label: 'Class VI – VIII', admission: 30_000, term: 24_500, annual: 98_000, transport: 1_800 },
  { label: 'Class IX – X', admission: 32_000, term: 27_000, annual: 108_000, transport: 1_800 },
  { label: 'Class XI – XII (Science)', admission: 35_000, term: 32_000, annual: 128_000, transport: 2_000 },
  { label: 'Class XI – XII (Commerce)', admission: 35_000, term: 29_500, annual: 118_000, transport: 2_000 },
]

const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`

/**
 * Publishing the fee structure is the whole point of this page.
 *
 * Almost no Indian school site does it — parents are made to visit the office to be told
 * a number, which filters out the parents who would have been a fit and annoys the ones
 * who show up. A table and a total removes a week from the admission cycle.
 */
export function FeeTable() {
  const [i, setI] = useState(1)
  const [bus, setBus] = useState(true)
  const b = BANDS[i]
  const firstYear = b.admission + b.annual + (bus ? b.transport * 10 : 0)

  return (
    <div>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {BANDS.map((band, idx) => (
          <button
            key={band.label}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={i === idx}
            className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition ${
              i === idx
                ? 'bg-everest-500 text-white'
                : 'bg-white text-everest-800 ring-1 ring-everest-200 hover:ring-everest-500/40'
            }`}
          >
            {band.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <dl className="divide-y divide-everest-100 overflow-hidden rounded-2xl bg-white ring-1 ring-everest-200">
          {[
            ['One-time admission fee', b.admission, 'Charged once, on joining'],
            ['Tuition — per term', b.term, 'Three terms a year'],
            ['Tuition — full year', b.annual, 'If paid annually, saves one term&rsquo;s late fee'],
            ['Transport — per month', b.transport, 'Optional, varies by route distance'],
          ].map(([label, value, note]) => (
            <div key={label as string} className="flex items-center justify-between gap-4 px-5 py-4">
              <div className="min-w-0">
                <dt className="font-semibold text-everest-900">{label as string}</dt>
                <dd className="mt-0.5 text-[13px] text-slate-500" dangerouslySetInnerHTML={{ __html: note as string }} />
              </div>
              <span className="shrink-0 font-semibold text-everest-500 tabular-nums">
                {inr(value as number)}
              </span>
            </div>
          ))}
        </dl>

        <div className="rounded-2xl bg-everest-500 p-6 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/65">
            First-year total · {b.label}
          </p>
          <p aria-live="polite" className="mt-1.5 text-3xl font-bold tabular-nums sm:text-4xl">
            {inr(firstYear)}
          </p>
          <label className="mt-5 flex cursor-pointer items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              checked={bus}
              onChange={(e) => setBus(e.target.checked)}
              className="h-4 w-4 rounded border-white/40 accent-everest-gold"
            />
            Include school transport (10 months)
          </label>
          <p className="mt-5 border-t border-white/20 pt-4 text-[13px] leading-relaxed text-white/75">
            That is everything. No separate charge for books, uniform stitching, the annual day,
            exam fees, lab use or the sports kit — those are all inside the figures above. If a
            school will not tell you this number before you visit, ask yourself why.
          </p>
        </div>
      </div>
    </div>
  )
}
