import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { DemoImage } from '@/components/demo/DemoImage'
import { DemoVideo } from '@/components/demo/DemoVideo'
import { ImageGallery } from '@/components/demo/ImageGallery'
import { ReviewStrip, type Review } from '@/components/demo/ReviewStrip'
import { photosFor } from '@/lib/photos'
import { TreatmentPricing } from './TreatmentPricing'

const img = photosFor('shanti')

export const metadata: Metadata = {
  title: 'Shanti Dental Care, Faridabad — demo build',
  description:
    'A demonstration website for a fictional dental clinic in Faridabad, built around published treatment pricing, WhatsApp booking and no-cost EMI.',
}

const WHATSAPP = 'https://wa.me/917678101800'

const REVIEWS: Review[] = [
  {
    quote:
      'Maine teen clinic check kiye — sirf yahin pe price pehle bata diya. RCT aur crown ka total ₹13,000 bola tha, utna hi laga. Koi extra charge nahi.',
    name: 'Rakesh Yadav',
    context: 'Sector 15 · Root canal & crown',
  },
  {
    quote:
      'My daughter is terrified of dentists. Dr. Kaur spent the first ten minutes just showing her the instruments. No drama, no crying, and she went back happily for the second filling.',
    name: 'Sunita Bhardwaj',
    context: 'NIT Faridabad · Paediatric filling',
  },
  {
    quote:
      'Booked on WhatsApp at 9pm, got a slot for the next evening. Clinic is spotless and they open the sterilisation pouch in front of you, which I have never seen anywhere else.',
    name: 'Aman Chawla',
    context: 'Sector 21C · Scaling',
  },
]

