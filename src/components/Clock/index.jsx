import React, { useState, useEffect } from 'react';

function formatTime(date) {
	if (!date) return '';

	const hours = `0${date.getHours()}`.slice(-2);
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const seconds = `0${date.getSeconds()}`.slice(-2);

	return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
	const [timeString, setTimeString] = useState('');
	useEffect(() => {
		const timeInterval = setInterval(() => {
			const now = new Date();
			const time = formatTime(now);

			setTimeString(time);
		}, 1000);

		// cleaup
		return () => {
			console.log('Clear interval');
			clearInterval(timeInterval);
		};
	}, []);

	return <p style={{ fontSize: '40px' }}>{timeString}</p>;
}

export default Clock;
