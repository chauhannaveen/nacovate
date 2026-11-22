'use client'

import { useState } from 'react'
import { DemoImage } from '@/components/demo/DemoImage'
import { listings, STATUS_STYLE, type Listing } from './listings'

/** Listing id -> resolved photo path. Built by the page; see the note there. */
export interface ListingExplorerProps {
  photos: Record<string, string | undefined>
}

const FILTERS = ['All', 'New', 'For sale', 'Under offer'] as const
const SORTS = [
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
  { key: 'size', label: 'Largest first' },
] as const

// Fallback art for a listing whose photo has not landed yet, picked to suit the
// listing rather than its position in the grid.
const MOTIFS: Record<string, 'house' | 'street' | 'room'> = {
  l1: 'house', l2: 'room', l3: 'room', l4: 'house', l5: 'room', l6: 'street',
}

const toNumber = (money: string) => Number(money.replace(/[^0-9]/g, ''))
const toSqft = (sqft: string) => Number(sqft.replace(/[^0-9]/g, ''))

function sortListings(rows: Listing[], key: (typeof SORTS)[number]['key']) {
  const sorted = [...rows]
  if (key === 'price-asc') sorted.sort((a, b) => toNumber(a.price) - toNumber(b.price))
  if (key === 'price-desc') sorted.sort((a, b) => toNumber(b.price) - toNumber(a.price))
  if (key === 'size') sorted.sort((a, b) => toSqft(b.sqft) - toSqft(a.sqft))
  return sorted
}

export function ListingExplorer({ photos }: ListingExplorerProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [sort, setSort] = useState<(typeof SORTS)[number]['key']>('price-asc')

  const visible = sortListings(
    filter === 'All' ? listings : listings.filter((l) => l.status === filter),
    sort
  )

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-realty-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Scrolls rather than wraps, so the filter row stays one line on a phone. */}
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition ${
                filter === f
                  ? 'bg-realty-900 text-white'
                  : 'bg-white text-realty-900 ring-1 ring-realty-200 hover:ring-realty-600/40'
              }`}
            >
              {f}
              <span className="ml-1.5 text-[11px] opacity-60">
                {f === 'All' ? listings.length : listings.filter((l) => l.status === f).length}
              </span>
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-[13px] text-realty-900/70">
          <span className="whitespace-nowrap">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number]['key'])}
            className="rounded-lg border border-realty-200 bg-white px-3 py-2 text-[13px] font-medium text-realty-900 focus:outline-none focus:ring-2 focus:ring-realty-600/25"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((listing, i) => (
          <li
            key={listing.id}
            className="group overflow-hidden rounded-2xl bg-white ring-1 ring-realty-200 transition hover:ring-realty-600/40"
          >
            <div className="relative">
              {/*
                Keyed on the listing, not on the render index. With `i` the placeholder
                art changed every time the grid was re-sorted or filtered, because a row
                that moved position picked up a different motif.
              */}
              <DemoImage
                src={photos[listing.id]}
                label={listing.address}
                motif={MOTIFS[listing.id] ?? 'house'}
                variant={listing.id.charCodeAt(1)}
                className="aspect-[4/3]"
              />
              <span
                className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLE[listing.status]}`}
              >
                {listing.status}
              </span>
            </div>

            <div className="p-5">
              <p className="font-serif text-xl font-semibold text-realty-900">{listing.price}</p>
              <h3 className="mt-1 text-[15px] font-semibold text-realty-900">{listing.address}</h3>
              <p className="text-[13px] text-realty-900/60">{listing.area}</p>

              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-realty-900/70">
                <li>{listing.beds} bed</li>
                <li>{listing.baths} bath</li>
                <li>{listing.sqft} sq ft</li>
              </ul>

              <p className="mt-3 text-sm leading-relaxed text-realty-900/70">{listing.blurb}</p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href="#valuation"
                  className="flex-1 rounded-lg bg-realty-900 px-3 py-2.5 text-center text-[13px] font-semibold text-white transition hover:bg-realty-700"
                >
                  Book a viewing
                </a>
                <button
                  type="button"
                  aria-label={`Save ${listing.address} to your shortlist`}
                  title={`Save ${listing.address} to your shortlist`}
                  className="grid h-10 w-10 place-items-center rounded-lg ring-1 ring-realty-200 transition hover:bg-realty-50"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px] text-realty-700">
                    <path
                      d="M12 20s-7-4.6-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7 2.6C19 15.4 12 20 12 20Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
