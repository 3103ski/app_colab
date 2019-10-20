import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const intitialState = {
	modal: false,
	isAddingProject: false,
	isAddingSong: false,
	isAddingTodo: false,
	centerPanel: false,
	rightPanel: false,
	projectIsOpen: false,
	activeTodo: '',
	activeProject: '',
	selectedSong: '',
	currArtist: ``,
	currSong: null
};

const appReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_TODO:
			return updateObject(state, {
				activeTodo: action.todoId,
				rightPanel: true
			});
		case actionTypes.CLOSE_TODO:
			return updateObject(state, {
				activeTodo: '',
				rightPanel: false
			});
		case actionTypes.LINK_WITH_CENTER:
			return updateObject(state, {
				centerPanel: true,
				projectIsOpen: false,
				activeProject: '',
				selectedSong: '',
				activeTodo: '',
				rightPanel: false
			});
		case actionTypes.RIGHT_PANEL_TOGGLE:
			return updateObject(state, {
				rightPanel: state.rightPanel ? false : true
			});
		case actionTypes.TODO_FORM:
			return updateObject(state, {
				isAddingTodo: true,
				modal: true
			});
		case actionTypes.LINK_NO_CENTER:
			return updateObject(state, {
				centerPanel: false,
				projectIsOpen: false,
				activeProject: '',
				selectedSong: '',
				activeTodo: '',
				rightPanel: false
			});

		case actionTypes.OPEN_PROJECT:
			return updateObject(state, {
				centerPanel: true,
				projectIsOpen: true,
				selectedSong: '',
				activeProject: action.projectName,
				currArtist: action.currArtist,
				activeTodo: '',
				rightPanel: false
			});
		case actionTypes.SELECT_SONG:
			return updateObject(state, {
				selectedSong: action.songName,
				currSong: action.song,
				currArtist: action.artist
			});
		case actionTypes.PROJECT_FORM_TOGGLE:
			return updateObject(state, {
				modal: state.modal ? false : true,
				isAddingProject: state.isAddingProject ? false : true
			});
		case actionTypes.SONG_FORM_TOGGLE:
			return updateObject(state, {
				modal: state.modal ? false : true,
				isAddingSong: state.isAddingSong ? false : true
			});
		case actionTypes.CLOSE_MODAL:
			return updateObject(state, {
				modal: false,
				isAddingProject: false,
				isAddingSong: false,
				isAddingTodo: false
			});

		default:
			return state;
	}
};

export default appReducer;
