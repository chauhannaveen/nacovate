#!/usr/bin/env bash
#
# Rebuilds the demo pages and the LeadForge case study, and copies them into this repo.
#
# `demos/`, `products/` and `_next/` here are BUILD OUTPUT — editing them by hand works
# until the next run of this script silently overwrites it. Edit the source project in
# ./portfolio-site instead, then run this.
#
# `demo/` is NOT build output and this script must never touch it. It is the demo
# photography itself, read straight off disk at build time by portfolio-site/src/lib/
# photos.ts. Keeping it here rather than in the project's public/ is what stops every
# photo existing twice in git. Note the names: demos/ is pages, demo/ is images.
#
# Usage:  ./sync-demos.sh [path-to-portfolio-site]
#
set -euo pipefail

# The source project lives inside this repo, so the default is relative to this script.
# It used to be an absolute path to a folder in the LeadForge project, which is exactly
# the kind of thing that rots the moment anything moves.
DST="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="${1:-$DST/portfolio-site}"

if [ ! -f "$SRC/package.json" ]; then
  echo "error: no Next project at: $SRC" >&2
  echo "pass the path as the first argument, e.g. ./sync-demos.sh ../portfolio-site" >&2
  exit 1
fi

echo "==> building $SRC"
( cd "$SRC" && npm run build )

if [ ! -d "$SRC/out/demos" ]; then
  echo "error: build produced no out/demos — is output:'export' still set?" >&2
  exit 1
fi

echo "==> copying into $DST"
rm -rf "$DST/demos" "$DST/products" "$DST/_next"
cp -r "$SRC/out/demos"    "$DST/demos"
cp -r "$SRC/out/products" "$DST/products"
cp -r "$SRC/out/_next"    "$DST/_next"
cp    "$SRC/out/404.html" "$DST/404.html"

# demo/ is read in place by the build, not copied, so there is nothing to sync here — this
# only reports what the build just saw. Counting files rather than testing the directory:
# demo/ can sit there with empty per-slug folders and still mean "no photography yet".
IMAGE_COUNT=0
if [ -d "$DST/demo" ]; then
  IMAGE_COUNT="$(find "$DST/demo" -type f | wc -l | tr -d ' ')"
fi
if [ "$IMAGE_COUNT" -gt 0 ]; then
  echo "    demo images read from $DST/demo: $IMAGE_COUNT file(s)"
else
  echo "    (no demo images — demos still using drawn placeholders)"
fi

# A stray copy under the source project would shadow nothing but would be copied into
# out/ and committed twice, which is the duplication this layout exists to avoid.
if [ -d "$SRC/public/demo" ] && [ -n "$(find "$SRC/public/demo" -type f -print -quit)" ]; then
  echo "warning: files found in $SRC/public/demo — photography belongs in $DST/demo" >&2
  echo "         those will be copied into out/ and end up tracked twice." >&2
fi

# NOT copied: out/index.html. The homepage of this site is the hand-written index.html
# in this repo, and the Next project's own landing page would overwrite it.

# GitHub Pages runs Jekyll, which refuses to serve directories starting with an
# underscore. Without this file _next/ 404s and every generated page loads unstyled.
touch "$DST/.nojekyll"

echo
echo "done. generated pages:"
find "$DST/demos" "$DST/products" -name index.html | sed "s|$DST/|  /|"
echo
echo "review, then commit. deploy = push to main."
