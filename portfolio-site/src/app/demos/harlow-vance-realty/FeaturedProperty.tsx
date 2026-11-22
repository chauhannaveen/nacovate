import { DemoImage } from '@/components/demo/DemoImage'
import { ImageGallery, type GalleryShot } from '@/components/demo/ImageGallery'
import { photosFor } from '@/lib/photos'

const img = photosFor('harlow')

const SHOTS: GalleryShot[] = [
  { label: 'Front elevation', src: img('prop-1'), motif: 'house', variant: 1 },
  { label: 'Living room', src: img('prop-2'), motif: 'room', variant: 3 },
  { label: 'Kitchen', src: img('prop-3'), motif: 'room', variant: 7 },
  { label: 'Primary bedroom', src: img('prop-4'), motif: 'room', variant: 0 },
  { label: 'Rear garden', src: img('prop-5'), motif: 'house', variant: 4 },
  { label: 'Street view', src: img('prop-6'), motif: 'street', variant: 2 },
]

const FACTS = [
  ['Bedrooms', '4'],
  ['Bathrooms', '3'],
  ['Floor area', '2,410 sq ft'],
  ['Plot', '0.28 acre'],
  ['Built', '2004'],
  ['Garage', '2 cars'],
  ['Heating', 'Gas central'],
  ['Taxes', '$7,240 / yr'],
]

const HIGHLIGHTS = [
  'Corner lot with mature oaks along the rear fence',
  'Kitchen re-fitted in 2022 — appliances under warranty',
  'Zoned for Rowan Hill Elementary, a seven-minute walk',
  'No HOA',
]

export function FeaturedProperty() {
  return (
    <section id="featured" className="border-b border-realty-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-realty-600">
              Featured this week
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              412 Rowan Hill Drive, Cedar Park
            </h2>
          </div>
          <p className="font-serif text-3xl font-semibold text-realty-900">$585,000</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-10">
          {/* min-w-0 on the grid item itself: min-width:auto here lets the gallery's
              intrinsic width widen the column past a phone screen. */}
          <div className="min-w-0">
            <ImageGallery shots={SHOTS} accentClass="ring-realty-700" badge="3D tour available" />

            <h3 className="mt-8 font-serif text-xl font-semibold">About this house</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-realty-900/75">
              A single-storey build on one of the quieter corners of Rowan Hill, where the lots widen
              out and the oaks are old enough to shade the whole back garden by mid-afternoon. The
              current owners took the kitchen back to brick in 2022 and left everything else alone,
              which turns out to have been the right call — the floors, the fireplace and the deep
              window reveals are all original.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-realty-900/75">
              Four bedrooms, three bathrooms, and a garage that a pair of cars fits into without
              anyone having to climb over a bonnet. The elementary school is a seven-minute walk
              through the neighbourhood rather than along the main road.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-realty-900/75">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-realty-600">
                    <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-lg font-semibold">Floor plan</h3>
                <DemoImage src={img('floorplan')} motif="plan" variant={6} className="mt-3 aspect-[4/3] rounded-xl ring-1 ring-realty-200" label="Ground floor" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">The neighbourhood</h3>
                <DemoImage src={img('map')} motif="street" variant={2} className="mt-3 aspect-[4/3] rounded-xl ring-1 ring-realty-200" label="Map — Rowan Hill" />
              </div>
            </div>
          </div>

          {/* Sticky on desktop: the enquiry path should never scroll out of reach. */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-realty-200">
              {FACTS.map(([k, v]) => (
                <div key={k} className="bg-white px-4 py-3">
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-realty-900/45">{k}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-realty-900">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-2xl bg-realty-50 p-5 ring-1 ring-realty-200">
              <div className="flex items-center gap-3.5">
                <DemoImage src={img('agent')} motif="room" variant={5} className="h-14 w-14 shrink-0 rounded-full" label="Agent" />
                <div>
                  <p className="font-semibold text-realty-900">Ellen Harlow</p>
                  <p className="text-[13px] text-realty-900/60">Listing agent · 14 years in Cedar Park</p>
                </div>
              </div>
              <div className="mt-4 grid gap-2">
                <a href="#valuation" className="rounded-lg bg-realty-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-realty-700">
                  Book a viewing
                </a>
                <a href="tel:+15125550114" className="rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-realty-900 ring-1 ring-realty-200 transition hover:ring-realty-600/40">
                  Call (512) 555-0114
                </a>
              </div>
              <p className="mt-3 text-center text-[11px] text-realty-900/40">
                Usually replies within the hour
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
