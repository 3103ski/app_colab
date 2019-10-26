/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React from 'react';
import { connect } from 'react-redux';

// Components
import TodoContainer from '../../TodoComponents/TodoListContainer/TodoListContainer';
import TodoList from '../../TodoComponents/TodoList/TodoList';

// styles

const TodoTab = props => {
	// const getTodos = todos => {
	// 	const newTodos = [];

	// 	todos.map(todo => {
	// 		return todo.song === props.activeSong ? newTodos.push(todo) : null;
	// 	});

	// 	return newTodos;
	// };
	// const todoArr = props.todos ? getTodos(props.todos) : [];
	console.log(`The todo tab got this for todos: `, props.songTodos);
	return (
		<div style={{ width: `100%` }}>
			<TodoContainer>
				<TodoList size='song' songTodos={props.songTodos}></TodoList>
			</TodoContainer>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		activeSong: state.app.selectedSong,
		todos: state.todo.todos
	};
};

export default connect(
	mapStateToProps,
	null
)(TodoTab);
