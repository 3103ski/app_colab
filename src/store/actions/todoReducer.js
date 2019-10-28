import * as actionTypes from './actionTypes';

// Import
import firebaseTodos from '../../components/FirebaseInstances/firebaseTodos';
import { db } from '../../firebase';
import { updateObject } from '../../shared/utility';
import firebase from 'firebase';

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

		// FIRESTORE
		let todoArr = [];
		db.collection(`todos`)
			.get()
			.then(qS => {
				qS.forEach(doc => {
					let todo = {
						id: doc.id,
						...doc.data()
					};
					todoArr.push(todo);
				});
				dispatch(fetchTodosSuccess(todoArr));
			});

		// FIREBASE RTDB
		// const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
		// firebaseTodos
		// 	.get('.json' + queryParams)
		// 	.then(res => {
		// 		const fetchedTodos = [];
		// 		for (let key in res.data) {
		// 			fetchedTodos.push({
		// 				...res.data[key],
		// 				id: key
		// 			});
		// 		}
		// 		let allTodos = [...fetchedTodos, ...todoArr];
		// 		// console.log(`we need this`, allTodos);
		// 		// dispatch(fetchTodosSuccess(fetchedTodos));
		// 	})
		// 	.catch(error => {
		// 		dispatch(fetchTodosFail(error));
		// 	});
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
	// ADDS TO FIRESTORE
	db.collection('todos').add(todo);
	// fetchTodos();

	// ADDS TO RTDB
	// const queryParams = `?auth=${token}`;
	// firebaseTodos.post('/.json' + queryParams, todo).then(res => res);
};

const updateServerTodo = (todo, token) => {
	// UPDATES RTDB
	const queryParams = `?auth=${token}`;
	if (todo.id !== undefined) {
		firebaseTodos.put(`/${todo.id}/.json` + queryParams, todo).then(res => res);
	}

	// UPDATES FIRESTORE
	// db.collection('todos').add(todo);
};

// EDIT TODO STATUS'

export const completeToggle = (id, todo, token) => {
	db.collection('todos')
		.doc(todo.id)
		.update({ complete: todo.complete });
	// dispatch(fetchTodos());
	// updateServerTodo(newTodo, token);
	return {
		type: actionTypes.COMPLETE_TOGGLE,
		todoId: id
	};
};

export const setTodoDueDate = (todo, date, token) => {
	let newTodo = updateObject(todo, {
		dueDate: date
	});
	db.collection('todos')
		.doc(todo.id)
		.set(todo);
	// updateServerTodo(newTodo, token);
	return {
		type: actionTypes.SET_TODO_DUE_DATE,
		todo: newTodo
	};
};

export const updateTodo = (todo, token) => {
	console.log(`myDay or the highway`, todo);
	// updateServerTodo(todo, token);
	// this is in the branch -- not master
	db.collection('todos')
		.doc(todo.id)
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
