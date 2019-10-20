import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = props => {
	let backdropClasses = [classes.Backdrop];

	if (props.color === 'dark') {
		backdropClasses = [classes.Backdrop, classes.Dark];
	} else if (props.color === 'clear') {
		backdropClasses = [classes.Backdrop, classes.Clear];
	}

	return props.show ? (
		<div className={backdropClasses.join(' ')} onClick={props.clicked} />
	) : null;
};

export default backdrop;
