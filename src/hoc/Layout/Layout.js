import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import MainNave from '../../components/LeftPanel/LeftPanel';
import CenterPanel from '../../components/CenterPanel/CenterPanel';

import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		CenterPanel: false
	};

	render() {
		const userNav = this.props.isLoggedIn ? (
			<div className={classes.MenuContainer}>
				<MainNave></MainNave>
				<CenterPanel></CenterPanel>
			</div>
		) : null;
		return (
			<Aux>
				{userNav}
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.token ? true : false
	};
};

export default connect(mapStateToProps)(Layout);
