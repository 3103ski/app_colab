// Accepts status as string and returns proper color code for status

let status = status => {
	switch (status) {
		case 'New Song':
			status = `#757575`;
			break;
		case 'In Progress':
			status = `#D0D0D0`;
			break;
		case 'Mix Sent':
			status = `#3BADFF`;
			break;
		case 'Revisions Requested':
			status = `#FFC83B`;
			break;
		case 'Live Stream Scheduled':
			status = `#FFE03B`;
			break;
		case 'Sent Final Mixes':
			status = `#3BFFD0`;
			break;
		case 'Completed':
			status = `#57FF3B`;
			break;
		default:
			status = `#000000`;
	}
	return status;
};

export default status;
