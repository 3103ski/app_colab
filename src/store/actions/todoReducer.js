import * as actionTypes from './actionTypes';

// Import
import { db } from '../../firebase';

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

export const fetchTodos = userId => {
	return dispatch => {
		dispatch(fetchTodosStart());
		// FIRESTORE
		let todoArr = [];
		db.collection(`todos`)
			.get()
			.then(qS => {
				qS.forEach(doc => {
					if (userId === doc.data().userId) {
						let todo = {
							...doc.data()
						};
						todoArr.push(todo);
					}
				});
				dispatch(fetchTodosSuccess(todoArr));
			});
	};
};

// ADD FIRESTORE TODO

export const addTodo = (todo, token) => {
	addTodoToServer(todo, token);
	return {
		type: actionTypes.ADD_TODO,
		todo: todo
	};
};

const addTodoToServer = todo => {
	// ADDS TO FIRESTORE
	db.collection('todos')
		.doc(todo.todoId)
		.set(todo);
	fetchTodos();
};

// UPDATE FIRESTORE TODO'

export const updateTodo = todo => {
	db.collection('todos')
		.doc(todo.todoId)
		.set(todo);
	return {
		type: actionTypes.UPDATE_TODO,
		todo: todo
	};
};

export const filtersInit = t => {
	console.log(t);
	return {
		type: actionTypes.TODO_FILTERS_INIT,
		todos: t
	};
};
