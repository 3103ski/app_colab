import * as actionTypes from '../actions';

const intitialState = {
	userName: 'bjastski',
	password: 'password',
	firstName: 'Bryan',
	lastName: 'Flopitron',
	colaberators: [
		{
			name: 'Flizzy',
			profilePic: '1'
		},
		{
			name: 'Blaster',
			profilePic: '2'
		},
		{
			name: 'Crowly',
			profilePic: '3'
		}
	]
};

const userReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_FIRSTNAME:
			return {};
		case actionTypes.UPDATE_LASTNAME:
			return {};
		case actionTypes.UPDATE_PASSWORD:
			return {};
		case actionTypes.UPDATE_USERNAME:
			return {};
		default:
			return state;
	}
};

export default userReducer;
