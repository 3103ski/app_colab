import React from 'react';
import classes from './ProjectListItem.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../../../store/actions';

import statusColor from '../../../UI/statusColor/statusColor';

// song status'
// New Song - #757575
// In Progress - #D0D0D0
// Mix Sent - #3BADFF
// Revisions Requested - #FFC83B
// Live Stream Scheduled - #FFE03B
// Sent Final Mixes - #3BFFD0
// Completed - #57FF3B

const ProjectItem = props => {
	let open = props.open ? 'openfolder' : 'closefolder';
	let songsCompleted = 0;
	let totalSongs = 0;
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

	return (
		<NavLink to='/projects'>
			<div
				className={classes.FolderListItem}
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
		centerPanel: state.app.centerPanel
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
