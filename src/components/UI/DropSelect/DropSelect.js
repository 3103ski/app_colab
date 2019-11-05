import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// import { statusColor, updateObject } from '../../../shared/utility';

import * as classes from './DropSelect.module.css';

class Selector extends Component {
	state = {
		selector: this.props.song.status,
		loaded: false
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (this.props.song.status !== nextProps.song.status) {
			this.setState({
				selector: nextProps.song.status
			});
			return true;
		}
	}

	render() {
		let dropValue = this.state.selector;
		const change = e => {
			dropValue = e.target.value;
			const song = this.props.song;
			this.props.updateStatus(e, song);
			this.props.selectSong(
				this.props.song.name,
				this.props.song,
				this.props.song.artist
			);
			this.setState({
				selector: dropValue
			});
		};
		let statusSelector;
		const statusOptions = [
			`New Song`,
			`In Progress`,
			`Mix Sent`,
			`Revisions Requested`,
			// `Live Stream Scheduled`,
			`Sent Final Mixes`,
			`Completed`
		];
		let statusMenu = statusOptions.map(stat => (
			<option key={stat}>{stat}</option>
		));

		// console.log(`I have this now: `, this.state.selector);
		if (this.state.selector === 'New Song') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div className={[classes.StatusDot, classes.NewSong].join(' ')}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}
		if (this.state.selector === 'In Progress') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div
						className={[classes.StatusDot, classes.InProgress].join(' ')}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}
		if (this.state.selector === 'Mix Sent') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div className={[classes.StatusDot, classes.MixSent].join(' ')}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}
		if (this.state.selector === 'Revisions Requested') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div
						className={[classes.StatusDot, classes.RevisionsRequested].join(
							' '
						)}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}
		if (this.state.selector === 'Live Stream Scheduled') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div
						className={[classes.StatusDot, classes.LiveStreamScheduled].join(
							' '
						)}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}
		if (this.state.selector === 'Sent Final Mixes') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div
						className={[classes.StatusDot, classes.SentFinalMixes].join(
							' '
						)}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}
		if (this.state.selector === 'Completed') {
			statusSelector = (
				<div className={classes.StatCont}>
					<div
						className={[classes.StatusDot, classes.Completed].join(' ')}></div>
					<select value={dropValue} onChange={e => change(e)}>
						{statusMenu}
					</select>
				</div>
			);
		}

		return statusSelector;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectSong: (songName, song, artist) =>
			dispatch(actions.selectSong(songName, song, artist))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Selector);

// const Selector = props => {
// 	const songStatus = props.song ? props.song.status : 'noneOpen';
// 	// let songColor = statusColor(songStatus);

// 	let dotClasses = [classes.StatusDot];
// 	if (props.song.status === 'New Song') {
// 		dotClasses = [classes.StatusDot, classes.NewSong];
// 	}
// 	if (props.song.status === 'In Progress') {
// 		dotClasses = [classes.StatusDot, classes.InProgress];
// 	}
// 	if (props.song.status === 'Mix Sent') {
// 		dotClasses = [classes.StatusDot, classes.MixSent];
// 	}
// 	if (props.song.status === 'Revisions Requested') {
// 		dotClasses = [classes.StatusDot, classes.RevisionsRequested];
// 	}
// 	if (props.song.status === 'Live Stream Scheduled') {
// 		dotClasses = [classes.StatusDot, classes.LiveStreamScheduled];
// 	}
// 	if (props.song.status === 'Sent Final Mixes') {
// 		dotClasses = [classes.StatusDot, classes.SentFinalMixes];
// 	}

// };
