import * as actionTypes from '../actions/actionTypes';

const intitialState = {
	centerPanel: false,
	projectIsOpen: false,
	activeProject: '',
	selectedSong: '',
	currArtist: ``,
	currSong: null
};

const appReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.LINK_WITH_CENTER:
			return {
				...state,
				centerPanel: true,
				projectIsOpen: false,
				activeProject: '',
				selectedSong: ''
			};
		case actionTypes.LINK_NO_CENTER:
			return {
				...state,
				centerPanel: false,
				projectIsOpen: false,
				activeProject: '',
				selectedSong: ''
			};
		case actionTypes.OPEN_PROJECT:
			return {
				...state,
				centerPanel: true,
				projectIsOpen: true,
				selectedSong: '',
				activeProject: action.projectName
			};
		case actionTypes.SELECT_SONG:
			return {
				...state,
				selectedSong: action.songName,
				currSong: action.song,
				currArtist: action.artist
			};
		default:
			return state;
	}
};

export default appReducer;
