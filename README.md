# MQA — Personal Storytelling Portfolio

A personal, editorial storytelling website — public speaking, leadership, AI for
good, and music, told as four chapters plus a home page. Built with Next.js App
Router, TypeScript, Tailwind CSS, and Framer Motion, in the spirit of a
scrapbook / digital journal rather than a generic developer portfolio or SaaS
template.

## Routes

| Route | Nav label |
|---|---|
| `/` | Home page |
| `/speak-to-empower` | Chap 1 – Speak to Empower |
| `/be-a-pioneer` | Chap 2 – Be a Pioneer |
| `/ai-for-good` | Chap 3 – AI for Good |
| `/my-little-corner` | My little studio |

All five routes were verified with `npm run build` (static prerender, no
TypeScript or ESLint errors) and by requesting each route from the dev server
(all return `200`).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (Next.js will pick another port automatically if
3000 is busy — check the terminal output).

```bash
npm run build   # production build — must succeed with no TS/lint errors
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are
   required for the default build.
4. Deploy. Every push to the default branch redeploys automatically.

Alternatively, from the project root:

```bash
npx vercel
```

## Project structure

```
app/
  layout.tsx              Root layout — fonts, header/footer, metadata
  page.tsx                Home page
  speak-to-empower/page.tsx
  be-a-pioneer/page.tsx
  ai-for-good/page.tsx
  my-little-corner/page.tsx
  globals.css              Design tokens (Tailwind v4 @theme), base styles

components/
  layout/
    Header.tsx             Sticky desktop nav + mobile trigger
    MobileMenu.tsx          Full-screen mobile nav (ESC to close, scroll-locked)
    Footer.tsx
  editorial/
    StorySection.tsx        Narrative block — stacked / split / text-only layouts
    PullQuote.tsx            Editorial pull-quote
    ChapterHero.tsx           Chapter opening header (eyebrow + huge title + intro)
    ChapterPreview.tsx        Home page chapter link-out block
    EditorialImage.tsx        next/image wrapper w/ caption + accent ring option
    ImagePair.tsx              Two-image offset composition
    ImageTriptych.tsx          Three-image row
    CaptionedGallery.tsx       2–3 col image grid with captions
    MemoryGallery.tsx          Masonry-style casual photo memories
    HeroCollage.tsx            Scrapbook collage: background + cutouts + doodles
    MediaMoment.tsx            Image or video moment with caption/description
    StatRow.tsx                Inline numeric callouts (not dashboard cards)
    AchievementList.tsx        Editorial list for AI for Good achievements
    Doodles.tsx                 Hand-drawn SVG icons (mic, wizard hat, wand, etc.)
  ui/
    Reveal.tsx                Scroll-in-view fade/translate (respects reduced motion)
    EditorialLink.tsx          "Explore more →" style link

content/
  types.ts                  Shared content interfaces
  home.ts / speak-to-empower.ts / be-a-pioneer.ts / ai-for-good.ts / my-little-corner.ts

lib/
  layout.ts                 Shared width/spacing constants
  nav.ts                     Navigation link data

scripts/
  generate-placeholders.mjs  Regenerates the placeholder SVGs in /public/images
