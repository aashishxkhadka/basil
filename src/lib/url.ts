// Site-relative links. The site may be served from a sub-path (GitHub Pages:
// /basil/), so every internal link goes through withBase(). Data files keep
// plain paths like '/services'.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path ('/x', '/x#y') with the deploy base. Leaves other URLs alone. */
export function withBase(path: string): string {
	if (!path.startsWith('/') || path.startsWith('//')) return path;
	return `${base}${path}` || '/';
}

/** Strip the deploy base from a pathname, e.g. '/basil/services/' → '/services'. */
export function stripBase(pathname: string): string {
	const p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
	return p.replace(/\/$/, '') || '/';
}
