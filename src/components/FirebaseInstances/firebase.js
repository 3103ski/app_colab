import axios from 'axios';

const firebase = axios.create({
	baseURL: 'https://mixt-a52ac.firebaseio.com/',
	timeout: 1000
});

export default firebase;
