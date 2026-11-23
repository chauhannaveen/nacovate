# Nacovate site — CLAUDE.md

Read this before editing anything in this repo.

Live: [nacovate.com](https://nacovate.com) · Repo: `chauhannaveen/nacovate` ·
Hosting: **GitHub Pages — deploy is `git push` to `main`.**

See also `TODO.md` for the pending work list.

---

## ⚠️ This repo has two kinds of files. Do not confuse them.

| Path | Source of truth | Edit it? |
|------|-----------------|----------|
| `index.html` | **This repo.** Hand-written, inline `<style>`, no build step | ✅ Yes, edit directly |
| `fonts/` | Sixteen `.woff2` files — eight faces, each split core/`-ext` | ✅ Yes, see Fonts |
| `demo/tiles/` | 16:9 WebP crops for the homepage Work cards | ✅ Yes, see Work tiles |
| `404.html`, `CNAME`, `.nojekyll`, `design/`, `*.md` | This repo | ✅ Yes |
| `portfolio-site/` | **This repo.** Source of the generated pages — a Next.js 14 project | ✅ Yes, this is where you edit them |
| `demos/`, `products/`, `_next/`, `demo/` | ❌ **Build output** of `portfolio-site/` | ❌ **Never edit by hand** |

⚠️ **`portfolio-site/` (source) → `demos/` (output).** Editing `demos/…/index.html`
directly works until the next build silently overwrites it. The source project moved here
from the LeadForge project folder in Nov 2026 so that the two are no longer entangled and
so the demo source is actually version-controlled — it was in no repo at all before.

⚠️ **`demos/` and `demo/` are different things.** `demos/` is the eight demo *pages*;
`demo/` is their *photography*. `demos/` is wiped and rewritten by `./sync-demos.sh`;
**`demo/` is not build output and that script never touches it.** It is source, read in
place at build time by `portfolio-site/src/lib/photos.ts`, so a photo goes straight into
`demo/<slug>/` here and stays.

⚠️ **Not into `portfolio-site/public/`.** Anything under `public/` is copied into `out/` by
the export and then copied back up here, so every photo would be tracked twice and the repo
would carry them at double size. `sync-demos.sh` warns if it finds files there. Same
reasoning as `media/video/`, which sits at the root for exactly this reason.

`portfolio-site/node_modules`, `.next` and `out` are gitignored; everything else under it
is tracked. **This repo is served by GitHub Pages as-is**, so the tracked source is also
reachable at `nacovate.com/portfolio-site/…`. That is noise rather than a leak — there are
no keys or env files in it, and it is public on GitHub either way — but don't put anything
secret in there expecting it to be private.

To change a demo or the case study:

```bash
./sync-demos.sh
```

That builds the Next project and copies the output here. Then review and commit.

### Why `.nojekyll` must stay

GitHub Pages runs Jekyll by default, and **Jekyll refuses to serve any directory starting
with an underscore**. Without `.nojekyll` at the repo root, `_next/` returns 404 and every
generated page loads with no CSS and no JavaScript. Deleting that empty file breaks the
demos and nothing else, which makes it a nasty one to diagnose.

---

## Known debt: two toolchains in one repo

This is a deliberate shortcut, taken to get the demos live quickly. The cost is real:

- Build artefacts are committed to git (`_next/` is ~750 KB).
- Changing a demo requires running a build on a site whose whole appeal is "push one file".
- Two sources of truth for anything shared.
- Every sync rotates the Next build id, so even a no-op sync dirties nine HTML files and
  renames a `_next/static/<id>/` directory. If a sync's only diff is that, revert it
  rather than commit it.

**The intended fix** is to port the nine generated pages (eight demos + the LeadForge case
study) to plain static HTML in this repo, matching how `index.html` is written, and delete
`portfolio-site/`. Nothing on those pages needs a framework — the interactive parts are a
slot picker, a listings filter, a day-tab switcher and an EMI calculator, roughly forty
lines of vanilla JS each. Do that before the demo set grows.

---

## What lives where

| URL | File | What |
|-----|------|------|
| `/` | `index.html` | The marketing site. Sections: who, services, why, how, **video**, **work**, products, clients, contact |
| `/products/leadforge/` | generated | LeadForge case study — linked from the Products card |
| `/demos/aravali-estates/` | generated | Demo — Gurgaon property consultancy (EMI calculator, HARERA, site visits) |
| `/demos/shanti-dental/` | generated | Demo — Faridabad dental clinic (published pricing, WhatsApp booking, EMI) |
| `/demos/harlow-vance-realty/` | generated | Demo — US real estate agency (gallery, floor plan, valuation capture) |
| `/demos/westbrook-clinic/` | generated | Demo — US medical clinic (booking + insurance checker + intake) |
| `/demos/ironside-strength/` | generated | Demo — US gym (class schedule + membership + trial) |
| `/demos/shakti-steel/` | generated | Demo — Faridabad fabrication unit (capability spec table, certifications, RFQ) |
| `/demos/everest-school/` | generated | Demo — Faridabad CBSE school (published fees, admission timeline, bus routes) |
| `/demos/crestline-commercial/` | generated | Demo — US commercial leasing (availability table, floor plates, tours) |

### The homepage Work tiles are a separate system

The eight cards in `#work` on `index.html` do **not** go through `photos.ts` — that
resolver only exists inside the Next project. They are plain `<img>` tags pointing at
`demo/tiles/<demo-slug>.webp`, hand-written like the rest of that file.

Those tiles are their own down-scaled 16:9 crops (900x506 WebP, roughly 65 KB each), not
the demo originals. Pointing the cards straight at `demo/<slug>/hero-1.jpg` would put
~1.8 MB of 250 KB photographs on the homepage and undo the font work above. They are
`loading="lazy"` and sit well below the fold, so they cost nothing until scrolled to.

All eight cards carry a photo. Westbrook's is the odd one: that demo has no gallery, so
it has no `demo/westbrook/` folder — its waiting-room shot was generated for the tile
alone and lives only in `demo/tiles/`. Its prompt is in `IMAGE-PROMPTS.md` all the same,
which is what makes it reproducible without the source file being tracked.

The gradient classes `shot-a` … `shot-h` are still there behind every tile; they show
while the image loads and carry westbrook outright.

Demo photography is **generated and in place for seven of the eight demos** (westbrook
has no gallery). `IMAGE-PROMPTS.md` has the prompt that produced each file, plus a note on
what generators get wrong. **Swapping one in is a file drop, not a code change:** every image slot resolves its
own path at build time through `src/lib/photos.ts` (`photosFor(slug)` → `img('hero-1')`),
so a file at `demo/<slug>/<name>` **at this repo's root** switches that slot to the photo
and a missing file keeps the placeholder. The filename is the contract — see the tables in
`IMAGE-PROMPTS.md`. Extensions `.jpg .jpeg .png .webp .avif` all resolve.

That helper reads the filesystem at build time, so it **cannot be called from a
`'use client'` module**. Where a client component needs photos, the server component
resolves the paths and passes them down. `ListingExplorer.tsx` on harlow is the worked
example: `listings.ts` carries a `photo` slot name per listing, `page.tsx` turns that into
`listingPhotos` with `img()`, and the component takes it as a prop.

⚠️ **Key that art on the listing, not on the render index.** Those thumbnails used
`motif={i % 3 …}` and `variant={i + 1}`, so re-sorting or filtering the grid handed a row
a different picture — the index moved even though the listing had not. Photos made it
obvious; with placeholders it just looked like decoration shuffling.

The demos link back to `/#work`. If that section is ever renamed, fix the links in the
**source project** (`portfolio-site/src/components/demo/DemoFooter.tsx`), not in the generated HTML.

---

## Design system

The homepage also carries a motion layer (reading-progress bar, hero aurora, cursor
spotlight on cards, count-up figures, a step line that draws on scroll, a sector marquee
and the before/after comparison in `#replace`). It is vanilla JS in the second `<script>`
block and CSS under "Motion & interaction layer". Two rules worth keeping:

- **Do not put `filter: blur()` on the aurora.** It forces the whole hero subtree onto a
  composited layer — the hero rendered blank in capture and it costs real frames on
  low-end phones. The radial gradients are already soft enough without it.
- Everything is disabled under `prefers-reduced-motion: reduce`. Keep it that way.

`index.html` defines CSS custom properties on `:root` with a `[data-theme=dark]` override.
Use the tokens, never raw hex.

**The palette is "Ink & copper"** — warm off-white `#F7F4EF`, near-black `#17150F`, copper
accent `#A65B23`. It replaced a teal accent in Oct 2026 for two reasons: teal is the
default in IT services, and the old `#0B7A83` sat only ΔE 11.4 from the Westbrook clinic
demo — the brand wore its own clients' colour. Copper's nearest demo is ΔE 25.4. Any
future accent change should be checked the same way: perceptual distance against every
demo palette, not hue angle, which is misleading. Options considered are preserved in
[design/palettes.html](design/palettes.html).

```
--bg --surface --ink --muted --faint --border --border-strong
--signal (#A65B23 light / #D98A48 dark) --signal-ink --signal-soft --on-signal
--shadow --shadow-lift --glow --radius --radius-sm --maxw --pad
--serif (Archivo) --sans (IBM Plex Sans) --mono (IBM Plex Mono)
```

Reusable classes already exist — `wrap`, `section-head`, `eyebrow`, `cards`, `card`,
`benefit`, `btn`, `btn--ghost`, `btn--lg`, `textlink`, `badge`, `meta`, `steps`, `step`,
`product-grid`, `product-feature`, `product-aside`, `reveal`, `stagger` (with `--i`).
**Prefer reusing these over writing new CSS** — the Work section was added without a
single new rule.

The Next project mirrors the dark-theme tokens in `tailwind.config.ts` under `ink` and
`ember`. If the brand copper changes here, change it there too or the generated pages
drift out of brand.

### The mobile menu

Below 900px the header nav collapses behind a button (`#navToggle`). Until Nov 2026 there
was no button at all — `.nav-links` was simply `display:none` under 900px and nothing
replaced it, so every phone and every portrait tablet had exactly two header controls and
the only navigation on the site was the footer, 28 phone screens down.

**The panel is the desktop `<nav>`, restyled — not a copy of it.** Under 900px
`.nav-links` becomes an absolutely-positioned block under the header; over 900px it is the
inline row it always was. There is one link list in the markup, so a seventh section can
never reach the desktop header and miss the phone menu. Do not "simplify" this into a
separate `<nav class="mobile-nav">`.

Three details that are each load-bearing:

- **The closed panel is `visibility:hidden`, not `display:none`.** `display:none` cannot
  animate; `opacity:0` alone would leave six invisible links in the tab order. The
  `visibility` transition is delayed by the fade duration on the way out so the panel only
  vanishes once it has finished fading.
- **`.site-header` is `position:sticky`, which makes it a positioned ancestor**, so the
  panel's `top:100%` tracks the header down the page on its own. No second scroll listener.
- **⚠️ `.nav-links a` is (0,1,1) and outranks a bare `.nav-cta`.** The in-panel button is
  therefore selected as `.nav-links a.nav-cta`. With the lower-specificity selector the row
  rule won and painted the label in `--ink` — dark text on copper in light mode, light text
  on copper in dark, wrong in both and easy to miss. It takes `--_bg`/`--_fg` from `.btn`
  rather than naming `--signal`/`--on-signal`, so a `.btn--*` variant would still paint it.

**The header CTA leaves the row under 640px and reappears inside the panel** as `.nav-cta`.
This is not a style preference: at 375px the row needs brand 130 + toggle 40 + CTA 140 +
button 40 + gaps = 382px of a 345px content box, and the overflow gave the *whole site* a
horizontal scrollbar (`document.body.scrollWidth` 400 against a 375 viewport). Something
had to go and it could not be the menu button. The CTA is the one deliberately duplicated
link on the page — both point at `#contact`. One button duplicated is a risk worth taking;
six nav links duplicated is not, which is why the list above is shared.

Closing is wired four ways — the button, a link (every destination is a same-page anchor,
so without this the panel would sit on top of the section just jumped to), Escape (which
returns focus to the button), and a click outside the header. A `matchMedia` listener also
clears the open state when the viewport crosses 900px, so `aria-expanded="true"` is never
left on a button nobody can see. ⚠️ **That last one cannot be tested in a devtools-style
emulated viewport** — resizing by emulation fires neither `resize` nor `matchMedia`
`change` (verified: zero events across a 1280 → 375 change). Test it by resizing a real
window. It is belt-and-braces in any case: over 900px the CSS ignores `.nav-open`
entirely, so a stale class changes nothing on screen.

### Fonts

Eight faces — Archivo 600/700/800, IBM Plex Sans 400/500/600, IBM Plex Mono 500/600 —
live as `.woff2` files in **`fonts/`** at the repo root, referenced by `@font-face` in
`index.html`. Nothing else on the site uses them; the generated pages carry no
`@font-face` at all.

They used to be base64 inside the inline `<style>`, which is what made the homepage slow.
The trade-off was measured rather than assumed:

| | inline base64 | external `.woff2` |
|---|---|---|
| `index.html` | 461 KB | 106 KB |
| over the wire | 304 KB | 26 KB |
| `domInteractive` | 6.4 s | under 0.2 s |

Base64 inflates binary by a third, and WOFF2 is already Brotli-compressed inside, so gzip
could not claw any of it back — 461 KB of HTML only shrank to 304 KB. Being inline also
made it render-blocking and uncacheable: GitHub Pages sends `Cache-Control: max-age=600`,
so a visitor eleven minutes later paid for all 356 KB again.

The render-blocking worry that justified inlining is handled instead by
`font-display: swap` on every face (text paints immediately in the fallback) plus a
`<link rel="preload">` for the **two** faces the first screen uses — Archivo 800 for the
wordmark and hero, IBM Plex Sans 400 for body copy. ⚠️ **Don't preload all eight.** That
rebuilds the same traffic jam, just with eight requests instead of one file.

Archivo 700 is declared but no rule uses it. Harmless now — a browser only fetches a face
something asks for — where inline it was 45 KB nobody needed on every single load.

#### Subsetting, and the two glyphs that are missing

Each face is **two files**: `<name>.woff2` holds the 96 characters index.html can show,
`<name>-ext.woff2` holds accented Latin, the rest of the punctuation and currency blocks
and a few symbols. Each `@font-face` declares its own `unicode-range`, so `-ext` downloads
only if one of its characters ever appears. Today none does.

| | | |
|---|---|---|
| full faces | 266 KB | what Google's CSS gave us |
| subset, one file each | 214 KB | only 19% off — see below |
| split, core only | **135 KB** | what a visitor downloads |

⚠️ **These were never full font families.** They came from Google Fonts, which serves
per-`unicode-range` subsets, so each was already its `latin` cut at ~230 glyphs. Subsetting
dropped 19 of those; nearly all of the 19% came from `--desubroutinize`, not from removing
characters. The real win was the split, because the ~96 accented Latin-1 letters are both
unused and unsafe to delete outright — the next client name with an accent would render
that one letter in a fallback face.

⚠️ **Never hand-write a `unicode-range`.** Each one is read back from the built `.woff2`'s
cmap. A range that claims a character the file lacks makes the browser pick that face,
find no glyph, and fall back for that character alone — which looks exactly like nothing
went wrong. Regenerate the files and the CSS together.

**U+20B9 (₹) and U+2192 (`&rarr;`) are in none of these fonts**, and were not in the
originals either: Google's `latin` subset omits both. They fall back to `system-ui`, as
they always have. The rupee appears once, in a video mock-up caption; the arrow once, in
the hero button. If either ever needs to match, the fix is a font that has the glyph, not
a wider range — a range cannot conjure one.

The scripts that produced all this (`charset.py` → `subset3.py` → `split3.py` →
`verify_fonts.py`) were one-offs in a scratch directory and are **not** in the repo. They
need `fonttools` and `brotli`. `verify_fonts.py` is the one worth recreating if the fonts
are ever touched: it asserts every character the page can show is covered by every weight,
and tells a regression apart from a glyph the source font never had.

---

## The video service

`#video` sells short-form video. It shows a **mock-up** of a reel's four-beat structure
(hook / proof / offer / CTA) built in CSS — not a sample film, and the page says so.
**Three real samples now ship** from `media/video/` — `dental.mp4` (15s), `property.mp4`
and `fabrication.mp4` (20s each), all 720x1280. The structure mock-up is kept above them
as the explainer; the players sit below it under "Three we made".

Two things about how they are wired, both deliberate:

- **Captions are live DOM text over the video, not burned into the file.** They are
  defined in the `CAPS` object in the players script and synced to `currentTime` in
  quarters. That keeps them sharp at any size, readable to a screen reader, and
  translatable without re-encoding a frame. **The consequence: the .mp4 files themselves
  have no captions**, so anything posted to Instagram or a Google Business Profile needs
  them burned in separately.
- **The files live in this repo at `media/video/`, not in the Next project's `public/`.**
  The three demo pages reference `/media/video/*.mp4` absolutely, which resolves on the
  deployed site because both are served from the same origin. Running `portfolio-site`
  standalone with `npm run dev` will show the poster frame and fail to play. That is
  expected, not a bug.

`VIDEO-SHOTS.md` has the prompts and compression commands; `VIDEO-PLAYBOOK.md` has the
strategy. Both still apply for the next batch.

**UGC is a format inside this service, not a sixth service.** It is one card in the
formats grid ("Filmed by your own people") and should stay that way — a solo studio
selling six services reads as someone who has not decided what they do. The honest
version is directing and editing footage the client's own staff films: nothing to
disclose, nobody invented, and it is the format that works hardest in a paid feed.
AI-generated "customers" are the thing we refuse, below.

Two content rules specific to video, both load-bearing:

- **No AI-generated fake customers or testimonials.** Same lie as an invented review,
  same exposure. Synthetic presenters get labelled.
- **No invented statistics.** The "video lifts conversions by 86%" numbers trace back to
  marketing blogs citing each other with no study underneath. The site says so out loud,
  which is more persuasive than the stat would have been. Do not quietly swap in a
  number later.

## Rules for content on this site

1. **No claim that is not true.** No paying clients, no testimonials, no awards, no
   founding year, no team size that does not exist. This is a working rule, not a
   preference — a prospect who asks "which clinic was that?" and gets no answer is a
   lost deal and a damaged reputation.
2. **LeadForge is ours, and the page says so twice.** It is an internal tool we built
   and use, never implied to be client work.
3. **Every factual claim in the case study is checkable against the LeadForge source**
   (`C:\Users\chauh\Claude\Projects\Linked leads generator\leadforge-app`). If LeadForge
   changes, update `src/lib/case-study.ts` in the source project in the same change.
4. **Demos are labelled as demos** — a disclosure bar at the very bottom of each demo
   page naming it a demo website and saying the business is not real. Reviews inside a
   demo are part of the fiction and need no separate label; the page-level disclosure
   covers them. **This does not extend to nacovate.com itself** — see rule 1. Invented
   testimonials on our own site would be deceiving real prospects, and fake reviews are
   actionable under both the US FTC rule and India's CCPA guidelines.
5. **No stock photography in the demos.** Drawn placeholders only. Borrowing someone's
   interior photography implies the work in it is ours.
6. **No demo form sends anything.** Each shows a success state that says it is a demo.
7. **Voice: "I" observes, "we" delivers.** Outreach goes out under Heena's name while
   delivery is Naveen's, so observations stay singular ("I came across…") and every
   capability or delivery claim is plural ("We build these"). Never "I'm a freelance IT
   consultant". Same convention as `leadforge-app/CLAUDE.md`.

### ⚠️ Open honesty issue

The three testimonials in the `#clients` section are AI-written samples attributed by
role ("Clinic owner / Healthcare") with specific claims ("under three weeks", "six hours
a week back"). `TODO.md` flags them for replacement. They are **live and public**, and
the email signature now drives prospects to this page. Either replace them with real
quotes or remove the section until there are some — do not leave invented reviews on a
site whose stated rule is the one above.

---

## Checklist before pushing

- [ ] If `demos/`, `products/` or `_next/` changed, they came from `./sync-demos.sh`, not a hand edit
- [ ] `.nojekyll` still exists at the repo root
- [ ] Looked at the site at 375px wide — these pages are read on phones
- [ ] No new unsourced claim about clients, results or team size
