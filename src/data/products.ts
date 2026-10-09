// Basilpot's own products. Used by Home, the footer and the Products page.
// Descriptions come from each live product site (checked 2026-10-09).
// TODO: owner to set each `status` once confirmed; no tag shows until set.
// TODO: spec mentions "Tripflow (formerly Travelfast)" as a B2B travel
// platform, but travelfast.app is currently vehicle rental. Confirm.

export type ProductStatus = 'Live' | 'Beta' | 'Coming soon';

export type Product = {
	/** Anchor id on /products and the illustration in ProductVisual. */
	slug: 'links' | 'reviewpot' | 'launchbunch' | 'travelfast' | 'hqnepal';
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
		description: 'One simple page for everything you share, with useful analytics.',
		details:
			'One page for every link that matters: socials, shop, bookings and latest work. Share a single link in your bio and see what people actually click.',
		forWho: 'Creators, freelancers and small businesses who share a lot online.',
		url: 'https://links.basilpot.com',
	},
	{
		slug: 'reviewpot',
		name: 'Reviewpot',
		category: 'Reviews',
		description: 'One scan turns a good experience into an editable review.',
		details:
			'One QR code and link point customers to Google, Tripadvisor and any other review site. A simple rating flow drafts the review for them, and analytics show which platforms bring reviews.',
		forWho: 'Local businesses anywhere: cafés, clinics, salons, shops and services.',
		url: 'https://review.basilpot.com',
	},
	{
		slug: 'launchbunch',
		name: 'Launchbunch',
		category: 'Reviews & discovery',
		description: 'Find trusted businesses through honest reviews from real people.',
		details:
			'A community-driven platform for discovering and reviewing businesses worldwide. Trust points and credibility badges help people find the most trusted voices.',
		forWho: 'People looking for great places and services, and the businesses that serve them.',
		url: 'https://launchbunch.com',
	},
	{
		slug: 'travelfast',
		name: 'Travelfast',
		category: 'Vehicle rental',
		description: 'Rent any vehicle on wheels in Nepal.',
		details:
			'Rent cars, vans, motorcycles, bikes and trucks from verified local hosts across Nepal, with transparent daily pricing and secure bookings.',
		forWho: 'Travellers getting around Nepal, and local hosts with vehicles to rent.',
		url: 'https://travelfast.app',
	},
	{
		slug: 'hqnepal',
		name: 'HQ Nepal',
		category: 'Travel marketplace',
		description: 'A travel marketplace demo for treks and adventures.',
		details:
			'A working demo of our travel website system: structured trips and day-by-day itineraries, destinations, travel guides and an enquiry flow for every trip.',
		forWho: 'Tour operators who want a travel website they can manage themselves.',
		url: 'https://hqnepal.com',
		linkLabel: 'View the demo',
		note: 'Demo',
	},
];