const WHY = [
  { t: 'Prices published, not quoted', b: 'Every treatment range is on this page. You hear the number before the chair reclines, not after.', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { t: 'Sterilisation you can watch', b: 'Class B autoclave, and the pouch is opened in front of you. Ask us to show you the cycle log any time.', icon: 'M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Zm-2 9 2 2 4-4' },
  { t: 'No-cost EMI from ₹10,000', b: 'Braces, implants and crowns split over 3 to 12 months with no interest. Approved in the chair.', icon: 'M3 7h18v10H3zM3 11h18M7 15h3' },
  { t: 'Hindi, English, Punjabi', b: 'Whatever you are comfortable in. Treatment plans explained properly, in your language, before consent.', icon: 'M5 8h14M9 4h6M7 20l5-12 5 12M9.5 16h5' },
]

const HOURS = [
  ['Monday – Saturday', '10:00 am – 2:00 pm, 5:00 – 8:30 pm'],
  ['Sunday', '10:00 am – 1:00 pm'],
  ['Emergency', 'Call any time — we answer'],
]

export default function ShantiDentalDemo() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-40 border-b border-shanti-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-shanti-600 text-white">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M8 3c-2 0-3 1.5-3 4 0 3 1 5 1.5 9 .3 2 2.5 2.2 2.8 0L10 12h4l.7 4c.3 2.2 2.5 2 2.8 0 .5-4 1.5-6 1.5-9 0-2.5-1-4-3-4-1.5 0-2 .7-4 .7S9.5 3 8 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold text-shanti-900">Shanti Dental Care</span>
              <span className="hidden text-[11px] text-slate-500 sm:block">Sector 15, Faridabad</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
            <a href="#treatments" className="hover:text-shanti-600">Treatments &amp; fees</a>
            <a href="#why" className="hover:text-shanti-600">Why us</a>
            <a href="#doctors" className="hover:text-shanti-600">Doctors</a>
            <a href="#visit" className="hover:text-shanti-600">Visit</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+917678101800" aria-label="Call the clinic" title="Call the clinic" className="grid h-10 w-10 place-items-center rounded-lg ring-1 ring-shanti-100 text-shanti-600 transition hover:bg-shanti-50">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={WHATSAPP} className="rounded-lg bg-shanti-600 px-3.5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-shanti-700 sm:px-4">
              Book on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-shanti-100 bg-gradient-to-b from-shanti-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-shanti-600 ring-1 ring-shanti-500/20">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Open today till 8:30 pm · Walk-ins welcome
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-shanti-900 sm:text-4xl lg:text-5xl">
              Dental treatment with the price agreed before we start.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A family dental clinic in Sector 15, Faridabad. Every treatment range is published on
              this page, sterilisation is opened in front of you, and anything above ₹10,000 can go on
              no-cost EMI. Free consultation, including the X-ray.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP} className="inline-flex items-center justify-center gap-2 rounded-lg bg-shanti-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-shanti-700">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.6-4.9c-.4-.7-.9-1.6-.9-2.4 0-.9.5-1.4.7-1.6.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.2.1.4 0 .5-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.3.1.4.2.4.4v.5Z" />
                </svg>
                Book on WhatsApp
              </a>
              <a href="tel:+917678101800" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-shanti-900 ring-1 ring-shanti-100 transition hover:ring-shanti-500/40">
                Call 76781 01800
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-shanti-100 pt-6">
              {[['4.8★', '640 Google reviews'], ['22 yrs', 'in Faridabad'], ['Free', 'consultation + X-ray']].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{l}</dt>
                  <dd className="mt-0.5 text-xl font-bold text-shanti-900 sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ImageGallery
            shots={[
              { label: 'Reception', src: img('clinic-1'), motif: 'room', variant: 4 },
              { label: 'Treatment room', src: img('clinic-2'), motif: 'clinic', variant: 0 },
              { label: 'Sterilisation area', src: img('clinic-3'), motif: 'clinic', variant: 2 },
              { label: 'Waiting area', src: img('clinic-4'), motif: 'room', variant: 6 },
            ]}
            accentClass="ring-shanti-600"
          />
        </div>
      </section>

      {/* Treatments & pricing */}
      <section id="treatments" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-shanti-900 sm:text-3xl">
          Treatments &amp; what they cost
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
          Most clinics make you ring up to ask. We would rather you knew now — it saves your time
          and ours, and nobody has ever been annoyed by a price they heard early.
        </p>
        <div className="mt-8">
          <TreatmentPricing />
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="border-y border-shanti-100 bg-shanti-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-shanti-900 sm:text-3xl">
            Four things we do differently
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.t} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-shanti-100">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-shanti-50 text-shanti-600">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                    <path d={w.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-shanti-900">{w.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{w.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-shanti-900 sm:text-3xl">Who will treat you</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { n: 'Dr. Harpreet Kaur', q: 'BDS, MDS — Orthodontics', b: 'Braces and aligners. Sixteen years in practice, and the one the nervous children get booked with.' },
            { n: 'Dr. Vivek Sharma', q: 'BDS — Implantology (Fellowship)', b: 'Implants, crowns and surgical extractions. Trained in Faridabad and Pune; practising here since 2009.' },
          ].map((d, i) => (
            <div key={d.n} className="flex gap-4 rounded-2xl bg-shanti-50/60 p-5 ring-1 ring-shanti-100">
              <DemoImage src={img(`doctor-${i + 1}`)} motif="room" variant={3} className="h-20 w-20 shrink-0 rounded-xl" label={d.n} />
              <div>
                <h3 className="font-semibold text-shanti-900">{d.n}</h3>
                <p className="text-[13px] font-medium text-shanti-600">{d.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="border-y border-shanti-100 bg-shanti-50/60 ">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <DemoVideo
            src="dental"
            heading="Dekhiye clinic andar se"
            blurb="Fifteen seconds: the room, the sealed instruments, and what a first visit costs. Shot for WhatsApp status and Instagram, where our patients actually are."
            buttonClass="bg-shanti-600 text-white"
            frameClass="ring-1 ring-shanti-100"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-shanti-100 bg-shanti-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-shanti-900 sm:text-3xl">Patients on Google</h2>
          <p className="mt-2 text-sm text-slate-600">4.8 average from 640 reviews</p>
          <div className="mt-8">
            <ReviewStrip reviews={REVIEWS} cardClass="bg-white ring-1 ring-shanti-100" nameClass="text-shanti-900" />
          </div>
        </div>
      </section>

      {/* Visit + appointment */}
      <section id="visit" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-shanti-900 sm:text-3xl">Visit the clinic</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Shop 12, Ashoka Enclave Main Road, Sector 15, Faridabad 121007. Opposite the HDFC Bank
              ATM, above Sharma Medicos. Parking in front, and the clinic is on the ground floor —
              no stairs.
            </p>
            <dl className="mt-7 max-w-md space-y-2 text-sm">
              {HOURS.map(([d, h]) => (
                <div key={d} className="flex flex-col gap-0.5 border-b border-shanti-100 pb-2 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-slate-500">{d}</dt>
                  <dd className="font-medium text-shanti-900">{h}</dd>
                </div>
              ))}
            </dl>
            <DemoImage src={img('map')} motif="street" variant={1} className="mt-7 aspect-[16/9] rounded-2xl ring-1 ring-shanti-100" label="Map — Sector 15, Faridabad" />
          </div>

          <div className="rounded-2xl bg-shanti-50/70 p-5 ring-1 ring-shanti-100 sm:p-6">
            <h3 className="font-semibold text-shanti-900">Request an appointment</h3>
            <p className="mb-5 mt-1.5 text-sm text-slate-600">
              Or just message us on WhatsApp — it is usually faster.
            </p>
            <DemoForm
              submitLabel="Request appointment"
              successTitle="We will call you back"
              successBody="In a live build this would reach the clinic's WhatsApp Business inbox and the front desk would confirm a slot."
              buttonClass="w-full rounded-lg bg-shanti-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-shanti-700"
              accentClass="text-shanti-700"
            >
              <label className={labelClass}>
                Name
                <input className={`${fieldClass} mt-1.5`} placeholder="Rakesh Yadav" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Mobile number
                <input className={`${fieldClass} mt-1.5`} placeholder="98xxx xxxxx" inputMode="tel" autoComplete="off" />
              </label>
              <label className={labelClass}>
                What is troubling you?
                <select className={`${fieldClass} mt-1.5`} defaultValue="Check-up">
                  {['Check-up', 'Tooth pain', 'Cleaning', 'Braces / aligners', 'Implant', 'Something else'].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            </DemoForm>
          </div>
        </div>
      </section>

      {/* Sticky mobile action bar — call and WhatsApp side by side, which is how an
          Indian local business actually gets contacted. */}
      <div className="sticky bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-shanti-100 bg-white/95 p-3 backdrop-blur lg:hidden">
        <a href="tel:+917678101800" className="rounded-lg bg-shanti-900 px-4 py-3.5 text-center text-sm font-semibold text-white">
          Call now
        </a>
        <a href={WHATSAPP} className="rounded-lg bg-shanti-600 px-4 py-3.5 text-center text-sm font-semibold text-white">
          WhatsApp
        </a>
      </div>

      <DemoFooter business="Shanti Dental Care" />
    </div>
  )
}
