# Image prompts for the demo builds

**Status: 50 of these are done.** Seven demos are fully photographed — aravali, shanti,
harlow, ironside, shakti, everest and crestline. The prompts below are the ones that were
actually used, so they are a record as much as a brief. Two sets of placeholders remain
and neither is listed here: the three project cards on the aravali page, which have no
filename assigned, and the listing-grid thumbnails on harlow, which are inside a
`'use client'` component and so cannot call the resolver (see `portfolio-site/README.md`).

Any image still missing stays a drawn placeholder, and swaps to a real photo the moment a
file exists at the right path — no code change, just a `src`.

Works with Midjourney, DALL·E, Imagen, Flux, Ideogram or any other generator.

---

## How to use these

**Two steps. There is no code change.**

1. Save the file under `demo/<slug>/` **at the root of this repo** —
   `C:\Users\chauh\Documents\AI Apps\Nacovate\demo\` — using the exact slug and filename
   from the tables below, e.g. `…\Nacovate\demo\aravali\hero-1.jpg`. Not under
   `portfolio-site/public/` — see that folder's `README.md` for why.
2. Run `./sync-demos.sh` from the repo root, then commit and push.

Every image slot on every demo is already wired to look for its file at build time
(`portfolio-site/src/lib/photos.ts` → `photosFor(slug)`). A slot with no file keeps its drawn
placeholder; a slot whose file exists switches to the photo. So you can deliver these one
folder at a time and nothing needs editing in between. **The filename is the contract** —
`hero-2.jpg` lands in the second gallery slot and nowhere else.

`.jpg` is assumed but `.jpeg`, `.png`, `.webp` and `.avif` all work, so don't bother
converting what your generator handed you — just keep the base name.

**Sizes.** Gallery and hero images: 1600×1200 (4:3) or 1600×1000 (16:10). Thumbnails are
generated from the same file, so one image per slot is enough. Portraits: 600×600 square.
Floor plans and maps: 1200×900.

**Compress before committing.** Run them through Squoosh or TinyPNG and keep each file
under about 250 KB. These go into a git repo that GitHub Pages serves — five unoptimised
camera JPEGs will do more damage to your load time than the placeholders ever did.

**Append to every prompt:** `photorealistic, natural daylight, shot on 35mm, shallow
depth of field, no text, no watermark, no logos, no recognisable faces`

The no-faces rule matters. A generated face in a testimonial or a staff photo reads as a
real person who never consented to being there, and some generators produce faces close
enough to real people to cause trouble. Use backs of heads, hands, over-the-shoulder
angles or empty rooms.

**Three things generators reliably get wrong.** All three were hit on an aravali batch:

- **Text inside an image comes out garbled.** The first floor plan was captioned "3 BHK" by the
  page but drew four bedrooms, labelled two of them "BEDROOM 3", had no BEDROOM 2, and printed
  impossible dimensions (`17' 16-10"`, `35'-12"`). **Ask for no dimension text at all** and
  check any room labels before accepting the file. The same applies to road names on maps.
- **"A city map" means an American one unless you say otherwise.** The aravali map came back with
  Oak Avenue, Maple Drive and Cedar Street on a demo captioned "Sector 63A". Name the country and
  a couple of real local road names in the prompt. (That file was not wasted — it moved to
  `harlow/map.jpg`, where an American suburb is exactly right. It still carries one "RIVE ROAD"
  typo, invisible at the 190px it renders at.)

- **A building gets its own invented name, in letters large enough to read.** The Arbour came
  back with ORCHID HEIGHTS · SECTOR 62 on a nameplate by the gate, directly above a card reading
  "The Arbour / Sector 58". Saying "no signage" in the prompt helps but does not always take, so
  check the entrance and the boundary wall of every exterior shot. The cheap fix is a crop, not a
  regeneration: the card slot is `object-cover`, so handing it a wider image loses nothing — the
  browser shows the centre and crops the sides, and the sign strip can simply be cut off.

None of these is legible at display size — nothing on the demo pages zooms — but a floor plan is
the one thing a property prospect leans in on, and a name is the one thing a card contradicts, so
both are worth getting right.

---

## Aravali Estates — Gurgaon property (`demo/aravali/`)

