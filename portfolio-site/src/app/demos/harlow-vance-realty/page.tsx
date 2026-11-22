import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoImage } from '@/components/demo/DemoImage'
import { ReviewStrip, type Review } from '@/components/demo/ReviewStrip'
import { photosFor } from '@/lib/photos'
import { FeaturedProperty } from './FeaturedProperty'
import { ListingExplorer } from './ListingExplorer'
import { listings } from './listings'
import { ValuationForm } from './ValuationForm'

const img = photosFor('harlow')

// Resolved here rather than inside ListingExplorer: that component is 'use client', and
// photosFor reads the filesystem while the page is prerendered.
const listingPhotos = Object.fromEntries(
  listings.map((l) => [l.id, img(l.photo)]),
) as Record<string, string | undefined>

const REVIEWS: Review[] = [
  {
    quote:
      'They told us not to redo the bathroom. Every other agent we spoke to wanted us to spend twelve thousand dollars first. We listed as-is and got asking.',
    name: 'Rob & Angela Keene',
    context: 'Sold in Round Rock, 2025',
  },
  {
    quote:
      'Ellen was at every single viewing. Not an assistant, not a lockbox — her. After the last agency we used, that alone was worth the fee.',
    name: 'Marianne Cole',
    context: 'Sold in Mueller, 2025',
  },
  {
    quote:
      'The valuation came with the three comparable sales they based it on. First time anyone has shown me their working instead of just naming a number.',
    name: 'Dev Shanmugam',
    context: 'Sold in East Austin, 2024',
  },
]

export const metadata: Metadata = {
  title: 'Harlow & Vance Realty — demo build',
  description: 'A demonstration website for a fictional real estate agency, built around property listings and valuation enquiries.',
}

const STEPS = [
  { n: '01', title: 'Walk the house with us', body: 'We price from the inside, not from a postcode average. One visit, about forty minutes.' },
  { n: '02', title: 'Get it ready to photograph', body: 'A shortlist of what actually moves the number, and the trades to do it. No upselling a renovation.' },
  { n: '03', title: 'Go to market properly', body: 'Photography, floor plan, listing copy written by a person, and viewings we attend ourselves.' },
  { n: '04', title: 'Close without drama', body: 'One named agent from the first call to the keys, reachable on their own number.' },
]

const AREAS = ['Cedar Park', 'Mueller', 'East Austin', 'Round Rock', 'Westlake', 'South Lamar', 'Hyde Park', 'Travis Heights']

export default function HarlowVanceDemo() {
  return (
    <div className="bg-realty-50 text-realty-900">

      <header className="sticky top-0 z-40 border-b border-realty-200 bg-realty-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <a href="#" className="font-serif text-[17px] font-semibold tracking-tight">
            Harlow <span className="text-realty-600">&amp;</span> Vance
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-medium text-realty-900/70 md:flex">
            <a href="#listings" className="hover:text-realty-900">Listings</a>
            <a href="#selling" className="hover:text-realty-900">Selling</a>
            <a href="#areas" className="hover:text-realty-900">Areas</a>
            <a href="#valuation" className="hover:text-realty-900">Valuation</a>
          </nav>
          <a href="#valuation" className="rounded-lg bg-realty-900 px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-realty-700 sm:px-4 sm:text-sm">
            Free valuation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-realty-200">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-realty-600">
                Austin and the northern suburbs
              </p>
              <h1 className="mt-5 font-serif text-[2.1rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.3rem]">
                Two agents, forty houses a year, every one of them walked in person.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-realty-900/70 sm:text-lg">
                We are small by choice. You get the agent who valued your house at every viewing, on
                their own mobile number, and a valuation that comes with the comparable sales we based
                it on rather than a number and a handshake.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#valuation" className="rounded-lg bg-realty-900 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-realty-700">
                  Book a free valuation
                </a>
                <a href="#listings" className="rounded-lg bg-white px-5 py-3.5 text-center text-sm font-semibold text-realty-900 ring-1 ring-realty-200 transition hover:ring-realty-600/40">
                  Browse what is on
                </a>
              </div>
            </div>

            {/* Collage — the one place on the page that carries the imagery weight. */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2.5">
              <DemoImage src={img('prop-1')} motif="house" variant={1} className="col-span-2 row-span-2 h-full rounded-2xl" label="412 Rowan Hill Drive" />
              <DemoImage src={img('prop-2')} motif="room" variant={3} className="aspect-square rounded-2xl" />
              <DemoImage src={img('prop-6')} motif="street" variant={5} className="aspect-square rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <FeaturedProperty />

      {/* Listings */}
      <section id="listings" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">On the market now</h2>
            <p className="mt-2 text-sm text-realty-900/60">Six properties · updated this morning</p>
          </div>
        </div>
        <div className="mt-8">
          <ListingExplorer photos={listingPhotos} />
        </div>
      </section>

      {/* Selling process */}
      <section id="selling" className="border-y border-realty-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="max-w-2xl font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Selling with us, start to finish
          </h2>
          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n}>
                <span aria-hidden="true" className="font-mono text-sm font-semibold text-realty-600">{step.n}</span>
                <h3 className="mt-2 font-serif text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-realty-900/70">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <h3 className="font-serif text-xl font-semibold">What sellers say</h3>
            <div className="mt-5">
              <ReviewStrip
                reviews={REVIEWS}
                cardClass="bg-realty-50 ring-1 ring-realty-200"
                nameClass="text-realty-900"
                quoteClass="text-realty-900/75"
                metaClass="text-realty-900/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">Where we work</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-realty-900/70">
          We stay inside a thirty-minute drive of the office, because an agent who can be at your house
          this afternoon is worth more than one with a bigger map on their website.
        </p>
        <ul className="mt-7 flex flex-wrap gap-2">
          {AREAS.map((area) => (
            <li key={area} className="rounded-full bg-white px-4 py-2 text-[13px] font-medium ring-1 ring-realty-200">
              {area}
            </li>
          ))}
        </ul>
      </section>

      {/* Valuation */}
      <section id="valuation" className="border-t border-realty-200 bg-realty-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              A valuation you can check our work on
            </h2>
            <p className="mt-4 text-base leading-relaxed text-realty-900/70">
              You get a figure, the three closest comparable sales we used to reach it, and what we would
              change before listing. If the honest answer is that now is a bad time to sell, that is what
              the report says.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-realty-900/70">
              {['No obligation and no tie-in', 'Written, not just a number over the phone', 'Same agent for the valuation and the sale'].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-realty-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ValuationForm />
        </div>
      </section>

      <footer className="bg-realty-900 text-realty-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold">Harlow &amp; Vance</p>
            <p className="mt-2 text-sm text-realty-50/60">
              24 Pecan Row, Suite 3
              <br />
              Austin, TX 78702
            </p>
          </div>
          <div className="text-sm text-realty-50/60">
            <p className="font-medium text-realty-50">Office</p>
            <p className="mt-2">(512) 555-0114</p>
            <p>hello@harlowvance.example</p>
          </div>
          <div className="text-sm text-realty-50/60">
            <p className="font-medium text-realty-50">Hours</p>
            <p className="mt-2">Mon – Fri, 9:00 am – 6:00 pm</p>
            <p>Saturday viewings by arrangement</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="sticky bottom-0 z-40 border-t border-realty-200 bg-realty-50/95 p-3 backdrop-blur md:hidden">
        <a href="#valuation" className="block rounded-lg bg-realty-900 px-5 py-3.5 text-center text-sm font-semibold text-white">
          Book a free valuation
        </a>
      </div>

      <DemoFooter business={'Harlow & Vance Realty'} />
    </div>
  )
}
