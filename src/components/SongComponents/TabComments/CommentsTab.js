// React Imports
import React, { Component } from 'react';

// Components
import SongComments from './SongComments/SongComments';

// Styles
import classes from './CommentsTab.module.css';

class Comments extends Component {
	state = {
		currPlaylist: `playlist1`,
		currTimeStamp: `00:02:16`
	};
	findComments = (projectSet, currProject, currSong, currPlaylist) => {
		const projectFilter = projectSet.filter(
			project => project.projectName === currProject
		);
		const project = projectFilter[0];

		const songFilter = project.songs.filter(song => song.name === currSong);
		const song = songFilter[0];

		const comments = song.comments[currPlaylist]
			? song.comments[currPlaylist]
			: null;

		return comments;
	};

	render() {
		const comments = this.findComments(
			this.props.projects,
			this.props.activeProject,
			this.props.song,
			this.state.currPlaylist
		);
		return (
			<div className={classes.CommentsContainer}>
				{/*  */}
				<div className={classes.PlaylistSelector}>
					<p>Playlist: </p>
					<select>
						<option value={0}>mix-1.mp3</option>
						<option value={1}>mix-2.mp3</option>
					</select>
					<button>Upload</button>
				</div>
				{/*  */}
				<input placeholder={`leave comment @${this.state.currTimeStamp}`} />
				{/*  */}
				<SongComments comments={comments}></SongComments>
			</div>
		);
	}
}

export default Comments;
