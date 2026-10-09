// About page content.
// TODO: owner to refine the story chapters (especially what OBSYD did) and
// fill in the team. Team cards with `draft: true` show in local dev only.

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
	/** Path under src/assets, added when photos are ready. */
	photo?: string;
	draft?: boolean;
};

export const team: TeamMember[] = [
	{ name: 'TODO · Name', role: 'TODO · Role', draft: true },
	{ name: 'TODO · Name', role: 'TODO · Role', draft: true },
	{ name: 'TODO · Name', role: 'TODO · Role', draft: true },
];
