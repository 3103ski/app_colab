import * as actionTypes from '../actions/actionTypes';

export const linkNoCenter = () => {
	return {
		type: actionTypes.LINK_NO_CENTER
	};
};

export const linkWithCenter = () => {
	return {
		type: actionTypes.LINK_WITH_CENTER
	};
};

export const rightPanel = () => {
	return {
		type: actionTypes.RIGHT_PANEL_TOGGLE
	};
};

export const selectTodo = (id, todo) => {
	return {
		type: actionTypes.SELECT_TODO,
		todoId: id,
		todo: todo
	};
};

export const todoForm = () => {
	return {
		type: actionTypes.TODO_FORM
	};
};

export const selectSong = (songName, song, artist) => {
	return {
		type: actionTypes.SELECT_SONG,
		songName: songName,
		song: song,
		artist: artist
	};
};

export const openProject = (project, artist) => {
	return {
		type: actionTypes.OPEN_PROJECT,
		projectName: project,
		currArtist: artist
	};
};

export const projectFormToggle = () => {
	return {
		type: actionTypes.PROJECT_FORM_TOGGLE
	};
};

export const songFormToggle = () => {
	return {
		type: actionTypes.SONG_FORM_TOGGLE
	};
};

export const closeModal = () => {
	return {
		type: actionTypes.CLOSE_MODAL
	};
};

export const closeTodo = () => {
	return {
		type: actionTypes.CLOSE_TODO
	};
};
