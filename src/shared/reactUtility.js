/* eslint-disable no-mixed-spaces-and-tabs */

// React Imports
import React from 'react';

// *********************************************************
// ***** RETURN USER IMGs  *********************************
// *********************************************************

export const getUserPics = users => {
	const userPics = users
		? users.map((userName, index) => {
				return (
					<img
						key={index}
						alt='user'
						src={require(`../assets/userPic-${userName}.png`)}
					/>
				);
		  })
		: null;
	return userPics;
};
