// import * as actionTypes from '../actions/actionTypes';

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
		default:
			return state;
	}
};

export default userReducer;
