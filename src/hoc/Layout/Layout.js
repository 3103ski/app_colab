import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import MainNave from '../../components/LeftPanel/LeftPanel';
import CenterPanel from '../../components/CenterPanel/CenterPanel';

import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		CenterPanel: false
	};

	render() {
		return (
			<Aux>
				<MainNave></MainNave>
				<CenterPanel></CenterPanel>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
