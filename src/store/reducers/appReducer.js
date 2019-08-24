import * as actionTypes from '../actions';

const intitialState = {
	centerPanel: false,
	projectIsOpen: false,
	activeProject: ''
};

const appReducer = (state = intitialState, action) => {
	console.log(`app reducer fired`, action.projectName);
	switch (action.type) {
		case actionTypes.OPEN_CENTER:
			return {
				...state,
				centerPanel: true,
				projectIsOpen: false
			};
		case actionTypes.CLOSE_CENTER:
			return {
				...state,
				centerPanel: false,
				projectIsOpen: false
			};
		case actionTypes.NO_PROJECT:
			return {
				...state,
				activeProject: ''
			};
		case actionTypes.OPEN_PROJECT:
			return {
				...state,
				centerPanel: true,
				projectIsOpen: true,
				activeProject: action.projectName
			};

		default:
			return state;
	}
};

export default appReducer;
