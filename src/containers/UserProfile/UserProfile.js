// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateObject } from '../../shared/utility';

// Styling
import * as classes from './UserProfile.module.css';

class UserProfile extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		city: '',
		website: '',
		job: ''
	};

	onChangeHandler = (event, entryTitle) => {
		const updatedForm = updateObject(this.state, {
			[entryTitle]: event.target.value
		});
		this.setState({ ...updatedForm });
		console.log(this.state);
	};

	render() {
		return (
			<div className={classes.ProfileContainer}>
				<div className={classes.Top}>
					<img src={require('../../assets/bryan.jpeg')}></img>
					<div className={classes.Info}>
						<h1>James Biggins</h1>
						<p>JamesBiggins@me.com</p>
					</div>
				</div>
				<div className={classes.Bottom}>
					<div className={classes.Col}>
						<h2>Account Information</h2>
						<input
							onChange={e => this.onChangeHandler(e, 'username')}
							placeholder='username'></input>
						<input
							onChange={e => this.onChangeHandler(e, 'email')}
							placeholder='email'></input>
						<input
							onChange={e => this.onChangeHandler(e, 'password')}
							placeholder='password'></input>
					</div>
					<div className={classes.MidStripe}></div>
					<div className={classes.Col}>
						<h2>Personal Information</h2>
						<input
							onChange={e => this.onChangeHandler(e, 'firstName')}
							placeholder='first name'></input>
						<input
							onChange={e => this.onChangeHandler(e, 'lastName')}
							placeholder='last name'></input>
						<input
							onChange={e => this.onChangeHandler(e, 'city')}
							placeholder='city'></input>
						<input
							onChange={e => this.onChangeHandler(e, 'website')}
							placeholder='website'></input>
						<input
							onChange={e => this.onChangeHandler(e, 'job')}
							placeholder='job'></input>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(UserProfile);
