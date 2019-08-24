import React from 'react';
import { NavLink } from 'react-router-dom';
import statusColor from '../../../UI/statusColor/statusColor';

import classes from './SongListItem.module.css';

const song = props => {
	const status = statusColor(props.status);
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
									alt='user'
									src={require('../../../../assets/placeholderFace-1.png')}
								/>
								<img
									alt='user'
									src={require('../../../../assets/placeholderFace-2.png')}
								/>
								<img
									alt='user'
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
