// React
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../../../../../store/actions/index';

// Helper Functions
import { statusColor } from '../../../../../shared/utility';
import { getUserPics } from '../../../../../shared/reactUtility';

// Styles
import classes from './SongListItem.module.css';

const song = props => {
	const status = statusColor(props.status);
	let userPics;
	if (props.hasPic) {
		userPics = getUserPics(props.users);
	} else {
		// const userList = props.users.map(el => {
		// 	console.log(el);
		// });
		userPics = null;
	}
	return (
		<NavLink
			activeClassName={classes.active}
			to={`/projects/${props.project}/${props.songName}`}
			onClick={() => {
				props.selectSong(props.songName, props.song, props.artist);
			}}>
			<div className={classes.SongListItem}>
				<div className={classes.LeftSide}>
					<div
						className={classes.StatusDot}
						style={{ backgroundColor: status }}></div>
					<div className={classes.QuickInfo}>
						<div className={classes.QuickTop}>
							{userPics}
							{/* <img
								alt='song item'
								src={require('../../../../../assets/songIcon.png')}
							/> */}
							<p>{props.songName}</p>
						</div>
						<div className={classes.QuickBottom}>
							<div className={classes.SongUsers}>{userPics}</div>
						</div>
					</div>
				</div>
				<div className={classes.RightSide}>
					<h4>0</h4>
				</div>
			</div>
		</NavLink>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		selectSong: (songName, song, artist) =>
			dispatch(actions.selectSong(songName, song, artist))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(song);
