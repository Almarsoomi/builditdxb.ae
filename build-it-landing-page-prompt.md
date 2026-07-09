# Master Prompt — BUILD IT CONTRACTING "Under Construction" Landing Page

> Paste everything below the line into Claude Code. It is written as a single, self-contained brief.

---

## ROLE & GOAL

You are a senior frontend designer-engineer. Build a single-page **"website under construction / coming soon"** landing page for a Dubai building-contracting company. It must look **intentional, premium, and material-driven** — never a generic AI "coming soon" template. One page, high craft, fully responsive, fast.

## BUSINESS FACTS (use exactly)

- **Company:** Build It Contracting
- **Activity:** Building Contracting (construction / contracting company, Dubai, UAE)
- **Domain / brand handle:** builditdxb.ae
- **Email:** info@builditdxb.ae  →  `mailto:info@builditdxb.ae`
- **Phone:** +971 4 351 2843  →  `tel:+97143512843`
- **Location line:** Dubai, United Arab Emirates
- **Logo:** provided as an image file. Save it into the project as `logo.jpg` (I'll place the attached `logo_3.jpg` there). Also generate a `favicon` from it (see Assets).

Do **not** invent an address, license number, years-in-business, project counts, or client names. If a slot wants a fact I haven't given, leave it out or use the neutral copy below.

## DELIVERABLE & TECH

- Build **static, self-contained, no build step**: `index.html`, `styles.css`, `script.js`, plus `/logo.jpg` and favicon files. It must run by simply opening `index.html` and be uploadable to **cPanel** as-is (this domain is likely on shared hosting).
- Vanilla HTML/CSS/JS only. No frameworks, no bundler, no Tailwind. Google Fonts via `<link>` is fine. Icons and the skyline motif as **inline SVG** (no icon libraries).
- No `localStorage`/`sessionStorage`. Keep everything in-memory.
- Total page weight lean; must score well on Lighthouse (perf + a11y ≥ 95).

## AESTHETIC DIRECTION — commit fully

**"Industrial Luxe."** Raw construction materials meet Dubai premium. The logo is literally built from **copper beams, concrete, and gunmetal steel** wrapping a Dubai skyline — the page must feel like that. Dark, structural, confident, with copper as the single sharp accent.

Pick and execute this one direction with precision. Avoid: purple gradients, glassmorphism-on-white, Inter/Roboto/Arial, centered-everything-with-a-generic-clock, floating blobs. This should read as a **construction-site hoarding for a luxury Dubai developer**, not a SaaS splash.

### Color palette (drawn from the logo — use CSS variables)

```
--charcoal-900: #171716;   /* base background (gunmetal concrete)      */
--charcoal-800: #1F1E1C;   /* raised surfaces / cards                  */
--charcoal-700: #2A2926;   /* hairlines, borders                       */
--concrete:     #9C958A;   /* muted mid-grey (secondary text, labels)  */
--paper:        #EDE7DC;   /* warm off-white (primary text on dark)    */
--copper:       #C17A47;   /* PRIMARY ACCENT                           */
--copper-hi:    #E0A16E;   /* copper highlight / gradient top          */
--copper-deep:  #9A5A30;   /* copper shadow / gradient bottom          */
```

Dominant charcoal, generous dark negative space, **copper used sparingly and decisively** (one headline word, the rule lines, the progress bar, hover states). Steel/concrete greys carry the neutrals. Give copper elements a subtle brushed-metal gradient (`--copper-hi` → `--copper` → `--copper-deep`) so they echo the logo's real beams.

### Backgrounds & texture (create atmosphere, not flat fills)

Layer these behind the content:
1. A very faint **blueprint / engineering grid** (thin `--charcoal-700` lines, large cells) — subtle, ~4–6% opacity.
2. A soft **radial glow** of warm copper light bleeding from behind the logo/top, dissolving into charcoal.
3. A fine **film-grain / noise overlay** (SVG `feTurbulence` or a tiny tiled data-URI), low opacity, `mix-blend-mode: overlay` — gives the "concrete" texture. Keep it lightweight.

### Typography (distinctive — no defaults)

- **Display / headlines:** `Bebas Neue` — tall, condensed, industrial signage; matches Dubai construction hoardings and the stencil energy of the logo. Use it BIG.
- **Body / paragraphs / buttons:** `Chivo` — clean industrial grotesque, highly readable.
- **Mono accents** (kicker labels, status line, phone, coordinates, countdown digits): `Space Mono` — technical, blueprint-annotation feel. Use uppercase + wide letter-spacing for labels.

Load only the weights you use. Establish a strong type scale (huge H1, quiet mono labels). Tighten headline leading; open up mono-label tracking (`letter-spacing: .18em`).

## PAGE STRUCTURE (single viewport-first page)

Full-height hero, then a slim footer. No long scroll needed.

**1. Top bar (thin, understated)**
- Left: small mono kicker `BUILD IT CONTRACTING` or a mini logo mark.
- Right: mono link `builditdxb.ae`.
- Separated from hero by a 1px `--charcoal-700` rule.

**2. Hero (center of gravity)**
- The **logo** (`logo.jpg`) displayed prominently and crisply (max-width ~360–420px desktop, scales down). Give it a soft copper glow / drop-shadow so it sits on the dark base without a hard box.
- **Mono kicker** above the headline, copper-tinted: `— UNDER CONSTRUCTION —` or `BUILDING SOMETHING SOLID`.
- **H1 (Bebas Neue, oversized):** e.g. `WE'RE BUILDING OUR NEW SITE` — with **one word in copper** (e.g. "BUILDING") using the brushed-copper gradient as text fill.
- **Subline (Chivo, `--concrete`):** one calm sentence, e.g. *"Build It Contracting is a Dubai-based building contracting company. Our website is under construction — the same care we put into every structure is going into this one."*
- **Construction progress bar:** a thin track with a copper fill (animate to ~70–80% on load) and a mono `SITE PROGRESS · 78%` label. This is the signature "it's a construction company" touch — make it feel like a real progress indicator, not a loading spinner.
- **Contact chips** (Chivo/Space Mono, in a row, wrap on mobile), each with an inline SVG icon and copper hover:
  - Email → `mailto:info@builditdxb.ae`
  - Phone → `tel:+97143512843` displayed as `+971 4 351 2843`
  - Location → `Dubai, UAE` (mono, no link)

**3. Dubai skyline motif**
- Recreate the **line-art Dubai skyline** from the logo (Burj Khalifa spire, Burj Al Arab sail, cluster of towers) as a **thin single-stroke inline SVG**, copper stroke, sitting as a horizon band low in the hero or above the footer. Keep it minimal and elegant — a drawn line, not a photo. This ties the page directly to the logo's inner emblem.

**4. Footer (slim)**
- Left: `© 2026 Build It Contracting · Building Contracting · Dubai, UAE` (update year dynamically in JS).
- Right: repeat email + phone as quiet mono links, and optional placeholder social icons (Instagram / LinkedIn) — leave `href="#"` with a `TODO` comment; do not fabricate handles.

### Neutral copy bank (use/adapt, don't over-claim)
- Kicker: `UNDER CONSTRUCTION`
- H1: `WE'RE BUILDING OUR NEW SITE` (copper on "BUILDING")
- Sub: as above.
- Status line (mono): `LAUNCHING SOON · DUBAI, UAE`
- CTA-ish line: `Get in touch while we build —`

## MOTION (high-impact, tasteful, CSS-first)

- **Orchestrated page load:** staggered reveal (`animation-delay`) — top bar → logo (fade + slight scale-up) → kicker → H1 (word-by-word or line clip-reveal) → subline → progress bar fill → contact chips. One well-timed sequence, ~1.2s total.
- **Copper surveyor line:** a hairline that draws across under the H1 on load (`stroke-dashoffset` or width transition).
- **Progress bar** animates from 0 to its target width on load with an easeOut.
- **Contact chips:** on hover, copper underline/border grows, icon shifts, subtle lift. Smooth, not bouncy.
- **Grain/grid parallax (optional, subtle):** grid shifts a few px on mouse-move (desktop only, `prefers-reduced-motion` respected).
- Respect `@media (prefers-reduced-motion: reduce)` — disable non-essential motion.

## ASSETS

- Reference the logo as `./logo.jpg`. Render it sharp (`image-rendering` fine; provide adequate size). Add a short comment noting a **transparent PNG** would look even better on the dark bg if available later.
- **Favicon:** generate `favicon.svg` (a simple copper "B" stencil mark on charcoal) AND reference `logo.jpg` as fallback `apple-touch-icon`. Wire up `<link rel="icon">` tags.
- Inline SVG for: skyline, mail icon, phone icon, pin icon, grain filter.

## SEO / META / HEAD

- `<title>`: `Build It Contracting — Building Contracting in Dubai | Coming Soon`
- `<meta name="description">`: concise, e.g. *"Build It Contracting — a Dubai-based building contracting company. Our new website is under construction. Contact us at info@builditdxb.ae or +971 4 351 2843."*
- `<meta name="theme-color" content="#171716">`
- **Open Graph + Twitter card:** title, description, `og:image` → `logo.jpg`, `og:url` → `https://builditdxb.ae`, `og:type` website, `og:locale` `en_AE`.
- `<html lang="en">`, `dir="ltr"`. Allow indexing (`robots: index, follow`) so the brand starts ranking.
- **JSON-LD** `Organization` / `LocalBusiness` schema: name, url `https://builditdxb.ae`, email, telephone `+97143512843`, `areaServed` Dubai/AE, `logo`.

## ACCESSIBILITY & QUALITY

- Semantic landmarks (`header`, `main`, `footer`), one `<h1>`.
- Contrast: verify copper/paper on charcoal meet WCAG AA for text (bump copper toward `--copper-hi` for small text if needed).
- All interactive elements keyboard-focusable with a **visible copper focus ring**.
- `aria-label`s on icon-only links; icons `aria-hidden` where decorative.
- Progress bar: `role="progressbar"` with `aria-valuenow/min/max`.
- Images have meaningful `alt` ("Build It Contracting logo").

## RESPONSIVE

- Mobile-first. Breakpoints ~ 480 / 768 / 1024.
- On mobile: logo scales down, H1 shrinks but stays bold, contact chips stack, top bar collapses gracefully, skyline scales/clips cleanly. No horizontal scroll. Tap targets ≥ 44px.

## OPTIONAL ENHANCEMENTS (add only if clean)

- A **"Notify me" email field** → since there's no backend, wire it to open a pre-filled `mailto:info@builditdxb.ae?subject=Notify me when Build It goes live`. Label it honestly. Skip if it hurts the layout.
- A subtle **launch countdown** in Space Mono — only if you set a plausible placeholder date and mark it `TODO` for me to confirm. If uncertain, use the progress bar instead of a countdown.

## ACCEPTANCE CHECKLIST (self-verify before finishing)

- [ ] Dark "industrial luxe" theme with copper/concrete/charcoal from the palette, not generic.
- [ ] Bebas Neue + Chivo + Space Mono actually loaded and used as specified.
- [ ] Logo prominent and crisp; favicon wired up.
- [ ] Copper progress bar + drawn skyline line-art present.
- [ ] Correct email (`mailto`), phone (`tel:+97143512843` shown as +971 4 351 2843), Dubai location.
- [ ] Orchestrated load animation + reduced-motion fallback.
- [ ] Full meta/OG/JSON-LD, `theme-color`, favicon.
- [ ] Responsive with no horizontal scroll; AA contrast; keyboard focus visible.
- [ ] Runs by opening `index.html`; uploadable to cPanel with no build step.

Deliver the complete `index.html`, `styles.css`, `script.js`, `favicon.svg`, and a one-paragraph note on where to drop `logo.jpg` and how to upload to cPanel.
