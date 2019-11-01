// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// HOCs
import Aux from '../Aux/Aux';

// Components
import MainNav from '../../components/LeftPanel/LeftPanel';
import CenterPanel from '../../components/CenterPanel/CenterPanel';
import RightPanel from '../../components/RightPanel/RightPanel';

// Style
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		CenterPanel: false
	};

	render() {
		const userNav = this.props.isLoggedIn ? (
			<div className={classes.MenuContainer}>
				<MainNav></MainNav>
				<CenterPanel></CenterPanel>
			</div>
		) : null;
		// console.log(`layout is seeing this todo from redux: `, this.props.currTodo);
		const activeTodo = this.props.currTodo;
		let layoutClasses = classes.SignedOut;
		if (this.props.isLoggedIn === true) {
			layoutClasses = classes.Left;
		}
		if (this.props.rightIsOpen === true) {
			layoutClasses = classes.LeftRight;
		}
		if (this.props.centerIsOpen === true && this.props.rightIsOpen === false) {
			layoutClasses = classes.LeftCenter;
		}
		if (this.props.rightIsOpen === true && this.props.centerIsOpen === true) {
			layoutClasses = classes.LeftCenterRight;
		}
		return (
			<Aux>
				{userNav}
				<main
					className={
						// this.props.isLoggedIn ? classes.SignedIn : classes.SignedOut
						layoutClasses
					}>
					{this.props.children}
				</main>
				<RightPanel todo={activeTodo}></RightPanel>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.token ? true : false,
		currTodo: state.app.currTodo,
		centerIsOpen: state.app.centerPanel,
		rightIsOpen: state.app.rightPanel
	};
};

export default connect(mapStateToProps)(Layout);
