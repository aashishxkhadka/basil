# Basilpot Website — Build Spec

Read this whole file before building. Build ONE section at a time, show me, wait for feedback, then commit and continue.

---

## 1. Brand (final — do not invent new styles)

Source of truth: the brand kit in `/brand` (logos, `basilpot.css`, `tokens.json`, guide/). Import `brand/basilpot.css` tokens into `src/styles/global.css` and map them to Tailwind v4 `@theme` variables.

**Colours**
| Token  | Hex      | Use |
|--------|----------|-----|
| Ink    | #111412  | Text on light, dark backgrounds |
| Paper  | #F3F2EC  | Main light background (warm off-white, never pure white) |
| Basil  | #1F5C3D  | Brand colour: buttons, links, key highlights |
| Mint   | #8FD19E  | Accent on dark backgrounds only |

Rule: Paper + Ink do 90% of the work. Basil is used sparingly so it means something. Mint only on Ink/Basil backgrounds.

**Type**
- Geist for everything (load via Google Fonts or the files in `/brand/fonts`)
- Geist Mono for small labels, eyebrow text, numbers, tags
- Big, tight display headings (tracking -0.02em to -0.04em), generous line-height on body
- Fluid type scale with `clamp()`

**Logo**
- `basilpot-lockup` on light, `basilpot-lockup-reversed` on dark (SVGs from `/brand/logos/svg`)
- Favicons from `/brand/logos/png` (16/32/48) + `basilpot-app-icon` for apple-touch-icon
- Respect clear space; never stretch, recolour or add effects

**Graphic motifs**: shapes from the logo itself — the leaf, the circle, the stem. Use as subtle accents (section dividers, bullets, hover details), not decoration everywhere.

**Tagline**: "Ideas, grown into products."

**Voice**: follow `/brand/guide` voice rules. Short sentences. Plain words. Confident, not salesy. No buzzword soup ("synergy", "cutting-edge", "next-gen").

**Feel**: modern, clean, editorial, calm confidence. Lots of whitespace. Strong typography carries the design.
**Never**: stock illustrations, gradient blobs, purple-blue gradients, glassmorphism, generic SaaS template layouts, emoji in UI.

---

## 2. Positioning (what the site must make clear in 5 seconds)

Basilpot is an idea-to-growth studio from Pokhara, Nepal. We take businesses from idea → plan → design → build → launch → grow. Strength: AI-driven product development and automation. We also build and run our own products — proof we know how to ship.

Values: clarity, craftsmanship, long-term value.

---

## 3. Site map

```
/            Home
/services    Services (Digital Marketing, Development, Design)
/products    Products
/work        Work / case studies
/about       About
/contact     Contact
/404         Not found
```

---

## 4. Page specs

### Home
1. **Nav** — logo left; Services, Products, Work, About right; "Start a project" button (Basil). Sticky, gets a subtle Paper background + border on scroll. Mobile: clean full-screen menu.
2. **Hero** — huge headline "Ideas, grown into products." Subline: one sentence on what we do (idea to growth, AI-driven products and automation). Two CTAs: "Start a project" (primary) and "See our work" (text link). Small Geist Mono eyebrow: "Product studio · Pokhara, Nepal". Subtle use of the b-seed leaf/circle motif. No stock image.
3. **Proof strip** — client logos or a short line ("Trusted by businesses in Nepal and abroad"). If no logos available, leave a clearly marked TODO, do NOT fake logos.
4. **How we work** — 5 steps: Idea → Plan → Design → Build → Grow. Numbered (Geist Mono 01–05), one line each. Horizontal on desktop, stacked on mobile.
5. **Services** — 3 cards: Digital Marketing, Development, Design. Each: title, one-line promise, 3–4 bullet sub-services, link to /services#anchor.
6. **Our products** — section on Ink background with Mint accents. Cards: LINKS by Basilpot, Reviewpot, Launchbunch, Tripflow, HQ Nepal. Each: name, one-line description, status tag (Live / Beta / Coming soon), external link.
7. **Selected work** — 2–3 case study cards (image, client, result in one line). TODO placeholders until real cases are added — clearly marked, no invented results.
8. **Why Basilpot** — 3 points tied to values: Clarity, Craftsmanship, Long-term value. One short paragraph each.
9. **CTA band** — Basil background: "Have an idea? Let's grow it." + button to /contact.
10. **Footer** — reversed logo, tagline, page links, products links, contact email, socials, "Made in Pokhara, Nepal", © year.

