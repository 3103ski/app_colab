/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import DetailItem from './DetailItem/DetailItem';

// Styles
import classes from './DetailsTab.module.css';

class SongDetails extends Component {
	state = {};
	render() {
		// console.log(`Details has these props`, this.props);
		const reference = this.props.song ? this.props.song.reference : null;
		const notes = this.props.song ? this.props.song.notes : null;

		const createDetailItems = (artist, song) => {
			let details = [
				{
					label: 'Artist / Band',
					value: artist
				},
				{
					label: 'Song Title',
					value: song.name
				},
				{
					label: 'Song Key',
					value: song.songKey
				},
				{
					label: 'Tempo',
					value: song.bpm
				}
			];
			const detailItems = details.map(detail => (
				<DetailItem
					key={detail.label}
					label={detail.label}
					content={detail.value}></DetailItem>
			));

			return detailItems;
		};

		let details = this.props.song
			? createDetailItems(this.props.artist, this.props.song)
			: null;

		return (
			<div className={classes.DetailsContainer}>
				<div className={classes.LeftSide}>{details}</div>
				<div className={classes.RightSide}>
					<div className={classes.DetailItem}>
						<p className={classes.DetailTitle}>Influences:</p>
						<p className={classes.DetailContent}>{reference}</p>
					</div>
					<div className={classes.Notes}>
						<p className={classes.DetailTitle}>Notes:</p>
						<p className={classes.NotesContent}>{notes}</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		song: state.app.currSong,
		artist: state.app.currArtist
	};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(SongDetails);
