// import * as actionTypes from '../actions';

// Status Colors
// New Song - #757575
// In Progress - #D0D0D0
// Mix Sent - #3BADFF
// Revisions Requested - #FFC83B
// Live Stream Scheduled - #FFE03B
// Sent Final Mixes - #3BFFD0
// Completed - #57FF3B

const intitialState = {
	projects: [
		{
			artist: 'Jimmy Cones',
			projectName: 'Do It Again',
			songs: [
				{
					name: 'Giving Up',
					status: 'In Progress',
					songKey: 'Bb Minor',
					users: ['Flizzy', 'Blaster', 'Crowly'],
					bpm: 124,
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'send final mix',
							notes: 'I really need to get those files out to whats his name.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'Giving Up'
							},
							completed: false,
							archived: false
						},
						{
							title: 'fix guitars',
							notes: 'guitars are trash. change that.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'Giving Up'
							},
							completed: true,
							archived: false
						},
						{
							title: 'finish mixing vocals',
							notes: 'backup vocals need to be better blended into mix.',
							dueDate: '10/9/19',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'Giving Up'
							},
							completed: true,
							archived: false
						}
					]
				},
				{
					name: 'We FLy',
					status: 'Revisions Requested',
					songKey: 'Bb Major',
					users: ['Flizzy', 'Blaster'],
					bpm: 120,
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'fix timing',
							notes: 'Need to make those drums tighter.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: false,
							archived: false
						},
						{
							title: 'tune vocals',
							notes: 'Those vocals sound like puberty. We grown out here.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: false,
							archived: false
						},
						{
							title: 'find missing files',
							notes:
								'there was supposed to be a violin and a cello in this song.',
							dueDate: '10/11/19',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: true,
							archived: false
						}
					]
				},
				{
					name: 'We FLy',
					status: 'Sent Final Mixes',
					songKey: 'Bb Major',
					users: ['Blaster', 'Crowly'],
					bpm: 120,
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'fix timing',
							notes: 'Need to make those drums tighter.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: false,
							archived: false
						},
						{
							title: 'tune vocals',
							notes: 'Those vocals sound like puberty. We grown out here.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: false,
							archived: false
						},
						{
							title: 'find missing files',
							notes:
								'there was supposed to be a violin and a cello in this song.',
							dueDate: '10/11/19',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: true,
							archived: false
						}
					]
				},
				{
					name: 'We FLy',
					status: 'Completed',
					songKey: 'Bb Major',
					bpm: 120,
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'fix timing',
							notes: 'Need to make those drums tighter.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: false,
							archived: false
						},
						{
							title: 'tune vocals',
							notes: 'Those vocals sound like puberty. We grown out here.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: false,
							archived: false
						},
						{
							title: 'find missing files',
							notes:
								'there was supposed to be a violin and a cello in this song.',
							dueDate: '10/11/19',
							myDay: true,
							location: {
								artist: 'Jimmy Cones',
								project: 'Do It Again',
								song: 'We Fly'
							},
							completed: true,
							archived: false
						}
					]
				}
			]
		},
		{
			artist: 'The Bears',
			projectName: 'Eating All Day',
			songs: [
				{
					name: 'Hide Your Food',
					songKey: 'E Minor',
					bpm: 160,
					status: 'New Song',
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'send final mix',
							notes: 'I really need to get those files out to whats his name.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'Hide Your Food'
							},
							completed: false,
							archived: false
						},
						{
							title: 'fix guitars',
							notes: 'guitars are trash. change that.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'Hide Your Food'
							},
							completed: true,
							archived: false
						},
						{
							title: 'finish mixing vocals',
							notes: 'backup vocals need to be better blended into mix.',
							dueDate: '10/9/19',
							myDay: true,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'Hide Your Food'
							},
							completed: true,
							archived: false
						}
					]
				},
				{
					name: 'I Climb Trees',
					songKey: 'C Major',
					bpm: 135,
					status: 'Completed',
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'send final mix',
							notes: 'I really need to get those files out to whats his name.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'I Climb Trees'
							},
							completed: false,
							archived: false
						},
						{
							title: 'fix guitars',
							notes: 'guitars are trash. change that.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'I Climb Trees'
							},
							completed: true,
							archived: false
						},
						{
							title: 'finish mixing vocals',
							notes: 'backup vocals need to be better blended into mix.',
							dueDate: '10/9/19',
							myDay: true,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'I Climb Trees'
							},
							completed: true,
							archived: false
						}
					]
				},
				{
					name: 'Salmon Sushi',
					songKey: 'D Minor',
					bpm: 127,
					status: 'Completed',
					reference: 'Dave Matthews Band',
					notes:
						'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
					todos: [
						{
							title: 'send final mix',
							notes: 'I really need to get those files out to whats his name.',
							dueDate: 'today',
							myDay: false,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'Salmon Sushi'
							},
							completed: false,
							archived: false
						},
						{
							title: 'fix guitars',
							notes: 'guitars are trash. change that.',
							dueDate: 'tomorrow',
							myDay: true,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'Salmon Sushi'
							},
							completed: true,
							archived: false
						},
						{
							title: 'finish mixing vocals',
							notes: 'backup vocals need to be better blended into mix.',
							dueDate: '10/9/19',
							myDay: true,
							location: {
								artist: 'The Bears',
								project: 'Eating All Day',
								song: 'Salmon Sushi'
							},
							completed: true,
							archived: false
						}
					]
				}
			]
		},
		{
			artist: 'Hawks',
			projectName: 'Sky Forever',
			songs: [
				{
					name: 'Never On The Ground',
					songKey: 'E Major',
					bpm: 124,
					status: 'Completed'
				},
				{
					name: 'Damn These Clouds',
					songKey: 'B Major',
					bpm: 120,
					status: 'In Progress'
				},
				{
					name: 'Three Blind Mice',
					songKey: 'E Minor',
					bpm: 110,
					status: 'Mix Sent'
				}
			]
		}
	]
};

const projectsReducer = (state = intitialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default projectsReducer;
