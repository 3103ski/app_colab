import React from 'react';
// import { NavLink } from 'react-router-dom';

import Link from './NavLink/NavLink';

import classes from './Navigation.module.css';

const navigation = props => {
	console.log(`[NAV TOWN USA]: I've been reloaded`);
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
