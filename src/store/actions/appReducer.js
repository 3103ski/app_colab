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

export const openProject = project => {
	return {
		type: actionTypes.OPEN_PROJECT,
		projectName: project
	};
};
