// The three service lines. Used on Home and (later) the Services page.

export type Service = {
	id: 'marketing' | 'development' | 'design';
	title: string;
	promise: string;
	items: string[];
	href: string;
};

export const services: Service[] = [
	{
		id: 'development',
		title: 'Development',
		promise: 'Websites, apps and automation that work on day one and keep working.',
		items: ['Websites and web apps', 'SaaS and MVPs', 'AI automation', 'Integrations'],
		href: '/services#development',
	},
	{
		id: 'design',
		title: 'Design',
		promise: 'Brands and interfaces that are clear, calm and easy to use.',
		items: ['Brand identity', 'UI/UX design', 'Product design', 'Marketing graphics'],
		href: '/services#design',
	},
	{
		id: 'marketing',
		title: 'Digital Marketing',
		promise: 'Get found by the right people, then turn them into customers.',
		items: ['SEO', 'Social media and content', 'Google Business Profile', 'Paid ads'],
		href: '/services#marketing',
	},
];
