// import React from 'react';
import * as actionTypes from './actionTypes';

// import { Redirect } from 'react-router-dom';

// Axios Instances
import firebase from '../../components/FirebaseInstances/firebase';

// LOGGING IN

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

// LOGGING OUT
export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	localStorage.removeItem('userId');
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = expirationTime => {
	// <Redirect to='/'></Redirect>;

	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

// AUTHORIZING
export const auth = (email, password, isSignup) => {
	return dispatch => {
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		dispatch(authStart());
		const key = `AIzaSyAE2R2CgZxIwZlmz7PrH8fsxINIQ_b2-Ws`;
		let link = !isSignup ? `signInWithPassword` : `signUp`;
		let url = `https://identitytoolkit.googleapis.com/v1/accounts:${link}?key=${key}`;
		firebase
			.post(url, authData)
			.then(res => {
				const data = res.data;
				const token = data.idToken;
				const userId = data.localId;
				// SUCCESS
				const expirationDate = new Date(
					new Date().getTime() + data.expiresIn * 1000
				);
				localStorage.setItem('token', data.idToken);
				localStorage.setItem('expirationDate', expirationDate);
				localStorage.setItem('userId', userId);
				dispatch(authSuccess(token, userId));
				dispatch(checkAuthTimeout(data.expiresIn));
				dispatch(setAuthRedirectPath('/dashboard'));
			})
			.catch(error => {
				// FAIL
				return dispatch(authFail(error.response.data.error));
			});
	};
};

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (!token) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if (expirationDate < new Date()) {
				dispatch(logout());
			} else {
				const userId = localStorage.getItem('userId');
				const expTime =
					(expirationDate.getTime() - new Date().getTime()) / 1000;
				dispatch(authSuccess(token, userId));
				dispatch(checkAuthTimeout(expTime));
			}
		}
	};
};

// REDIRECT
export const setAuthRedirectPath = path => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path
	};
};
