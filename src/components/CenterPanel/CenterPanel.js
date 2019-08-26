/* eslint-disable no-mixed-spaces-and-tabs */
// REACT
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import ProjectSongList from './ProjectSongList/SongList/SongList';
// Styles
import classes from './CenterPanel.module.css';

class CenterPanel extends Component {
	render() {
		let content = this.props.activeProject ? (
			<ProjectSongList></ProjectSongList>
		) : null;

		// Adds classes to open and close center panel container
		let panelClasses =
			this.props.centerPanel === true
				? [classes.PanelContainer, classes.PanelOpen]
				: [classes.PanelContainer, classes.PanelClose];

		return <div className={panelClasses.join(' ')}>{content}</div>;
	}
}

const mapStateToProps = state => {
	return {
		centerPanel: state.app.centerPanel,
		projectIsOpen: state.app.projectIsOpen,
		activeProject: state.app.activeProject,
		projects: state.projects.projects
	};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(CenterPanel);
