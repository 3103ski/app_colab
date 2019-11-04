import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';

const intitialState = {
	profile: {
		username: '',
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		city: '',
		website: '',
		job: ''
	},
	userId: '',
	updatingProfile: false,
	loadingProfile: false,
	profileLoaded: false,
	picUrl: ''
};

// UPDATING PROFILE
const updateProfileStart = (state, action) => {
	return updateObject(state, {
		updatingProfile: true
	});
};

const updateProfileSuccess = (state, action) => {
	return updateObject(state, {
		profile: { ...action.profile },
		updatingProfile: false
	});
};

const updateProfileFail = (state, action) => {
	console.log(action.err);
};

// PROFILE INIT

const loadProfileStart = (state, action) => {
	return updateObject(state, {
		loadingProfile: true
	});
};

const loadProfileSuccess = (state, action) => {
	return updateObject(state, {
		loadingProfile: false,
		profile: action.profile.profile,
		userId: action.profile.userId,
		profileLoaded: true
	});
};

const loadProfileFail = (state, action) => {
	return console.log(action.err);
};

// LOGOUT PROFILE

const logoutUserProfile = (state, action) => {
	return updateObject(state, {
		userId: '',
		updatingProfile: false,
		loadingProfile: false,
		profileLoaded: false
	});
};

// STORE PIC

const setPicUrl = (state, action) => {
	return updateObject(state, {
		picUrl: action.picUrl
	});
};

const userReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_PROFILE_START:
			return updateProfileStart(state, action);
		case actionTypes.UPDATE_PROFILE_SUCCESS:
			return updateProfileSuccess(state, action);
		case actionTypes.UPDATE_SONGS_FAIL:
			return updateProfileFail(state, action);
		case actionTypes.LOAD_PROFILE_START:
			return loadProfileStart(state, action);
		case actionTypes.LOAD_PROFILE_SUCCESS:
			return loadProfileSuccess(state, action);
		case actionTypes.LOAD_PROFILE_FAIL:
			return loadProfileFail(state, action);
		case actionTypes.LOGOUT_USER_PROFILE:
			return logoutUserProfile(state, action);
		case actionTypes.STORE_PIC_URL:
			return setPicUrl(state, action);
		default:
			return state;
	}
};

export default userReducer;