### Services
- Intro: one strong headline + short paragraph.
- 3 sections with anchors (#marketing, #development, #design). Each: what it is, who it's for, what's included (list), how it works, CTA.
  - Digital Marketing: SEO, social media, content, Google Business Profile, ads
  - Development: websites, web apps, SaaS/MVPs, AI automation, integrations
  - Design: brand identity, UI/UX, product design, marketing graphics
- FAQ accordion (5–6 questions: timelines, pricing approach, process, support, working remotely with international clients).
- CTA band.

### Products
- Intro: "We don't just build for clients. We build our own." (rewrite in brand voice)
- One large section per product: name, what it does, who it's for, status, screenshot placeholder, link.
  - LINKS by Basilpot — link-in-bio — links.basilpot.com
  - Reviewpot — reviews for local businesses worldwide — review.basilpot.com
  - Launchbunch — online visibility for businesses
  - Tripflow (formerly Travelfast) — B2B platform for travel businesses ("Shopify for travel") — URL TBD
  - HQ Nepal — adventure/trekking marketplace for Nepal — hqnepal.com (demo)
- Note the "by Basilpot" endorsement style from the brand guide.

### Work
- Grid of case studies, filterable by service (Marketing / Development / Design).
- Case study template (use Astro content collections in `src/content/work/`):
  client, industry, services, challenge, what we did, result, images, optional quote.
- Ship with 1 example file marked as TEMPLATE — no fake clients.

### About
- Story: started in student years in Pokhara, Launch Bunch → OBSYD → Basilpot, building products from Nepal for the world.
- Team section: cards with photo placeholder, name, role. (I'll fill in.)
- Values: clarity, craftsmanship, long-term value.
- CTA band.

### Contact
- Short headline + promise ("We reply within 24 hours" — confirm with me).
- Form: name, email, company, service interest (select), budget range (select), message. Use a simple service (Formspree/Web3Forms) — leave the endpoint as an env variable. Client-side validation, clear success/error states.
- Direct email, WhatsApp link, location (Pokhara, Nepal).

### 404
- On-brand, one line of humour fitting the plant theme, link home.

---

## 5. Components (src/components)
Nav, Footer, Button (primary/secondary/text), Section, Eyebrow, ServiceCard, ProductCard, CaseStudyCard, StepList, CTABand, FAQ (accessible accordion), ContactForm, Logo.

---

## 6. Motion
- Subtle fade/slide-up on scroll (IntersectionObserver, no heavy libraries)
- Hover: small lift / colour shift on cards and buttons
- Respect `prefers-reduced-motion`
- No parallax, no scroll-jacking, no cursor effects

---

## 7. Technical
- Astro + Tailwind v4, TypeScript strict
- Mobile-first; test at 375px, 768px, 1280px, 1536px
- Dark mode via `prefers-color-scheme` using the dark tokens in basilpot.css
- Semantic HTML, one h1 per page, alt text, visible focus states, AA contrast
- SEO: unique title + meta description per page, Open Graph image (build an on-brand OG template), sitemap (@astrojs/sitemap), robots.txt, JSON-LD Organization schema
- Images: Astro `<Image>`, WebP/AVIF, lazy-loaded
- Lighthouse 95+ on Performance, Accessibility, Best Practices, SEO
- Zero JS by default; only add scripts where needed (menu, FAQ, form, scroll reveal)

---

## 8. Content rules
- Never invent clients, testimonials, stats or results. Use clearly marked `TODO:` placeholders.
- All copy in brand voice. Keep it short.
- Put editable content (services, products, FAQs) in data files (`src/data/*.ts`) so I can update without touching layouts.

---

## 9. Build order
1. Brand tokens + fonts + global styles + Logo, Button, Section components → delete /styles placeholder or turn it into a real token preview
2. Nav + Footer
3. Home: Hero → How we work → Services → Products → Work → Why → CTA
4. Services page
5. Products page
6. Work page + content collection
7. About page
8. Contact page + form
9. 404, SEO, OG image, sitemap
10. Full mobile + dark mode + Lighthouse pass, fix everything
11. Deploy prep (Vercel or Cloudflare Pages)

Commit after each step.
