# Basilpot website

**Full build spec: [`basilpot-site-spec.md`](basilpot-site-spec.md). Read it before building anything.**
Brand source of truth: the brand kit in `/brand` (logos, `basilpot.css`, `tokens.json`, guide/).
Do not invent new styles.

## What Basilpot is
Idea-to-growth studio from Pokhara, Nepal. Idea → plan → design → build →
launch → grow. Strength: AI-driven product development and automation. We
also build and run our own products.
Values: clarity, craftsmanship, long-term value.
Tagline: "Ideas, grown into products."

## Pages
Home, Services (Digital Marketing / Development / Design), Products, Work,
About, Contact, 404. Products: LINKS by Basilpot (links.basilpot.com),
Reviewpot (review.basilpot.com), Launchbunch, Tripflow (formerly Travelfast,
URL TBD), HQ Nepal (hqnepal.com).

## Brand
- Colors (Paper + Ink do 90% of the work):
  - Ink `#111412`: text on light, dark backgrounds
  - Paper `#F3F2EC`: main light background (never pure white)
  - Basil `#1F5C3D`: buttons, links, key highlights; use sparingly
  - Mint `#8FD19E`: accent on Ink/Basil backgrounds only
  - Dark mode: use the dark tokens in `brand/basilpot.css`
- Type: Geist for everything; Geist Mono for labels, eyebrows, numbers, tags.
  Tight display headings (-0.02em to -0.04em), generous body line-height,
  fluid scale with `clamp()`.
- Logo: the wordmark (`brand/logos/svg/basilpot-wordmark*.svg`, inlined in
  `src/components/Logo.astro`). Ink + Basil leaf on light, Paper + Mint leaf
  on dark. Never stretch, recolour or add effects.
- Motifs: leaf, circle, stem from the logo (`Leaf.astro`), as subtle accents.
- Surfaces (approved 2026-10-08): brand-green gradients only (Basil → Mint),
  always structured: rings, fine grid (`bg-grid`), soft top glow (`bg-glow`),
  grain (`bg-grain`), gradient hairlines on cards (`card`), `text-gradient`
  on one word max. No free-floating blobs, no other hues.
- Voice: short sentences, plain words, confident not salesy. No buzzwords.
- Never: stock illustrations, gradient blobs, purple-blue gradients,
  glassmorphism, generic SaaS template layouts, emoji in UI.

## Tech rules
- Astro + Tailwind v4 (TypeScript strict), reusable components in src/components
- Editable content (services, products, FAQs) in `src/data/*.ts`
- Mobile-first, responsive, dark mode via `prefers-color-scheme`
- Motion: subtle only (fade/slide on scroll), respect prefers-reduced-motion
- Semantic HTML, one h1 per page, accessible (alt text, AA contrast, focus states)
- Lighthouse 95+ on all pages; zero JS by default
- Never invent clients, testimonials, stats or results; use `TODO:` placeholders
- Build one section at a time, wait for my feedback before the next
- Commit after each finished step (build order in the spec)

## Owner direction (from build sessions)
- Bar: international, award-level studio site that stands out globally. It is a
  featured project clients will see. No basic or template-looking sections.
- Design and copy are open to Claude's judgement within the brand rules above.
  Still never invent clients, results, testimonials or stats.
- Stock images: allowed only if a section truly needs one; prefer brand
  graphics and illustrations drawn in code.
- Don't block on missing brand assets; use the wordmark and spec tokens.
- Check alignment across the whole section (shared left/right edges, vertical
  centring, related items grouped), not just the element that was flagged.
  Verify at 375 / 768 / 1024 / 1280 / 1920 widths before showing.
- Explain things in simple, plain English with clear numbered steps.

## Progress (updated 2026-10-08)
Build order is in the spec (§9). Done and pushed:
1. Brand tokens, fonts, global styles, Logo/Button/Section (`/styles` = token preview)
2. Nav + Footer
3. Home page (editorial redesign approved by owner: mega headline, marquee,
   scroll-lit statement, service index, product bento, world clocks, mega CTA)

**Next: step 4, Services page**, in the same visual language as Home.
Then Products, Work (content collection), About, Contact, 404/SEO, QA pass.

Open TODOs waiting on the owner (never invent these):
- Contact email and social links (`src/data/site.ts`)
- Product statuses Live/Beta/Coming soon (`src/data/products.ts`)
- Launchbunch and Tripflow URLs
- Real case studies (`src/data/work.ts`; "Selected work" stays hidden while empty)
- Real client logos (proof strip was removed until they exist)
- Brand favicons (still Astro defaults)

Deployment:
- Repo: github.com/aashishxkhadka/basil (public). Push over SSH works from this Mac.
- GitHub Pages via `.github/workflows/deploy.yml`; owner still needs to set
  Settings → Pages → Source: GitHub Actions. Live URL: aashishxkhadka.github.io/basil/
- `base: '/basil'` in astro.config.mjs. Always link internal paths through
  `withBase()` from `src/lib/url.ts`. Local dev URL: http://localhost:4321/basil/
- Owner's network sometimes resets the first request to github.com; just retry.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
