# media/video

Finished sample videos go here, named exactly as `VIDEO-SHOTS.md` specifies:

    dental.mp4        dental-poster.jpg
    property.mp4      property-poster.jpg
    fabrication.mp4   fabrication-poster.jpg

Keep each .mp4 under 3 MB. GitHub Pages serves this repo directly, so an uncompressed
export costs every visitor the download. The compression commands are in VIDEO-SHOTS.md.

These are referenced by `#video` on the homepage and by the three matching demo pages
(`shanti-dental`, `aravali-estates`, `shakti-steel`) at the absolute path
`/media/video/<name>.mp4`.

No poster images: `preload="metadata"` shows the first frame, and every clip opens on a
usable one. Add `<name>-poster.jpg` later if you want finer control.

The files carry no burned-in captions — the site overlays those as live text. Burn them
in separately for anything posted to social.
