// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://aashishxkhadka.github.io/basil/
  // When moving to a custom domain (e.g. basilpot.com), set `site` to it and
  // delete `base`. Internal links use withBase() (src/lib/url.ts), so nothing
  // else needs to change.
  site: 'https://aashishxkhadka.github.io',
  base: '/basil',
  integrations: [
    // Internal pages (token preview) stay out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/styles') }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
