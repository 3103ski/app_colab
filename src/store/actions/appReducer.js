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
