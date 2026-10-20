# Video — production playbook

The `#video` section on nacovate.com sells this service. It currently shows a **mock-up**
of a reel's structure, not a sample film, and says so on the page.

**The gap to close:** the demo sites are what make the web work credible. Video needs the
same. Three real sample videos will do more than any amount of copy here. This file is how
to make them.

---

## The structure every short video uses

Four beats, 15 seconds. This is what the mock-up on the site is showing.

| Beat | Time | Job | Test |
|------|------|-----|------|
| 1 · Hook | 0–3s | The question already in their head | Would a stranger stop scrolling? |
| 2 · Proof | 3–7s | A face, a room, a machine — something real | Could a competitor claim the same? If yes, it is too generic |
| 3 · Offer | 7–11s | One concrete reason to act now | Is there a number, a price, or a free thing? |
| 4 · CTA | 11–15s | One action, one tap | Is it the action they can actually take on that platform? |

Most small-business video fails at beat 1 by opening with a logo. The logo belongs at
beat 4, if at all.

---

## Three samples to make first

Pick the niches where you already have demo sites, so the video and the site show together.

### 1. Dental clinic — "Putting off the dentist?"
- **Beat 1:** close on a hand hovering over a phone, not tapping. Caption: *Putting off the dentist?*
- **Beat 2:** clinic interior, calm, bright. A gloved hand opening a sealed sterilisation pouch.
- **Beat 3:** text over the treatment room: *Free consultation. Price before we start.*
- **Beat 4:** WhatsApp icon, *Message us* — matches the demo at `/demos/shanti-dental/`.

### 2. Property — "What ₹1.2 crore gets you in Sector 63A"
- **Beat 1:** drone-style push toward a tower. Caption: *What ₹1.2 crore actually gets you.*
- **Beat 2:** a slow pan through an empty flat, balcony light.
- **Beat 3:** *Carpet area, not super built-up. HARERA number on every project.*
- **Beat 4:** *Book a Sunday site visit — cab on us.*

### 3. Fabrication — "Send the drawing"
- **Beat 1:** sparks, a laser head cutting. Caption: *Send the drawing.*
- **Beat 2:** press brake bending, parts stacking up.
- **Beat 3:** *Quote back in 24 hours. Itemised, not a lump sum.*
- **Beat 4:** *rfq@… — or WhatsApp the DXF.*

Each one is four shots. Four.

---

## Generation prompts

Append to every shot prompt: `vertical 9:16, cinematic, natural light, shallow depth of
field, slow camera move, no text overlay, no watermark, no recognisable faces`

Add captions afterwards in the editor, not in the generation — AI-rendered text is
still unreliable and you want to change copy without regenerating the footage.

| Shot | Prompt |
|------|--------|
| Dental 1 | Close-up of a hand holding a phone, thumb hovering, soft window light, domestic interior, shallow focus |
| Dental 2 | Slow push into a bright modern dental surgery, mint and white, empty chair, clean surfaces |
| Dental 3 | Gloved hands opening a sealed sterilisation pouch on a steel tray, close crop, clinical lighting |
| Property 1 | Slow aerial push toward a modern Indian residential tower at golden hour, hazy skyline |
| Property 2 | Slow pan through an empty modern apartment, balcony doors open, sheer curtains moving |
| Property 3 | Looking out from a high balcony over a Gurgaon skyline at dusk, lights coming on |
| Fab 1 | Fibre laser cutting steel sheet, sparks, dark industrial interior, close macro |
| Fab 2 | CNC press brake bending a steel sheet, mechanical motion, workshop lighting |
| Fab 3 | Finished powder-coated metal parts stacked on a pallet, slow dolly past |

## Tooling

Short clips are what current AI video does well — 5–15 seconds, simple camera moves. It
is weak at dialogue, emotional performance and fine directorial control, so keep shots
short and let captions carry the message.

Workable stack: generate 4 clips → cut in CapCut or Premiere → captions in the editor →
voiceover last. For language versions, swap only the voiceover and caption track; the
footage is reused.

Budget a day per sample for the first one and a couple of hours each after that.

---

## Rules

1. **No fake customers.** No AI-generated "testimonials", no synthetic people presented
   as real clients. It is the same lie as an invented review and carries the same
   exposure under the US FTC rule and India's CCPA guidelines.
2. **Label synthetic presenters.** If the person on screen is not a real member of the
   client's staff, the video says so.
3. **Real premises or clearly generic footage.** Never pass stock interiors off as the
   client's own rooms — a patient who turns up to a different waiting room has been lied
   to before they sat down.
4. **Get consent for before/after**, especially clinical. Written, per patient, per image.
5. **No invented statistics.** The "video lifts conversions by 86%" figures circulating
   online trace back to marketing blogs citing each other with no study underneath. The
   site says this plainly; keep it that way.

---

## Where the videos go once made

- `#video` on nacovate.com — replace the mock-up with the real thing, or keep the mock-up
  as the structure explainer and put samples beside it
- The matching demo site, as a hero or inline clip
- The client's Google Business Profile — the slot almost no local competitor fills
- Meta ads, as the 5-variant test described on the site
