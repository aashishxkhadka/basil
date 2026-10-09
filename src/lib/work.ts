// Case study helpers. Drafts (like template.md) appear only in local dev.
import { getCollection, type CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'work'>;

export async function getWork(): Promise<WorkEntry[]> {
	const entries = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
	return entries.sort((a, b) => a.data.order - b.data.order || (b.data.year ?? 0) - (a.data.year ?? 0));
}

export const serviceLabels = {
	development: 'Development',
	design: 'Design',
	marketing: 'Digital Marketing',
} as const;
