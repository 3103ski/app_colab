/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React from 'react';

// Components
import TodoContainer from '../../TodoComponents/TodoListContainer/TodoListContainer';
import TodoList from '../../TodoComponents/TodoList/TodoList';

// styles

const TodoTab = props => {
	return (
		<div style={{ width: `100%` }}>
			<TodoContainer>
				<TodoList size='full' todoArr={props.songTodos}></TodoList>
			</TodoContainer>
		</div>
	);
};

export default TodoTab;
