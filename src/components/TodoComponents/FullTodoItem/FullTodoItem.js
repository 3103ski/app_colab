// React Imports

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Style
import classes from './FullTodoItem.module.css';

class TodoItem extends Component {
	state = {
		printDate: '',
		dateLoaded: false,
		completed: this.props.complete,
		statusLoaded: false,
		currTodo: this.props.currTodo
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.props.todo !== nextProps.todo ||
			this.state.printDate !== nextState.printDate ||
			this.state.completed !== nextProps.compelte
		) {
			return true;
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (this.props.todo !== nextProps.todo) {
			this.setState({ dateLoaded: false });
		}
	}

	render() {
		// console.log(`This state here says what`, this.props);
		let [todo, dueDate, todoId] = [
			this.props.todo,
			this.props.todo.dueDate,
			this.props.todo.id
		];

		let ListItemClasses = [classes.TodoItem];

		if (this.props.currTodo !== '' && this.props.currTodo !== null) {
			let curr = this.props.currTodo;
			if (curr.id === todoId) {
				// console.log(`check 1?`, curr);
				ListItemClasses = [classes.TodoItem, classes.Selected];
			}
		}

		if (dueDate !== undefined && this.state.dateLoaded === false) {
			let pD;
			if (dueDate.month !== undefined) {
				pD = `${dueDate.month} / ${dueDate.day} / ${dueDate.year} `;
			} else {
				pD = ``;
			}
			this.setState({
				printDate: pD,
				dateLoaded: true
			});
		}

		const completeToggle = () => {
			const s = this.state.completed === true ? false : true;
			this.setState({
				completed: s
			});
			this.props.completeToggle(todoId, this.props.todo, this.props.token);
		};

		return (
			<div
				style={{
					display: 'flex',
					alignItems: `center`
				}}>
				<img
					src={require(`../../../assets/${
						this.state.completed === true ? 'todo-done' : `todo-undone`
					}.png`)}
					alt='complete'
					className={classes.Completed}
					onClick={completeToggle}
				/>
				<div
					className={ListItemClasses.join(' ')}
					onClick={() => this.props.setTodo(todoId, todo)}>
					<div className={classes.TodoName}>
						<p>{this.props.title}</p>
					</div>
					<div className={classes.TodoLocation}>
						<p>
							{this.props.artist}{' '}
							{this.props.project ? ` > ${this.props.project}` : null}{' '}
							{this.props.song ? ` > ${this.props.song}` : null}
						</p>
					</div>
					<div className={classes.TodoDate}>
						<p>{this.state.printDate}</p>
					</div>
					<div className={classes.TodoIcons}>
						<img src={require('../../../assets/myDay.png')} alt='myDay' />
						<img src={require('../../../assets/move-light.png')} alt='move' />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currTodo: state.app.currTodo
	};
};

const mapDispatchToState = dispatch => {
	return {
		setTodo: (id, todo) => dispatch(actions.selectTodo(id, todo)),
		completeToggle: (id, todo, token) =>
			dispatch(actions.completeToggle(id, todo, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(TodoItem);
