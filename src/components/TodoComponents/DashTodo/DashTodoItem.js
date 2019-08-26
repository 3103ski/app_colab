// React Imports
import React from 'react';

// Styles
import classes from './DashTodoItem.module.css';

const TodoItem = props => {
	return (
		<div className={classes.TodoItem}>
			<div className={classes.TodoDot}></div>
			<div className={classes.TodoInfo}>
				<h4>{props.title}</h4>
				<p>
					{props.artist} - {props.song}
				</p>
			</div>
		</div>
	);
};

export default TodoItem;
