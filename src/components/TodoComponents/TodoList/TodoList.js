/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Components
import FullTodoItem from '../FullTodoItem/FullTodoItem';
import DashTodoItem from '../SmallTodoItem/SmallTodoItem';

class TodoList extends Component {
	state = {
		fetchedTodos: false
	};

	componentDidMount() {
		this.props.fetchTodos(this.props.auth.userId);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.loaded !== this.props.loaded) {
			this.props.fetchTodos(this.props.auth.userId);
		}
	}

	render() {
		let list;
		if (
			this.props.todoArr !== undefined &&
			this.props.songTodos === undefined
		) {
			switch (this.props.size) {
				case `small`:
					list =
						this.props.todoArr.length > 0 ? (
							this.props.todos.map(todo => {
								return (
									<DashTodoItem
										key={todo.todoId}
										id={todo.todoId}
										title={todo.title}
										artist={todo.artist}
										song={todo.song}
										project={todo.project}></DashTodoItem>
								);
							})
						) : (
							<h2>No Recent Todos</h2>
						);
					return list;
				case `full`:
					list =
						this.props.todoArr.length > 0 ? (
							this.props.todos.map(todo => {
								console.log(todo);
								return (
									<FullTodoItem
										todo={todo}
										token={this.props.auth.token}
										key={todo.todoId}
										id={todo.todoId}
										complete={todo.complete}
										title={todo.title}
										artist={todo.artist}
										project={todo.project}
										song={todo.song}
										due={todo.dueDate}
									/>
								);
							})
						) : (
							<h2>You don't have any todos</h2>
						);
					return list;
				default:
					return list;
			}
		}

		if (this.props.songTodos) {
			list =
				this.props.songTodos.length > 0 ? (
					this.props.songTodos.map(todo => {
						return (
							<FullTodoItem
								todo={todo}
								token={this.props.auth.token}
								key={todo.todoId}
								id={todo.todoId}
								complete={todo.complete}
								title={todo.title}
								artist={todo.artist}
								project={todo.project}
								song={todo.song}
								due={todo.dueDate}
							/>
						);
					})
				) : (
					<h2>You don't have any todos</h2>
				);
			return list;
		}
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		todos: state.todo.todos,
		loaded: state.todo.loaded
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchTodos: (token, userId) => dispatch(actions.fetchTodos(token, userId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
