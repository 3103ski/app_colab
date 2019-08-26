// React Imports
import React from 'react';

// Style
import classes from './TodoItem.module.css';

const TodoItem = props => {
	// Determines if todo item should be checked or not
	let todoStatus = props.completed ? `todo-done` : `todo-undone`;

	return (
		<div className={classes.TodoItem}>
			<div className={classes.TodoName}>
				<img
					src={require(`../../../assets/${todoStatus}.png`)}
					alt='complete'
					className={classes.Completed}
				/>
				<p>{props.title}</p>
			</div>
			<div className={classes.TodoLocation}>
				<p>
					{props.artist} - {props.project} > {props.song}
				</p>
			</div>
			<div className={classes.TodoDate}>
				<p>{props.due}</p>
			</div>
			<div className={classes.TodoIcons}>
				<img src={require('../../../assets/myDay.png')} alt='myDay' />
				<img src={require('../../../assets/move-light.png')} alt='move' />
			</div>
		</div>
	);
};

export default TodoItem;
