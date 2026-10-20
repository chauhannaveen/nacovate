# Image prompts for the demo builds

Every image on the demos is currently a drawn placeholder. Each one swaps to a real
photo the moment a file exists at the right path — no code change, just a `src`.

Works with Midjourney, DALL·E, Imagen, Flux, Ideogram or any other generator.

---

## How to use these

1. Generate the image.
2. Save it to `portfolio-site/public/demo/<slug>/<name>.jpg` — e.g.
   `public/demo/aravali/hero-1.jpg`.
3. In the demo's source, add `src` to that image:
   `{ label: 'Tower elevation', src: '/demo/aravali/hero-1.jpg' }`
4. Run `./sync-demos.sh` from the Nacovate repo.

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

---

## Aravali Estates — Gurgaon property (`public/demo/aravali/`)

| File | Prompt |
|------|--------|
| `hero-1.jpg` | Modern high-rise residential tower in Gurgaon, India, glass and beige stone facade, landscaped podium with palms below, late afternoon golden light, clear sky, wide architectural exterior shot |
| `hero-2.jpg` | Spacious empty modern Indian apartment living room, light marble floor, large balcony doors open, sheer curtains, warm neutral walls, minimal staging, bright natural daylight |
| `hero-3.jpg` | View from a high apartment balcony over a Gurgaon skyline at dusk, other residential towers in haze, warm city lights beginning to glow |
| `hero-4.jpg` | Upscale residential clubhouse interior in India, double-height ceiling, rattan and wood furniture, indoor plants, soft daylight through tall windows, no people |
| `hero-5.jpg` | Landscaped garden podium between modern residential towers, paved walking path, young trees, benches, early morning light, no people |
| `floorplan.jpg` | Clean architectural floor plan drawing of a 3 BHK apartment, top-down 2D, thin black lines on white, room labels, dimension lines, no colour |
| `map.jpg` | Stylised minimal city map illustration, muted beige and sage, labelled roads and a single teal location pin, flat vector style, no photorealism |

## Shanti Dental Care — Faridabad (`public/demo/shanti/`)

| File | Prompt |
|------|--------|
| `clinic-1.jpg` | Small modern dental clinic reception in India, light green and white, clean counter, waiting chairs, potted plant, bright even lighting, no people |
| `clinic-2.jpg` | Dental treatment room, modern dental chair, overhead light, instrument tray, spotless white and mint interior, natural window light, no people |
| `clinic-3.jpg` | Dental sterilisation area, autoclave machine on a clean counter, sealed instrument pouches arranged neatly, clinical white surfaces, bright lighting |
| `clinic-4.jpg` | Small clinic waiting area, four upholstered chairs, magazine rack, warm wall colour, window with daylight, calm and uncluttered, no people |
| `doctor-1.jpg` | Dentist in a white coat seen from behind, reviewing an X-ray on a wall-mounted screen in a clinic, face not visible, soft clinical lighting |
| `doctor-2.jpg` | Dentist's gloved hands holding a dental mirror and explaining a model of teeth on a desk, close crop, no face visible, bright daylight |
| `map.jpg` | Stylised minimal map illustration of a dense Indian city sector, muted green and cream, labelled roads, one green location pin, flat vector style |

## Harlow & Vance Realty — US (`public/demo/harlow/`)

| File | Prompt |
|------|--------|
| `prop-1.jpg` | Single-storey American suburban house, brick and siding, mature oak trees, neat front lawn, corner lot, warm late-afternoon light, Texas suburb |
| `prop-2.jpg` | Bright American living room, hardwood floor, large windows, neutral furniture, fireplace, tastefully staged, natural daylight |
| `prop-3.jpg` | Renovated kitchen with exposed brick wall, white cabinets, quartz counter, pendant lights, warm daylight from a side window |
| `prop-4.jpg` | Calm main bedroom, white linen bed, light wood floor, large window with garden view, minimal staging, morning light |
| `prop-5.jpg` | Back garden of an American suburban home, mature oak shade, timber fence, lawn and patio furniture, late afternoon |
| `prop-6.jpg` | Quiet residential street in a Texas suburb, mature trees both sides, sidewalk, parked cars, soft evening light |
| `floorplan.jpg` | Clean architectural floor plan of a four-bedroom single-storey house, 2D top-down, thin black lines on white, labelled rooms |
| `agent.jpg` | Real estate agent's hands passing a set of house keys across a desk with a contract, close crop, no face visible, warm office light |

