// Brands Basilpot has supported through digital media and marketing.
// Source: basilpot.com/media-and-marketing. Logos are the clients' own files
// in src/assets/clients; never recolour them. `dark: true` puts a logo that
// was made for dark backgrounds on an Ink tile.
import type { ImageMetadata } from 'astro';

const logos = import.meta.glob<{ default: ImageMetadata }>('../assets/clients/*.{png,webp}', { eager: true });
const logo = (file: string) => logos[`../assets/clients/${file}`].default;

export type Client = {
	/** Shown as alt text and caption. */
	name: string;
	logo: ImageMetadata;
	dark?: boolean;
	/** True when the brand name is not known yet (alt text describes the mark). */
	unnamed?: boolean;
};

export const mediaIntro =
	'Selected brands we’ve supported through digital media and marketing across different markets, including Latin America.';

export const clients: Client[] = [
	{ name: 'Rancho Steak House', logo: logo('rancho-steak-house.webp'), dark: true },
	{ name: 'Maret Migration', logo: logo('maret-migration.png') },
	{ name: 'Hope Fertility & IVF Centre', logo: logo('hope-fertility.png') },
	{ name: 'Unistar Education', logo: logo('unistar-education.png') },
	{ name: 'Happy Face', logo: logo('happy-face.png') },
	{ name: 'C&C Advance Polyclinic and Cardiac Care', logo: logo('cc-advance-polyclinic.png') },
	{ name: 'Nistha Education', logo: logo('nistha-education.png') },
	{ name: 'Himalayan Nirvana Spa', logo: logo('himalayan-nirvana-spa.png') },
	{ name: 'Begnas Aqua Park Resort & Restaurant', logo: logo('begnas-aqua-park.png') },
	{ name: 'Piri-Siri', logo: logo('piri-siri.png') },
	// TODO: brand name for this logo.
	{ name: 'Purple record and dove brand mark', logo: logo('purple-record-dove.png'), unnamed: true },
	{ name: 'Nirvana Restaurant & Bar', logo: logo('nirvana-restaurant-bar.png') },
	{ name: 'Infochip', logo: logo('infochip.png') },
	{ name: 'Behaygraphy', logo: logo('behaygraphy.png'), dark: true },
	{ name: 'Bobby Maret', logo: logo('bobby-maret.png') },
	{ name: 'Sorha Aana Homes', logo: logo('sorha-aana-homes.png') },
	{ name: 'Rivet Engineering Services', logo: logo('rivet-engineering.png') },
	{ name: 'Blonde Me Unisex Salon', logo: logo('blonde-me-salon.png') },
	{ name: 'Pinnacle Academy', logo: logo('pinnacle-academy.png') },
	{ name: 'Kunjana', logo: logo('kunjana.png') },
	// TODO: brand name for this logo.
	{ name: 'Red eight-spoked wheel brand mark', logo: logo('red-wheel.png'), unnamed: true },
	{ name: 'International Hotel Training Center', logo: logo('international-hotel-training-center.png') },
];