```

## Image replacement guide

**No photographs were copied or hotlinked from any reference site.** Every
image under `public/images/**` is a locally generated placeholder SVG (soft
background tint, dashed accent border, and a text label describing what real
photo belongs there) produced by `scripts/generate-placeholders.mjs`.

To replace a placeholder:

1. Drop your real photo into the same folder, e.g. `public/images/speak/chosen-one-01.jpg`.
2. Open the matching content file (e.g. `content/speak-to-empower.ts`) and
   update that image's `src` to the new filename (and `width`/`height` to the
   photo's real pixel dimensions — this keeps layout-shift-free loading).
3. Delete the old `.svg` placeholder once replaced.

Full list of placeholders to replace (46 total):

**Home** — `public/images/home/`
`hero-bg.svg`, `hero-subject.svg`, `about-me.svg`, `chapter-1-preview.svg`,
`chapter-2-preview.svg`, `chapter-3-preview.svg`, `studio-preview.svg`

**Speak to Empower** — `public/images/speak/`
`hero-cutout-cyan.svg`, `hero-cutout-pink.svg`, `hero-cutout-yellow.svg`,
`chosen-one-01/02/03.svg`, `choosing-myself-01/02.svg`,
`passing-the-wand-01/02.svg`, `nextgen-01/02.svg`

**Be a Pioneer** — `public/images/pioneer/`
`home-01/02/03.svg`, `school-01/02/03.svg`, `memory-01` through `memory-08.svg`,
`society-01` through `society-06.svg`

**AI for Good** — `public/images/ai/`
`hero.svg`, `fpt-01.svg`, `tedx-01.svg`

**My Little Studio** — `public/images/studio/`
`singing-01/02.svg`, `piano-01/02.svg`

For the `hero-cutout-*` and `chosen-one`/`passing-the-wand` subject images in
particular: the reference site's signature look is a **transparent-background
cutout portrait** with a colored outline. `HeroCollage.tsx` already applies
that colored-outline effect via a 4-direction `drop-shadow` filter — it will
look correct once you swap in a real transparent PNG cutout (the effect
currently reads as a soft frame around the opaque placeholder rectangle).

Also personalize:
- `components/layout/Header.tsx`, `MobileMenu.tsx`, `Footer.tsx` — replace the
  `"MQA"` wordmark with your name/logo.
- `components/layout/Footer.tsx` — replace `hello@yourdomain.com` and add any
  social links.
- `content/ai-for-good.ts` — `researchLink.href` currently points to an
  `example.com` placeholder; replace with your real paper URL.
- `app/layout.tsx` — `metadataBase` currently points to `https://example.com`;
  set it to your real deployed domain.
- All body copy in `content/*.ts` is original placeholder writing inspired by
  the requested chapter structure — replace it with your real story.

To regenerate placeholders (e.g. after adding a new image slot), edit the
`images` array in `scripts/generate-placeholders.mjs` and run:

```bash
node scripts/generate-placeholders.mjs
```

## Design system

- **Fonts** — DM Sans (display/headings) + Inter (body), loaded via
  `next/font/google` with `display: swap`.
- **Colors** — warm neutral base (`--background: #F8F5EE`, `--surface:
  #FFFDF8`, `--ink: #111111`, `--muted-ink: #5D5A55`) with five playful
  scrapbook accents (cyan, pink, yellow, blue, orange) reserved for image
  outlines, doodles, and small accents — not full-section backgrounds.
- **Type scale** — hero `clamp(4rem,9vw,9rem)`, chapter title
  `clamp(3rem,7vw,7rem)`, section heading `clamp(2rem,4vw,4rem)`, body 17–20px
  at 1.6–1.8 line-height, reading column capped at 760px.
- **Motion** — Framer Motion fade/translate-up on scroll entrance only
  (`components/ui/Reveal.tsx`), a light stagger on `HeroCollage` pieces, and
  the mobile menu transition. Everything respects
  `prefers-reduced-motion`.

## Deviations from the brief

1. **No live visual audit of halinhchip.com.** Neither the Chrome browser
   extension nor direct HTTP fetches (403 Forbidden) were available in this
   environment, so exact pixel values (header height, precise colors, exact
   spacing) could not be measured from the live site. The build instead
   follows the extremely detailed structural/content spec you provided,
   plus the explicit fallback design tokens (colors, type scale, spacing)
   from your brief.
2. **Placeholder images are SVG, not JPG.** Since no real photography could be
   sourced (and hotlinking the reference site's photos is explicitly
   disallowed), placeholders are generated as labeled SVGs rather than JPGs.
   `next.config.ts` enables `dangerouslyAllowSVG` scoped to this local,
   non-user-uploaded placeholder set. See "Image replacement guide" above.
3. **Original written content.** All chapter narratives, captions, and stats
   are newly written, inspired by the themes/structure you described (voice,
   leadership, AI, music) — not transcribed from the reference site — since
   its actual personal copy belongs to its owner.
4. **Site name/branding.** Used a neutral placeholder wordmark ("MQA") and a
   placeholder email address rather than assuming a name — swap these for
   your own branding (see "Also personalize" above).
5. **Video support is built but unused by default.** `MediaMoment` supports
   `type: "video"`, but no default content uses it (no real video asset was
   available). Add a file under `public/videos/` and switch an entry in
   `content/my-little-corner.ts` to `type: "video"` to use it.

## Verified

- [x] `npm run build` succeeds (TypeScript + ESLint clean, all 5 routes
      statically prerendered)
- [x] `npm run lint` — no errors or warnings
- [x] All 5 routes return `200` from the dev server (`/`, `/speak-to-empower`,
      `/be-a-pioneer`, `/ai-for-good`, `/my-little-corner`)
- [x] Refresh-on-nested-route works (static prerender, not client-only routing)
- [x] Every page has exactly one `<h1>`
- [x] Mobile menu has `aria-expanded`, `aria-controls`, closes on ESC, and
      locks body scroll while open
- [x] External research link uses `target="_blank" rel="noopener noreferrer"`
- [x] All placeholder images resolve (no 404s) through `next/image`'s
      optimizer
- [ ] Visual pixel-parity check against the live reference site — **not
      possible in this environment** (browser tool unavailable, direct fetch
      returned 403). Recommend a manual side-by-side pass once you can view
      halinhchip.com in a browser.
