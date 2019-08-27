/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

const users = users => {
	const userPics = users
		? users.map((userName, index) => {
				return (
					<img
						key={index}
						alt='user'
						src={require(`../../assets/userPic-${userName}.png`)}
					/>
				);
		  })
		: null;
	return userPics;
};

export default users;
