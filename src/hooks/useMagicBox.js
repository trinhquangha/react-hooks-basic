import { useState, useEffect, useRef } from 'react';

function randomColor(currentColor) {
	const COLOR_LIST = ['red', 'green', 'blue', 'black', 'yellow'];
	const newListColor = COLOR_LIST.filter((color) => color !== currentColor);

	const randomIndex = Math.floor(Math.random() * newListColor.length);

	return newListColor[randomIndex];
}

function useMagicBox() {
	const [color, setColor] = useState('transparent');
	const colorRef = useRef('transparent');

	useEffect(() => {
		const colorInterval = setInterval(() => {
			const newColor = randomColor(colorRef.current);

			setColor(newColor);
			colorRef.current = newColor;
		}, 1000);

		return () => {
			clearInterval(colorInterval);
		};
	}, []);

	return color;
}

export default useMagicBox;
