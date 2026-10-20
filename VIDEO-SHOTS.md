# Video shots — ready to generate

Everything needed to produce the three sample videos. Prompts are in code blocks so you
can copy them with one click. Strategy and the rules behind it live in
[VIDEO-PLAYBOOK.md](VIDEO-PLAYBOOK.md).

**You generate 12 clips → cut into 3 finished videos → drop them in `media/video/` → tell
me, and I wire them into the site.**

---

## 1 · Settings to use in any generator

| Setting | Value | Why |
|---|---|---|
| Aspect ratio | **9:16** | Vertical. This is for the feed and Google Business Profile |
| Resolution | 1080 × 1920 | Anything larger is wasted; it gets compressed anyway |
| Duration per clip | **4–6 seconds** | Current models hold quality for a few seconds. Longer drifts |
| Frame rate | 24 or 30 fps | Either is fine, keep it the same across all clips |
| Audio | Off / ignore | Generated audio is weak. Music and voice go on in the edit |
| Variations | **3 per shot** | Roughly one in three is usable. Budget for that |

**Append this to every prompt** (the negative/no-list matters more than the description):

```
vertical 9:16, cinematic, natural light, shallow depth of field, slow deliberate camera move, photorealistic
--no text, watermark, logos, subtitles, captions, faces, distorted hands, extra fingers, warped objects
```

**Why no faces:** a generated face is a person who never consented and never existed.
Hands, over-the-shoulder, backs of heads and empty rooms carry the story perfectly well
and keep you clear of the fake-customer problem. Every prompt below is written that way.

---

## 2 · Video A — Dental clinic

Pairs with the demo at `/demos/shanti-dental/`. Final length **15s**.

### A1 · Hook (0–3s)

```
Close-up of a hand holding a smartphone, thumb hovering hesitantly over the screen without tapping, soft window light, domestic interior blurred behind, shallow focus, quiet and still
```

### A2 · Proof — the room (3–7s)

```
Slow push-in through the doorway of a bright modern dental surgery, mint green and white, empty dental chair, spotless surfaces, instruments neatly arranged, morning light through a window
```

### A3 · Proof — the detail (7–11s)

```
Gloved hands opening a sealed sterilisation pouch over a stainless steel tray, close macro, clinical lighting, crisp focus on the seal tearing
```

### A4 · Call to action (11–15s)

```
Clean overhead shot of a smartphone on a pale wooden desk beside a small potted plant, screen glowing softly, empty space around it for text, warm morning light
```

---

## 3 · Video B — Property

Pairs with `/demos/aravali-estates/`. Final length **15s**.

### B1 · Hook (0–3s)

```
Slow aerial push toward a modern Indian residential high-rise tower at golden hour, glass and beige stone facade, hazy city skyline behind, warm light
```

### B2 · Proof — inside (3–7s)

```
Slow pan through an empty modern apartment living room, light marble floor, tall balcony doors open, sheer white curtains moving gently in the breeze, bright natural daylight
```

### B3 · Proof — the view (7–11s)

```
Looking out from a high apartment balcony over a hazy Gurgaon skyline at dusk, other residential towers in the distance, city lights beginning to glow, slow drift forward
```

### B4 · Call to action (11–15s)

```
Close-up of a set of keys and a folded floor plan on a clean table beside a window, soft evening light, empty space in frame for text
```

---

## 4 · Video C — Fabrication

Pairs with `/demos/shakti-steel/`. Final length **15s**.

### C1 · Hook (0–3s)

```
Fibre laser cutting head slicing through a steel sheet, bright sparks spraying, dark industrial workshop, close macro, slow tracking move along the cut line
```

### C2 · Proof — the machine (3–7s)

```
CNC press brake bending a steel sheet, mechanical arm descending, metal folding cleanly, workshop lighting, medium shot, no people
```

### C3 · Proof — the output (7–11s)

```
Slow dolly past finished powder-coated steel brackets and enclosures stacked neatly on a wooden pallet, matte grey finish, warehouse background, industrial lighting
```

### C4 · Call to action (11–15s)

```
Technical drawing on paper beside a steel part on a workbench, overhead shot, calipers resting on the drawing, clean industrial lighting, empty space in frame for text
```

---

## 5 · Captions — add these in the editor, not the generator

