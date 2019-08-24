/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SongListItem from './Songs/SongListItem/SongListItem';

import classes from './CenterPanel.module.css';

class CenterPanel extends Component {
	render() {
		// Builds Center Panel Content When Project Is Selected
		let projectSongs = this.props.projectIsOpen
			? this.props.projects.map(project => {
					if (project.projectName === this.props.activeProject) {
						let songs = project.songs.map(song => {
							return (
								<SongListItem
									key={song.name}
									status={song.status}
									songName={song.name}></SongListItem>
							);
						});
						return songs;
					}
			  })
			: null;
		let openProjectContent = this.props.projectIsOpen ? (
			<div className={classes.ContentContainer}>
				<div className={classes.CenterPanelTopSection}>
					<div className={classes.AddUserToProject}>
						<img alt='add user' src={require('../../assets/add.png')} />
						<h4>Add User To All Songs</h4>
					</div>
				</div>
				{projectSongs}
				<div className={classes.CenterPanelBottomSection}>
					<div className={classes.AddSongToProject}>
						<img alt='add song' src={require('../../assets/add.png')} />
						<p>Add Song To Project</p>
					</div>
				</div>
			</div>
		) : null;
		// Adds classes to open and close center panel container
		let panelClasses =
			this.props.centerPanel === true
				? [classes.PanelContainer, classes.PanelOpen]
				: [classes.PanelContainer, classes.PanelClose];

		return <div className={panelClasses.join(' ')}>{openProjectContent}</div>;
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
