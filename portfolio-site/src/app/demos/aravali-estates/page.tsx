import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { DemoImage } from '@/components/demo/DemoImage'
import { DemoVideo } from '@/components/demo/DemoVideo'
import { ImageGallery } from '@/components/demo/ImageGallery'
import { ReviewStrip, type Review } from '@/components/demo/ReviewStrip'
import { photosFor } from '@/lib/photos'
import { EmiCalculator } from './EmiCalculator'

const img = photosFor('aravali')

export const metadata: Metadata = {
  title: 'Aravali Estates, Gurgaon — demo build',
  description:
    'A demonstration website for a fictional Gurgaon property consultancy, built around an EMI calculator, RERA-compliant listings and site-visit booking.',
}

const WHATSAPP = 'https://wa.me/919650313207'

const PROJECTS = [
  { name: 'Verdant Heights', sector: 'Sector 63A', config: '3 & 4 BHK', price: '₹2.4 – 3.8 Cr', carpet: '1,840 – 2,610 sq ft', status: 'Under construction', possession: 'Dec 2027', rera: 'RC/REP/HARERA/GGM/2024/118', motif: 'skyline' as const },
  { name: 'The Arbour', sector: 'Sector 58', config: '3 BHK + servant', price: '₹1.85 – 2.2 Cr', carpet: '1,610 – 1,790 sq ft', status: 'Ready to move', possession: 'Immediate', rera: 'RC/REP/HARERA/GGM/2021/064', motif: 'house' as const },
  { name: 'Lakewood Residences', sector: 'Sector 84', config: '2 & 3 BHK', price: '₹1.1 – 1.6 Cr', carpet: '980 – 1,420 sq ft', status: 'Nearing possession', possession: 'Aug 2026', rera: 'RC/REP/HARERA/GGM/2022/091', motif: 'skyline' as const },
]

const REVIEWS: Review[] = [
  {
    quote:
      'Teen brokers ne sirf "sir site dekh lo" bola. Inhone pehle budget aur EMI nikal ke bataya, phir sirf 4 options dikhaye — aur teesre me deal ho gayi.',
    name: 'Sandeep Malhotra',
    context: 'Bought 3 BHK, Sector 58',
  },
  {
    quote:
      'They showed me the HARERA page for the project on their phone and told me to verify it myself before paying anything. No broker has ever told me that.',
    name: 'Nidhi Arora',
    context: 'Bought 2 BHK, Sector 84',
  },
  {
    quote:
      'Site visit ke liye cab bheji, Sunday ko, aur koi pressure nahi. Jab maine kaha abhi nahi lena, tab bhi theek se baat ki. Six months baad wapas aaya inhi ke paas.',
    name: 'Imran Qureshi',
    context: 'Bought 4 BHK, Sector 63A',
  },
]

const SHOTS = [
  { label: 'Tower elevation', src: img('hero-1'), motif: 'skyline' as const, variant: 2 },
  { label: 'Living room', src: img('hero-2'), motif: 'room' as const, variant: 1 },
  { label: 'Balcony view', src: img('hero-3'), motif: 'skyline' as const, variant: 6 },
  { label: 'Clubhouse', src: img('hero-4'), motif: 'house' as const, variant: 4 },
  { label: 'Landscaped podium', src: img('hero-5'), motif: 'street' as const, variant: 7 },
]

const STATUS_STYLE: Record<string, string> = {
  'Ready to move': 'bg-green-50 text-green-800 ring-green-600/20',
  'Nearing possession': 'bg-amber-50 text-amber-800 ring-amber-600/20',
  'Under construction': 'bg-aravali-100 text-aravali-700 ring-aravali-500/20',
}

