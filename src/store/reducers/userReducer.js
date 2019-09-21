// import * as actionTypes from '../actions/actionTypes';

const intitialState = {
	userName: 'bjastski',
	firstName: 'Bobby',
	lastName: 'Flopitron',
	colaberators: [
		{
			userName: 'Franky',
			firstName: 'Franky',
			userId: ''
		},
		{
			userName: 'BearTops',
			firstName: 'Dave',
			userId: ''
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
