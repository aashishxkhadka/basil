// The three service lines. Home uses the short fields (promise, items);
// the Services page uses the full detail.

export type Service = {
	id: 'marketing' | 'development' | 'design';
	title: string;
	/** One line, used on Home. */
	promise: string;
	/** Short sub-service names, used on Home. */
	items: string[];
	href: string;
	/** Services page: what it is. */
	summary: string;
	/** Services page: who it's for. */
	forWho: string;
	/** Services page: what's included. */
	included: { title: string; text: string }[];
	/** Services page: how it works. */
	process: { title: string; text: string }[];
	cta: string;
};

export const services: Service[] = [
	{
		id: 'development',
		title: 'Development',
		promise: 'Websites, apps and automation that work on day one and keep working.',
		items: ['Websites and web apps', 'SaaS and MVPs', 'AI automation', 'Integrations'],
		href: '/services#development',
		summary:
			'We design the system, write the code and ship it. Clean, fast and documented, with AI and automation where they save real time.',
		forWho:
			'Founders testing an idea, businesses stuck on spreadsheets and manual work, and teams that need a reliable product partner.',
		included: [
			{ title: 'Websites', text: 'Fast, accessible sites your team can update without us.' },
			{ title: 'Web apps', text: 'Dashboards, portals and internal tools shaped around how you work.' },
			{ title: 'SaaS and MVPs', text: 'Scoped to launch quickly, built to grow past version one.' },
			{ title: 'AI automation', text: 'Assistants and workflows that take repetitive work off your plate.' },
			{ title: 'Integrations', text: 'Payments, CRMs, APIs and the tools you already use, connected.' },
		],
		process: [
			{ title: 'Scope', text: 'Goals, features and a fixed plan.' },
			{ title: 'Prototype', text: 'Click through it before we build it.' },
			{ title: 'Build', text: 'Short sprints, a demo every week.' },
			{ title: 'Launch', text: 'Ship, monitor and keep improving.' },
		],
		cta: 'Start a build',
	},
	{
		id: 'design',
		title: 'Design',
		promise: 'Brands and interfaces that are clear, calm and easy to use.',
		items: ['Brand identity', 'UI/UX design', 'Product design', 'Marketing graphics'],
		href: '/services#design',
		summary:
			'We shape how your business looks and how your product feels. Simple systems, strong typography and screens that make sense on the first try.',
		forWho:
			'New businesses that need an identity, products that are harder to use than they should be, and teams getting ready to launch.',
		included: [
			{ title: 'Brand identity', text: 'Logo, type, colour and the rules that keep it consistent.' },
			{ title: 'UI/UX design', text: 'Flows and screens tested with real people before any code.' },
			{ title: 'Product design', text: 'From rough sketch to a design system developers can build from.' },
			{ title: 'Marketing graphics', text: 'Social, ads and launch assets that all look like one brand.' },
		],
		process: [
			{ title: 'Discover', text: 'Your users, market and goals.' },
			{ title: 'Explore', text: 'A few clear directions to choose from.' },
			{ title: 'Refine', text: 'Test, adjust and polish the winner.' },
			{ title: 'Hand off', text: 'Files, guidelines and support for your team.' },
		],
		cta: 'Start a design project',
	},
	{
		id: 'marketing',
		title: 'Digital Marketing',
		promise: 'Get found by the right people, then turn them into customers.',
		items: ['SEO', 'Social media and content', 'Google Business Profile', 'Paid ads'],
		href: '/services#marketing',
		summary:
			'We help the right people find you and choose you. Search, social and ads, planned together and measured honestly.',
		forWho:
			'Local businesses that want more customers, new products that need their first users, and brands moving into new markets.',
		included: [
			{ title: 'SEO', text: 'Technical fixes, content and local search that keep compounding.' },
			{ title: 'Social media', text: 'A steady, on-brand presence with posts people actually read.' },
			{ title: 'Content', text: 'Pages, articles and guides that answer real questions.' },
			{ title: 'Google Business Profile', text: 'Set up properly and kept fresh, so you show up on Maps.' },
			{ title: 'Ads', text: 'Google and Meta campaigns with clear budgets and plain reporting.' },
		],
		process: [
			{ title: 'Audit', text: 'Where you stand today, in plain numbers.' },
			{ title: 'Plan', text: 'Channels, content and a monthly budget.' },
			{ title: 'Run', text: 'Publish, optimise and test every week.' },
			{ title: 'Report', text: 'What worked, what is next. No jargon.' },
		],
		cta: 'Start growing',
	},
];
