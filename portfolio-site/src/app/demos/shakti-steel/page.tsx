import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { DemoImage } from '@/components/demo/DemoImage'
import { DemoVideo } from '@/components/demo/DemoVideo'
import { ImageGallery } from '@/components/demo/ImageGallery'
import { photosFor } from '@/lib/photos'
import { CapabilityMatrix } from './CapabilityMatrix'

const img = photosFor('shakti')

export const metadata: Metadata = {
  title: 'Shakti Steel & Fabrication, Faridabad — demo build',
  description:
    'A demonstration website for a fictional sheet metal fabrication unit, built around a capability spec table, certifications and an RFQ form.',
}

const INDUSTRIES = [
  { t: 'Automotive tier 2', b: 'Brackets, enclosures, guards and jigs for OEM suppliers across the Delhi NCR belt.' },
  { t: 'Electrical panels', b: 'Sheet metal enclosures to IP54/IP65, powder coated, with cut-outs to your GA drawing.' },
  { t: 'Material handling', b: 'Trolleys, racks, bins and conveyor frames. Prototype through to repeat batch.' },
  { t: 'Architectural', b: 'Façade panels, railings and perforated screens, finished to RAL shade on request.' },
]

const CERTS = [
  ['ISO 9001:2015', 'Quality management · certified since 2017'],
  ['MSME Udyam', 'UDYAM-HR-XX-00XXXXX'],
  ['GST registered', '06XXXXXXXXXXXZX'],
  ['In-house QC', 'CMM, height gauge, coating thickness meter, salt spray'],
]

const STATS = [
  ['38,000', 'sq ft under roof'],
  ['64', 'people on shift'],
  ['5–9', 'day typical lead time'],
  ['2004', 'operating since'],
]

const PROCESS = [
  { n: '01', t: 'Send the drawing', b: 'DXF, STEP, PDF or a dimensioned sketch on paper. We will tell you within a day if something is not manufacturable as drawn.' },
  { n: '02', t: 'Quote in 24 hours', b: 'Itemised — material, cutting, bending, welding, finishing. No single lump figure you cannot interrogate.' },
  { n: '03', t: 'First-article approval', b: 'One piece made and measured before the batch runs. Report goes to you with the dimensions on it.' },
  { n: '04', t: 'Batch and dispatch', b: 'Packed to your spec, dispatched from Faridabad. Transport arranged across NCR or to your freight partner.' },
]

