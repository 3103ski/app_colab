// REACT
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Helper Functions
import StatusColor from '../../components/HelperFunctions/statusColor';
import GetTodos from '../../components/HelperFunctions/getSongTodos';

// Container Components
import SongDetails from '../../components/SongComponents/TabDetails/DetailsTab';
import Comments from '../../components/SongComponents/TabComments/CommentsTab';
import Todos from '../../components/SongComponents/TabTodo/TodoTab';

// Styles
import classes from './SongContainer.module.css';

class SongContainer extends Component {
	state = {
		activeTab: 'details'
	};
	render() {
		const activeTodos = GetTodos(
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
				default: {
					return <SongDetails></SongDetails>;
				}
			}
		};

		let tabContent = pickTabContent(this.state.activeTab);
		const songStatus = this.props.song ? this.props.song.status : 'noneOpen';
		const statusColor = StatusColor(songStatus);

		// console.log(`[SongContainer.js] - This Song Is Active:`, this.props.song); //TESTING

		return (
			<div className={classes.SongContainer}>
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
								src={require('../../assets/placeholderFace-1.png')}
							/>
							<img
								alt='user'
								src={require('../../assets/placeholderFace-2.png')}
							/>
							<img
								alt='user'
								src={require('../../assets/placeholderFace-3.png')}
							/>
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
						onClick={() => {
							const tab = 'comments';
							this.setState({ activeTab: tab });
						}}>
						<img
							src={require('../../assets/sontTabComment.png')}
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
							src={require('../../assets/songTabLive.png')}
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
)(SongContainer);
