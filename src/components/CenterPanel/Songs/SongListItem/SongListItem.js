import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SongListItem.module.css';

const song = props => {
	let status;
	switch (props.status) {
		case 'New Song':
			status = `#757575`;
			break;
		case 'In Progress':
			status = `#D0D0D0`;
			break;
		case 'Mix Sent':
			status = `#3BADFF`;
			break;
		case 'Revisions Requested':
			status = `#FFC83B`;
			break;
		case 'Live Stream Scheduled':
			status = `#FFE03B`;
			break;
		case 'Sent Final Mixes':
			status = `#3BFFD0`;
			break;
		case 'Completed':
			status = `#57FF3B`;
			break;
		default:
			status = `#000000`;
	}
	return (
		<NavLink to={`/projects/${props.songName}`}>
			<div className={classes.SongListItem}>
				<div className={classes.LeftSide}>
					<div
						className={classes.StatusDot}
						style={{ backgroundColor: status }}></div>
					<div className={classes.QuickInfo}>
						<div className={classes.QuickTop}>
							<img
								alt='song item'
								src={require('../../../../assets/songIcon.png')}
							/>
							<p>{props.songName}</p>
						</div>
						<div className={classes.QuickBottom}>
							<div className={classes.SongUsers}>
								<img
									alt='user image'
									src={require('../../../../assets/placeholderFace-1.png')}
								/>
								<img
									alt='user image'
									src={require('../../../../assets/placeholderFace-2.png')}
								/>
								<img
									alt='user image'
									src={require('../../../../assets/placeholderFace-3.png')}
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

export default song;
