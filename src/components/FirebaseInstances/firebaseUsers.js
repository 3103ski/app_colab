import axios from 'axios';

const users = axios.create({
	baseURL: 'https://mixt-a52ac.firebaseio.com/users',
	timeout: 1000,
	headers: { 'Access-Control-Allow-Origin': '*' }
});

export default users;