export default function ShaktiSteelDemo() {
  return (
    <div className="bg-shakti-900 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-shakti-900/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded bg-shakti-amber text-sm font-black text-shakti-900">
              S
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight">Shakti Steel &amp; Fabrication</span>
              <span className="hidden text-[11px] text-white/45 sm:block">Sector 24, Faridabad · ISO 9001:2015</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium text-white/55 lg:flex">
            <a href="#capability" className="hover:text-white">Capability</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#process" className="hover:text-white">How we work</a>
            <a href="#rfq" className="hover:text-white">Get a quote</a>
          </nav>
          <a href="#rfq" className="rounded bg-shakti-amber px-3.5 py-2.5 text-[13px] font-bold text-shakti-900 transition hover:brightness-95 sm:px-4">
            Get a quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_26rem_at_78%_-8%,rgba(240,160,34,0.18),transparent_65%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-shakti-amber">
              Sheet metal fabrication · Faridabad
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Send the drawing. Quote back inside 24 hours.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Laser cutting, CNC bending, welding and powder coating under one roof in Sector 24.
              Every machine, envelope, material range and tolerance we hold is published below —
              so you can decide whether we fit your part before you spend a phone call on it.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#rfq" className="rounded bg-shakti-amber px-6 py-3.5 text-center text-sm font-bold text-shakti-900 transition hover:brightness-95">
                Request a quote
              </a>
              <a href="#capability" className="rounded border border-white/20 px-6 py-3.5 text-center text-sm font-bold transition hover:border-white/40 hover:bg-white/5">
                See the spec table
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {STATS.map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-white/40">{l}</dt>
                  <dd className="mt-0.5 text-xl font-bold sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ImageGallery
            shots={[
              { label: 'Laser cutting bay', src: img('plant-1'), motif: 'gym', variant: 2 },
              { label: 'Press brake line', src: img('plant-2'), motif: 'plan', variant: 5 },
              { label: 'Welding bay', src: img('plant-3'), motif: 'gym', variant: 0 },
              { label: 'Powder coating oven', src: img('plant-4'), motif: 'house', variant: 7 },
              { label: 'Finished assemblies', src: img('plant-5'), motif: 'plan', variant: 3 },
            ]}
            accentClass="ring-shakti-amber"
          />
        </div>
      </section>

      {/* Capability */}
      <section id="capability" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we can hold</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">
          If your part sits outside these numbers, we will say so and point you at a shop that can
          do it. That is cheaper for both of us than finding out at first article.
        </p>
        <div className="mt-8">
          <CapabilityMatrix />
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-y border-white/10 bg-shakti-850">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Who we make for</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((i) => (
              <div key={i.t} className="border-t-2 border-shakti-amber bg-white/[0.03] p-5">
                <h3 className="font-bold">{i.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{i.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <DemoImage key={i} src={img(`work-${i + 1}`)} motif="plan" variant={i + 4} className="aspect-[4/3] rounded-xl ring-1 ring-white/10" label={['Panel enclosure batch', 'Conveyor frame assembly', 'Perforated façade panels'][i]} showCaption />
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="border-y border-white/10 bg-shakti-850 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <DemoVideo
            src="fabrication"
            heading="Twenty seconds on the shop floor"
            blurb="Laser, press brake, finished parts on a pallet, a drawing with calipers on it. The whole capability, without a site visit."
            buttonClass="bg-shakti-amber text-shakti-900"
            frameClass="ring-1 ring-white/10"
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How a job runs</h2>
        <ol className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s) => (
            <li key={s.n}>
              <span aria-hidden="true" className="font-mono text-sm font-bold text-shakti-amber">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map(([t, b]) => (
            <div key={t} className="rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10">
              <p className="font-bold text-shakti-amber">{t}</p>
              <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-white/55">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RFQ */}
      <section id="rfq" className="border-t border-white/10 bg-shakti-850">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Request a quote</h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Attach a DXF, STEP or PDF and we will come back within one working day with an
              itemised price and a lead time. A dimensioned hand sketch is fine too — most of our
              repeat work started as one.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/60">
              {['Itemised quote, not a lump sum', 'First-article report before the batch', 'NDA on request, signed same day'].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-shakti-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm text-white/50">
              Plot 14, Industrial Area, Sector 24, Faridabad 121005
              <br />
              0129-4XXXXXX · rfq@shaktisteel.example
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-7">
            <DemoForm
              submitLabel="Send RFQ"
              successTitle="RFQ received"
              successBody="In a live build this would land in the estimating inbox with the drawing attached, and the sender would get an acknowledgement with a reference number."
              buttonClass="w-full rounded bg-shakti-amber px-5 py-3.5 text-sm font-bold text-shakti-900 transition hover:brightness-95"
              accentClass="text-shakti-700"
            >
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Name
                  <input className={`${fieldClass} mt-1.5`} placeholder="Rohit Saini" autoComplete="off" />
                </label>
                <label className={labelClass}>
                  Company
                  <input className={`${fieldClass} mt-1.5`} placeholder="Saini Engineering" autoComplete="off" />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Process
                  <select className={`${fieldClass} mt-1.5`} defaultValue="Laser + bending">
                    {['Laser cutting', 'Laser + bending', 'Full fabrication', 'Powder coating only', 'Not sure'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Quantity
                  <select className={`${fieldClass} mt-1.5`} defaultValue="50 – 500">
                    {['Prototype (1–5)', '5 – 50', '50 – 500', '500+', 'Repeat monthly'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className={labelClass}>
                Material &amp; thickness
                <input className={`${fieldClass} mt-1.5`} placeholder="MS CRCA, 2 mm" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Drawing
                <div className="mt-1.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3.5 py-5 text-center">
                  <p className="text-sm font-medium text-slate-600">Drop a DXF, STEP or PDF here</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">Demo only — no file is uploaded</p>
                </div>
              </label>
            </DemoForm>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-shakti-900/95 p-3 backdrop-blur lg:hidden">
        <a href="tel:+919650313207" className="rounded bg-white/10 px-4 py-3.5 text-center text-sm font-bold text-white">
          Call plant
        </a>
        <a href="#rfq" className="rounded bg-shakti-amber px-4 py-3.5 text-center text-sm font-bold text-shakti-900">
          Get a quote
        </a>
      </div>

      <DemoFooter business={'Shakti Steel & Fabrication'} dark />
    </div>
  )
}
