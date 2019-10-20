// React Imports
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Style
import classes from './FullTodoItem.module.css';

const TodoItem = props => {
	// Determines if todo item should be checked or not
	let todoStatus = props.complete ? `todo-done` : `todo-undone`;

	let todoId = props.id;

	const completeToggle = () => {
		props.completeToggle(todoId, props.todo, props.token);
	};

	return (
		<div className={classes.TodoItem} onClick={() => props.setTodo(todoId)}>
			<img
				src={require(`../../../assets/${todoStatus}.png`)}
				alt='complete'
				className={classes.Completed}
				onClick={completeToggle}
			/>
			<div className={classes.TodoName}>
				<p>{props.title}</p>
			</div>
			<div className={classes.TodoLocation}>
				<p>
					{props.artist} {props.project ? ` > ${props.project}` : null}{' '}
					{props.song ? ` > ${props.song}` : null}
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

const mapDispatchToState = dispatch => {
	return {
		setTodo: id => dispatch(actions.selectTodo(id)),
		completeToggle: (id, todo, token) =>
			dispatch(actions.completeToggle(id, todo, token))
	};
};

export default connect(
	null,
	mapDispatchToState
)(TodoItem);