## Ironside Strength Co. — US gym (`public/demo/ironside/`)

| File | Prompt |
|------|--------|
| `gym-1.jpg` | Industrial strength gym interior, black rubber flooring, lifting platforms, loaded barbells, exposed ceiling, dramatic side lighting, no people |
| `gym-2.jpg` | Row of squat racks in a converted warehouse gym, chalk dust in a shaft of light, matte black equipment, moody contrast |
| `gym-3.jpg` | Conditioning area with rowing machines and assault bikes, concrete floor, warm overhead lights, empty, industrial aesthetic |
| `gym-4.jpg` | Coach's hands adjusting a barbell on a lifter's back during a squat, close crop, no faces visible, gym lighting, shallow depth of field |

## Westbrook Family Medicine — US clinic (`public/demo/westbrook/`)

Only if you decide to add a gallery here — this demo currently uses none.

| File | Prompt |
|------|--------|
| `clinic-1.jpg` | Modern American family medicine waiting room, teal accents, comfortable chairs, natural light from large windows, plants, calm, no people |
| `clinic-2.jpg` | Clean medical examination room, exam table with fresh paper, blood pressure cuff on the wall, bright and uncluttered, no people |


## Shakti Steel & Fabrication — Faridabad (`public/demo/shakti/`)

| File | Prompt |
|------|--------|
| `plant-1.jpg` | Interior of an Indian sheet metal workshop, fibre laser cutting machine, sparks, stacked steel sheets, industrial lighting, no people |
| `plant-2.jpg` | Row of CNC press brakes in a clean fabrication shop, bent metal parts stacked on pallets, overhead factory lighting |
| `plant-3.jpg` | Welding bay with MIG welding station and bright weld arc, protective screens, dark industrial interior, no faces visible |
| `plant-4.jpg` | Powder coating line with a long curing oven, hanging metal parts on a conveyor, warm industrial interior |
| `plant-5.jpg` | Finished sheet metal enclosures and brackets stacked neatly on a pallet, grey powder coated, warehouse background |

## Everest Public School — Faridabad (`public/demo/everest/`)

| File | Prompt |
|------|--------|
| `school-1.jpg` | Exterior of a modern Indian CBSE school building, red brick and white, flagpole, neat landscaped front, clear morning light, no people |
| `school-2.jpg` | Bright school library interior with wooden shelves, reading tables, large windows, books neatly arranged, no people |
| `school-3.jpg` | School science laboratory, workbenches, microscopes and glassware neatly arranged, bright daylight, no people |
| `school-4.jpg` | School sports ground with running track and basketball court, goalposts, early morning light, empty |
| `school-5.jpg` | Empty modern Indian classroom with desks in rows, whiteboard, ceiling fans, natural light from windows |
| `route-map.jpg` | Stylised minimal map illustration of Faridabad sectors with bus route lines in maroon and gold, flat vector style |

## Crestline Commercial — US (`public/demo/crestline/`)

| File | Prompt |
|------|--------|
| `bldg-1.jpg` | Six-storey brick and glass commercial office building, American city street, late afternoon light, wide architectural shot |
| `bldg-2.jpg` | Modern office lobby with terrazzo floor, reception desk, seating and large plants, bright daylight, no people |
| `bldg-3.jpg` | Empty open-plan office floor, exposed ceiling, polished concrete, floor-to-ceiling windows, no furniture |
| `bldg-4.jpg` | Corporate conference room with long table, screen on the wall, glass partition, daylight, no people |
| `bldg-5.jpg` | Rooftop terrace of an office building with seating, planters and a city view, golden hour |
| `plate-low.jpg`, `plate-mid.jpg`, `plate-high.jpg` | Architectural floor plate drawing of a commercial office floor, 2D top-down, thin black lines on white, core and lifts marked, dimension lines |

---

## For nacovate.com itself

Your own site has no photography and does not need any — it runs on type, colour and
whitespace, which is why it loads fast and looks deliberate. The one image worth making
is the social preview card, already on your `TODO.md`:

> `og-image.png`, 1200×630. Deep teal background `#0B7A83` fading to near-black
> `#0B0F12`, the Nacovate mark centred-left, the words "Technology that just works" in a
> clean geometric sans, generous margins, no photograph, no stock imagery.

Generate that one at exactly 1200×630 and save it as PNG, not JPEG — flat colour and
text compress better and stay sharper.