| File | Prompt |
|------|--------|
| `hero-1.jpg` | Modern high-rise residential tower in Gurgaon, India, glass and beige stone facade, landscaped podium with palms below, late afternoon golden light, clear sky, wide architectural exterior shot |
| `hero-2.jpg` | Spacious empty modern Indian apartment living room, light marble floor, large balcony doors open, sheer curtains, warm neutral walls, minimal staging, bright natural daylight |
| `hero-3.jpg` | View from a high apartment balcony over a Gurgaon skyline at dusk, other residential towers in haze, warm city lights beginning to glow |
| `hero-4.jpg` | Upscale residential clubhouse interior in India, double-height ceiling, rattan and wood furniture, indoor plants, soft daylight through tall windows, no people |
| `hero-5.jpg` | Landscaped garden podium between modern residential towers, paved walking path, young trees, benches, early morning light, no people |
| `project-arbour.jpg` | Completed mid-rise residential apartment building in Gurgaon, India, warm beige and terracotta facade, mature trees and established landscaping in front, paved residents' driveway, bright mid-morning daylight, wide architectural exterior shot, no people |
| `project-lakewood.jpg` | Two newly finished cream and grey mid-rise residential towers in New Gurgaon, India, balconies on every floor, freshly laid paving and newly planted saplings in the foreground, clear daytime light, wide architectural exterior shot, no people, no cranes or scaffolding |
| `floorplan.jpg` | Flat 2D architectural floor plan of a 3 bedroom apartment, viewed straight from directly above, thin black lines on plain white, no perspective, no desk, no paper edges or shadows, rooms labelled MASTER BEDROOM / BEDROOM 2 / BEDROOM 3 / LIVING / DINING / KITCHEN / BALCONY, **no dimension text** |
| `map.jpg` | Stylised minimal map illustration of an **Indian** city sector, muted beige and sage, roads labelled with Indian names such as Golf Course Extension Road, Sector 63A and Dwarka Expressway, a single copper location pin, flat vector style, no photorealism |

The three project cards carry a status badge and a price, so the picture has to agree with
them. `project-arbour` is Ready to move, which is why it is mature and settled;
`project-lakewood` is Nearing possession and the cheapest of the three, so it is finished but
raw-edged and plainer. Verdant Heights has no card photo of its own — it reuses `hero-1`,
because the featured section lower down *is* Verdant Heights and that gallery is its
photography. Its badge reads Under construction while `hero-1` shows a finished tower; that
is how under-construction projects are actually marketed, so it stays.

## Shanti Dental Care — Faridabad (`demo/shanti/`)

| File | Prompt |
|------|--------|
| `clinic-1.jpg` | Small modern dental clinic reception in India, light green and white, clean counter, waiting chairs, potted plant, bright even lighting, no people |
| `clinic-2.jpg` | Dental treatment room, modern dental chair, overhead light, instrument tray, spotless white and mint interior, natural window light, no people |
| `clinic-3.jpg` | Dental sterilisation area, autoclave machine on a clean counter, sealed instrument pouches arranged neatly, clinical white surfaces, bright lighting |
| `clinic-4.jpg` | Small clinic waiting area, four upholstered chairs, magazine rack, warm wall colour, window with daylight, calm and uncluttered, no people |
| `doctor-1.jpg` | Dentist in a white coat seen from behind, reviewing an X-ray on a wall-mounted screen in a clinic, face not visible, soft clinical lighting |
| `doctor-2.jpg` | Dentist's gloved hands holding a dental mirror and explaining a model of teeth on a desk, close crop, no face visible, bright daylight |
| `map.jpg` | Stylised minimal map illustration of a dense Indian city sector, muted green and cream, labelled roads, one green location pin, flat vector style |

## Harlow & Vance Realty — US (`demo/harlow/`)

| File | Prompt |
|------|--------|
| `prop-1.jpg` | Single-storey American suburban house, brick and siding, mature oak trees, neat front lawn, corner lot, warm late-afternoon light, Texas suburb |
| `prop-2.jpg` | Bright American living room, hardwood floor, large windows, neutral furniture, fireplace, tastefully staged, natural daylight |
| `prop-3.jpg` | Renovated kitchen with exposed brick wall, white cabinets, quartz counter, pendant lights, warm daylight from a side window |
| `prop-4.jpg` | Calm main bedroom, white linen bed, light wood floor, large window with garden view, minimal staging, morning light |
| `prop-5.jpg` | Back garden of an American suburban home, mature oak shade, timber fence, lawn and patio furniture, late afternoon |
| `prop-6.jpg` | Quiet residential street in a Texas suburb, mature trees both sides, sidewalk, parked cars, soft evening light |
| `floorplan.jpg` | Flat 2D architectural floor plan of a four-bedroom single-storey house, viewed straight from directly above, thin black lines on plain white, no perspective, no desk or paper edges, labelled rooms, **no dimension text** |
| `map.jpg` | Stylised minimal street map illustration of an American suburb, muted sage and cream, labelled roads, one dark-green location pin, flat vector style |
| `agent.jpg` | Real estate agent's hands passing a set of house keys across a desk with a contract, close crop, no face visible, warm office light |

`prop-1`, `prop-2` and `prop-6` also fill the three-image collage at the top of the page,
so those three carry the most weight — do them first if you are doing a partial set.

## Ironside Strength Co. — US gym (`demo/ironside/`)

| File | Prompt |
|------|--------|
| `gym-1.jpg` | Industrial strength gym interior, black rubber flooring, lifting platforms, loaded barbells, exposed ceiling, dramatic side lighting, no people |
| `gym-2.jpg` | Row of squat racks in a converted warehouse gym, chalk dust in a shaft of light, matte black equipment, moody contrast |
| `gym-3.jpg` | Conditioning area with rowing machines and assault bikes, concrete floor, warm overhead lights, empty, industrial aesthetic |
| `gym-4.jpg` | Coach's hands adjusting a barbell on a lifter's back during a squat, close crop, no faces visible, gym lighting, shallow depth of field |

