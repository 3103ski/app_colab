// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Components
import Backdrop from '../UI/Backdrop/Backdrop';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Utility Function
// import { monthStrToNum } from '../../shared/utility';
// import { updateObject } from '../../shared/utility';

// Styling
import classes from './RightPanel.module.css';

class RightPanel extends Component {
	constructor(props) {
		super(props);
		this.handleDayClick = this.handleDayClick.bind(this);
		this.state = {
			selectedDay: undefined,
			modifiers: null,
			month: null,
			activeId: null,
			loaded: '',
			activeTodo: this.props.activeTodo
		};
	}

	shouldMount = (args, nextProps, nextState) => {
		if (
			args.dueDate !== nextState.dueDate ||
			args.activeTodo !== nextState.activeTodo
		) {
			return true;
		}
		if (args.activeTodo !== nextState.activeTodo) {
			return this.setState({ selectedDay: undefined });
		}
	};

	shouldComponentUpdate(nextProps, nextState) {
		return this.shouldMount(this, nextProps, nextState);
	}

	async handleDayClick(day) {
		console.log(`What does this date look like?`, day);
		await this.setState({ selectedDay: day });
		if (day !== undefined) {
			this.props.setDueDate(this.props.todo, day, this.props.token);
		}
		this.loadDue(day);
		this.setState({
			modifiers: null,
			month: null
		});
	}

	loadDue = clickDate => {
		// console.log(`State ar firing of lodDue: `, this.state);
		let todo = this.props.todo;
		let dateArr, dayArr, newMonth, newDay, newYear, dueDate, modifiers, month;
		modifiers = {};
		month = null;

		if (todo !== null && todo.dueDate !== null && todo.dueDate !== undefined) {
			dueDate = clickDate ? clickDate : todo.dueDate;
			if (typeof dueDate === 'object') {
				console.log(
					`What does this date inside the clickDate function look like?`,
					dueDate.getTime()
				);
				dueDate = JSON.stringify(dueDate);
			}
			if (dueDate.includes('Z')) {
				dateArr = dueDate.split('-');
				dayArr = dateArr[2].split('T');
				newMonth = parseInt(dateArr[1]);
				newDay = parseInt(dayArr[0]);
				newYear = parseInt(dateArr[0]);
			}
			modifiers = {
				highlighted: new Date(newYear, newMonth - 1, newDay)
			};
			month = new Date(newYear, newMonth - 1);
			if (this.state.activeId !== todo.todoId) {
				this.setState({
					modifiers: modifiers,
					month: month,
					loaded: todo.dueDate,
					selectedDay: undefined,
					activeId: todo.todoId
				});
				console.log(`does this state look right?`, this.state);
			}
		}

		if (
			(todo !== null &&
				this.state.loaded !== todo.dueDate &&
				todo.dueDate === undefined) ||
			null
		) {
			this.setState({
				modifiers: null,
				month: null,
				loaded: undefined,
				selectedDay: undefined,
				activeId: todo.activeId
			});
		}
	};

	render() {
		let containerClasses, modifiers, month, todo, notes;

		const selectedDateStyle = `.DayPicker-Day--highlighted {
			background-color: #2d9cdb;
			color: white;
		  }`;

		containerClasses = this.props.panelOpen
			? [classes.RightPanelContainer, classes.PanelOpen]
			: [classes.RightPanelContainer, classes.PanelClosed];
		if (this.props.panelOpen) {
			modifiers = this.state.modifiers ? this.state.modifiers : {};
			month = this.state.month ? this.state.month : null;
			todo = this.state.activeId ? this.props.todo : null;
			notes = this.state.activeId ? todo.notes : null;
		}

		this.loadDue();

		return (
			<div>
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
						<style>{selectedDateStyle}</style>
						<DayPicker
							onDayClick={this.handleDayClick}
							selectedDays={this.state.selectedDay}
							month={month}
							modifiers={modifiers}
						/>
						<div onClick={this.myDay} className={classes.EditButton}>
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
						<p>{notes}</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		panelOpen: state.app.rightPanel,
		todos: state.todo.todos,
		token: state.auth.token,
		activeTodo: state.app.currTodo
	};
};

const mapDispatchToProps = dispatch => {
	return {
		closeTodo: () => dispatch(actions.closeTodo()),
		setDueDate: (todo, date, token) =>
			dispatch(actions.setTodoDueDate(todo, date, token)),
		toggleMyDay: (todo, token) => dispatch(actions.toggleMyDay(todo, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RightPanel);
