'use client'

import { useState } from 'react'

interface Space {
  suite: string
  floor: number
  sqft: number
  type: 'Office' | 'Retail' | 'Flex'
  rate: number
  available: string
  term: string
  status: 'Available' | 'Available soon' | 'Under offer'
}

const SPACES: Space[] = [
  { suite: '210', floor: 2, sqft: 1_850, type: 'Office', rate: 32, available: 'Immediately', term: '3–5 yrs', status: 'Available' },
  { suite: '305', floor: 3, sqft: 4_200, type: 'Office', rate: 34, available: 'Immediately', term: '5 yrs', status: 'Available' },
  { suite: '410', floor: 4, sqft: 9_600, type: 'Office', rate: 36, available: 'Mar 2027', term: '5–10 yrs', status: 'Available soon' },
  { suite: '110', floor: 1, sqft: 2_400, type: 'Retail', rate: 48, available: 'Immediately', term: '5 yrs', status: 'Under offer' },
  { suite: '115', floor: 1, sqft: 1_100, type: 'Retail', rate: 52, available: 'Jan 2027', term: '3 yrs', status: 'Available soon' },
  { suite: 'LL-02', floor: 0, sqft: 6_800, type: 'Flex', rate: 24, available: 'Immediately', term: '3–7 yrs', status: 'Available' },
  { suite: '520', floor: 5, sqft: 12_400, type: 'Office', rate: 38, available: 'Immediately', term: '7–10 yrs', status: 'Available' },
  { suite: '225', floor: 2, sqft: 980, type: 'Office', rate: 31, available: 'Immediately', term: '2–3 yrs', status: 'Available' },
]

const TYPES = ['All', 'Office', 'Retail', 'Flex'] as const
const SIZES = [
  { label: 'Any size', min: 0, max: Infinity },
  { label: 'Under 2,000', min: 0, max: 2_000 },
  { label: '2,000 – 5,000', min: 2_000, max: 5_000 },
  { label: 'Over 5,000', min: 5_000, max: Infinity },
]

const STATUS_STYLE: Record<Space['status'], string> = {
  Available: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
  'Available soon': 'bg-amber-50 text-amber-800 ring-amber-600/20',
  'Under offer': 'bg-crest-100 text-crest-600 ring-crest-500/25',
}

const usd = (n: number) => `$${n.toLocaleString('en-US')}`

/**
 * The availability table is the whole product on a commercial leasing site. A tenant
 * rep arrives with two numbers in mind — square feet and dollars per square foot per
 * year — and leaves immediately if the site makes them request a PDF to see either.
 */
export function SpaceFinder() {
  const [type, setType] = useState<(typeof TYPES)[number]>('All')
  const [size, setSize] = useState(0)
  const [sort, setSort] = useState<'sqft' | 'rate'>('sqft')

  const band = SIZES[size]
  const rows = SPACES
    .filter((s) => (type === 'All' || s.type === type) && s.sqft >= band.min && s.sqft < band.max)
    .sort((a, b) => (sort === 'sqft' ? a.sqft - b.sqft : a.rate - b.rate))

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-crest-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={`shrink-0 rounded-lg px-4 py-2 text-[13px] font-semibold transition ${
                type === t
                  ? 'bg-crest-800 text-white'
                  : 'bg-white text-crest-800 ring-1 ring-crest-200 hover:ring-crest-500/40'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            aria-label="Filter by size"
            className="rounded-lg border border-crest-200 bg-white px-3 py-2 text-[13px] font-medium text-crest-800 focus:outline-none focus:ring-2 focus:ring-crest-500/25"
          >
            {SIZES.map((s, i) => (
              <option key={s.label} value={i}>{s.label} sq ft</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'sqft' | 'rate')}
            aria-label="Sort results"
            className="rounded-lg border border-crest-200 bg-white px-3 py-2 text-[13px] font-medium text-crest-800 focus:outline-none focus:ring-2 focus:ring-crest-500/25"
          >
            <option value="sqft">Smallest first</option>
            <option value="rate">Lowest rate first</option>
          </select>
        </div>
      </div>

      <p className="mt-4 text-[13px] text-crest-800/60">
        {rows.length} {rows.length === 1 ? 'space' : 'spaces'} · rates are per sq ft per year, full service
      </p>

      {/* A real table on desktop, stacked cards on a phone. A horizontally scrolling
          eight-column table is the usual answer here and it is miserable to use. */}
      <div className="mt-4 hidden overflow-hidden rounded-xl ring-1 ring-crest-200 lg:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-crest-50 text-[11px] uppercase tracking-wider text-crest-800/55">
            <tr>
              {['Suite', 'Floor', 'Size', 'Type', 'Rate', 'Available', 'Term', ''].map((h) => (
                <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-crest-100 bg-white">
            {rows.map((s) => (
              <tr key={s.suite} className="transition hover:bg-crest-50/60">
                <td className="px-4 py-3 font-semibold text-crest-900">{s.suite}</td>
                <td className="px-4 py-3 text-crest-800/70">{s.floor === 0 ? 'LL' : s.floor}</td>
                <td className="px-4 py-3 font-medium text-crest-900 tabular-nums">{s.sqft.toLocaleString('en-US')}</td>
                <td className="px-4 py-3 text-crest-800/70">{s.type}</td>
                <td className="px-4 py-3 font-medium text-crest-900 tabular-nums">{usd(s.rate)}</td>
                <td className="px-4 py-3 text-crest-800/70">{s.available}</td>
                <td className="px-4 py-3 text-crest-800/70">{s.term}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${STATUS_STYLE[s.status]}`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
        {rows.map((s) => (
          <li key={s.suite} className="rounded-xl bg-white p-4 ring-1 ring-crest-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-crest-900">Suite {s.suite}</p>
                <p className="text-[13px] text-crest-800/60">
                  {s.type} · {s.floor === 0 ? 'Lower level' : `Floor ${s.floor}`}
                </p>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${STATUS_STYLE[s.status]}`}>
                {s.status}
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px]">
              <div className="flex justify-between gap-2"><dt className="text-crest-800/55">Size</dt><dd className="font-semibold tabular-nums">{s.sqft.toLocaleString('en-US')}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-crest-800/55">Rate</dt><dd className="font-semibold tabular-nums">{usd(s.rate)}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-crest-800/55">Available</dt><dd className="font-medium">{s.available}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-crest-800/55">Term</dt><dd className="font-medium">{s.term}</dd></div>
            </dl>
          </li>
        ))}
      </ul>

      {rows.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-crest-200 p-8 text-center text-sm text-crest-800/55">
          Nothing matches that combination right now. Widen the size band, or tell us what you
          need — we track space in the next two buildings as well.
        </p>
      ) : null}
    </div>
  )
}
