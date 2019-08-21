import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem = props => {
	let todoStatus;
	if (props.completed) {
		todoStatus = `todo-done`;
	}
	if (!props.completed) {
		todoStatus = `todo-undone`;
	}
	return (
		<div className={classes.TodoItem}>
			<div className={classes.TodoName}>
				<img
					src={require(`../../../assets/${todoStatus}.png`)}
					alt="complete"
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
				<img src={require('../../../assets/myDay.png')} alt="myDay" />
				<img src={require('../../../assets/move-light.png')} alt="move" />
			</div>
		</div>
	);
};

export default TodoItem;
