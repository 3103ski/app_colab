// React Imports
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';

// Components
import SongListItem from './SongListItem/SongListItem';

// HOCs
import Aux from '../../../../hoc/Aux/Aux';

// Styles
import classes from './SongList.module.css';

const SongList = props => {
	const [songs, activeProject] = [props.songs, props.activeProject];

	const currProjectSongs = songs.map(song => {
		if (song.projectName === activeProject) {
			return (
				<SongListItem
					users={song.users}
					project={activeProject}
					song={song}
					artist={song.artist}
					key={song.name}
					status={song.status}
					songName={song.name}></SongListItem>
			);
		}
	});

	return (
		<Aux>
			<div className={classes.ContentContainer}>
				<div className={classes.AddUserToProject}>
					<img alt='add user' src={require('../../../../assets/add.png')} />
					<h4>Add User To All Songs</h4>
				</div>
				{currProjectSongs}
				<div onClick={props.addSong} className={classes.AddSongToProject}>
					<img alt='add song' src={require('../../../../assets/add.png')} />
					<p>Add Song To Project</p>
				</div>
			</div>
		</Aux>
	);
};

const mapStateToProps = state => {
	return {
		projects: state.projects.projects,
		songs: state.projects.songs,
		activeProject: state.app.activeProject,
		token: state.auth.token,
		userId: state.auth.userId
	};
};
const mapDispatchToState = dispatch => {
	return {
		addSong: () => dispatch(actions.songFormToggle()),
		songsInit: (token, userId) => dispatch(actions.songsInit(token, userId))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToState
)(SongList);
