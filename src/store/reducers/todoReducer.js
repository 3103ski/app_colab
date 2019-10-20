import * as actionTypes from '../actions/actionTypes';

// Utility Functions Import

import { updateObject } from '../../shared/utility';

const intitialState = {
	filters: {
		all: 18,
		inbox: 1,
		myDay: 0,
		today: 0,
		tomorrow: 4,
		nextSeven: 13
	},
	todos: [],
	loading: false
};

const fetchTodosStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const fetchTodosSuccess = (state, action) => {
	return updateObject(state, {
		loading: false,
		todos: [...action.todos]
	});
};

const fetchTodosFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		err: action.err
	});
};

// ADD TODOS

const addTodo = (state, action) => {
	return updateObject(state, {
		todos: [...state.todos, action.todo]
	});
};

const completeToggle = (state, action) => {
	let currTodos = [...state.todos];
	const newTodos = currTodos.map(todo => {
		if (todo.todoId !== action.todoId) {
			return todo;
		}
		if (todo.todoId === action.todoId && todo.complete === true) {
			console.log(`[Todo Says, "I'm True!]`);
			return updateObject(todo, {
				complete: false
			});
		}
		if (todo.todoId === action.todoId && todo.complete === false) {
			console.log(`[Todo Says, "I'm False!]`);
			return updateObject(todo, {
				complete: true
			});
		}
	});
	console.log(newTodos);

	return updateObject(state, {
		todos: newTodos
	});
};

// Set active todo when clicking todos

const todoReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.COMPLETE_TOGGLE:
			return completeToggle(state, action);
		case actionTypes.FETCH_TODOS_START:
			return fetchTodosStart(state, action);
		case actionTypes.FETCH_TODOS_SUCCESS:
			return fetchTodosSuccess(state, action);
		case actionTypes.FETCH_TODOS_FAIL:
			return fetchTodosFail(state, action);
		case actionTypes.ADD_TODO:
			return addTodo(state, action);
		default:
			return state;
	}
};

export default todoReducer;
