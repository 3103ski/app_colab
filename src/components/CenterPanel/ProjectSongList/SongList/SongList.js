// REACT
import React from 'react';
import { connect } from 'react-redux';
// Components
import SongListItem from './SongListItem/SongListItem';
// HOCs
import Aux from '../../../../hoc/Aux/Aux';
// Styles
import classes from './SongList.module.css';

const SongList = props => {
	// ********** TESTING
	console.log(`[SongList.js] - I can see these projects:`, props.projects);
	console.log(
		`[SongList.js] - I see the active project is:`,
		props.activeProject
	);
	// **********
	const [projects, activeProject] = [props.projects, props.activeProject];

	const currProjectSongs = projects.map(project => {
		let songs;
		const artist = project.artist;
		if (project.projectName === activeProject) {
			songs = project.songs.map(song => {
				console.log(`[SongList.js] - My song list generator saw this: `, song);
				return (
					<SongListItem
						project={activeProject}
						song={song}
						artist={artist}
						key={song.name}
						status={song.status}
						songName={song.name}></SongListItem>
				);
			});
		}
		return songs;
	});

	return (
		<Aux>
			<div className={classes.ContentContainer}>
				<div className={classes.AddUserToProject}>
					<img alt='add user' src={require('../../../../assets/add.png')} />
					<h4>Add User To All Songs</h4>
				</div>
				{currProjectSongs}
				<div className={classes.AddSongToProject}>
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
		activeProject: state.app.activeProject
	};
};
const mapDispatchToState = dispatch => {
	return {};
};
export default connect(
	mapStateToProps,
	mapDispatchToState
)(SongList);
