#!/usr/bin/env bash
#
# Rebuilds the demo pages and the LeadForge case study, and copies them into this repo.
#
# `demos/`, `products/`, `_next/` and `demo/` here are BUILD OUTPUT — editing them by hand
# works until the next run of this script silently overwrites it. Edit the source project
# in ./portfolio-site instead, then run this.
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
rm -rf "$DST/demos" "$DST/products" "$DST/_next" "$DST/demo"
cp -r "$SRC/out/demos"    "$DST/demos"
cp -r "$SRC/out/products" "$DST/products"
cp -r "$SRC/out/_next"    "$DST/_next"
cp    "$SRC/out/404.html" "$DST/404.html"

# out/demo/ is demo photography from the source project's public/demo/. Optional — the
# demos fall back to drawn placeholders when a file is missing, so an absent directory
# is not an error. Note the names: demos/ is pages, demo/ is images.
IMAGE_COUNT=0
if [ -d "$SRC/out/demo" ]; then
  IMAGE_COUNT="$(find "$SRC/out/demo" -type f | wc -l | tr -d ' ')"
fi
if [ "$IMAGE_COUNT" -gt 0 ]; then
  cp -r "$SRC/out/demo" "$DST/demo"
  echo "    + demo images: $IMAGE_COUNT file(s)"
else
  # Counting files rather than testing the directory: `public/demo/` can sit there empty
  # (or with empty per-slug folders), and copying that only leaves an empty `demo/` in
  # the repo that git won't track and nobody can explain later.
  echo "    (no demo images — demos still using drawn placeholders)"
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
