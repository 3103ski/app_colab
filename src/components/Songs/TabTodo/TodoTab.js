/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { connect } from 'react-redux';

import TodoItem from '../../Todo/TodoPage/TodoItem';

import TodoList from '../../Todo/TodoList/TodoList';

const TodoTab = props => {
	const currSongTodos = props.songTodos
		? props.songTodos.map(todo => {
				return (
					<TodoItem
						key={todo.title}
						completed={todo.completed}
						title={todo.title}
						artist={todo.location.artist}
						project={todo.location.project}
						song={todo.location.song}
						due={todo.dueDate}
					/>
				);
		  })
		: null;

	return (
		<div>
			<TodoList>{currSongTodos}</TodoList>
		</div>
	);
};

const mapStateToProps = state => {
	return {};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(TodoTab);
