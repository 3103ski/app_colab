// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Utility Functions
import { getUserPics } from '../../shared/reactUtility';
import { statusColor, getSongTodos, updateObject } from '../../shared/utility';

// Song Container Components
import SongDetails from '../../components/SongComponents/TabDetails/DetailsTab';
import Comments from '../../components/SongComponents/TabComments/CommentsTab';
import Todos from '../../components/SongComponents/TabTodo/TodoTab';
import Files from '../../components/SongComponents/TabFiles/TabFiles';
import LiveStreams from '../../components/SongComponents/TabLiveStream/TabLiveStream';
import StatusSelect from '../../components/UI/DropSelect/DropSelect';

// Styling
import classes from './SongContainer.module.css';

class SongContainer extends Component {
	state = {
		activeTab: 'details',
		statusColor: this.props.song ? this.props.song.status : null
	};

	shouldMount = (args, nextProps, nextState) => {
		if (args.props.song !== nextProps.song) {
			return true;
		}
	};

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (this.props.song !== nextProps.song) {
	// 		return true;
	// 	}
	// }
	componentDidMount() {
		this.handleUpdateName();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.statusColor !== this.state.statusColor) {
			this.handleUpdateName();
		}
	}
	handleUpdateName = () => {
		this.setState({ statusColor: this.props.statusColor });
	};
	render() {
		const activeTodos = getSongTodos(
			this.props.projects,
			this.props.activeProject,
			this.props.selectedSong
		);
		let userPics;
		if (this.props.hasPic) {
			userPics = getUserPics(this.props.song.users);
		} else {
			userPics = null;
		}
		const pickTabContent = tab => {
			switch (tab) {
				case 'details': {
					return <SongDetails></SongDetails>;
				}
				case 'comments': {
					return (
						<Comments
							projects={this.props.projects}
							song={this.props.selectedSong}
							activeProject={this.props.activeProject}></Comments>
					);
				}
				case 'todo': {
					return <Todos songTodos={activeTodos}></Todos>;
				}
				case 'files': {
					return <Files></Files>;
				}
				case 'livestream': {
					return <LiveStreams></LiveStreams>;
				}
				default: {
					return <SongDetails></SongDetails>;
				}
			}
		};

		let tabContent = pickTabContent(this.state.activeTab);

		const songStatus = this.props.song ? this.props.song.status : 'noneOpen';
		let songColor = statusColor(songStatus);

		const updateStatus = (e, song) => {
			let currSong = song;
			let newStatus = e.target.value;
			let updatedSong = updateObject(currSong, {
				status: newStatus
			});
			songColor = statusColor(newStatus);
			this.setState({
				statusColor: songColor
			});
			this.props.updateStatus(updatedSong, this.props.token);
		};

		const dot = (
			<div
				className={classes.StatusDot}
				style={{ backgroundColor: songColor }}></div>
		);

		const selector = (
			<select defaultValue={this.props.status} onChange={e => updateStatus(e)}>
				<option>New Song</option>
				<option>In Progress</option>
				<option>Mix Sent</option>
				<option>Revisions Requested</option>
				<option>Live Stream Scheduled</option>
				<option>Sent Final Mixes</option>
				<option>Completed</option>
			</select>
		);

		console.log(`SONG CONTAINER LOAD`, this);

		return (
			<div className={classes.SongContainer}>
				<div className={classes.AbovePlayer}>
					<div className={classes.QuickInfo}>
						<h2>{this.props.selectedSong ? this.props.selectedSong : null}</h2>
						<div className={classes.Status}>
							{/* {dot}
							{selector} */}
							<StatusSelect
								updateStatus={updateStatus}
								token={this.props.token}
								song={this.props.song}></StatusSelect>
						</div>
					</div>
					{/* USERS */}
					<div className={classes.Users}>
						<div className={classes.IncludedUsers}>
							{userPics}
							<img
								alt='add user'
								className={classes.AddUserPlus}
								src={require('../../assets/add.png')}
							/>
						</div>
					</div>
				</div>

				<img
					alt='player placeholder'
					src={require('../../assets/playerPlaceholder.png')}
					className={classes.PlayerPlaceholder}
				/>

				<div className={classes.TabsContainer}>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'todo';
							this.setState({ activeTab: tab });
						}}>
						<img src={require('../../assets/songTabTodo.png')} alt='todo' />
						<p>TODO</p>
					</div>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'files';
							this.setState({ activeTab: tab });
						}}>
						<img src={require('../../assets/songTabFiles.png')} alt='files' />
						<p>FILES</p>
					</div>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'details';
							this.setState({ activeTab: tab });
						}}>
						<img
							src={require('../../assets/songTabDetails.png')}
							alt='details'
						/>
						<p>DETAILS</p>
					</div>
					<div
						className={classes.Tab}
						// onClick={() => {
						// 	const tab = 'comments';
						// 	this.setState({ activeTab: tab });
						// }}
					>
						<img
							src={require('../../assets/sontTabComment.png')}
							alt='comments'
						/>
						<p>COMMENTS</p>
					</div>
				</div>

				<div className={classes.TabContentContainer}>{tabContent}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedSong: state.app.selectedSong,
		activeProject: state.app.activeProject,
		projects: state.projects.projects,
		song: state.app.currSong,
		token: state.auth.token
	};
};

const mapDispatchToState = dispatch => {
	return {
		updateStatus: (song, token) => dispatch(actions.updateSong(song, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(SongContainer);
