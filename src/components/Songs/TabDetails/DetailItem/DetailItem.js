import React from 'react';
import classes from '../DetailsTab.module.css';

const Detail = props => {
	return (
		<div className={classes.DetailItem}>
			<p className={classes.DetailTitle}>{props.label}:</p>
			<p className={classes.DetailContent}>{props.content}</p>
		</div>
	);
};

export default Detail;
