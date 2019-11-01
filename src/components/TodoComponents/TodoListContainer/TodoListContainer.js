// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// HOCs
import Aux from '../../../hoc/Aux/Aux';

// Style
import classes from './TodoListContainer.module.css';

class TodoListContainer extends Component {
	state = {};
	render() {
		// Fallback when no song is selected
		const pleaseSelect = <h2>Please Select A Song</h2>;
		// Determines if there are todos to list and renders please select if there aren't
		const listItems = this.props.children ? this.props.children : pleaseSelect;
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
						onClick={this.props.todoForm}
					/>
				</div>
				{/* <div className={classes.ColTitles}>
					<p className={classes.TodoTtl}>Todo</p>
					<p className={classes.LocationTtl}>Project / Song</p>
					<p className={classes.DueTtl}>Due</p>
				</div> */}
				<div
					className={
						this.props.activeSong === ''
							? classes.TodoListContainer
							: classes.ListContainerTab
					}>
					<div className={classes.TodoList}>{listItems}</div>
				</div>
			</Aux>
		);
	}
}

const mapDispatchToState = dispatch => {
	return {
		todoForm: () => dispatch(actions.todoForm())
	};
};

const mapStateToProps = state => {
	return {
		activeSong: state.app.selectedSong
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(TodoListContainer);
