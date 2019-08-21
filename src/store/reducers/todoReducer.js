import * as actionTypes from '../actions';

const intitialState = {
	filters: {
		all: 18,
		inbox: 1,
		myDay: 0,
		today: 0,
		tomorrow: 4,
		nextSeven: 13
	},
	todos: [
		{
			title: 'send final mix',
			notes: 'I really need to get those files out to whats his name.',
			dueDate: 'today',
			myDay: false,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: false,
			archived: false
		},
		{
			title: 'new vocal track',
			notes: 'gotta get that vocal swapped out bruh.',
			dueDate: 'today',
			myDay: false,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: false,
			archived: false
		},
		{
			title: 'edit those guitars',
			notes: 'guitars sound like dying lamas.',
			dueDate: 'tomorrow',
			myDay: false,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: false,
			archived: false
		},
		{
			title: 'new vocal track',
			notes: 'gotta get that vocal swapped out bruh.',
			dueDate: 'tomorrow',
			myDay: false,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: true,
			archived: false
		},
		{
			title: 'new vocal track',
			notes: 'gotta get that vocal swapped out bruh.',
			dueDate: 'tomorrow',
			myDay: false,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: false,
			archived: false
		},
		{
			title: 'new vocal track',
			notes: 'gotta get that vocal swapped out bruh.',
			dueDate: 'tomorrow',
			myDay: false,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: true,
			archived: false
		},
		{
			title: 'send stems',
			notes: 'lets get those stems sent the eff out.',
			dueDate: '10/12/19',
			myDay: true,
			location: {
				artist: 'Jimmy Cones',
				project: 'Do It Again',
				song: 'Skyscraper'
			},
			completed: false,
			archived: false
		}
	]
};

const todoReducer = (state = intitialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default todoReducer;
