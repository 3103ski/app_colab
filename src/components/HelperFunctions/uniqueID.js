// Will produce a number and never the same number twice.
const date = () => {
	const date = new Date();
	// const randomNum = `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getSeconds()}${date.getMilliseconds()}${date.getMinutes()}${date.getHours()}${date.getFullYear()}`;
	const randomNum = `${date.getSeconds()}${date.getMilliseconds()}${date.getMilliseconds()}${date.getMinutes()}`;

	return randomNum;
};

const ID = () => {
	return (
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9)
	);
};

const randomID = () => {
	const rand1 = date();
	const rand2 = ID();

	const id = `${rand1}${rand2}`;
	return id;
};

export default randomID;
