# Basilpot website

## What Basilpot is
Idea-to-growth studio from Pokhara, Nepal. We brainstorm, plan, design,
build, and scale businesses. Focus: AI-driven product development and
automation, from planning and design to development, deployment, and support.
Values: clarity, craftsmanship, long-term value.

## Pages
- Home
- Services (3 categories: Digital Marketing / Development / Design)
- Products: LINKS (links.basilpot.com), Reviewpot (review.basilpot.com),
  Launchbunch, Travelfast (travelfast.app), HQ Nepal (hqnepal.com)
- Work (case studies)
- About
- Contact

## Brand
- Logo: geometric lowercase "b-seed" mark + lowercase wordmark
- Colors: TBD (1 neutral base + 1 accent, max)
- Type: TBD (1 display font + 1 body font)
- Feel: modern, clean, confident. Lots of whitespace. Strong typography.
  No stock illustrations, no gradient blobs, no generic SaaS-template look.

## Tech rules
- Astro + Tailwind v4, reusable components in src/components
- Mobile-first, responsive, dark mode support
- Motion: subtle only (fade/slide on scroll), respect prefers-reduced-motion
- Semantic HTML, accessible (alt text, contrast, keyboard nav)
- Lighthouse 95+ on all pages
- Build one section at a time, wait for my feedback before the next
- Commit after each finished section

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
