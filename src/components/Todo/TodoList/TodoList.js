import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import classes from './TodoList.module.css';

const TodoListButtonSet = props => {
	const pleaseSelect = <h2>Please Select A Song</h2>;
	const listItems = props.children ? props.children : pleaseSelect;
	return (
		<Aux>
			<div className={classes.BtnsContainer}>
				<div className={classes.LeftBtns}>
					<img src={require('../../../assets/trash.png')} alt='trash' />
					<img src={require('../../../assets/archive.png')} alt='archive' />
					<img src={require('../../../assets/move-dark.png')} alt='move' />
					<img src={require('../../../assets/check-todo.png')} alt='check' />
				</div>
				<img
					src={require('../../../assets/add.png')}
					alt='trash'
					className={classes.TodoAdd}
				/>
			</div>
			<div className={classes.TodoListContainer}>
				<div className={classes.ColTitles}>
					<p className={classes.TodoTtl}>Todo</p>
					<p className={classes.LocationTtl}>Location</p>
					<p className={classes.DueTtl}>Due</p>
				</div>
				<div className={classes.TodoList}>{listItems}</div>
			</div>
		</Aux>
	);
};

export default TodoListButtonSet;
