export interface Review {
  quote: string
  name: string
  context: string
  /** Whole stars out of five. */
  stars?: number
}

interface ReviewStripProps {
  reviews: Review[]
  /** Card background + border classes, so each demo keeps its own palette. */
  cardClass?: string
  starClass?: string
  nameClass?: string
  quoteClass?: string
  metaClass?: string
}

function Stars({ count = 5, className = 'text-amber-500' }: { count?: number; className?: string }) {
  return (
    <span className={`flex gap-0.5 ${className}`} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  )
}

export function ReviewStrip({
  reviews,
  cardClass = 'bg-white ring-1 ring-slate-200',
  starClass = 'text-amber-500',
  nameClass = 'text-slate-900',
  quoteClass = 'text-slate-700',
  metaClass = 'text-slate-500',
}: ReviewStripProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <li key={review.name} className={`flex flex-col rounded-2xl p-5 ${cardClass}`}>
          <Stars count={review.stars ?? 5} className={starClass} />
          <blockquote className={`mt-3 flex-1 text-sm leading-relaxed ${quoteClass}`}>
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <footer className="mt-4">
            <p className={`text-sm font-semibold ${nameClass}`}>{review.name}</p>
            <p className={`text-[12px] ${metaClass}`}>{review.context}</p>
          </footer>
        </li>
      ))}
    </ul>
  )
}
