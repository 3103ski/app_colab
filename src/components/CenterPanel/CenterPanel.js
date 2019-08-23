import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './CenterPanel.module.css';

class CenterPanel extends Component {
	render() {
		console.log(this.props.centerPanel);
		let panelClasses = this.props.centerPanel
			? [classes.PanelContainer, classes.PanelOpen]
			: [classes.PanelContainer, classes.PanelClose];
		return (
			<div className={panelClasses.join(' ')}>
				<div></div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		centerPanel: state.app.centerPanel
	};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(CenterPanel);
