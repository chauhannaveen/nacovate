/**
 * Every editable detail of the site lives here, so none of it is buried in markup.
 *
 * ⚠️ The values marked PLACEHOLDER below are the only things that must change before
 * this goes public. Everything else on the page is already true.
 */
export const site = {
  /** Name the page presents itself under. */
  name: 'PLACEHOLDER — studio name',

  /** Reply-to address for the contact block. Use the same one the cold emails send from. */
  email: 'PLACEHOLDER@example.com',

  /** Optional. Leave as an empty string to hide the scheduling link entirely. */
  calendlyUrl: '',

  /** Canonical URL once deployed, used only for display in the footer. */
  domain: 'PLACEHOLDER.vercel.app',
} as const

/**
 * Three demo builds, each solving a different primary job rather than being one
 * layout recoloured — a booking flow, a listings gallery, and a signup funnel.
 * Every business name is fictional and labelled as a demo on the page itself.
 */
export const demos = [
  {
    slug: 'westbrook-clinic',
    business: 'Westbrook Family Medicine',
    sector: 'Medical clinic',
    job: 'Booking + new-patient intake',
    blurb:
      'Built around one job: turn a phone-sized visit into a booked appointment without a phone call. Same-day slot picker, an insurance checker that answers the front desk’s most-asked question, and a staged intake form.',
    swatch: 'bg-clinic-500',
  },
  {
    slug: 'harlow-vance-realty',
    business: 'Harlow & Vance Realty',
    sector: 'Real estate agency',
    job: 'Listings + valuation capture',
    blurb:
      'A listings site that behaves like a shopfront. Filterable property cards, a gallery that works with a thumb, and a home-valuation form that captures an address before it asks for a phone number.',
    swatch: 'bg-realty-600',
  },
  {
    slug: 'ironside-strength',
    business: 'Ironside Strength Co.',
    sector: 'Gym / fitness studio',
    job: 'Class schedule + membership signup',
    blurb:
      'A conversion funnel with a timetable attached. Day-by-day class schedule, three membership tiers that make the middle one obvious, and a free-trial form that asks for three fields.',
    swatch: 'bg-iron-500',
  },
] as const

export type Demo = (typeof demos)[number]
