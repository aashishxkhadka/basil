// Basilpot's own products. Used by the footer now; the Products section
// and page will add descriptions and status here later.

export type Product = {
	name: string;
	/** Full URL. Leave undefined until the product has a public address. */
	url?: string;
};

export const products: Product[] = [
	{ name: 'LINKS by Basilpot', url: 'https://links.basilpot.com' },
	{ name: 'Reviewpot', url: 'https://review.basilpot.com' },
	// TODO: Launchbunch URL.
	{ name: 'Launchbunch' },
	// TODO: Tripflow URL (formerly Travelfast).
	{ name: 'Tripflow' },
	{ name: 'HQ Nepal', url: 'https://hqnepal.com' },
];
