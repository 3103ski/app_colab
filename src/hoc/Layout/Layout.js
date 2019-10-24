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
		return (
			<Aux>
				{userNav}
				<main
					className={
						this.props.isLoggedIn ? classes.SignedIn : classes.SignedOut
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
		currTodo: state.app.currTodo
	};
};

export default connect(mapStateToProps)(Layout);
