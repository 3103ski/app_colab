import axios from 'axios';

const songs = axios.create({
	baseURL: 'https://mixt-a52ac.firebaseio.com/songs',
	timeout: 1000,
	headers: { 'Access-Control-Allow-Origin': '*' }
});

export default songs;
