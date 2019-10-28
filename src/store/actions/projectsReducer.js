import * as actionTypes from '../actions/actionTypes';

// axios instances
import { db } from '../../firebase';

// Fetch projects

export const fetchProjectsStart = () => {
	return {
		type: actionTypes.FETCH_PROJECTS_START
	};
};

export const fetchProjectsSuccess = fetchedProjects => {
	return {
		type: actionTypes.FETCH_PROJECTS_SUCCESS,
		projects: fetchedProjects
	};
};

export const fetchProjectsFail = err => {
	return {
		type: actionTypes.FETCH_PROJECTS_FAIL,
		error: err
	};
};

// CALLED IN COMPONENTS > LEFTPANEL > PROJECTFOLDERS > .JS
export const projectsInit = userId => {
	return dispatch => {
		dispatch(fetchProjectsStart());
		// FIRESTORE
		let projectArr = [];
		db.collection(`projects`)
			.get()
			.then(qS => {
				qS.forEach(doc => {
					if (userId === doc.data().userId) {
						let project = {
							...doc.data()
						};
						projectArr.push(project);
					}
				});
				dispatch(fetchProjectsSuccess(projectArr));
			});
	};
};

// Add Projects

export const projectFormToggle = () => {
	return {
		type: actionTypes.PROJECT_FORM_TOGGLE
	};
};

export const addProject = project => {
	db.collection('projects')
		.doc(project.projectId)
		.set(project);
	return {
		type: actionTypes.ADD_PROJECT,
		newProject: project
	};
};

// Fetch Songs

export const fetchSongsStart = () => {
	return {
		type: actionTypes.FETCH_SONGS_START
	};
};

export const fetchSongsSuccess = fetchedSongs => {
	return {
		type: actionTypes.FETCH_SONGS_SUCCESS,
		songs: fetchedSongs
	};
};

export const fetchSongsFail = err => {
	return {
		type: actionTypes.FETCH_SONGS_FAIL,
		error: err
	};
};

// CALLED IN COMPONENTS > LEFTPANEL > PROJECTFOLDERS > .JS
export const songsInit = userId => {
	return dispatch => {
		dispatch(fetchSongsStart());
		// FIRESTORE
		let projectArr = [];
		db.collection(`songs`)
			.get()
			.then(qS => {
				qS.forEach(doc => {
					if (userId === doc.data().userId) {
						let project = {
							...doc.data()
						};
						projectArr.push(project);
					}
				});
				dispatch(fetchSongsSuccess(projectArr));
			});
	};
};

// Update Song

export const updateSong = song => {
	db.collection('songs')
		.doc(song.songId)
		.set(song);
	return {
		type: actionTypes.UPDATE_SONGS,
		song: song
	};
};

export const addSong = song => {
	db.collection('songs')
		.doc(song.songId)
		.set(song);
	return {
		type: actionTypes.ADD_SONG,
		newSong: song
	};
};
