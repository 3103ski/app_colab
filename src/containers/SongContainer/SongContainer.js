// React Imports
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Utility Functions
import { getUserPics } from '../../shared/reactUtility';
import { statusColor, updateObject } from '../../shared/utility';

import { db } from '../../firebase';
// import firebase from 'firebase';

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
		statusColor: this.props.song ? this.props.song.status : null,
		userURL: ''
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			return true;
		}
	}

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

	getSongTodos = (todos, currSong) => {
		const onlySongs = todos.filter(todo => {
			if (todo.song !== undefined) {
				if (todo.song !== null) {
					return todo;
				}
			}
		});

		const songTodos = onlySongs.filter(todo => todo.song === currSong);

		return songTodos;
	};

	handleUploadSuccess = filename => {
		this.setState({ progress: 100, isUploading: false });
		db.storage
			.ref('images')
			.child(filename)
			.getDownloadURL()
			.then(url => this.props.onChangeImageURL(url, filename));
	};

	render() {
		// const todos
		const activeTodos = this.getSongTodos(
			this.props.todos,
			this.props.selectedSong
		);

		let songUsersPics, userPic, userId, otherUserIds;
		let allUseers = this.props.song.users;

		userId = this.props.song.userId;
		otherUserIds = allUseers.filter(user => {
			if (user !== userId) {
				return user;
			}
		});

		userPic = getUserPics([this.props.userId]);
		songUsersPics = getUserPics(otherUserIds);
		console.log(this.state);

		this.handleUploadSuccess(this.props.userId);

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

		const songStatus = this.props.song ? this.props.song.status : 'noneOpen';
		let tabContent = pickTabContent(this.state.activeTab);
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
							{userPic}
							{songUsersPics}
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
		todos: state.todo.todos,
		song: state.app.currSong,
		token: state.auth.token,
		userId: state.auth.userId
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
