import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { DemoImage } from '@/components/demo/DemoImage'
import { ImageGallery } from '@/components/demo/ImageGallery'
import { photosFor } from '@/lib/photos'
import { SpaceFinder } from './SpaceFinder'

const img = photosFor('crestline')

export const metadata: Metadata = {
  title: 'Crestline Commercial — demo build',
  description:
    'A demonstration website for a fictional commercial leasing agency, built around a live availability table, floor plates and tour booking.',
}

const BUILDING = [
  ['Total area', '186,000 sq ft'],
  ['Floors', '6 + lower level'],
  ['Built / renovated', '1998 / 2023'],
  ['Parking', '1 per 300 sq ft'],
  ['Ceiling height', "9'6\" finished"],
  ['Power', '2,000A, 277/480V'],
  ['HVAC', 'Zoned VAV, after-hours on demand'],
  ['Certification', 'LEED Gold'],
]

const AMENITIES = [
  { t: 'Fibre to the suite', b: 'Two carriers in the building, diverse entry. Suites deliver with fibre already terminated.', icon: 'M4 12h16M12 4v16M7 7l10 10M17 7 7 17' },
  { t: 'Conference centre', b: 'Three bookable rooms seating 8, 20 and 60. Included in base rent, booked from your phone.', icon: 'M3 6h18v12H3zM8 21h8M12 18v3' },
  { t: 'Secure bike room', b: 'Ninety racks, showers and lockers on the lower level. Badge access, covered by the fob you already carry.', icon: 'M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 14l3-6h4l3 6M11 8h5' },
  { t: 'Loading and freight', b: 'Two covered docks and a dedicated freight lift. Move-in outside business hours at no extra charge.', icon: 'M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' },
]

const TRANSIT = [
  ['Red Line — Crestline Station', '3 min walk'],
  ['I-35 northbound ramp', '6 min drive'],
  ['Airport', '22 min drive'],
  ['Parking garage, levels P1–P3', 'In building'],
]

