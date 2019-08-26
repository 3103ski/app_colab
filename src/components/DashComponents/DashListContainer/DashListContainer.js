// React Imports
import React from 'react';

// Styles
import classes from './DashListContainer.module.css';

const DashListContainer = props => {
	return (
		<div className={classes.Container}>
			<h4 className={classes.Title}>{props.title}</h4>
			<div className={classes.List}>
				{props.children}
				{/* <TodoList todoArr={this.props.todos} size='small'></TodoList> */}
			</div>
		</div>
	);
};

export default DashListContainer;
