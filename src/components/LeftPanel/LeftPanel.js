import React, { Component } from 'react';

import TopNav from './Navigation/Navigation';

import classes from './LeftPanel.module.css';

class BlueSideNav extends Component {
	state = {};
	render() {
		return (
			<div className={classes.NavContainer}>
				<TopNav></TopNav>
			</div>
		);
	}
}

export default BlueSideNav;
