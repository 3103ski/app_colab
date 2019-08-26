// React Components
import React from 'react';

// HOCs
import Aux from '../../../hoc/Aux/Aux';

// Style
import classes from './TodoListContainer.module.css';

const TodoListButtonSet = props => {
	// Fallback when no song is selected
	const pleaseSelect = <h2>Please Select A Song</h2>;

	// Determines if there are todos to list and renders please select if there aren't
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
