/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React from 'react';

// Components
import FullTodoItem from '../FullTodoItem/FullTodoItem';
import DashTodoItem from '../SmallTodoItem/SmallTodoItem';

const todoList = props => {
	let list;

	switch (props.size) {
		case `small`:
			list = props.todoArr ? (
				props.todoArr.map(todo => (
					<DashTodoItem
						key={todo.location.song}
						title={todo.title}
						artist={todo.location.artist}
						song={todo.location.song}
						project={todo.location.project}></DashTodoItem>
				))
			) : (
				<h2>No Recent Todos</h2>
			);
			return list;
		case `full`:
			list = props.todoArr ? (
				props.todoArr.map(todo => (
					<FullTodoItem
						key={todo.title}
						completed={todo.completed}
						title={todo.title}
						artist={todo.location.artist}
						project={todo.location.project}
						song={todo.location.song}
						due={todo.dueDate}
					/>
				))
			) : (
				<h2>You don't have any todos</h2>
			);
			return list;
		default:
			return list;
	}
};

export default todoList;
