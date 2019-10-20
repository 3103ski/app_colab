// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import TodoListContainer from '../../components/TodoComponents/TodoListContainer/TodoListContainer';
import TodoList from '../../components/TodoComponents/TodoList/TodoList';
// import RightSlider from '../../components/RightPanel/RightPanel';

// Styles
import classes from './Todo.module.css';

class GlobalTodoPage extends Component {
	state = {};
	render() {
		const allTodos = this.props.todos
			? [...this.props.todos, ...this.props.songTodos]
			: [];

		return (
			<div className={classes.Container}>
				<div className={classes.FirstContainer}>
					<input className={classes.SearchInput} placeholder='Search...' />
					<div className={classes.TopRightIcons}>
						<img src={require('../../assets/check-todo.png')} alt='check' />
						<img src={require('../../assets/trash-light.png')} alt='trash' />
						<img
							src={require('../../assets/archive-light.png')}
							alt='archive'
						/>
					</div>
				</div>
				<div className={classes.FilterContainer}>
					<div className={classes.FilterBtn}>
						<h2>ALL {this.props.filters.all}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>INBOX {this.props.filters.inbox}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>MY DAY {this.props.filters.myDay}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>TODAY {this.props.filters.today}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>TOMORROW {this.props.filters.tomorrow}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>NEXT 7 DAYS {this.props.filters.nextSeven}</h2>
					</div>
				</div>
				<TodoListContainer className={classes.TodoListContainer}>
					<TodoList todoArr={allTodos} size='full' />
				</TodoListContainer>
				{/* <RightSlider></RightSlider> */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.todo.filters,
		todos: state.todo.todos,
		songTodos: state.projects.allSongTodos
	};
};

const mapDispatchToProp = dipatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(GlobalTodoPage);
