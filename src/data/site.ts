// Site-wide content: navigation, contact details, socials.
// Edit here; Nav and Footer read from this file.

export const site = {
	name: 'Basilpot',
	tagline: 'Ideas, grown into products.',
	location: 'Pokhara, Nepal',
	// TODO: confirm the public contact email.
	email: '',
	// TODO: WhatsApp number in international format without + or spaces, e.g. '9779800000000'.
	whatsapp: '',
	timeZone: 'Asia/Kathmandu',
};

// Contact page. TODO: owner to confirm the reply promise (spec suggests
// "We reply within 24 hours") and the budget ranges.
export const contact = {
	promise: 'We read every message and reply personally.',
	services: [
		{ value: 'development', label: 'Development' },
		{ value: 'design', label: 'Design' },
		{ value: 'marketing', label: 'Digital Marketing' },
		{ value: 'not-sure', label: 'Not sure yet' },
	],
	budgets: ['Under $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Not sure yet'],
	nextSteps: [
		{ title: 'We reply', text: 'A real person reads your message and answers with questions or next steps.' },
		{ title: 'A short call', text: 'Thirty minutes to understand your goals, users and timeline.' },
		{ title: 'A clear proposal', text: 'Scope, timeline and price in plain words. No obligation.' },
	],
};

export const mainNav = [
	{ label: 'Services', href: '/services' },
	{ label: 'Products', href: '/products' },
	{ label: 'Work', href: '/work' },
	{ label: 'About', href: '/about' },
];

export const footerNav = [{ label: 'Home', href: '/' }, ...mainNav, { label: 'Contact', href: '/contact' }];

export const primaryCta = { label: 'Start a project', href: '/contact' };

// TODO: add real profile URLs, e.g. { label: 'LinkedIn', href: 'https://…' }.
export const socials: { label: string; href: string }[] = [];
