import React from 'react';

import classes from './NoSongSelected.module.css';

const noSong = props => {
	return (
		<div className={classes.NoSongContainer}>
			<h1>Please select a song</h1>
		</div>
	);
};

export default noSong;