## Westbrook Family Medicine — US clinic (`demo/westbrook/`)

This demo has no gallery, so it has no `demo/westbrook/` folder. It does have a homepage
Work tile, generated straight to 16:9 and kept only as `demo/tiles/westbrook-clinic.webp`:

| File | Prompt |
|------|--------|
| `tiles/westbrook-clinic.webp` | Reception and waiting area of a modern American family medicine clinic, light oak and sage green, upholstered waiting chairs, check-in desk, potted plant, large windows with soft daylight, calm and uncluttered, wide interior shot, no people, **no signage, no lettering anywhere** |

The signage clause is there because of The Arbour — see the third pitfall above. Asking
for 16:9 up front also saved a crop, since the tile is the only place it is used.

The table below is only if you decide to add a gallery here.

| File | Prompt |
|------|--------|
| `clinic-1.jpg` | Modern American family medicine waiting room, teal accents, comfortable chairs, natural light from large windows, plants, calm, no people |
| `clinic-2.jpg` | Clean medical examination room, exam table with fresh paper, blood pressure cuff on the wall, bright and uncluttered, no people |


## Shakti Steel & Fabrication — Faridabad (`demo/shakti/`)

| File | Prompt |
|------|--------|
| `plant-1.jpg` | Interior of an Indian sheet metal workshop, fibre laser cutting machine, sparks, stacked steel sheets, industrial lighting, no people |
| `plant-2.jpg` | Row of CNC press brakes in a clean fabrication shop, bent metal parts stacked on pallets, overhead factory lighting |
| `plant-3.jpg` | Welding bay with MIG welding station and bright weld arc, protective screens, dark industrial interior, no faces visible |
| `plant-4.jpg` | Powder coating line with a long curing oven, hanging metal parts on a conveyor, warm industrial interior |
| `plant-5.jpg` | Finished sheet metal enclosures and brackets stacked neatly on a pallet, grey powder coated, warehouse background |
| `work-1.jpg` | Batch of grey powder-coated sheet metal electrical panel enclosures lined up on a workshop floor, industrial lighting |
| `work-2.jpg` | Welded steel conveyor frame assembly on trestles in a fabrication shop, unpainted mill finish, overhead lighting |
| `work-3.jpg` | Perforated metal façade panels stacked on edge against a workshop wall, repeating hole pattern, raking side light |

## Everest Public School — Faridabad (`demo/everest/`)

| File | Prompt |
|------|--------|
| `school-1.jpg` | Exterior of a modern Indian CBSE school building, red brick and white, flagpole, neat landscaped front, clear morning light, no people |
| `school-2.jpg` | Bright school library interior with wooden shelves, reading tables, large windows, books neatly arranged, no people |
| `school-3.jpg` | School science laboratory, workbenches, microscopes and glassware neatly arranged, bright daylight, no people |
| `school-4.jpg` | School sports ground with running track and basketball court, goalposts, early morning light, empty |
| `school-5.jpg` | Empty modern Indian classroom with desks in rows, whiteboard, ceiling fans, natural light from windows |
| `route-map.jpg` | Stylised minimal map illustration of Faridabad sectors with bus route lines in maroon and gold, flat vector style |

## Crestline Commercial — US (`demo/crestline/`)

| File | Prompt |
|------|--------|
| `bldg-1.jpg` | Six-storey brick and glass commercial office building, American city street, late afternoon light, wide architectural shot |
| `bldg-2.jpg` | Modern office lobby with terrazzo floor, reception desk, seating and large plants, bright daylight, no people |
| `bldg-3.jpg` | Empty open-plan office floor, exposed ceiling, polished concrete, floor-to-ceiling windows, no furniture |
| `bldg-4.jpg` | Corporate conference room with long table, screen on the wall, glass partition, daylight, no people |
| `bldg-5.jpg` | Rooftop terrace of an office building with seating, planters and a city view, golden hour |
| `plate-low.jpg`, `plate-mid.jpg`, `plate-high.jpg` | Flat 2D architectural floor plate drawing of a commercial office floor, viewed straight from directly above, thin black lines on plain white, core and lifts marked, **no dimension text** |
| `contact.jpg` | Hands on a desk beside a building brochure and a coffee cup, close crop, no face visible, warm office daylight — used as the leasing contact's 56px portrait, so crop tight |

---

## For nacovate.com itself

Your own site has no photography and does not need any — it runs on type, colour and
whitespace, which is why it loads fast and looks deliberate. The one image worth making
is the social preview card, already on your `TODO.md`:

> `og-image.png`, 1200×630. Copper `#A65B23` fading into near-black `#14120E`, the Nacovate mark centred-left, the words "Technology that just works" in a
> clean geometric sans, generous margins, no photograph, no stock imagery.

Generate that one at exactly 1200×630 and save it as PNG, not JPEG — flat colour and
text compress better and stay sharper.
