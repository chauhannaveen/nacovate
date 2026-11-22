/**
 * Content for the LeadForge case study.
 *
 * ⚠️ Every claim here is checkable against the LeadForge source. If the app changes,
 * change this file in the same breath — a case study that overstates what the code
 * does is worse than no case study, because a prospect can ask about it.
 */

export const stack = [
  { group: 'App', items: 'Next.js 14 (App Router), TypeScript in strict mode, Tailwind CSS' },
  { group: 'Data + auth', items: 'Firebase Firestore with real-time sync, Firebase Auth, Admin SDK on the server' },
  { group: 'Outbound', items: 'SendGrid for email, Twilio for WhatsApp reminders, Vercel cron for daily and weekly digests' },
  { group: 'Data sources', items: 'Google Places, Google Geocoding, Google PageSpeed Insights, Hunter.io' },
  { group: 'AI', items: 'Groq for the fast path, Anthropic Claude as the fallback, JSON-mode output both sides' },
  { group: 'Hosting', items: 'Vercel — 13 server routes, every one verifying its own auth token' },
]

export const facts = [
  { value: '~10,700', label: 'lines of TypeScript' },
  { value: '13', label: 'server API routes' },
  { value: '4 months', label: 'of evenings and weekends' },
  { value: '0', label: 'secrets reaching the browser' },
]

export interface Detail {
  n: string
  title: string
  standfirst: string
  body: string[]
  takeaway: string
}

export const details: Detail[] = [
  {
    n: '01',
    title: 'A search that is never allowed to lie about where it looked',
    standfirst: 'Three tiers of location resolution, and a warning the interface cannot hide.',
    body: [
      'Searching "dental practices within 10 miles of Austin" needs coordinates. Google has two endpoints for this and only one of them enforces a radius: Nearby Search does, Text Search cannot. So the city has to be resolved to a point before the real search runs, and that resolution can fail in ways that are easy to miss.',
      'It is attempted three ways in order. The Geocoding API goes first, because its results carry component types — which lets us prefer a result that looks like a town over a same-named landmark, so a township does not resolve to an institute that happens to share its name. If that key is not enabled, the Places findplacefromtext endpoint is tried as a fallback on an API the app already depends on. Only if both fail does it drop to unrestricted Text Search.',
      'That third tier is the interesting one. It returns results, and they look completely normal — but they can be drawn from an entire state rather than ten miles. So the route returns a warning string alongside them, and the interface is required to show it, along with the address the search actually resolved to and the radius it applied. A silently widened search is indistinguishable from a working one, which is exactly how out-of-area leads end up in a pipeline unnoticed.',
    ],
    takeaway:
      'Roughly half the work in this feature went into making a degraded result visible rather than into the happy path.',
  },
  {
    n: '02',
    title: 'Spend the free thing first, and only then the metered one',
    standfirst: 'A paid quota of 25 lookups a month, used last on purpose.',
    body: [
      'Finding a contact address for a small practice has an obvious tool — Hunter.io, which infers addresses from a domain. On the free tier that is 25 lookups a month, which a single afternoon of searching would burn through.',
      'So nothing calls Hunter first. Every lead with a website is run through a free scrape of that site, which is unlimited, needs no key, and catches something Hunter structurally cannot: the gmail and yahoo addresses small practices genuinely use, which no domain-pattern service will ever return. Hunter is the fallback for sites that publish nothing, and it sits behind a setting that can be switched off entirely without disabling the free path.',
      'Choosing which of several found addresses to use is its own problem, so the ranking lives in pure functions in a separate module and is tested by reading rather than by running. A mailto link earns +40 because linking an address is explicit contact intent. A careers@ or billing@ address takes −50 — deliberately more than the mailto bonus, so a linked careers address can never outrank a plain-text info@. Asset references like logo@2x.png are filtered out, as are template leftovers like your-email@example.com.',
      'One case is handled by declining to handle it. Where a site uses Cloudflare email obfuscation, the address is detected but not decoded, and the user is told to copy it by hand. The encoding exists specifically to stop automated harvesting. Reading an address a business published in the clear is fair; defeating a control its owner switched on is not, and a tool that quietly crosses that line is a liability for whoever runs it.',
    ],
    takeaway:
      'The cheapest source is also the most accurate one here. That is not usually true, and it was worth checking before wiring up the paid API.',
  },
  {
    n: '03',
    title: 'The claims a model is not permitted to invent',
    standfirst: 'Deterministic checks produce the facts; the LLM only gets to phrase them.',
    body: [
      'The strongest line in a cold email is a specific, verifiable observation about the recipient’s own website. It is also the easiest thing in the world for a language model to fabricate convincingly, and a fabricated one is worse than a generic email — a prospect can check it.',
      'So the facts are generated before any model is involved. A deterministic pass over the fetched HTML checks whether the site is served over HTTPS, whether it has a viewport meta tag, a meta description, a non-empty title, Open Graph tags, a contact form anywhere on the pages fetched, and whether its copyright year has gone stale. Google PageSpeed Insights supplies a real mobile performance score. Only then does the model run, with a prompt that requires every claim to be grounded in those findings.',
      'The same rule survives editing. The app lets you rewrite a draft with a free-text instruction, and the prompt behind it overrides that instruction wherever they conflict: no invented founding years, staff counts, awards or client names, no implying previous contact that never happened, and existing URLs left untouched.',
      'There is one more guard worth mentioning because it was a bug first. Plenty of small-business sites are client-rendered shells — a lot of markup, almost no readable text until JavaScript runs. Checked naively, every one of them appears to have no description, no title and no form, and the app would cheerfully tell a prospect their site was broken when it was fine. Now a shell is detected by its text-to-markup ratio and its negative findings are suppressed rather than reported. A check that cannot see the page has no business producing a complaint about it.',
    ],
    takeaway:
      'The number we quote to a stranger is the one claim that has to survive them checking it, so it is the one claim no model is allowed to produce.',
  },
]

export const alsoBuilt = [
  {
    title: 'A review gate that cannot be skipped',
    body: 'No pitch ever reaches a prospect without a human reading the final text and confirming it — the send endpoint is reachable from exactly one screen, the review screen. There is no "send all", and that is a product decision rather than an unfinished feature.',
  },
  {
    title: 'An SSRF guard on the route that fetches prospect sites',
    body: 'A server route that fetches a URL supplied by its caller is a request-forgery hole by default. Loopback, private, link-local and cloud-metadata ranges are rejected before the fetch runs.',
  },
  {
    title: 'Database rules written as an allowlist',
    body: 'Firestore access names the two paths the browser legitimately writes, instead of a wildcard over the user’s whole subtree. One server-only index is denied to clients explicitly, because read access there would expose other tenants’ identifiers.',
  },
  {
    title: 'One pinned model id, in one file',
    body: 'A provider retired a model without notice and silently broke two features at once. The id now lives in a single shared module with a comment saying where to look when it happens again.',
  },
]
