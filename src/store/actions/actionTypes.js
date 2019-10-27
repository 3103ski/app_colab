// appReducer
export const LINK_NO_CENTER = 'LINK_NO_CENTER';
export const LINK_WITH_CENTER = 'LINK_WITH_CENTER';
export const TODO_FORM = 'TODO_FORM';
export const RIGHT_PANEL_TOGGLE = 'RIGHT_PANEL_TOGGLE';
export const OPEN_PROJECT = 'OPEN_PROJECT';
export const SELECT_SONG = 'SELECT_SONG';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const PROJECT_FORM_TOGGLE = 'PROJECT_FORM_TOGGLE';
export const SONG_FORM_TOGGLE = 'SONG_FORM_TOGGLE';

// ***** [auth.js] - reducer actionTypes *****

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';

// ***** [projectsReducer.js] - reducer actionTypes *****

// Add Project
export const ADD_PROJECT = 'ADD_PROJECT';
// Add Song
export const ADD_SONG = 'ADD_SONG';

// Fetch Projects & Songs
export const PROJECTS_INIT = 'PROJECTS_INIT';

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAIL = 'FETCH_PROJECTS_FAIL';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export const FETCH_SONGS_START = 'FETCH_SONGS_START';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAIL = 'FETCH_SONGS_FAIL';
export const FETCH_SONGS = 'FETCH_SONGS';

export const UPDATE_SONGS = 'UPDATE_SONGS';
export const UPDATE_SONGS_START = 'UPDATE_SONGS_START';
export const UPDATE_SONGS_SUCCESS = 'UPDATE_SONGS_SUCCESS';
export const UPDATE_SONGS_FAIL = 'UPDATE_SONGS_FAIL';

// ***** [todoRedurcer.js] - reducer actionTypes *****

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

export const SELECT_TODO = 'SELECT_TODO';
export const CLOSE_TODO = 'CLOSE_TODO';
export const COMPLETE_TOGGLE = 'COMPLETE_TOGGLE';
export const SET_TODO_DUE_DATE = 'SET_TODO_DUE_DATE';
export const TOGGLE_MY_DAY = 'TOGGLE_MY_DAY';
export const TOGGLE_MY_YESTERDAY = 'TOGGLE_MY_YESTERDAY';
export const TOGGLE_MY_TOMORROW = 'TOGGLE_MY_TOMORROW';

export const UPDATE_TODO = 'UPDATE_TODO';
