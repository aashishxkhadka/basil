// Basilpot's own products. Used by Home, the footer and (later) the
// Products page.

export type ProductStatus = 'Live' | 'Beta' | 'Coming soon';

export type Product = {
	/** Picks the illustration in ProductVisual. */
	slug: 'links' | 'reviewpot' | 'launchbunch' | 'tripflow' | 'hqnepal';
	name: string;
	description: string;
	/** Full URL. Leave undefined until the product has a public address. */
	url?: string;
	/** TODO: confirm each status. No tag is shown until it is set. */
	status?: ProductStatus;
};

export const products: Product[] = [
	{
		slug: 'links',
		name: 'LINKS by Basilpot',
		description: 'One simple link for everything you share.',
		url: 'https://links.basilpot.com',
	},
	{
		slug: 'reviewpot',
		name: 'Reviewpot',
		description: 'Collect and show reviews for local businesses, anywhere.',
		url: 'https://review.basilpot.com',
	},
	{
		// TODO: Launchbunch URL.
		slug: 'launchbunch',
		name: 'Launchbunch',
		description: 'Help businesses get seen online.',
	},
	{
		// TODO: Tripflow URL (formerly Travelfast).
		slug: 'tripflow',
		name: 'Tripflow',
		description: 'The all-in-one platform for travel businesses.',
	},
	{
		slug: 'hqnepal',
		name: 'HQ Nepal',
		description: 'Find and book treks and adventures across Nepal.',
		url: 'https://hqnepal.com',
	},
];
