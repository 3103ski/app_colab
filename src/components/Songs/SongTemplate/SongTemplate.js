import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatusColor from '../../UI/statusColor/statusColor';

import SongDetails from '../TabDetails/DetailsTab';
import Comments from '../TabComments/CommentsTab';
import Todos from '../TabTodo/TodoTab';

import classes from './SongTemplate.module.css';

class SongTemplate extends Component {
	state = {
		activeTab: 'details'
	};
	render() {
		const getSongTodos = (projects, projectName, songName) => {
			let currSongs, currTodos;
			projects.map(project => {
				if (project.projectName === projectName) {
					currSongs = project.songs;
				}
			});
			if (currSongs !== undefined) {
				currSongs.map(song => {
					if (song.name === songName) {
						currTodos = song.todos;
					}
				});
			}
			return currTodos;
		};

		const activeTodos = getSongTodos(
			this.props.projects,
			this.props.activeProject,
			this.props.selectedSong
		);

		const pickTabContent = tab => {
			switch (tab) {
				case 'details': {
					return <SongDetails></SongDetails>;
				}
				case 'comments': {
					return <Comments></Comments>;
				}
				case 'todo': {
					return <Todos songTodos={activeTodos}></Todos>;
				}
				case 'files': {
					return <SongDetails></SongDetails>;
				}
				case 'livestream': {
					return <SongDetails></SongDetails>;
				}
			}
		};

		let tabContent = pickTabContent(this.state.activeTab);

		const songStatus = this.props.song ? this.props.song.status : 'noneOpen';
		const statusColor = StatusColor(songStatus);
		console.log(this.props.song);

		return (
			<div className={classes.SongTemplateContainer}>
				<div className={classes.AbovePlayer}>
					<div className={classes.QuickInfo}>
						<h2>{this.props.selectedSong ? this.props.selectedSong : null}</h2>
						<div className={classes.Status}>
							<div
								className={classes.StatusDot}
								style={{ backgroundColor: statusColor }}></div>
							<select>
								<option>New Song</option>
								<option>In Progress</option>
								<option>Completed</option>
							</select>
						</div>
					</div>
					{/* USERS */}
					<div className={classes.Users}>
						<div className={classes.IncludedUsers}>
							<img
								alt='user'
								src={require('../../../assets/placeholderFace-1.png')}
							/>
							<img
								alt='user'
								src={require('../../../assets/placeholderFace-2.png')}
							/>
							<img
								alt='user'
								src={require('../../../assets/placeholderFace-3.png')}
							/>
							<img
								alt='add user'
								className={classes.AddUserPlus}
								src={require('../../../assets/add.png')}
							/>
						</div>
					</div>
				</div>

				<img
					alt='player placeholder'
					src={require('../../../assets/playerPlaceholder.png')}
					className={classes.PlayerPlaceholder}
				/>

				<div className={classes.TabsContainer}>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'todo';
							this.setState({ activeTab: tab });
						}}>
						<img src={require('../../../assets/songTabTodo.png')} alt='todo' />
						<p>TODO</p>
					</div>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'files';
							this.setState({ activeTab: tab });
						}}>
						<img
							src={require('../../../assets/songTabFiles.png')}
							alt='files'
						/>
						<p>FILES</p>
					</div>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'details';
							this.setState({ activeTab: tab });
						}}>
						<img
							src={require('../../../assets/songTabDetails.png')}
							alt='details'
						/>
						<p>DETAILS</p>
					</div>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'comments';
							this.setState({ activeTab: tab });
						}}>
						<img
							src={require('../../../assets/sontTabComment.png')}
							alt='comments'
						/>
						<p>COMMENTS</p>
					</div>
					<div
						className={classes.Tab}
						onClick={() => {
							const tab = 'livestream';
							this.setState({ activeTab: tab });
						}}>
						<img
							src={require('../../../assets/songTabLive.png')}
							alt='livestream'
						/>
						<p>LIVE STREAM HISTORY</p>
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
		song: state.app.currSong
	};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(SongTemplate);
