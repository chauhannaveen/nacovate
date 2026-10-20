#!/usr/bin/env bash
#
# Rebuilds the demo pages and the LeadForge case study, and copies them into this repo.
#
# `demos/`, `products/` and `_next/` here are BUILD OUTPUT — editing them by hand works
# until the next run of this script silently overwrites it. Edit the source project
# instead, then run this.
#
# Usage:  ./sync-demos.sh [path-to-portfolio-site]
#
set -euo pipefail

DEFAULT_SRC="/c/Users/chauh/Claude/Projects/Linked leads generator/portfolio-site"
SRC="${1:-$DEFAULT_SRC}"
DST="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

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
