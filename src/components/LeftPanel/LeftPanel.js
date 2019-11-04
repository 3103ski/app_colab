// React Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '@firebase/app';

// Actions
import * as actions from '../../store/actions/index';

// Components
import TopNav from './Navigation/Navigation';
import FolderNav from './ProjectFolders/ProjectFolders';

import '../ProfilePics/ProfilePics';

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
		panelOpen: true,
		profilePicURL: '',
		userPicLoaded: false
	};

	logoutUser = () => {
		this.props.logout();
		this.props.clearProfile();
	};
	render() {
		const storage = firebase.storage();
		if (this.state.userPicLoaded === false) {
			storage
				.ref(
					`/images/${
						this.props.userId ? this.props.userId : 'profile-fallback'
					}.jpeg`
				)
				.getDownloadURL()
				.then(url => {
					this.props.setPicUrl(url);
					this.setState({
						profilePicURL: url,
						userPicLoaded: true
					});
				})
				.catch(err => {
					storage
						.ref(
							`/images/${
								this.props.userId ? this.props.userId : 'profile-fallback'
							}.png`
						)
						.getDownloadURL()
						.then(url => {
							this.props.setPicUrl(url);
							this.setState({
								profilePicURL: url,
								userPicLoaded: true
							});
						})
						.catch(err => {
							storage
								.ref(
									`/images/${
										this.props.userId ? this.props.userId : 'profile-fallback'
									}.JPG`
								)
								.getDownloadURL()
								.then(url => {
									this.props.setPicUrl(url);
									this.setState({
										profilePicURL: url,
										userPicLoaded: true
									});
								})
								.catch(err => {
									storage
										.ref(`/images/profile-fallback.png`)
										.getDownloadURL()
										.then(url => {
											console.log(`FALLBACK :::::::::::`);
											this.setState({
												profilePicURL: url,
												userPicLoaded: true
											});
										});
								});
						});
				});
		}

		return (
			<div className={classes.NavContainer}>
				<TopNav nav={this.state.topnav}></TopNav>
				<FolderNav></FolderNav>
				<a onClick={this.logoutUser}>
					<img
						alt='toggle'
						className={classes.ToggleIcon}
						src={require('../../assets/navtoggle.png')}
					/>
				</a>
				<NavLink
					onClick={this.props.closePanels}
					to='/user-profile'
					className={classes.ProfileIcon}>
					{/* <img
						alt='toggle'
						className={classes.ProfileIcon}
						src={require('../../assets/profile-fallback.png')}
					/> */}
					<img
						style={{
							width: '40px',
							height: '40px',
							borderRadius: '50px',
							objectFit: 'cover'
						}}
						alt
						src={
							this.state.userPicLoaded ? this.state.profilePicURL : null
						}></img>
					{/* <ProfilePics size='blueNav'></ProfilePics> */}
				</NavLink>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userId: state.auth.userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(actions.logout()),
		clearProfile: () => dispatch(actions.logoutUserProfile()),
		closePanels: () => dispatch(actions.closePanels()),
		setPicUrl: url => dispatch(actions.setPicUrl(url))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BlueSideNav);
