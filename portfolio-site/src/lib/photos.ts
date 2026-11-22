import fs from 'node:fs'
import path from 'node:path'

/**
 * Resolves demo photography that may or may not exist yet.
 *
 * Every image slot on the demos is wired through this helper, so dropping a file into
 * `demo/<slug>/` **in the repo above this project** and rebuilding is the *whole* job —
 * there is no `src` to add by hand, and a slot with no file keeps its drawn placeholder.
 * That is deliberate: the demos went live with placeholders and the photography arrives
 * one set at a time, so the alternative was an edit to a page file every time a folder
 * of images landed.
 *
 * ⚠️ It reads `../demo`, NOT this project's `public/`, and that is the point. GitHub Pages
 * serves the repo root, so `demo/` up there is the folder the live site actually reads.
 * Putting the images in `public/` instead would make Next copy them into `out/`, and
 * `sync-demos.sh` would copy them up again — leaving two tracked copies of every photo
 * and roughly doubling what the repo carries in binaries. Same reasoning as the sample
 * videos, which live at the repo root in `media/video/` for exactly this reason.
 *
 * The consequence, and it is expected rather than a bug: running this project standalone
 * with `npm run dev` serves no `/demo/...`, so the dev server shows placeholders. Build
 * through `./sync-demos.sh` from the repo root to see the real thing.
 *
 * Server-only. This reads the filesystem at build time (the project is `output: 'export'`,
 * so every page is prerendered), which means it CANNOT be called from a `'use client'`
 * module. Pass the resolved string down as a prop instead.
 *
 * Extension is optional and `.jpg` is assumed, but `.jpeg`, `.png`, `.webp` and `.avif`
 * are all accepted — generators disagree about what they hand you, and a silently
 * ignored `.png` is a confusing failure.
 */
const DEMO_DIR = path.join(process.cwd(), '..', 'demo')
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

export function photo(slug: string, name: string): string | undefined {
  const base = name.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
  const candidates = EXTENSIONS.map((ext) => `${base}${ext}`)

  for (const file of candidates) {
    try {
      if (fs.existsSync(path.join(DEMO_DIR, slug, file))) return `/demo/${slug}/${file}`
    } catch {
      // An unreadable demo/ is not worth failing a build over — fall through to the
      // placeholder, which is what the demos shipped with anyway.
      return undefined
    }
  }
  return undefined
}

/** `photo` bound to one demo, so a page reads `img('hero-1.jpg')`. */
export function photosFor(slug: string) {
  return (name: string) => photo(slug, name)
}
