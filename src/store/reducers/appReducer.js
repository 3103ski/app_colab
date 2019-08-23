import * as actionTypes from '../actions';

const intitialState = {
	centerPanel: false,
	project: false,
	activeProject: ''
};

const appReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.OPEN_CENTER:
			return {
				...state,
				centerPanel: true
			};
		case actionTypes.CLOSE_CENTER:
			return {
				...state,
				centerPanel: false
			};
		default:
			return state;
	}
};

export default appReducer;
