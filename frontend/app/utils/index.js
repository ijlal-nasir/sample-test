export const calculateTimeLeft = () => {
	const difference =
		new Date(new Intl.DateTimeFormat('en-US').format(new Date(Date.now() + 12096e5))) -
		new Date();

	let timeLeft = {};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return timeLeft;
};
