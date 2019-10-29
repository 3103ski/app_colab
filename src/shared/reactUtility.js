/* eslint-disable no-mixed-spaces-and-tabs */

import { randomId } from './utility';
// React Imports
import React from 'react';

// *********************************************************
// ***** RETURN USER IMGs  *********************************
// *********************************************************

export const getUserPics = (type, uids) => {
	let userPics;
	if (type === 'default') {
		// userPics = uids.map((userName, index) => {
		return (
			<img
				key={randomId()}
				alt='user'
				src={require(`../assets/contacts.png`)}
			/>
		);
		// });
	}
	if (type === 'url') {
		userPics = uids.map((userName, index) => {
			return <img key={index} alt='user' src={userName} />;
		});
	}
	return userPics;
};
