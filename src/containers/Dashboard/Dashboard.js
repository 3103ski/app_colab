import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from './Dashboard.module.css';

class Dashboard extends Component {
	state = {};
	render() {
		return <div className={classes.DashContainer}></div>;
	}
}

const mapStateToProps = state => {
	return {
		userName: state.user.userName,
		firstName: state.user.firstName,
		lastName: state.user.lastName,
		password: state.user.password
	};
};

const mapDispatchToProp = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(Dashboard);
