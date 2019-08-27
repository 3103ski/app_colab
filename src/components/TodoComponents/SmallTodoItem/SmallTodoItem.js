// React Imports
import React from 'react';

// Styles
import classes from './SmallTodoItem.module.css';

const TodoItem = props => {
	return (
		<div className={classes.TodoItem}>
			<div className={classes.TodoDot}></div>
			<div className={classes.TodoInfo}>
				<h4>{props.title}</h4>
				<p>
					{props.artist} {props.project ? ` > ${props.project}` : null}
					{props.song ? ` > ${props.song}` : null}
				</p>
			</div>
		</div>
	);
};

export default TodoItem;
