import * as actionTypes from '../actions/actionTypes';

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
			users: ['Dave', 'MhwAMHFv7rRHxW5AMmYHQUCnzgY2'],
			engineerPrivs: [`MhwAMHFv7rRHxW5AMmYHQUCnzgY2`],
			reference: 'Bear Hands',
			notes: `I want the reverb on this song to sound like I'm in somebody's kitchen. You know, like I'm going through their food. `,
			comments: {
				playlist1: [
					{
						comment: `Do you mind if I take out the vocals for this part? `,
						timeStamp: `00:02:14`,
						userName: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
								user: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
								hasBeenSeen: true
							}
						]
					}
				],
				playlist2: [
					{
						comment: `I think we should end the song around here?`,
						timeStamp: `00:04:54`,
						userName: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
								user: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
			users: ['Franky', 'MhwAMHFv7rRHxW5AMmYHQUCnzgY2'],
			engineerPrivs: [`MhwAMHFv7rRHxW5AMmYHQUCnzgY2`],
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
								user: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
			users: ['Franky', 'MhwAMHFv7rRHxW5AMmYHQUCnzgY2', 'Dave'],
			engineerPrivs: [`MhwAMHFv7rRHxW5AMmYHQUCnzgY2`],
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
								user: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
								hasBeenSeen: true
							}
						]
					},
					{
						comment: `What if We got rid of this shaker?`,
						timeStamp: `00:02:14`,
						userName: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
								user: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
			users: ['Franky', 'MhwAMHFv7rRHxW5AMmYHQUCnzgY2'],
			engineerPrivs: [`MhwAMHFv7rRHxW5AMmYHQUCnzgY2`],
			bpm: 120,
			length: `00:03:24`,
			reference: 'Logic',
			notes: 'Walking is just flying on the ground, you know?',
			comments: {
				playlist1: [
					{
						comment: `Why does he sound like screeching metal?`,
						timeStamp: `00:01:08`,
						userName: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
						userName: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
						userName: `MhwAMHFv7rRHxW5AMmYHQUCnzgY2`,
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
	allSongTodos: [],
	loading: false,
	error: null
};

// Add Projects

const addProject = (state, action) => {
	return updateObject(state, {
		projects: [...state.projects, action.newProject]
	});
};

// Fetch Projects
const fetchProjectsStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const fetchProjectsSuccess = (state, action) => {
	return updateObject(state, {
		loading: false,
		projects: action.projects
	});
};

const fetchProjectsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	});
};

// Add Songs

const addSong = (state, action) => {
	return updateObject(state, {
		songs: [...state.songs, action.newSong]
	});
};

const updateSongs = (state, action) => {
	const newSong = action.song;
	const allCurrSongs = [...state.songs];
	const updatedSongs = allCurrSongs.map(song => {
		if (song.id === newSong.id) {
			return newSong;
		} else {
			return song;
		}
	});
	return updateObject(state, {
		songs: updatedSongs
	});
};

// Fetch Songs

const fetchSongsStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const fetchSongsSuccess = (state, action) => {
	return updateObject(state, {
		loading: false,
		songs: action.songs
	});
};

const fetchSongsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	});
};

const projectsReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_SONGS:
			return updateSongs(state, action);
		case actionTypes.ADD_PROJECT:
			return addProject(state, action);
		case actionTypes.ADD_SONG:
			return addSong(state, action);
		case actionTypes.FETCH_PROJECTS_START:
			return fetchProjectsStart(state, action);
		case actionTypes.FETCH_PROJECTS_FAIL:
			return fetchProjectsFail(state, action);
		case actionTypes.FETCH_PROJECTS_SUCCESS:
			return fetchProjectsSuccess(state, action);
		case actionTypes.FETCH_SONGS_START:
			return fetchSongsStart(state, action);
		case actionTypes.FETCH_SONGS_FAIL:
			return fetchSongsFail(state, action);
		case actionTypes.FETCH_SONGS_SUCCESS:
			return fetchSongsSuccess(state, action);
		default:
			return state;
	}
};

export default projectsReducer;
