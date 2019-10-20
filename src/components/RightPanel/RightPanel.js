// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Components
import Backdrop from '../UI/Backdrop/Backdrop';

// Styling
import classes from './RightPanel.module.css';

class RightPanel extends Component {
	state = {};

	render() {
		let containerClasses = this.props.panelOpen
			? [classes.RightPanelContainer, classes.PanelOpen]
			: [classes.RightPanelContainer, classes.PanelClosed];

		let currTodo;
		this.props.todos.map(todo => {
			if (todo.todoId === this.props.todo) {
				currTodo = todo;
			}
			return currTodo;
		});

		return (
			<div
				style={
					{
						// position: 'absolute',
						// width: '100vw',
						// height: '100vh',
						// overflow: 'hidden'
					}
				}>
				<Backdrop
					clicked={this.props.closeTodo}
					color='clear'
					show={this.props.panelOpen}
				/>

				<div className={containerClasses.join(' ')}>
					<div className={classes.SubTasks}></div>
					<div className={classes.EditButtons}>
						<div className={classes.EditButton}>
							<img src={require('../../assets/calendar.png')} />
							<p>Add Due Date</p>
						</div>
						<div className={classes.EditButton}>
							<img src={require('../../assets/myDay-dark.png')} />
							<p>Add To My Day</p>
						</div>
						<div className={classes.EditButton}>
							<img src={require('../../assets/reminder.png')} />
							<p>Create Reminder</p>
						</div>
						<div className={classes.EditButton}>
							<img src={require('../../assets/repeat.png')} />
							<p>Repeat</p>
						</div>
					</div>
					<div className={classes.Notes}>
						<p>{currTodo !== undefined ? currTodo.notes : null}</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todo: state.app.activeTodo,
		panelOpen: state.app.rightPanel,
		todos: state.todo.todos
	};
};

const mapDispatchToProps = dispatch => {
	return {
		closeTodo: () => dispatch(actions.closeTodo())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RightPanel);
