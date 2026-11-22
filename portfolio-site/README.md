# portfolio-site — source of the generated pages on nacovate.com

A Next.js 14 + Tailwind project with `output: 'export'`. It is **not deployed anywhere by
itself.** It is built, and its output is copied up into the repo that contains it, which
GitHub Pages serves as nacovate.com.

```
Nacovate/                     ← the repo, served by GitHub Pages
├── index.html                ← the real homepage, hand-written, nothing to do with this project
├── portfolio-site/           ← you are here
├── demos/  products/  _next/  demo/   ← build output of this project, committed
└── sync-demos.sh             ← build + copy, in one command
```

It used to sit in the LeadForge project folder and was moved here in Nov 2026, so that the
two projects stop being entangled and so this source is version-controlled at all — it was
in no repo before.

## Building it

Always from the repo root, never `npm run build` on its own:

```bash
cd ..
./sync-demos.sh
```

That builds, copies the output up, counts any demo photography it found, and leaves you to
review and commit. Running the build by hand just writes `out/` and changes nothing live.

For iterating on a page, the dev server is fine:

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
```

Two things will look broken under `npm run dev`, both expected: the sample videos 404
(they are served from `/media/video/` at the repo root, not from `public/`), and so does
any absolute link back to `nacovate.com`.

## What is where

| Path | What it is |
|------|-----------|
| `src/app/demos/*/` | The eight demo builds — one directory per fictional business |
| `src/app/products/leadforge/` | The LeadForge case study |
| `src/components/demo/` | Shared demo parts: footer disclosure, no-op form, review strip, image, gallery, video |
| `src/lib/photos.ts` | Resolves demo photography at build time — see below |
| `src/lib/case-study.ts` | All case-study copy, kept out of the markup so claims are easy to audit |
| `public/demo/<slug>/` | Demo photography. Empty today; drop files in and rebuild |

### Dead weight, kept for now

`src/app/page.tsx`, `src/components/portfolio/` and `src/lib/site.ts` are the original
standalone one-page portfolio. **None of it is published** — `sync-demos.sh` deliberately
does not copy `out/index.html`, because the homepage is the hand-written `index.html` in
the repo root. That is why `site.ts` still says `PLACEHOLDER@example.com` and nothing is
wrong: no published page imports it. Delete that branch when the generated pages are ported
to plain HTML, which is the plan recorded in the repo's `CLAUDE.md`.

### Demo photography

Every image slot calls `photosFor(slug)` from `src/lib/photos.ts`, which checks
`public/demo/<slug>/` on disk while the page is being prerendered. File present → the
photo; file absent → the drawn placeholder the demos ship with. So adding photography is a
file drop and a rebuild, with no code change, and partial sets are fine.

The filename is the contract. The repo's `IMAGE-PROMPTS.md` lists the exact name for every
slot along with a generation prompt. `.jpg .jpeg .png .webp .avif` all resolve.

⚠️ It reads the filesystem, so it **cannot be called from a `'use client'` module**. That
is why `ListingExplorer.tsx` thumbnails are still placeholders; pass a resolved string down
as a prop if they ever need photos.

## The rules this source is built under

These are deliberate. The repo's `CLAUDE.md` is authoritative; the short version:

1. **No claim that is not true.** No paying clients, no testimonials, no awards, no
   founding year, no team that does not exist. LeadForge is our own product and the case
   study says so twice.
2. **Every factual statement in the case study is checkable against the LeadForge source**
   (`C:\Users\chauh\Claude\Projects\Linked leads generator\leadforge-app`). If LeadForge
   changes, change `src/lib/case-study.ts` in the same breath.
3. **Demos are labelled as demos** — a disclosure bar at the bottom of each page naming it
   a demo and saying the business is not real. The reviews inside are part of the fiction
   and that page-level disclosure covers them. This does **not** extend to nacovate.com
   itself, where invented reviews would be deceiving real prospects.
4. **No stock photography.** Generated or drawn only — borrowing someone's interior shots
   implies the work in them is ours.
5. **No form sends anything.** Each shows a success state that says it is a demo.
6. **"I" observes, "we" delivers** — the voice convention from `leadforge-app/CLAUDE.md`.
   Capability and delivery claims are plural.

## Notes

- `trailingSlash: true`, so the folder-per-route export works on a static host with no
  redirect rules. Internal links are written with the trailing slash to match.
- Image optimisation is off (static export), so images are plain `<img>` on purpose.
- Every build rotates the Next build id, which dirties nine HTML files in the parent repo
  even when nothing changed. If that is the only diff after a sync, revert it.
- No analytics, no runtime font fetches, no third-party scripts.
