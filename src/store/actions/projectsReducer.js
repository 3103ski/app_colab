import * as actionTypes from '../actions/actionTypes';

// axios instances
import firebaseProjects from '../../components/FirebaseInstances/firebaseProjects';
import firebaseSongs from '../../components/FirebaseInstances/firebaseSongs';
import { updateObject } from '../../shared/utility';

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

export const projectsInit = (token, userId) => {
	return dispatch => {
		dispatch(fetchProjectsStart());
		const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
		firebaseProjects
			.get('.json' + queryParams)
			.then(res => {
				const fetchedProjects = [];
				for (let key in res.data) {
					fetchedProjects.push({
						...res.data[key],
						id: key
					});
				}
				dispatch(fetchProjectsSuccess(fetchedProjects));
			})
			.catch(error => {
				dispatch(fetchProjectsFail(error));
			});
	};
};

// Update Song

const updateServerSong = (song, token) => {
	const queryParams = `?auth=${token}`;
	firebaseSongs.put(`/${song.id}/.json` + queryParams, song).then(res => res);
};

export const updateSong = (song, token) => {
	let newSong = song;
	updateServerSong(newSong, token);
	return {
		type: actionTypes.UPDATE_SONGS,
		song: newSong
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

export const songsInit = (token, userId) => {
	return dispatch => {
		dispatch(fetchSongsStart());
		const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
		firebaseSongs
			.get('.json' + queryParams)
			.then(res => {
				const fetchedSongs = [];
				for (let key in res.data) {
					fetchedSongs.push({
						...res.data[key],
						id: key
					});
				}
				dispatch(fetchSongsSuccess(fetchedSongs));
				// console.log(fetchedSongs);
			})
			.catch(error => {
				dispatch(fetchSongsFail(error));
			});
	};
};

// Add Projects

export const addProjectToServer = (project, token) => {
	const queryParams = `?auth=${token}`;
	firebaseProjects
		.post('/.json' + queryParams, project)
		.then(res => console.log(res));
};

export const projectFormToggle = () => {
	return {
		type: actionTypes.PROJECT_FORM_TOGGLE
	};
};

export const addProject = (project, token) => {
	addProjectToServer(project, token);
	return {
		type: actionTypes.ADD_PROJECT,
		newProject: project
	};
};

// Add Songs
export const addSongToServer = (song, token) => {
	const queryParams = `?auth=${token}`;
	firebaseSongs
		.post('/.json' + queryParams, song)
		.then(res => console.log(res));
};

export const addSong = (song, token) => {
	addSongToServer(song, token);
	return {
		type: actionTypes.ADD_SONG,
		newSong: song
	};
};
