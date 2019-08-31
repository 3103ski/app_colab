import axios from 'axios';

const projects = axios.create({
	baseURL: 'https://mixt-a52ac.firebaseio.com/projects',
	timeout: 1000,
	headers: { 'Access-Control-Allow-Origin': '*' }
});

export default projects;
