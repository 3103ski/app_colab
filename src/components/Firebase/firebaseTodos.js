import axios from 'axios';

const todos = axios.create({
	baseURL: 'https://mixt-a52ac.firebaseio.com/todos',
	timeout: 1000,
	headers: { 'Access-Control-Allow-Origin': '*' }
});

export default todos;
