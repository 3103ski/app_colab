import * as actionTypes from './actionTypes';

// Import
import { db } from '../../firebase';

// UPDATE PROFILE
export const updateProfileStart = (profile, userId) => {
	return {
		type: actionTypes.UPDATE_PROFILE_START,
		profile: profile,
		userId: userId
	};
};
export const updateProfileSuccess = newProfile => {
	return {
		type: actionTypes.UPDATE_PROFILE_SUCCESS,
		profile: newProfile
	};
};
export const updateProfileFail = err => {
	return {
		type: actionTypes.UPDATE_PROFILE_FAIL,
		err: err
	};
};

export const updateProfile = (profile, userId) => {
	const u = {
		userId: userId,
		profile: profile
	};
	return dispatch => {
		dispatch(updateProfileStart());
		db.collection('users')
			.doc(userId)
			.set(u)
			.then(dispatch(updateProfileSuccess(profile)));
	};
};

// LOAD PROFILE
export const loadProfileStart = () => {
	return {
		type: actionTypes.UPDATE_PROFILE_START
	};
};
export const loadProfileSuccess = profile => {
	return {
		type: actionTypes.LOAD_PROFILE_SUCCESS,
		profile: profile
	};
};
export const loadProfileFail = err => {
	return {
		type: actionTypes.LOAD_PROFILE_FAIL,
		err: err
	};
};

export const loadProfile = userId => {
	return dispatch => {
		db.collection(`users`)
			.get()
			.then(qS => {
				qS.forEach(doc => {
					if (userId === doc.data().userId) {
						let profile = {
							...doc.data()
						};
						dispatch(loadProfileSuccess(profile));
					}
				});
			});
	};
};

// Reset profile state

export const logoutUserProfile = () => {
	return {
		type: actionTypes.LOGOUT_USER_PROFILE
	};
};

// Store profile pic url

export const setPicUrl = url => {
	return {
		type: actionTypes.STORE_PIC_URL,
		picUrl: url
	};
};
