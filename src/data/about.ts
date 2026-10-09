// About page content.
// TODO: owner to refine the story chapters (especially what OBSYD did).

export const story = [
	{
		name: 'Launch Bunch',
		label: 'Where it started',
		text: 'A few students in Pokhara helping local businesses get online. Small budgets, real problems, and a lot of learning by doing.',
	},
	{
		name: 'OBSYD',
		label: 'Getting serious',
		text: 'Bigger projects and a sharper focus on design and product. We learned what it takes to ship work that holds up.',
	},
	{
		name: 'Basilpot',
		label: 'Today',
		text: 'An idea-to-growth studio. We plan, design, build and grow products for clients worldwide, and we build and run our own.',
	},
];

export type TeamMember = {
	name: string;
	role: string;
	bio?: string;
	/** Path under src/assets, added when photos are ready. */
	photo?: string;
	draft?: boolean;
};

// Source: basilpot.com/about. TODO: add photos when ready.
export const team: TeamMember[] = [
	{
		name: 'Aashish Khadka',
		role: 'Human Lead',
		bio: 'Leads the people-facing side of Basilpot: client relationships, communication, partnerships and day-to-day operations. He keeps our work grounded in actual people, actual businesses and actual problems.',
	},
	{
		name: 'Tej Kshetri',
		role: 'Tech Lead',
		bio: 'Leads the technical direction of Basilpot and its products, across product engineering, architecture, infrastructure and design implementation. He keeps our systems maintainable and focused on solving the problem.',
	},
];
