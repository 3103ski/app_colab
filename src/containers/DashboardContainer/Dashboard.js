// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from 'react-trello';
import * as actions from '../../store/actions/index';
// import * as actions from '../../store/actions/index';

// Utility Functions
import { updateObject } from '../../shared/utility';

// Components
import DashList from '../../components/DashComponents/DashListContainer/DashListContainer';
import TodoList from '../../components/TodoComponents/TodoList/TodoList';

// Styles
import classes from './Dashboard.module.css';

class Dashboard extends Component {
	returnCard = (id, title, artist) => {
		let card = {
			id: id,
			title: title,
			description: `By: ${artist}`,
			hideCardDeleteIcon: false,
			draggable: true
		};
		return card;
	};
	cardChange = (fromLan, toLane, songId, index) => {
		console.log(`We moved something`, fromLan);
		console.log(`We moved something`, toLane);
		console.log(`We moved something`, songId);
		console.log(`We moved something`, index);
		let newStatus;
		if (toLane === 'new_songs_lane') {
			newStatus = 'New Song';
		} else if (toLane === 'in_progress_lane') {
			newStatus = 'In Progress';
		} else if (toLane === 'mix_sent_lane') {
			newStatus = 'Mix Sent';
		} else if (toLane === 'revisions_requested_lane') {
			newStatus = 'Revisions Requested';
		} else if (toLane === 'live_stream_scheduled_lane') {
			newStatus = 'Live Stream Scheduled';
		} else if (toLane === 'sent_final_mixes_lane') {
			newStatus = 'Sent Final Mixes';
		} else if (toLane === 'completed_lane') {
			newStatus = 'Completed';
		}

		let song = this.props.songs.filter(song =>
			song.id === songId ? song : null
		)[0];
		let newSong = updateObject(song, {
			status: newStatus
		});
		this.props.updateStatus(newSong, this.props.token);
		console.log(`::: UPDATE THIS ???,`, newSong);
	};
	render() {
		let newSongs,
			nsCards,
			inProgress,
			ipCards,
			mixSent,
			msCards,
			revisionsRequested,
			rrCards,
			liveStreamScheduled,
			lsCards,
			sentFinalMixes,
			fmCards,
			completed,
			comCards;

		// STATUS ARRAYS OF SONGS
		newSongs = this.props.songs.filter(song =>
			song.status === `New Song` ? song : null
		);
		inProgress = this.props.songs.filter(song =>
			song.status === `In Progress` ? song : null
		);
		mixSent = this.props.songs.filter(song =>
			song.status === `Mix Sent` ? song : null
		);
		revisionsRequested = this.props.songs.filter(song =>
			song.status === `Revisions Requested` ? song : null
		);
		liveStreamScheduled = this.props.songs.filter(song =>
			song.status === `Live Stream Scheduled` ? song : null
		);
		sentFinalMixes = this.props.songs.filter(song =>
			song.status === `Sent Final Mixes` ? song : null
		);
		completed = this.props.songs.filter(song =>
			song.status === `Completed` ? song : null
		);

		// ARRAYS OF CARDS OBJECTS MADE OF STATUS ARRAYS
		nsCards = newSongs.map(song => {
			return this.returnCard(song.id, song.name, song.artist);
		});
		ipCards = inProgress.map(song =>
			this.returnCard(song.id, song.name, song.artist)
		);
		msCards = mixSent.map(song =>
			this.returnCard(song.id, song.name, song.artist)
		);
		rrCards = revisionsRequested.map(song =>
			this.returnCard(song.id, song.name, song.artist)
		);
		lsCards = liveStreamScheduled.map(song =>
			this.returnCard(song.id, song.name, song.artist)
		);
		fmCards = sentFinalMixes.map(song =>
			this.returnCard(song.id, song.name, song.artist)
		);
		comCards = completed.map(song =>
			this.returnCard(song.id, song.name, song.artist)
		);

		console.log(`TEST new song cards`, nsCards);
		console.log(`IN PROGRESS cards`, ipCards);
		console.log(`MIX SENT cards`, msCards);
		console.log(`REVISIONS REQUESTED cards`, rrCards);
		console.log(`LIVE SECHDEULED cards`, lsCards);
		console.log(`FINAL MIXES cards`, fmCards);
		console.log(`COMPLETED cards`, comCards);
		let data = {
			lanes: [
				{
					id: 'new_songs_lane',
					title: 'New Songs',
					cards: [...nsCards]
				},
				{
					id: 'in_progress_lane',
					title: 'In Progress',
					// label: '0/0',
					cards: [...ipCards]
				},
				{
					id: 'mix_sent_lane',
					title: 'Mix Sent',
					// label: '0/0',
					cards: [...msCards]
				},
				{
					id: 'revisions_requested_lane',
					title: 'Revisions Requested',
					// label: '0/0',
					cards: [...rrCards]
				},
				{
					id: 'live_stream_scheduled_lane',
					title: 'Live Stream Scheduled',
					// label: '0/0',
					cards: [...lsCards]
				},
				{
					id: 'sent_final_mixes_lane',
					title: 'Sent Final Mixes',
					// label: '0/0',
					cards: [...fmCards]
				},
				{
					id: 'completed_lane',
					title: 'Completed',
					// label: '0/0',
					cards: [...comCards]
				}
			]
		};

		const statusOptions = [
			`New Song`,
			`In Progress`,
			`Mix Sent`,
			`Revisions Requested`,
			`Live Stream Scheduled`,
			`Sent Final Mixes`,
			`Completed`
		];

		return (
			<div className={classes.DashContainer}>
				<div className={classes.TopDash}>
					<DashList title='Recently Added Todos'>
						<TodoList todoArr={this.props.todos} size='small'></TodoList>
					</DashList>

					<DashList title='Recent Files'>
						<div className={classes.FileItem}>
							<img
								alt='file '
								src={require('../../assets/audiofileicon.png')}
							/>
							<div className={classes.FileInfo}>
								<h4>rough mix.mp3</h4>
								<p>Jimmy Jones - Do It Again • Today</p>
							</div>
						</div>
						<div className={classes.FileItem}>
							<img
								alt='file '
								src={require('../../assets/audiofileicon.png')}
							/>
							<div className={classes.FileInfo}>
								<h4>guitar part 2.wav</h4>
								<p>Jimmy Jones - Do It Again • yesterday</p>
							</div>
						</div>
						<div className={classes.FileItem}>
							<img alt='file ' src={require('../../assets/zipfileicon.png')} />
							<div className={classes.FileInfo}>
								<h4>Do It Again Stems.zip</h4>
								<p>Jimmy Jones - Do It Again • 8/11/19</p>
							</div>
						</div>
						<div className={classes.FileItem}>
							<img
								alt='file '
								src={require('../../assets/audiofileicon.png')}
							/>
							<div className={classes.FileInfo}>
								<h4>Album Art.jpeg</h4>
								<p>Jimmy Jones - Do It Again • 8/8/19</p>
							</div>
						</div>
					</DashList>

					<DashList title='Recent Comments'>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>Please bring up the guitar here</h4>
								<p>Jimmy Jones - Do It Again • Today</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>
									This is amazing. You did exactly what I needed to the track
								</h4>
								<p>Jimmy Jones - Do It Again • 8/15/19</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>
									These vocals are too loud. Can you use a diff compressor
								</h4>
								<p>Jimmy Jones - Do It Again • 8/13/19</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>This intro is sounding awesome</h4>
								<p>Jimmy Jones - Do It Again • 8/10/19</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>Shakers are too loud here</h4>
								<p>Jimmy Jones - Do It Again • 8/10/19</p>
							</div>
						</div>
					</DashList>
				</div>
				<div className={classes.BottomDash}>
					{/* <h1>TRELLO-LIKE LISTS GO HERE</h1> */}
					<Board
						hideCardDeleteIcon
						onCardMoveAcrossLanes={this.cardChange}
						data={data}
						style={{
							backgroundColor: 'white',
							height: 'calc(100vh - 385px)'
						}}
						cardStyle={{
							textAlign: 'left'
						}}
						labelStyle={{
							color: 'red'
						}}
						laneStyle={{
							backgroundColor: 'rgb(45, 156, 219)',
							boxShadow: '-1px 1px 13px #80808042',
							transition: '.4s',
							color: 'white'
							// backgroundColor: '#2d9cdb'
						}}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.user.userName,
		firstName: state.user.firstName,
		lastName: state.user.lastName,
		password: state.user.password,
		todos: state.todo.todos,
		songs: state.projects.songs,
		token: state.auth.token
	};
};

const mapDispatchToProp = dispatch => {
	return {
		updateStatus: (song, token) => dispatch(actions.updateSong(song, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(Dashboard);
