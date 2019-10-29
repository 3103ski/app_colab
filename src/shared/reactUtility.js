/* eslint-disable no-mixed-spaces-and-tabs */
import { randomId } from '../shared/utility';
// React Imports
import React from 'react';
// import { db } from '../firebase';
import firebase from 'firebase';

// *********************************************************
// ***** RETURN USER IMGs  *********************************
// *********************************************************

export const getUserPics = users => {
	// console.log(`sneaky???`, test);

	const userPics = users
		? users.map((userName, index) => {
				var storage = firebase.storage();
				var storageRef = storage.ref(`images/${userName}.jpeg`);
				storageRef
					.getDownloadURL()
					.then(function(url) {
						let test;
						const getUrl = url => {
							console.log(`yes2`, url);
							test = url;
							console.log(`yes3`, test);
							return test;
						};
						// Insert url into an <img> tag to "download"
						// <img src={url}></img>;
						console.log(`yes`, url);
						test = getUrl(url);
						return test;
					})
					.catch(function(error) {
						// A full list of error codes is available at
						// https://firebase.google.com/docs/storage/web/handle-errors
						switch (error.code) {
							case 'storage/object-not-found':
								// File doesn't exist
								break;

							case 'storage/unauthorized':
								// User doesn't have permission to access the object
								break;

							case 'storage/canceled':
								// User canceled the upload
								break;

							case 'storage/unknown':
								// Unknown error occurred, inspect the server response
								break;
						}
					});
		  })
		: null;
	console.log(`sneaky???`, userPics);
	return <img src={userPics}></img>;

	// if (typeof users === 'object') {
	// 	console.log(`I saw an object: `, users);
	// 	const getUrl = url => {
	// 		test = url;
	// 		console.log(`sneaky???`, test);
	// 	};
	// 	const userPics = users
	// 		? users.map((userName, index) => {
	// 				var storage = firebase.storage();
	// 				var storageRef = storage.ref(`images/${userName}.jpeg`);
	// 				storageRef
	// 					.getDownloadURL()
	// 					.then(function(url) {
	// 						// Insert url into an <img> tag to "download"
	// 						// <img src={url}></img>;
	// 						console.log(url);
	// 						getUrl(url);
	// 					})
	// 					.catch(function(error) {
	// 						// A full list of error codes is available at
	// 						// https://firebase.google.com/docs/storage/web/handle-errors
	// 						switch (error.code) {
	// 							case 'storage/object-not-found':
	// 								// File doesn't exist
	// 								break;

	// 							case 'storage/unauthorized':
	// 								// User doesn't have permission to access the object
	// 								break;

	// 							case 'storage/canceled':
	// 								// User canceled the upload
	// 								break;

	// 							case 'storage/unknown':
	// 								// Unknown error occurred, inspect the server response
	// 								break;
	// 						}
	// 					});
	// 		  })
	// 		: null;

	// 	if (typeof users === 'string') {
	// 		console.log(`This happened`);
	// 		const userName = 'MhwAMHFv7rRHxW5AMmYHQUCnzgY2';
	// 		var storage = firebase.storage();
	// 		var storageRef = storage.ref(`images/${userName}.jpeg`);
	// 		storageRef.getDownloadURL().then(function(url) {
	// 			console.log(`how about this? `, storageRef);
	// 		});
	// 	}
	// 	console.log(`made it sneakier???`, test);
	// 	return <img src={test}></img>;
	// }
};
