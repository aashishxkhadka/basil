// Content collections. Case studies live in src/content/work/*.md
// (copy template.md to start a new one).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: ({ image }) =>
		z.object({
			client: z.string(),
			/** Project headline, e.g. "A booking system that runs itself". */
			title: z.string(),
			industry: z.string(),
			location: z.string().optional(),
			year: z.number().optional(),
			services: z.array(z.enum(['development', 'design', 'marketing'])).min(1),
			/** One-line result for cards. Real outcomes only. */
			summary: z.string(),
			/** Story parts. Each is optional; only filled ones are shown. */
			about: z.string().optional(),
			challenge: z.string().optional(),
			approach: z.string().optional(),
			result: z.string().optional(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
			quote: z
				.object({ text: z.string(), author: z.string(), role: z.string().optional() })
				.optional(),
			url: z.string().url().optional(),
			/** Show on the home page "Selected work" section. */
			featured: z.boolean().default(false),
			/** Drafts show in local dev only, never on the live site. */
			draft: z.boolean().default(false),
			/** Lower numbers come first. */
			order: z.number().default(100),
		}),
});

export const collections = { work };
