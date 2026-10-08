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
- Motifs: leaf, circle, stem from the logo, as subtle accents only.
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
