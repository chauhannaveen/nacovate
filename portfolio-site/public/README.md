# public/

Almost nothing belongs here.

**Demo photography does NOT go in this folder.** It lives at `demo/<slug>/` in the repo
above, and `src/lib/photos.ts` reads it there at build time. That is deliberate: anything
under `public/` is copied into `out/` by the static export and then copied up into the
repo again by `sync-demos.sh`, so a photo placed here ends up tracked twice and the repo
carries every image at double its real size. `sync-demos.sh` warns if it finds files here.

Same reasoning as the sample videos, which live at `media/video/` in the repo above.

The consequence, expected rather than a bug: `npm run dev` on this project alone serves
no `/demo/...` or `/media/...`, so the dev server shows drawn placeholders and dead video
players. Build with `./sync-demos.sh` from the repo root to see the real pages.
