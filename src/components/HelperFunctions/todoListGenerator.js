// Pass array of todo objects and return a list of Todo Items

// React
import React from 'react';

// Components
import TodoItem from '../TodoComponents/TodoItem/TodoItem';

const currentTodos = todoArr =>
	todoArr.map(todo => (
		<TodoItem
			key={todo.title}
			completed={todo.completed}
			title={todo.title}
			artist={todo.location.artist}
			project={todo.location.project}
			song={todo.location.song}
			due={todo.dueDate}
		/>
	));

export default currentTodos;
