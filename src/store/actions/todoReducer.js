import * as actionTypes from './actionTypes';

// Import
import firebaseTodos from '../../components/FirebaseInstances/firebaseTodos';

// FETCHING ALL TODOS

export const fetchTodosStart = () => {
	return {
		type: actionTypes.FETCH_TODOS_START
	};
};

export const fetchTodosSuccess = todos => {
	return {
		type: actionTypes.FETCH_TODOS_SUCCESS,
		todos: todos
	};
};

export const fetchTodosFail = err => {
	return {
		type: actionTypes.FETCH_TODOS_FAIL,
		error: err
	};
};

export const fetchTodos = (token, userId) => {
	return dispatch => {
		dispatch(fetchTodosStart());
		const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
		firebaseTodos
			.get('.json' + queryParams)
			.then(res => {
				const fetchedTodos = [];
				for (let key in res.data) {
					fetchedTodos.push({
						...res.data[key],
						id: key
					});
				}
				dispatch(fetchTodosSuccess(fetchedTodos));
			})
			.catch(error => {
				dispatch(fetchTodosFail(error));
			});
	};
};

// ADD TODOS

export const addTodoToServer = (todo, token) => {
	const queryParams = `?auth=${token}`;
	firebaseTodos
		.post('/.json' + queryParams, todo)
		.then(res => console.log(res));
};

export const addTodo = (todo, token) => {
	addTodoToServer(todo, token);
	return {
		type: actionTypes.ADD_TODO,
		todo: todo
	};
};

// EDIT TODO STATUS'

export const completeToggle = (id, todo, token) => {
	// addTodoToServer(todo, token);
	return {
		type: actionTypes.COMPLETE_TOGGLE,
		todoId: id
	};
};
