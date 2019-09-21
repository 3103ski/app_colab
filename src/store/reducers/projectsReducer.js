import * as actionTypes from '../actions/actionTypes';

// Axios Instances
// import firebaseProjects from '../../components/FirebaseInstances/firebaseProjects';

// Utility Functions
import { updateObject } from '../../shared/utility';

const intitialState = {
	projects: [
		{
			artist: 'Franky',
			projectName: 'Do It Again'
		},
		{
			artist: 'The Bears',
			projectName: 'Eating All Day'
		}
	],
	songs: [
		{
			name: 'Hide Your Food',
			artist: `The Bears`,
			projectName: `Eating All Day`,
			songKey: 'E Minor',
			bpm: 160,
			length: `00:06:05`,
			status: 'New Song',
			users: ['Dave', 'Bobby'],
			engineerPrivs: [`Bobby`],
			reference: 'Bear Hands',
			notes: `I want the reverb on this song to sound like I'm in somebody's kitchen. You know, like I'm going through their food. `,
			comments: {
				playlist1: [
					{
						comment: `Do you mind if I take out the vocals for this part? `,
						timeStamp: `00:02:14`,
						userName: `Bobby`,
						playlist: `HideYourFood_mix-1.mp3`,
						hasBeenSeen: false,
						isOtherUser: false,
						responses: [
							{
								comment: `Yeah as long as you make it right when they come in.`,
								isOtherUser: true,
								user: `Dave`,
								hasBeenSeen: true
							},
							{
								comment: `Great, I think it will work better with how long the song is.`,
								isOtherUser: false,
								user: `Bobby`,
								hasBeenSeen: true
							}
						]
					}
				],
				playlist2: [
					{
						comment: `I think we should end the song around here?`,
						timeStamp: `00:04:54`,
						userName: `Bobby`,
						playlist: `HideYourFood_mix-2.mp3`,
						hasBeenSeen: false,
						isOtherUser: false,
						responses: [
							{
								comment: `But then we would have to cut out the 40 seconds of ocean waves.`,
								isOtherUser: true,
								user: `Dave`,
								hasBeenSeen: true
							},
							{
								comment: `Exactly.`,
								isOtherUser: false,
								user: `Bobby`,
								hasBeenSeen: true
							},
							{
								comment: `Nah, keep it.`,
								isOtherUser: true,
								user: `Dave`,
								hasBeenSeen: true
							}
						]
					}
				]
			},
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
			artist: `The Bears`,
			projectName: `Eating All Day`,
			songKey: 'C Major',
			bpm: 135,
			length: `00:02:33`,
			status: 'Completed',
			users: ['Franky', 'Bobby'],
			engineerPrivs: [`Bobby`],
			reference: 'Childish Gambino',
			notes: `I need the vocals in this one to be as airy as the breeze I'd feel if I were atop an actual tree. Like a redwood, man.`,
			comments: {
				playlist1: [
					{
						comment: `This part hits just right`,
						timeStamp: `00:01:31`,
						userName: `Dave`,
						playlist: `IClimbTrees_mix-1.mp3`,
						hasBeenSeen: false,
						isOtherUser: true,
						responses: [
							{
								comment: `Yeah, when I finished it I was like whoah.`,
								isOtherUser: false,
								user: `Bobby`,
								hasBeenSeen: false
							}
						]
					}
				]
			},
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
			name: 'Giving Up',
			artist: `Franky`,
			projectName: `Do It Again`,
			status: 'In Progress',
			songKey: 'Bb Minor',
			users: ['Franky', 'Bobby', 'Dave'],
			engineerPrivs: [`Bobby`],
			bpm: 124,
			length: `00:03:52`,
			reference: 'Father John Misty',
			notes:
				'I have so much to say about this song I needed this notes section. Make me sound like Beyonce.',
			comments: {
				playlist1: [
					{
						comment: `This part sounds wrong`,
						timeStamp: `00:01:22`,
						userName: `Franky`,
						playlist: `givingUp_mix-1.mp3`,
						hasBeenSeen: true,
						isOtherUser: true,
						responses: [
							{
								comment: `Yeah, something got messed up when I exported`,
								isOtherUser: false,
								user: `Bobby`,
								hasBeenSeen: true
							}
						]
					},
					{
						comment: `What if We got rid of this shaker?`,
						timeStamp: `00:02:14`,
						userName: `Bobby`,
						playlist: `givingUp_mix-1.mp3`,
						hasBeenSeen: true,
						isOtherUser: false,
						responses: [
							{
								comment: `That would be a good idea`,
								isOtherUser: true,
								user: `Franky`,
								hasBeenSeen: true
							}
						]
					}
				],
				playlist2: [
					{
						comment: `Can you make the vocals softer here?`,
						timeStamp: `00:02:37`,
						userName: `Franky`,
						playlist: `givingUp_mix-2.mp3`,
						hasBeenSeen: true,
						isOtherUser: true,
						responses: [
							{
								comment: `like how soft?`,
								isOtherUser: false,
								user: `Bobby`,
								hasBeenSeen: false
							},
							{
								comment: `cotton cloud soft?`,
								isOtherUser: true,
								user: `Franky`,
								hasBeenSeen: false
							}
						]
					}
				]
			},
			todos: [
				{
					title: 'get new snare ',
					notes: 'Franky said he had a particular snare he wanted to try.',
					dueDate: 'today',
					myDay: false,
					location: {
						artist: 'Franky',
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
						artist: 'Franky',
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
						artist: 'Franky',
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
			artist: `Franky`,
			projectName: `Do It Again`,
			status: 'Revisions Requested',
			songKey: 'Bb Major',
			users: ['Franky', 'Bobby'],
			engineerPrivs: [`Bobby`],
			bpm: 120,
			length: `00:03:24`,
			reference: 'Logic',
			notes: 'Walking is just flying on the ground, you know?',
			comments: {
				playlist1: [
					{
						comment: `Why does he sound like screeching metal?`,
						timeStamp: `00:01:08`,
						userName: `Bobby`,
						playlist: `WeFly_mix-1.mp3`,
						hasBeenSeen: true,
						isOtherUser: false,
						responses: [
							{
								comment: `We thought wrapping the mic in tin cans would sound cool!`,
								isOtherUser: true,
								user: `Franky`,
								hasBeenSeen: false
							}
						]
					}
				],
				playlist2: [
					{
						comment: `How do you want this to end?`,
						timeStamp: `00:03:11`,
						userName: `Bobby`,
						playlist: `WeFly_mix-2.mp3`,
						hasBeenSeen: true,
						isOtherUser: false,
						responses: [
							{
								comment: `fade it slow.`,
								isOtherUser: true,
								user: `Franky`,
								hasBeenSeen: true
							}
						]
					}
				],
				playlist3: [
					{
						comment: `I decided to include some engine noises right at the end`,
						timeStamp: `00:03:30`,
						userName: `Bobby`,
						playlist: `WeFly_mix-3.mp3`,
						hasBeenSeen: false,
						isOtherUser: true,
						responses: [
							{
								comment: `fire`,
								isOtherUser: true,
								user: `Franky`,
								hasBeenSeen: false
							}
						]
					}
				]
			},
			todos: [
				{
					title: 'fix timing',
					notes: 'Need to make those drums tighter.',
					dueDate: 'today',
					myDay: false,
					location: {
						artist: 'Franky',
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
						artist: 'Franky',
						project: 'Do It Again',
						song: 'We Fly'
					},
					completed: false,
					archived: false
				},
				{
					title: 'find missing files',
					notes: 'there was supposed to be a violin and a cello in this song.',
					dueDate: '10/11/19',
					myDay: true,
					location: {
						artist: 'Franky',
						project: 'Do It Again',
						song: 'We Fly'
					},
					completed: true,
					archived: false
				}
			]
		}
	],
	allSongTodos: []
};

const addProject = (state, action) => {
	return updateObject(state, {
		projects: [...state.projects, action.newProject],
		isAddingProject: false
	});
};

const addSong = (state, action) => {
	const projectArr = state.projects.map(project => {
		if (project.projectName === action.projectName) {
			project.songs.push(action.song);
		}
		return project;
	});
	return updateObject(state, {
		projects: projectArr
	});
};

const projectsReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PROJECT:
			return addProject(state, action);
		case actionTypes.ADD_SONG:
			return addSong(state, action);
		default:
			return state;
	}
};

// PUSHES ALL SONG TODOS TO REDUCER STATE
// const collectAllSongTodos = () => {
// 	let allSongs = [];
// 	const fillSongs = () => {
// 		intitialState.projects.map(project => {
// 			return project.songs.map(song => allSongs.push(song));
// 		});
// 	};
// 	fillSongs();
// 	let allTodos = [];
// 	allSongs.map(song => {
// 		return song.todos.map(todo => intitialState.allSongTodos.push(todo));
// 	});
// 	return allTodos;
// };
// collectAllSongTodos();

export default projectsReducer;
