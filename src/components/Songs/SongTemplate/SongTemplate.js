import React, { Component } from 'react';

import classes from './SongTemplate.module.css';

class SongTemplate extends Component {
	state = {};
	render() {
		return (
			<div className={classes.SongTemplateContainer}>
				<h1>Select A Song To See Details</h1>
			</div>
		);
	}
}

export default SongTemplate;
