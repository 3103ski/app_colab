// React Imports
import React from 'react';

// Components
import Link from './NavLink/NavLink';

// Styles
import classes from './Navigation.module.css';

const navigation = props => {
	const navLinks = props.nav.map(link => {
		return (
			<Link
				title={link.title}
				key={link.link}
				link={link.link}
				icon={link.icon}
			/>
		);
	});
	return <div className={classes.NavContainer}>{navLinks}</div>;
};

export default navigation;
