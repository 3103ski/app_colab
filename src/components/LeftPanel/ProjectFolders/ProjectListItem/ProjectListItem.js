// React Imports
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// Redux Action Strings
import * as actionTypes from '../../../../store/actions';
// Functions
import statusColor from '../../../HelperFunctions/statusColor';
// Styles
import classes from './ProjectListItem.module.css';

const ProjectItem = props => {
	// Changes folder icon from open to close if current item is active project
	let open =
		props.activeProject === props.projectName ? 'openfolder' : 'closefolder';

	// Holds counters for project progress
	let [songsCompleted, totalSongs] = [0, 0];

	// Generates status color dots below project titls
	let dots = props.songs.map(song => {
		totalSongs = totalSongs + 1;
		if (song.status === 'Completed') {
			songsCompleted = songsCompleted + 1;
		}
		const status = statusColor(song.status);
		return (
			<div
				key={song.name}
				className={classes.Dot}
				style={{ backgroundColor: status }}
			/>
		);
	});

	// console.log(`[ProjectListItem.js] - Active project is:`, props.activeProject);

	return (
		<NavLink to={`/projects/${props.projectName}`}>
			<div
				className={classes.FolderListItem}
				activeClassName={classes.active}
				onClick={() => {
					props.openProject(props.projectName);
				}}>
				<div className={classes.FolderLeft}>
					<img alt='folder' src={require(`../../../../assets/${open}.png`)} />
					<div className={classes.ItemDetails}>
						<p>
							{props.artist} - {props.projectName}
						</p>
						<div className={classes.StatusDots}>{dots}</div>
					</div>
				</div>
				<div className={classes.FolderRight}>
					<img alt='check' src={require('../../../../assets/lightcheck.png')} />
					<p className={classes.ItemStatus}>
						{songsCompleted}/{totalSongs}
					</p>
				</div>
			</div>
		</NavLink>
	);
};

const mapStateToProps = state => {
	return {
		centerPanel: state.app.centerPanel,
		activeProject: state.app.activeProject
	};
};

const mapDispatchToState = dispatch => {
	return {
		openProject: project => {
			dispatch({ type: actionTypes.OPEN_PROJECT, projectName: project });
		},
		openCenter: () => dispatch({ type: actionTypes.OPEN_CENTER })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(ProjectItem);