Generated text is still unreliable, and you want to change wording without regenerating
footage. Keep captions large, high-contrast, and in the **middle third** — Instagram's UI
covers the bottom.

### Video A — Dental

| Time | Caption | Note |
|---|---|---|
| 0.5–3s | **Putting off the dentist?** | Large. The whole hook |
| 3.5–7s | Clean room. Sealed instruments. | Two short lines |
| 7.5–11s | **Free consultation.**<br>Price agreed before we start. | Bold the free bit |
| 11.5–15s | **Book on WhatsApp** | With the WhatsApp glyph |

### Video B — Property

| Time | Caption | Note |
|---|---|---|
| 0.5–3s | **What ₹1.2 crore actually gets you.** | Use a real local number |
| 3.5–7s | 1,840 sq ft carpet. Not super built-up. | The distinction buyers care about |
| 7.5–11s | **HARERA number on every project.** | Trust beat |
| 11.5–15s | **Sunday site visit — cab on us.** | The offer |

### Video C — Fabrication

| Time | Caption | Note |
|---|---|---|
| 0.5–3s | **Send the drawing.** | Short and declarative |
| 3.5–7s | Laser, bending, welding, coating — one roof. | |
| 7.5–11s | **Quote back in 24 hours.**<br>Itemised, not a lump sum. | |
| 11.5–15s | **WhatsApp the DXF.** | |

### Optional voiceover

Only if you want it — these work silently, and most feed viewing is muted. If you do add
voice, record the same script in **English and Hindi** and export two files. The footage
is identical; only the audio and caption track change. That second language version costs
almost nothing and is the single cheapest reach you will buy.

---

## 6 · Edit and export

1. Drop the four clips on a timeline in order, trim each to the beat timing above.
2. Hard cuts between beats. No crossfades, no wipes — they read as amateur in short form.
3. Captions in the middle third, one idea per beat.
4. Music optional and quiet. Pick something licence-free; do not use a chart track.
5. Export **1080 × 1920, H.264, 30fps**.

## 7 · Compress before handing them over

These go into a git repo that GitHub Pages serves. An uncompressed export will be
20–40 MB; we want **under 3 MB each**.

With ffmpeg (PowerShell — run from wherever your exports are):

```powershell
ffmpeg -i dental-raw.mp4 -vcodec libx264 -crf 28 -preset slow -an -movflags +faststart dental.mp4
```

`-an` strips audio. Keep it if the video is silent — most feed viewing is muted anyway,
and it roughly halves the file. Drop `-an` if you added a voiceover.

Also export **one still frame** per video as a poster image, so the page shows something
before the video loads:

```powershell
ffmpeg -i dental.mp4 -ss 00:00:04 -vframes 1 -q:v 3 dental-poster.jpg
```

No ffmpeg? HandBrake, "Web Optimised" preset, RF 28, works just as well.

---

## 8 · What to hand back

Put the files here, exactly these names:

```
Nacovate/media/video/dental.mp4
Nacovate/media/video/dental-poster.jpg
Nacovate/media/video/property.mp4
Nacovate/media/video/property-poster.jpg
Nacovate/media/video/fabrication.mp4
Nacovate/media/video/fabrication-poster.jpg
```

Then tell me they're there. I will:

- Replace the CSS mock-up in `#video` with the three real videos, click-to-play with the
  poster showing first — **not** autoplay, which burns mobile data and is why people
  scroll past
- Add each video to its matching demo site (`shanti-dental`, `aravali-estates`,
  `shakti-steel`)
- Add `<video>` markup with `playsinline`, `preload="none"` and the poster, so nothing
  downloads until someone presses play
- Update `TODO.md` and `CLAUDE.md`

**If a shot does not come out well, skip it and tell me which.** Three beats and a strong
hook beats four beats where one looks wrong — I will adjust the timing.

---

## 9 · Rough time budget

| Step | First video | Each after |
|---|---|---|
| Generating 12 clips (3 variations each) | 2–3 hrs | 45 min |
| Picking the keepers | 30 min | 15 min |
| Edit and captions | 1–2 hrs | 45 min |
| Compress and export | 15 min | 10 min |

Call it a day for the first one, half a day for the other two. The dental one first — it
has the clearest hook and the cleanest shots.