export default function AravaliEstatesDemo() {
  return (
    <div className="bg-aravali-50 text-aravali-900">
      <header className="sticky top-0 z-40 border-b border-aravali-200 bg-aravali-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-lg bg-aravali-700 text-sm font-bold text-aravali-gold">
              A
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight">Aravali Estates</span>
              <span className="hidden text-[11px] text-aravali-900/50 sm:block">Gurgaon property consultants</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium text-aravali-900/70 lg:flex">
            <a href="#projects" className="hover:text-aravali-900">Projects</a>
            <a href="#featured" className="hover:text-aravali-900">Featured</a>
            <a href="#emi" className="hover:text-aravali-900">EMI calculator</a>
            <a href="#visit" className="hover:text-aravali-900">Site visit</a>
          </nav>
          <a href="#visit" className="rounded-lg bg-aravali-700 px-3.5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-aravali-900 sm:px-4">
            Book a site visit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-aravali-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aravali-500">
              New Gurgaon · Golf Course Extension · Dwarka Expressway
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              We will show you four flats, not forty.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-aravali-900/70 sm:text-lg">
              Work out the EMI first, tell us the number you are comfortable with, and we will
              shortlist what actually fits. Every project on this page carries its HARERA
              registration number, and we will tell you how to verify it yourself.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#emi" className="rounded-lg bg-aravali-700 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-aravali-900">
                Calculate my EMI
              </a>
              <a href={WHATSAPP} className="rounded-lg bg-white px-5 py-3.5 text-center text-sm font-semibold text-aravali-900 ring-1 ring-aravali-200 transition hover:ring-aravali-500/40">
                WhatsApp us
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-aravali-200 pt-6">
              {[['11 yrs', 'in Gurgaon'], ['₹0', 'buyer-side brokerage'], ['Sun', 'site visits, cab included']].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-aravali-900/50">{l}</dt>
                  <dd className="mt-0.5 text-xl font-bold sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ImageGallery shots={SHOTS} accentClass="ring-aravali-700" badge="Verdant Heights, Sector 63A" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects we are handling</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-aravali-900/70">
          Carpet area is shown, not super built-up — that is the number HARERA requires and the one
          you actually live in. Super area figures are available on request, with the loading
          percentage spelled out.
        </p>

        <ul className="mt-8 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <li key={p.name} className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-aravali-200">
              <div className="relative">
                <DemoImage motif={p.motif} variant={i + 2} className="aspect-[4/3]" />
                <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${STATUS_STYLE[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[13px] font-medium text-aravali-500">{p.sector}</p>
                <h3 className="mt-0.5 text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-xl font-bold text-aravali-700">{p.price}</p>
                <dl className="mt-3 space-y-1.5 text-[13px] text-aravali-900/70">
                  <div className="flex justify-between gap-3"><dt>Configuration</dt><dd className="font-medium text-aravali-900">{p.config}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Carpet area</dt><dd className="font-medium text-aravali-900">{p.carpet}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Possession</dt><dd className="font-medium text-aravali-900">{p.possession}</dd></div>
                </dl>
                <p className="mt-3 break-all rounded-lg bg-aravali-50 px-3 py-2 font-mono text-[10px] leading-relaxed text-aravali-900/60">
                  HARERA {p.rera}
                </p>
                <a href="#visit" className="mt-4 rounded-lg bg-aravali-700 px-4 py-2.5 text-center text-[13px] font-semibold text-white transition hover:bg-aravali-900">
                  Book a site visit
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured + EMI */}
      <section id="featured" className="border-y border-aravali-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aravali-500">Featured</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Verdant Heights, Sector 63A
              </h2>
              <p className="mt-2 text-2xl font-bold text-aravali-700">₹2.4 – 3.8 Cr</p>
              <p className="mt-4 text-[15px] leading-relaxed text-aravali-900/75">
                Three towers on an eight-acre podium off Golf Course Extension Road, with the
                clubhouse and the landscaping finished before the last tower tops out — which is
                unusual here, and the reason we are comfortable recommending it. Possession is
                scheduled for December 2027 and the HARERA timeline has not slipped so far.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-aravali-200 sm:grid-cols-4">
                {[['Carpet', '1,840 sq ft'], ['Config', '3 & 4 BHK'], ['Floors', 'G + 24'], ['Density', '96 units/acre']].map(([k, v]) => (
                  <div key={k} className="bg-white px-4 py-3">
                    <dt className="text-[11px] uppercase tracking-wider text-aravali-900/45">{k}</dt>
                    <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold">Floor plan</h3>
                  <DemoImage src={img('floorplan')} motif="plan" variant={5} className="mt-3 aspect-[4/3] rounded-xl ring-1 ring-aravali-200" label="3 BHK — Type A" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <DemoImage src={img('map')} motif="street" variant={3} className="mt-3 aspect-[4/3] rounded-xl ring-1 ring-aravali-200" label="Map — Sector 63A" />
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-aravali-50 p-4 ring-1 ring-aravali-200">
                <p className="text-[13px] leading-relaxed text-aravali-900/70">
                  <strong className="font-semibold text-aravali-900">Verify before you pay.</strong>{' '}
                  Search the registration number on the HARERA portal yourself. If a project&rsquo;s
                  number does not come up, walk away — from the project and from whoever showed it
                  to you.
                </p>
              </div>
            </div>

            <div id="emi" className="lg:sticky lg:top-24 lg:self-start">
              <EmiCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="border-y border-aravali-200 bg-white ">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <DemoVideo
            src="property"
            heading="Twenty seconds inside Verdant Heights"
            blurb="The tower, a flat, the balcony view and the keys. Carpet area and the HARERA number on screen, because that is what buyers check first."
            buttonClass="bg-aravali-700 text-white"
            frameClass="ring-1 ring-aravali-200"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Buyers we have worked with</h2>
        <div className="mt-8">
          <ReviewStrip
            reviews={REVIEWS}
            cardClass="bg-white ring-1 ring-aravali-200"
            nameClass="text-aravali-900"
            quoteClass="text-aravali-900/75"
            metaClass="text-aravali-900/50"
          />
        </div>
      </section>

      {/* Site visit */}
      <section id="visit" className="border-t border-aravali-200 bg-aravali-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Book a site visit</h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Sunday visits with a cab from anywhere in Gurgaon or South Delhi, at our cost. We take
              you to a maximum of four projects in a day — past that nobody remembers which flat had
              which kitchen.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/65">
              {['No brokerage charged to buyers', 'HARERA number given for every project', 'We will tell you when not to buy'].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aravali-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-7">
            <DemoForm
              submitLabel="Request a site visit"
              successTitle="We will call to confirm"
              successBody="In a live build this would reach the office WhatsApp and a consultant would call back with Sunday slots."
              buttonClass="w-full rounded-lg bg-aravali-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-aravali-900"
              accentClass="text-aravali-700"
            >
              <label className={labelClass}>
                Name
                <input className={`${fieldClass} mt-1.5`} placeholder="Sandeep Malhotra" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Mobile number
                <input className={`${fieldClass} mt-1.5`} placeholder="98xxx xxxxx" inputMode="tel" autoComplete="off" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Budget
                  <select className={`${fieldClass} mt-1.5`} defaultValue="₹1.5 – 2.5 Cr">
                    {['Under ₹1.5 Cr', '₹1.5 – 2.5 Cr', '₹2.5 – 4 Cr', 'Above ₹4 Cr'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Looking for
                  <select className={`${fieldClass} mt-1.5`} defaultValue="To live in">
                    {['To live in', 'Investment', 'Not decided'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
            </DemoForm>
          </div>
        </div>
      </section>

      <footer className="bg-aravali-900 text-white/50">
        <div className="mx-auto grid max-w-6xl gap-8 border-t border-white/10 px-4 py-12 sm:grid-cols-3 sm:px-6">
          <div>
            <p className="text-sm font-bold text-white">Aravali Estates</p>
            <p className="mt-2 text-sm">
              Unit 412, Cyber Hub Tower B
              <br />
              Sector 24, Gurgaon 122002
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-2">+91 96503 13207</p>
            <p>hello@aravaliestates.example</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">HARERA</p>
            <p className="mt-2 font-mono text-[11px] leading-relaxed">
              Agent registration
              <br />
              RC/HARERA/GGM/AGT/2023/0417
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile action bar */}
      <div className="sticky bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-aravali-200 bg-aravali-50/95 p-3 backdrop-blur lg:hidden">
        <a href="tel:+919650313207" className="rounded-lg bg-aravali-900 px-4 py-3.5 text-center text-sm font-semibold text-white">
          Call now
        </a>
        <a href={WHATSAPP} className="rounded-lg bg-aravali-700 px-4 py-3.5 text-center text-sm font-semibold text-white">
          WhatsApp
        </a>
      </div>

      <DemoFooter business="Aravali Estates" />
    </div>
  )
}
