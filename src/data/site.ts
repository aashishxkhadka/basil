// Site-wide content: navigation, contact details, socials.
// Edit here; Nav and Footer read from this file.

export const site = {
	name: 'Basilpot',
	tagline: 'Ideas, grown into products.',
	location: 'Pokhara, Nepal',
	// TODO: confirm the public contact email.
	email: '',
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
