import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => {
	return (
		<div className={classes.SpinContainer}>
			<div className={classes.Ldsgrid}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default spinner;
