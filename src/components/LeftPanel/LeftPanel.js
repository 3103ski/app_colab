// React Imports
import React, { Component } from 'react';

// Components
import TopNav from './Navigation/Navigation';
import FolderNav from './ProjectFolders/ProjectFolders';

// Styles
import classes from './LeftPanel.module.css';

class BlueSideNav extends Component {
	state = {
		topnav: [
			// To add navlink: name icon same in assets folder (.png) and pass route as link. To add right side content, edit case in [ProjectListItem.js]
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
					alt='toggle'
					className={classes.ToggleIcon}
					src={require('../../assets/navtoggle.png')}
				/>
			</div>
		);
	}
}

export default BlueSideNav;
