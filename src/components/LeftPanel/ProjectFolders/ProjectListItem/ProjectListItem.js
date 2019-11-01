/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// Redux Action Strings
import * as actions from '../../../../store/actions/index';
// Functions
import { statusColor } from '../../../../shared/utility';
// Styles
import classes from './ProjectListItem.module.css';

const ProjectItem = props => {
	// Changes folder icon from open to close if current item is active project
	let open =
		props.activeProject === props.projectName ? 'openfolder' : 'closefolder';

	// Holds counters for project progress
	let [songsCompleted, totalSongs] = [0, 0];

	// Generates status color dots below project titls
	let dots = props.songs
		? props.songs.map(song => {
				if (song.projectName === props.projectName) {
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
				}
		  })
		: null;

	const detailsClasses = !props.add
		? [classes.ProjectTxt, classes.ItemDetails]
		: [classes.AddTxt, classes.ItemDetails];

	const listItemContent = !props.add ? (
		<NavLink
			to={`/projects/${props.projectName}`}
			activeClassName={classes.Active}
			className={classes.NavLink}>
			<div
				className={classes.FolderListItem}
				onClick={() => {
					props.openProject(props.projectName, props.artist);
				}}>
				<div className={classes.FolderLeft}>
					<img alt='folder' src={require(`../../../../assets/${open}.png`)} />
					<div className={detailsClasses.join(' ')}>
						<p className={classes.artistName}>{props.artist}</p>
						<p className={classes.projectName}>{props.projectName}</p>
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
	) : (
		<NavLink to={`/projects/${props.projectName}`}>
			<div
				className={classes.FolderListItem}
				activeClassName={classes.Active}
				onClick={() => {
					props.addProject();
				}}>
				<div className={classes.FolderLeft}>
					<img alt='folder' src={require(`../../../../assets/addfolder.png`)} />
					<div className={detailsClasses.join(' ')}>
						<p>Add Project</p>
					</div>
				</div>
			</div>
		</NavLink>
	);

	return listItemContent;
};

const mapStateToProps = state => {
	return {
		centerPanel: state.app.centerPanel,
		activeProject: state.app.activeProject
	};
};

const mapDispatchToState = dispatch => {
	return {
		openProject: (project, artist) => {
			dispatch(actions.openProject(project, artist));
		},
		addProject: () => {
			dispatch(actions.projectFormToggle());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(ProjectItem);
