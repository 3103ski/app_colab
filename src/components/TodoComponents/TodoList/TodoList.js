// React Imports
import React from 'react';

// Components
import FullTodoItem from '../TodoItem/TodoItem';
import DashTodoItem from '../DashTodo/DashTodoItem';

const todoList = props => {
	let list;

	switch (props.size) {
		case `small`:
			list = props.todoArr.map(todo => (
				<DashTodoItem
					key={todo.location.song}
					title={todo.title}
					artist={todo.location.artist}
					song={todo.location.song}></DashTodoItem>
			));
			return list;
		case `full`:
			list = props.todoArr.map(todo => (
				<FullTodoItem
					key={todo.title}
					completed={todo.completed}
					title={todo.title}
					artist={todo.location.artist}
					project={todo.location.project}
					song={todo.location.song}
					due={todo.dueDate}
				/>
			));
			return list;
		default:
			return list;
	}
	// return list;
};

export default todoList;