export default function CrestlineCommercialDemo() {
  return (
    <div className="bg-crest-50 text-crest-900">
      <header className="sticky top-0 z-40 border-b border-crest-200 bg-crest-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded bg-crest-800 text-[13px] font-bold text-white">
              C
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight">Crestline Commercial</span>
              <span className="hidden text-[11px] text-crest-800/55 sm:block">1400 Crestline Avenue</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium text-crest-800/70 lg:flex">
            <a href="#availability" className="hover:text-crest-900">Availability</a>
            <a href="#building" className="hover:text-crest-900">The building</a>
            <a href="#plates" className="hover:text-crest-900">Floor plates</a>
            <a href="#tour" className="hover:text-crest-900">Book a tour</a>
          </nav>
          <a href="#tour" className="rounded-lg bg-crest-accent px-3.5 py-2.5 text-[13px] font-semibold text-crest-900 transition hover:brightness-95 sm:px-4">
            Book a tour
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-crest-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crest-500">
              Office · Retail · Flex — Crestline District
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              Eight spaces available. Every rate on the page.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-crest-800/70 sm:text-lg">
              No gated PDF, no &ldquo;contact us for pricing&rdquo;. Size, rate, term and availability
              date for every suite in the building, updated the day anything changes. Filter it, then
              book a tour for a time that suits you.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#availability" className="rounded-lg bg-crest-800 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-crest-900">
                See what&rsquo;s available
              </a>
              <a href="#tour" className="rounded-lg bg-white px-5 py-3.5 text-center text-sm font-semibold text-crest-900 ring-1 ring-crest-200 transition hover:ring-crest-500/40">
                Book a tour
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-crest-200 pt-6">
              {[['186k', 'sq ft total'], ['$24–52', 'per sq ft / yr'], ['3 min', 'to the Red Line']].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-crest-800/50">{l}</dt>
                  <dd className="mt-0.5 text-xl font-bold sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ImageGallery
            shots={[
              { label: 'Exterior, Crestline Avenue', src: img('bldg-1'), motif: 'skyline', variant: 2 },
              { label: 'Lobby', src: img('bldg-2'), motif: 'room', variant: 0 },
              { label: 'Suite 305, open plan', src: img('bldg-3'), motif: 'room', variant: 4 },
              { label: 'Conference centre', src: img('bldg-4'), motif: 'room', variant: 6 },
              { label: 'Roof terrace', src: img('bldg-5'), motif: 'street', variant: 1 },
            ]}
            accentClass="ring-crest-800"
            badge="Virtual tour available"
          />
        </div>
      </section>

      {/* Availability */}
      <section id="availability" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Current availability</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-crest-800/70">
          Rates are full service — they include base building services, janitorial and after-hours
          HVAC on request. What you see is what goes in the letter of intent.
        </p>
        <div className="mt-8">
          <SpaceFinder />
        </div>
      </section>

      {/* Building */}
      <section id="building" className="border-y border-crest-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The building</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-crest-800/75">
                A six-storey brick-and-glass building put up in 1998 and taken back to the slab in
                2023 — new lifts, new mechanicals, new lobby, and fibre from two carriers entering
                on opposite sides of the site. The sort of renovation that does not photograph
                dramatically but decides whether your team can actually work on a Monday morning.
              </p>
              <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-crest-200">
                {BUILDING.map(([k, v]) => (
                  <div key={k} className="bg-white px-4 py-3">
                    <dt className="text-[11px] uppercase tracking-wider text-crest-800/45">{k}</dt>
                    <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-bold">What comes with the lease</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {AMENITIES.map((a) => (
                  <div key={a.t} className="rounded-xl bg-crest-50 p-4 ring-1 ring-crest-200">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-crest-500 ring-1 ring-crest-200">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
                        <path d={a.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h4 className="mt-3 text-sm font-semibold">{a.t}</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-crest-800/65">{a.b}</p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-bold">Getting here</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                {TRANSIT.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-crest-100 pb-1.5">
                    <dt className="text-crest-800/65">{k}</dt>
                    <dd className="shrink-0 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Floor plates */}
      <section id="plates" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Floor plates</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-crest-800/70">
          Column-free spans on floors 3 to 6, so an open plan actually lands open. Test fits
          available for any suite — tell us your headcount and we will come back with a layout.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { t: 'Typical low-rise', s: 'Floors 1–2 · 28,400 sq ft', v: 5, f: 'plate-low' },
            { t: 'Typical mid-rise', s: 'Floors 3–4 · 31,200 sq ft', v: 6, f: 'plate-mid' },
            { t: 'Typical high-rise', s: 'Floors 5–6 · 31,200 sq ft', v: 7, f: 'plate-high' },
          ].map((p) => (
            <figure key={p.t}>
              <DemoImage src={img(p.f)} motif="plan" variant={p.v} className="aspect-[4/3] rounded-xl ring-1 ring-crest-200" label={p.t} />
              <figcaption className="mt-2.5">
                <span className="block text-sm font-semibold">{p.t}</span>
                <span className="block text-[13px] text-crest-800/60">{p.s}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Tour */}
      <section id="tour" className="border-t border-crest-200 bg-crest-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Book a tour</h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Half an hour, walked by the person who manages the building rather than a leasing
              agent reading off a sheet. Tenant reps welcome — full commission, paid on signing.
            </p>
            <div className="mt-7 flex items-center gap-3.5 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <DemoImage src={img('contact')} motif="room" variant={3} className="h-14 w-14 shrink-0 rounded-full" label="Leasing contact" />
              <div>
                <p className="font-semibold">Ray Ellison</p>
                <p className="text-[13px] text-white/55">Property manager · on site daily</p>
                <p className="mt-1 text-[13px] text-white/75">(512) 555-0177</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-7">
            <DemoForm
              submitLabel="Request a tour"
              successTitle="We will confirm by email"
              successBody="In a live build this would reach the leasing inbox and the property manager would come back with two or three times."
              buttonClass="w-full rounded-lg bg-crest-800 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-crest-900"
              accentClass="text-crest-800"
            >
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Name
                  <input className={`${fieldClass} mt-1.5`} placeholder="Jordan Reyes" autoComplete="off" />
                </label>
                <label className={labelClass}>
                  Company
                  <input className={`${fieldClass} mt-1.5`} placeholder="Reyes & Co." autoComplete="off" />
                </label>
              </div>
              <label className={labelClass}>
                Email
                <input className={`${fieldClass} mt-1.5`} placeholder="you@company.com" autoComplete="off" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Size needed
                  <select className={`${fieldClass} mt-1.5`} defaultValue="2,000 – 5,000 sq ft">
                    {['Under 2,000 sq ft', '2,000 – 5,000 sq ft', '5,000 – 10,000 sq ft', 'Over 10,000 sq ft'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Move-in
                  <select className={`${fieldClass} mt-1.5`} defaultValue="3–6 months">
                    {['Immediately', '3–6 months', '6–12 months', 'Just looking'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
            </DemoForm>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t border-crest-200 bg-crest-50/95 p-3 backdrop-blur lg:hidden">
        <a href="#tour" className="block rounded-lg bg-crest-800 px-5 py-3.5 text-center text-sm font-semibold text-white">
          Book a tour
        </a>
      </div>

      <DemoFooter business="Crestline Commercial" />
    </div>
  )
}
