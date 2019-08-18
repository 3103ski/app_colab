import React, { Component } from 'react';

import TopNav from './Navigation/Navigation';
import FolderNav from './ProjectFolders/ProjectFolders';

import classes from './LeftPanel.module.css';

class BlueSideNav extends Component {
	state = {};
	render() {
		return (
			<div className={classes.NavContainer}>
				<TopNav></TopNav>
				<FolderNav></FolderNav>
				<img
					alt="toggle"
					className={classes.ToggleIcon}
					src={require('../../assets/navtoggle.png')}
				/>
			</div>
		);
	}
}

export default BlueSideNav;
