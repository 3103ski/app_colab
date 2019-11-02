// React Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import TopNav from './Navigation/Navigation';
import FolderNav from './ProjectFolders/ProjectFolders';

// Styles
import classes from './LeftPanel.module.css';

class BlueSideNav extends Component {
	state = {
		topnav: [
			// To add navlink: name icon same in assets folder (.png) and pass route as link. To add right side content, edit case in [NavLink.js]
			// { title: 'LOGOUT', link: 'logout', icon: 'navtoggle' },
			{ title: 'DASHBOARD', link: 'dashboard', icon: 'dashboard' },
			{ title: 'TODO', link: 'todo', icon: 'checkmark' },
			{ title: 'MESSAGES', link: 'messages', icon: 'messages' },
			{ title: 'ALL FILES', link: 'all-files', icon: 'allfiles' },
			{ title: 'CONTACTS', link: 'contacts', icon: 'contacts-2' }
			// { title: 'PROFILE', link: 'user-profile', icon: 'profile-fallback' }
		],
		panelOpen: true
	};
	render() {
		return (
			<div className={classes.NavContainer}>
				<TopNav nav={this.state.topnav}></TopNav>
				<FolderNav></FolderNav>
				<a href='/logout'>
					<img
						alt='toggle'
						className={classes.ToggleIcon}
						src={require('../../assets/navtoggle.png')}
					/>
				</a>
				<NavLink to='/user-profile'>
					<img
						alt='toggle'
						className={classes.ProfileIcon}
						src={require('../../assets/profile-fallback.png')}
					/>
				</NavLink>
			</div>
		);
	}
}

// const mapStateToProps = state => {};

export default connect()(BlueSideNav);
