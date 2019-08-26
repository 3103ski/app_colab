// React
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../../../../store/actions';
// Functions
import statusColor from '../../../../HelperFunctions/statusColor';
// Styles
import classes from './SongListItem.module.css';

const song = props => {
	const status = statusColor(props.status);
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
							<img
								alt='song item'
								src={require('../../../../../assets/songIcon.png')}
							/>
							<p>{props.songName}</p>
						</div>
						<div className={classes.QuickBottom}>
							<div className={classes.SongUsers}>
								<img
									alt='user'
									src={require('../../../../../assets/placeholderFace-1.png')}
								/>
								<img
									alt='user'
									src={require('../../../../../assets/placeholderFace-2.png')}
								/>
								<img
									alt='user'
									src={require('../../../../../assets/placeholderFace-3.png')}
								/>
							</div>
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
const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {
		selectSong: (songName, song, artist) =>
			dispatch({
				type: actionTypes.SELECT_SONG,
				songName: songName,
				song: song,
				artist: artist
			})
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(song);
