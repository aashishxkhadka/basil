// Live local times for any element with data-clock-zone="Area/City".
// Optional data-clock-day is set to "true"/"false" (07:00–19:00 is day).

const els = document.querySelectorAll<HTMLElement>('[data-clock-zone]');
const offsets = document.querySelectorAll<HTMLElement>('[data-clock-offset]');

function tick() {
	const now = new Date();
	els.forEach((el) => {
		const zone = el.dataset.clockZone!;
		const time = new Intl.DateTimeFormat('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			timeZone: zone,
		}).format(now);
		el.textContent = time;
		el.setAttribute('datetime', time);
		const hour = Number(time.slice(0, 2));
		const dayEl = el.closest<HTMLElement>('[data-clock-day]');
		if (dayEl) dayEl.dataset.clockDay = String(hour >= 7 && hour < 19);
	});
	// UTC offsets change with daylight saving, so compute them live too.
	offsets.forEach((el) => {
		const name = new Intl.DateTimeFormat('en-US', {
			timeZone: el.dataset.clockOffset!,
			timeZoneName: 'shortOffset',
		})
			.formatToParts(now)
			.find((p) => p.type === 'timeZoneName')?.value;
		if (name) el.textContent = name.replace('GMT', 'UTC');
	});
}

if (els.length || offsets.length) {
	tick();
	// Align updates to the start of each minute.
	setTimeout(
		() => {
			tick();
			setInterval(tick, 60_000);
		},
		60_000 - (Date.now() % 60_000),
	);
}
