import * as actionTypes from './actionTypes';

// Import
import firebaseTodos from '../../components/FirebaseInstances/firebaseTodos';
import { updateObject } from '../../shared/utility';

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

// TODOS

export const addTodo = (todo, token) => {
	addTodoToServer(todo, token);
	return {
		type: actionTypes.ADD_TODO,
		todo: todo
	};
};

const addTodoToServer = (todo, token) => {
	const queryParams = `?auth=${token}`;
	firebaseTodos.post('/.json' + queryParams, todo).then(res => res);
};

const updateServerTodo = (todo, token) => {
	const queryParams = `?auth=${token}`;
	if (todo.id !== undefined) {
		firebaseTodos.put(`/${todo.id}/.json` + queryParams, todo).then(res => res);
	}
};

// EDIT TODO STATUS'

export const completeToggle = (id, todo, token) => {
	let newTodo;
	if (todo.complete === false) {
		newTodo = updateObject(todo, {
			complete: true
		});
	} else {
		newTodo = updateObject(todo, {
			complete: false
		});
	}
	updateServerTodo(newTodo, token);
	return {
		type: actionTypes.COMPLETE_TOGGLE,
		todoId: id
	};
};

export const setTodoDueDate = (todo, date, token) => {
	// let newDate = date;
	// if (typeof newDate === 'object') {
	// 	newDate = JSON.stringify(newDate);
	// }
	// let length = newDate.length - 1;
	// newDate = newDate.substring(1, length);
	let newTodo = updateObject(todo, {
		dueDate: date
	});

	updateServerTodo(newTodo, token);
	return {
		type: actionTypes.SET_TODO_DUE_DATE,
		todo: newTodo,
		todoId: todo.todoId
	};
};

export const toggleMyDay = (todo, token) => {
	let newVal = todo.myDay === false ? true : false;
	let newTodo = updateObject(todo, {
		myDay: newVal
	});
	updateServerTodo(newTodo, token);
	return {
		type: actionTypes.TOGGLE_MY_DAY,
		todo: newTodo,
		todoId: todo.todoId
	};
};
