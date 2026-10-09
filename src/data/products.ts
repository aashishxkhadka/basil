// Basilpot's own products. Used by Home, the footer and the Products page.
// TODO: owner to review descriptions (written from the site spec) and set
// each `status` once confirmed. No status tag is shown until it is set.

export type ProductStatus = 'Live' | 'Beta' | 'Coming soon';

export type Product = {
	/** Anchor id on /products and the illustration in ProductVisual. */
	slug: 'links' | 'reviewpot' | 'launchbunch' | 'tripflow' | 'hqnepal';
	name: string;
	/** Short category label. */
	category: string;
	/** One line, used on Home and in lists. */
	description: string;
	/** Products page: what it does. */
	details: string;
	/** Products page: who it's for. */
	forWho: string;
	/** Full URL. Leave undefined until the product has a public address. */
	url?: string;
	/** Link text on the Products page. Defaults to the host name. */
	linkLabel?: string;
	/** Small note under the name, e.g. a former name. */
	note?: string;
	status?: ProductStatus;
};

export const products: Product[] = [
	{
		slug: 'links',
		name: 'LINKS by Basilpot',
		category: 'Link in bio',
		description: 'One simple link for everything you share.',
		details:
			'One clean page for every link that matters: socials, shop, bookings and latest work. Put a single link in your bio and keep everything else in one place.',
		forWho: 'Creators, freelancers and small businesses who share a lot online.',
		url: 'https://links.basilpot.com',
	},
	{
		slug: 'reviewpot',
		name: 'Reviewpot',
		category: 'Reviews',
		description: 'Collect and show reviews for local businesses, anywhere.',
		details:
			'Helps local businesses ask happy customers for reviews and show them where new customers are deciding. Simple for the business, simple for the reviewer.',
		forWho: 'Local businesses anywhere: cafés, clinics, salons, shops and services.',
		url: 'https://review.basilpot.com',
	},
	{
		// TODO: Launchbunch URL.
		slug: 'launchbunch',
		name: 'Launchbunch',
		category: 'Online visibility',
		description: 'Help businesses get seen online.',
		details:
			'Gets businesses found online with the basics done properly: the right listings, a solid profile and search that brings people to the door.',
		forWho: 'Businesses that are hard to find online, or not online at all yet.',
	},
	{
		// TODO: Tripflow URL.
		slug: 'tripflow',
		name: 'Tripflow',
		category: 'Travel software',
		description: 'The all-in-one platform for travel businesses.',
		details:
			'One platform to run a travel business. Think Shopify for travel: list trips, take bookings and manage operations in one place.',
		forWho: 'Travel agencies, trekking companies and tour operators.',
		note: 'Formerly Travelfast',
	},
	{
		slug: 'hqnepal',
		name: 'HQ Nepal',
		category: 'Adventure marketplace',
		description: 'Find and book treks and adventures across Nepal.',
		details:
			'A marketplace for treks and adventures across Nepal. Explore routes, compare trusted operators and plan the trip in one place.',
		forWho: 'Travellers planning treks and adventures in Nepal, and the local operators who guide them.',
		url: 'https://hqnepal.com',
		linkLabel: 'View the demo',
	},
];
