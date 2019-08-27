// import * as actionTypes from '../actions';

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
			title: 'create daily',
			notes: 'make a todo list for today. I got so much to do.',
			dueDate: 'today',
			myDay: false,
			location: {
				artist: 'Franky',
				project: 'Do It Again'
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
				artist: 'Franky',
				project: 'Do It Again'
			},
			completed: false,
			archived: false
		},
		{
			title: 'edit those guitars',
			notes: 'guitars sound like dying lamas.',
			dueDate: 'today',
			myDay: false,
			location: {
				artist: 'Franky',
				project: 'Do It Again'
			},
			completed: false,
			archived: false
		},
		{
			title: 'new vocals',
			notes: 'we got some new vocals Franky wants to try.',
			dueDate: 'tomorrow',
			myDay: false,
			location: {
				artist: 'Franky',
				project: 'Do It Again'
			},
			completed: true,
			archived: false
		},
		{
			title: 'Bear sounds?',
			notes:
				'Dave has a whole song where the beat is made of bear noises. Get more info.',
			dueDate: 'today',
			myDay: false,
			location: {
				artist: 'The Bears',
				project: 'Eating All Day'
			},
			completed: false,
			archived: false
		},
		{
			title: 'Finish hide your food early',
			notes: 'I think I can wrap this up today.',
			dueDate: '10/08/19',
			myDay: false,
			location: {
				artist: 'The Bears',
				project: 'Eating All Day'
			},
			completed: true,
			archived: false
		},
		{
			title: 'Album art',
			notes:
				'I want to see the album art Dave got because he says it sets the tone for the album.',
			dueDate: '10/11/19',
			myDay: true,
			location: {
				artist: 'The Bears',
				project: 'Eating All Day'
			},
			completed: false,
			archived: false
		},
		{
			title: 'Spotify for Franky',
			notes: `Franky doesn't know how to get his Spotify account going.`,
			dueDate: '10/14/19',
			myDay: true,
			location: {
				artist: 'Franky',
				project: 'Do It Again'
			},
			completed: false,
			archived: false
		},
		{
			title: 'send stems',
			notes: 'lets get those stems sent the eff out.',
			dueDate: '10/20/19',
			myDay: true,
			location: {
				artist: 'The Bears',
				project: 'Eating All Day'
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
