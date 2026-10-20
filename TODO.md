# Nacovate site — future implementation

Live site: [nacovate.com](https://nacovate.com) · Repo: [chauhannaveen/nacovate](https://github.com/chauhannaveen/nacovate) · Hosting: GitHub Pages (deploy = push to `main`)

## Pending

- [ ] **Logo decision** — pick a concept from [design/logo-concepts.html](design/logo-concepts.html) (A Keystone / B Node N / C Diamond-O), then integrate into site header + favicon, build the 1200×630 og:image from it, and export PNGs for WhatsApp Business + Google Workspace avatar.
- [ ] **Booking link** — create a Google Calendar *Appointment schedule* (included in Google Workspace: Calendar → Create → Appointment schedule), then point both "Book a quick call" buttons at the booking-page URL. Currently they open a pre-filled email.
- [ ] **Real contact-form backend** — replace the mailto-based form with a silent submit endpoint (free options: Google Apps Script web app tied to Workspace, or a Cloudflare Worker). Submissions should land in the team@nacovate.com inbox or a Google Sheet.
- [x] **Real testimonials** — the AI-written sample reviews have been removed. The Clients section is now a "Judge for yourself" proof block (demos, the LeadForge case study, fixed-scope first project, direct access) with an honest note saying there are no client quotes yet. Add real, named quotes here as they come in.
- [x] **Products section** — placeholder card replaced with LeadForge, linking to the case study at `/products/leadforge/`.
- [ ] **Port the generated pages to plain HTML** — `demos/`, `products/` and `_next/` are a committed Next.js static export (see [CLAUDE.md](CLAUDE.md)). Taken as a shortcut to ship quickly; the cost is build artefacts in git and a build step on a repo that otherwise deploys by pushing one file. Nothing on those pages needs a framework. Port them, then delete the Next project.
- [ ] **Demo photography** — every image across all eight demos is a drawn placeholder. Generation prompts, file paths and sizes are in [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md); drop files into `portfolio-site/public/demo/<slug>/`, add the `src`, re-run `./sync-demos.sh`.
- [ ] **WhatsApp Business** — move +91 96503 13207 to the WhatsApp Business app for business profile, quick replies, and auto-greetings.
- [ ] **Google Business Profile** — create and verify the listing; setup steps and paste-ready copy are in [google-business-profile.md](google-business-profile.md). Biggest free lever for local enquiries.

## Nice to have

- [ ] **Analytics** — privacy-friendly visitor stats (Cloudflare Web Analytics or GoatCounter are free; GA4 if deeper funnels needed).
- [ ] **SEO basics** — `robots.txt` + `sitemap.xml`, verify domain in Google Search Console, submit sitemap.
- [ ] **Social preview image** — an `og:image` (1200×630) so links shared on WhatsApp/LinkedIn show a branded card.
- [ ] **Cloudflare in front** — if performance/features warrant later: move nameservers to Cloudflare (carefully re-create Google Workspace MX/SPF/DKIM records), keep GitHub Pages as origin or migrate to Cloudflare Pages.
- [ ] **Pricing placeholder** — decide whether to show a "starts small / from ₹X" anchor on the site.
