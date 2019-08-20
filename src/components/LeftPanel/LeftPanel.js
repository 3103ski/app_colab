import React, { Component } from 'react';

import TopNav from './Navigation/Navigation';
import FolderNav from './ProjectFolders/ProjectFolders';

import classes from './LeftPanel.module.css';

class BlueSideNav extends Component {
	state = {
		topnav: [
			{ title: 'DASHBOARD', link: 'dashboard', icon: 'dashboard' },
			{ title: 'TODO', link: 'todo', icon: 'checkmark' },
			{ title: 'ALL FILES', link: 'all-files', icon: 'allfiles' },
			{ title: 'LIVE STREAM', link: 'live-stream', icon: 'livestream' },
			{ title: 'MESSAGES', link: 'messages', icon: 'messages' },
			{ title: 'CONTACTS', link: 'contacts', icon: 'contacts' }
		],
		panelOpen: true
	};
	render() {
		return (
			<div className={classes.NavContainer}>
				<TopNav nav={this.state.topnav}></TopNav>
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
