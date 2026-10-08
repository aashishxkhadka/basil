// Featured case studies for the home page.
// The "Selected work" section stays hidden while this list is empty, so the
// site never shows invented clients or results.
// TODO: add real cases (or read them from src/content/work in step 6).

export type FeaturedWork = {
	client: string;
	service: string;
	result: string;
	href: string;
};

export const featuredWork: FeaturedWork[] = [];
