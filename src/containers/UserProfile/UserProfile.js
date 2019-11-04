// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Utility Functions
import { updateObject } from '../../shared/utility';
import * as actions from '../../store/actions/index';

// Styling
import * as classes from './UserProfile.module.css';

class UserProfile extends Component {
	state = {
		profile: {
			username: '',
			email: '',
			firstName: '',
			lastName: '',
			city: '',
			website: '',
			job: ''
		},
		userId: this.props.userId,
		isLoaded: false,
		isEditing: false,
		form: {
			username: {
				val: '',
				touched: false
			},
			email: {
				val: '',
				touched: false
			},
			firstName: {
				val: '',
				touched: false
			},
			lastName: {
				val: '',
				touched: false
			},
			city: {
				val: '',
				touched: false
			},
			website: {
				val: '',
				touched: false
			},
			job: {
				val: '',
				touched: false
			}
		}
	};

	UNSAFE_componentWillReceiveProps(nextProps) {}

	onChangeHandler = (event, entryTitle) => {
		const updatedProfile = updateObject(this.state.form, {
			[entryTitle]: {
				val: event.target.value,
				touched: true
			}
		});
		this.setState({ form: updatedProfile });
		console.log(this.state);
	};

	updateProfile = () => {
		const uid = this.state.userId;
		const form = this.state.form;
		const profile = this.state.profile;
		const newProfile = {
			username:
				form.username.touched === true ? form.username.val : profile.username,
			email: form.email.touched === true ? form.email.val : profile.email,
			firstName:
				form.firstName.touched === true
					? form.firstName.val
					: profile.firstName,
			lastName:
				form.lastName.touched === true ? form.lastName.val : profile.lastName,
			city: form.city.touched === true ? form.city.val : profile.city,
			website:
				form.website.touched === true ? form.website.val : profile.website,
			job: form.job.touched === true ? form.job.val : profile.job
		};
		console.log(`Is this what you want to submit??`, newProfile);
		this.props.updateProfile(newProfile, uid);
		this.setState({
			profile: newProfile,
			isEditing: false,
			isLoaded: false
		});
	};

	toggleEdit = () => {
		const val = !this.state.isEditing ? true : false;
		this.setState({
			isEditing: val
		});
	};

	render() {
		if (this.props.profileReady === false) {
			this.props.loadProfile(this.props.userId);
		}
		if (this.props.profileReady === true) {
			if (this.state.isLoaded === false) {
				this.setState({
					profile: { ...this.props.profile },
					isLoaded: true
				});
				console.log(`this is the local state`, this.state);
			}
		}

		const profile = this.state.profile;
		const leftPlaceholders = !this.state.isEditing ? (
			<div className={classes.DynCont}>
				<div className={classes.Placeholder}>
					<p>{profile.username !== '' ? profile.username : 'Username'}</p>
				</div>
				{/* <div className={classes.Placeholder}>
					<p>{profile.email !== '' ? profile.email : 'Email'}</p>
				</div> */}
			</div>
		) : (
			<div className={classes.DynCont}>
				<input
					onChange={e => this.onChangeHandler(e, 'username')}
					placeholder={
						profile.username !== '' ? profile.username : 'Username'
					}></input>
				{/* <input
					onChange={e => this.onChangeHandler(e, 'email')}
					placeholder={profile.email !== '' ? profile.email : 'Email'}></input> */}
			</div>
		);
		const rightPlaceholders = !this.state.isEditing ? (
			<div className={classes.DynCont}>
				<div className={classes.Placeholder}>
					<p>{profile.firstName !== '' ? profile.firstName : 'First Name'}</p>
				</div>
				<div className={classes.Placeholder}>
					<p>{profile.lastName !== '' ? profile.lastName : 'Last Name'}</p>
				</div>
				<div className={classes.Placeholder}>
					<p>{profile.city ? profile.city : 'City'}</p>
				</div>
				<div className={classes.Placeholder}>
					<p>{profile.website ? profile.website : 'Website'}</p>
				</div>
				<div className={classes.Placeholder}>
					<p>{profile.job ? profile.job : 'Job'}</p>
				</div>
			</div>
		) : (
			<div className={classes.DynCont}>
				<input
					onChange={e => this.onChangeHandler(e, 'firstName')}
					placeholder={
						profile.firstName !== '' ? profile.firstName : 'First Name'
					}></input>
				<input
					onChange={e => this.onChangeHandler(e, 'lastName')}
					placeholder={
						profile.lastName !== '' ? profile.lastName : 'Last Name'
					}></input>
				<input
					onChange={e => this.onChangeHandler(e, 'city')}
					placeholder={profile.city ? profile.city : 'City'}></input>
				<input
					onChange={e => this.onChangeHandler(e, 'website')}
					placeholder={profile.website ? profile.website : 'Website'}></input>
				<input
					onChange={e => this.onChangeHandler(e, 'job')}
					placeholder={profile.job ? profile.job : 'Job'}></input>
			</div>
		);

		const editBtnClass = !this.state.isEditing
			? [classes.EditToggle, classes.EditBtn1]
			: [classes.EditToggle, classes.EditBtn2];

		const updateBtn = !this.state.isEditing
			? [classes.UpdateBtn, classes.UpBtn1]
			: [classes.UpdateBtn, classes.UpBtn2];

		return (
			<div className={classes.ProfileContainer}>
				<div className={classes.Top}>
					<img src={this.props.picUrl}></img>
					<div className={classes.Info}>
						<h1>
							{profile.firstName ? profile.firstName : null}{' '}
							{profile.lastName ? profile.lastName : null}
						</h1>
						<p>{profile.email ? profile.email : null}</p>
					</div>
				</div>
				<div className={classes.Bottom}>
					<div className={classes.Col}>
						<h2>Account Information</h2>
						{leftPlaceholders}
					</div>
					<div className={classes.MidStripe}></div>
					<div className={classes.Col}>
						<h2>Personal Information</h2>
						{rightPlaceholders}
					</div>
				</div>
				<div className={classes.BtnCont}>
					<button className={editBtnClass.join(' ')} onClick={this.toggleEdit}>
						{!this.state.isEditing ? 'Edit Profile' : 'Cancel'}
					</button>
					<button className={updateBtn.join(' ')} onClick={this.updateProfile}>
						{!this.state.isEditing ? '' : 'Update'}
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userId: state.auth.userId,
		profile: state.user.profile,
		profileReady: state.user.profileLoaded,
		picUrl: state.user.picUrl
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateProfile: (profile, uid) =>
			dispatch(actions.updateProfile(profile, uid)),
		loadProfile: userId => dispatch(actions.loadProfile(userId)),
		clearProfile: () => dispatch(actions.logoutUserProfile())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfile);
