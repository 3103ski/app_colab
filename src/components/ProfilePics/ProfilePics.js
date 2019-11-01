// React Imports
import React, { Component } from 'react';

import { getUserPics } from '../../shared/reactUtility';
import firebase from '@firebase/app';

import * as classes from './ProfilePics.module.css';

class ProfilePics extends Component {
	state = {
		profilePicURL: '',
		userPicLoaded: false,
		guestUidsLoaded: false,
		guestURLS: [],
		guestUids: [],
		guestUrlsLoaded: null
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState({
				profilePicURL: '',
				userPicLoaded: false,
				guestUidsLoaded: false,
				guestURLS: [],
				guestUids: [],
				guestUrlsLoaded: null
			});
		}
	}

	render() {
		let songUsersPics, userPic;

		// SOURCES
		const song = this.props.song;
		const storage = firebase.storage();

		// IDS
		const getProfilePic = [`${song.userId}`];
		const otherUsers = [...this.state.guestUids];

		// URLS
		const thisUser = [this.state.profilePicURL];

		// FETCH OWNER PIC URL
		if (this.state.userPicLoaded === false) {
			getProfilePic.map(filename => {
				storage
					.ref(`/images/${filename}.jpeg`)
					.getDownloadURL()
					.then(url => {
						this.setState({
							profilePicURL: url,
							userPicLoaded: true
						});
					})
					.catch(err => {
						storage
							.ref(`/images/${filename}.png`)
							.getDownloadURL()
							.then(url => {
								this.setState({
									profilePicURL: url,
									userPicLoaded: true
								});
							})
							.catch(err => {});
					})
					.catch(err => {
						storage
							.ref(`/images/${filename}.JPG`)
							.getDownloadURL()
							.then(url => {
								this.setState({
									profilePicURL: url,
									userPicLoaded: true
								});
							})
							.catch(err => {
								console.log(`[We have an ERROR in ProfilePic.js]`, err);
							});
					});
			});
		}

		// FETCH GUEST PROFILE PICS
		if (song.users.length > this.state.guestURLS.length) {
			if (this.state.guestUidsLoaded === false) {
				this.setState({
					guestUids: song.users,
					guestUidsLoaded: true,
					guestUrlsLoaded: false
				});
			}

			if (this.state.guestUrlsLoaded === false) {
				otherUsers.map((filename, index) => {
					console.log(
						`This is the userId: `,
						song.userId,
						`And this is the filename: `,
						filename
					);
					if (filename !== song.userId) {
						storage
							.ref(`/images/${filename}.jpeg`)
							.getDownloadURL()
							.then(url => {
								this.setState(state => {
									let newGuests = state.guestURLS.concat(url);
									return {
										guestURLS: newGuests,
										userPicLoaded: true
									};
								});
							})
							.catch(err => {
								storage
									.ref(`/images/${filename}.png`)
									.getDownloadURL()
									.then(url => {
										this.setState(state => {
											let newGuests = state.guestURLS.concat(url);
											return {
												guestURLS: newGuests,
												userPicLoaded: true
											};
										});
									})
									.catch(err => {
										storage
											.ref(`/images/${filename}.JPG`)
											.getDownloadURL()
											.then(url => {
												this.setState(state => {
													let newGuests = state.guestURLS.concat(url);
													return {
														guestURLS: newGuests,
														userPicLoaded: true
													};
												});
											})
											.catch(err => {
												console.log(
													`[Figure this shit out: Guest number: ${index}`,
													err
												);
											});
									});
							});
					}
				});
				this.setState({
					guestUrlsLoaded: true
				});
			}
		}

		userPic =
			this.state.userPicLoaded === true ? getUserPics('url', thisUser) : null;

		if (this.state.guestUidsLoaded === true) {
			songUsersPics = getUserPics('url', this.state.guestURLS);
		}

		// Set IMG classes for size
		let sizeClasses = [classes.IncludedUsers].join(' ');
		const size = this.props.size;
		switch (size) {
			case 'songlist':
				{
					sizeClasses = [classes.IncludedUsersSL, classes.SongList].join(' ');
				}
				break;
			case 'songPage':
				{
					sizeClasses = [classes.IncludedUsersSP, classes.SongPage].join(' ');
				}
				break;
		}

		return (
			<div className={sizeClasses}>
				{userPic}
				{songUsersPics}
				{this.props.children}
			</div>
		);
	}
}

export default ProfilePics;
