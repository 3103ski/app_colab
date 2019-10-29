import * as actionTypes from '../actions/actionTypes';

// Utility Functions
import { updateObject } from '../../shared/utility';

const intitialState = {
	projects: [],
	songs: [],
	allSongTodos: [],
	loading: false,
	error: null
};

// Add Projects

const addProject = (state, action) => {
	return updateObject(state, {
		projects: [...state.projects, action.newProject]
	});
};

// Fetch Projects
const fetchProjectsStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const fetchProjectsSuccess = (state, action) => {
	return updateObject(state, {
		loading: false,
		projects: action.projects
	});
};

const fetchProjectsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	});
};

// Add Songs

const addSong = (state, action) => {
	return updateObject(state, {
		songs: [...state.songs, action.newSong]
	});
};

const updateSongs = (state, action) => {
	const newSong = action.song;
	// console.log('is this really updating tho?', newSong);
	const allCurrSongs = [...state.songs];
	const updatedSongs = allCurrSongs.map(song => {
		if (song.songId === newSong.songId) {
			// console.log(`do all of these match? ${song.id} ::: ${newSong.id}`);
			return newSong;
		} else {
			return song;
		}
	});
	// console.log('and all these look right!!?', [updatedSongs]);

	return updateObject(state, {
		songs: updatedSongs
	});
};

// Fetch Songs

const fetchSongsStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const fetchSongsSuccess = (state, action) => {
	return updateObject(state, {
		loading: false,
		songs: action.songs
	});
};

const fetchSongsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	});
};

const projectsReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_SONGS:
			return updateSongs(state, action);
		case actionTypes.ADD_PROJECT:
			return addProject(state, action);
		case actionTypes.ADD_SONG:
			return addSong(state, action);
		case actionTypes.FETCH_PROJECTS_START:
			return fetchProjectsStart(state, action);
		case actionTypes.FETCH_PROJECTS_FAIL:
			return fetchProjectsFail(state, action);
		case actionTypes.FETCH_PROJECTS_SUCCESS:
			return fetchProjectsSuccess(state, action);
		case actionTypes.FETCH_SONGS_START:
			return fetchSongsStart(state, action);
		case actionTypes.FETCH_SONGS_FAIL:
			return fetchSongsFail(state, action);
		case actionTypes.FETCH_SONGS_SUCCESS:
			return fetchSongsSuccess(state, action);
		default:
			return state;
	}
};

export default projectsReducer;
