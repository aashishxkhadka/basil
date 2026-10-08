// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://aashishxkhadka.github.io/basil/
  // When moving to a custom domain (e.g. basilpot.com), set `site` to it and
  // delete `base`. Internal links use withBase() (src/lib/url.ts), so nothing
  // else needs to change.
  site: 'https://aashishxkhadka.github.io',
  base: '/basil',
  vite: {
    plugins: [tailwindcss()]
  }
});
