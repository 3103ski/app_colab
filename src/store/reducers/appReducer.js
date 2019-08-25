import * as actionTypes from '../actions';

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
				activeProject: ''
			};
		case actionTypes.LINK_NO_CENTER:
			return {
				...state,
				centerPanel: false,
				projectIsOpen: false,
				activeProject: ''
			};
		case actionTypes.NO_PROJECT:
			return {
				...state,
				activeProject: '',
				selectedSong: '',
				currArtist: '',
				currSong: null
			};
		case actionTypes.OPEN_PROJECT:
			return {
				...state,
				centerPanel: true,
				projectIsOpen: true,
				activeProject: action.projectName
			};
		case actionTypes.SELECT_SONG:
			return {
				...state,
				selectedSong: action.songName
			};
		case actionTypes.CURR_SONG:
			return {
				...state,
				currSong: action.song
			};
		case actionTypes.CURR_ARTIST:
			return {
				...state,
				currArtist: action.artist
			};
		default:
			return state;
	}
};

export default appReducer;
