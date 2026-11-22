export interface Listing {
  id: string
  address: string
  area: string
  price: string
  beds: number
  baths: number
  sqft: string
  status: 'For sale' | 'New' | 'Under offer'
  blurb: string
}

/** All invented. Addresses use the 500-block range reserved for fiction. */
export const listings: Listing[] = [
  {
    id: 'l1',
    address: '412 Rowan Hill Drive',
    area: 'Cedar Park',
    price: '$585,000',
    beds: 4,
    baths: 3,
    sqft: '2,410',
    status: 'New',
    blurb: 'Single-storey on a corner lot, two-car garage, mature oaks along the back fence.',
  },
  {
    id: 'l2',
    address: '88 Lattimer Court',
    area: 'Mueller',
    price: '$739,000',
    beds: 3,
    baths: 2,
    sqft: '1,980',
    status: 'For sale',
    blurb: 'Walk-up townhome facing the park, rooftop terrace, south-facing living room.',
  },
  {
    id: 'l3',
    address: '2207 Benning Street',
    area: 'East Austin',
    price: '$465,000',
    beds: 2,
    baths: 2,
    sqft: '1,340',
    status: 'For sale',
    blurb: 'Bungalow with the original porch kept and the kitchen taken back to brick.',
  },
  {
    id: 'l4',
    address: '15 Orchard Bend',
    area: 'Round Rock',
    price: '$512,500',
    beds: 4,
    baths: 2,
    sqft: '2,150',
    status: 'Under offer',
    blurb: 'Family house two streets from the elementary school, screened porch, flat yard.',
  },
  {
    id: 'l5',
    address: '930 Kestrel Way',
    area: 'Westlake',
    price: '$1,185,000',
    beds: 5,
    baths: 4,
    sqft: '3,620',
    status: 'New',
    blurb: 'Hillside build over three levels, double-height hall, pool and casita.',
  },
  {
    id: 'l6',
    address: '77 Pemberly Lane',
    area: 'South Lamar',
    price: '$398,000',
    beds: 2,
    baths: 1,
    sqft: '1,105',
    status: 'For sale',
    blurb: 'Starter home on a quiet cut-through, new roof, workshop in the garden.',
  },
]

export const STATUS_STYLE: Record<Listing['status'], string> = {
  New: 'bg-realty-700 text-white',
  'For sale': 'bg-white/90 text-realty-900',
  'Under offer': 'bg-realty-900/85 text-white',
}
