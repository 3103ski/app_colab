// Will produce a number and never the same number twice.
const randomID = () => {
	const date = new Date();
	const randomNum = `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getSeconds()}${date.getMilliseconds()}${date.getMinutes()}${date.getHours()}${date.getFullYear()}`;

	return randomNum;
};

export default randomID;
