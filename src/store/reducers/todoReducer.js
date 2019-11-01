import * as actionTypes from '../actions/actionTypes';

// Utility Functions Import

import { updateObject } from '../../shared/utility';

const intitialState = {
	filters: {
		all: 0,
		myDay: 0,
		today: 0,
		tomorrow: 0,
		nextSeven: 0
	},
	todos: [],
	loading: false,
	loaded: false
};

const filtersInit = (state, action) => {
	const todos = action.todos ? action.todos : null;
	todos.every(todo => {
		return console.log(todo);
	});
	return todos;
};

const fetchTodosStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const setFilters = todos => {
	let all = 0;
	let myDay = 0;
	let today = 0;
	let tomorrow = 0;

	const newTodos = todos.map(todo => {
		all = all + 1;
		let chkTodo = { ...todo };

		if (chkTodo.specialLists.myDay.val === true) {
			myDay = myDay + 1;
		}

		return todo;
	});
	const filters = {
		all: all,
		myDay: myDay,
		today: today,
		tomorrow: tomorrow,
		nextSeven: 0
	};

	return filters;
};

const fetchTodosSuccess = (state, action) => {
	const filters = setFilters(action.todos);
	return updateObject(state, {
		filters: filters,
		loading: false,
		loaded: true,
		todos: action.todos
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
	const nTs = [...state.todos, action.todo];
	const newF = setFilters(nTs);
	return updateObject(state, {
		todos: nTs,
		filters: newF
	});
};

const completeToggle = (state, action) => {
	let currTodos = state.todos;
	const newTodos = currTodos.map(todo => {
		if (todo.todoId !== action.todoId) {
			console.log(todo.todoId, ` ? === ?`, action.todoId);
			return todo;
		}
		if (todo.todoId === action.todoId) {
			console.log(todo.todoId, ` ? === ?`, action.todoId);
			return action.updatedTodo;
		}
	});

	return updateObject(state, {
		todos: newTodos
	});
};

const updateTodo = (state, action) => {
	let currTodos = [...state.todos];

	const newTodos = currTodos.map(todo => {
		if (todo.todoId !== action.todoIdd) {
			return todo;
		}
		if (todo.todoId === action.todoIdd) {
			return action.todo;
		}
	});
	const filters = setFilters(newTodos);

	return updateObject(state, {
		todos: newTodos,
		filters: filters,
		loaded: false
	});
};

// Set active todo when clicking todos

const todoReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_TODO:
			return updateTodo(state, action);
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
		case actionTypes.SET_TODO_DUE_DATE:
			return updateTodo(state, action);
		case actionTypes.TODO_FILTERS_INIT:
			return filtersInit(state, action);
		default:
			return state;
	}
};

export default todoReducer;
