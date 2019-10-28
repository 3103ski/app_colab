import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyAE2R2CgZxIwZlmz7PrH8fsxINIQ_b2-Ws',
	authDomain: 'localhost',
	databaseURL: 'https://mixt-a52ac.firebaseio.com/',
	projectId: 'mixt-a52ac',
	storageBucket: 'gs://mixt-a52ac.appspot.com',
	messagingSenderId: '561728111756'
});

const db = firebaseApp.firestore();

export { db };
