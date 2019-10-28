// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Components
import Backdrop from '../UI/Backdrop/Backdrop';
import DatePicker from 'react-date-picker';
import 'react-day-picker/lib/style.css';

// Utility Function
import { updateObject, makeNow } from '../../shared/utility';

// Styling
import classes from './RightPanel.module.css';

class RightPanel extends Component {
	state = {
		date: null,
		loaded: false,
		activeId: null,
		todo: null,
		myDay: false,
		panelOpen: false,
		specialLists: {
			myYesterday: {
				val: false,
				exp: null,
				added: null
			},
			myDay: {
				val: false,
				exp: null,
				added: null
			},
			myTomorrow: {
				val: false,
				exp: null,
				added: null
			}
		}
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.props.todo !== nextProps.todo ||
			this.state.date !== nextState.date
		) {
			return true;
		}
		if (this.state.myDay !== nextState) {
			return true;
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (
			nextProps.todo !== this.props.todo ||
			nextProps.panelOpen !== this.props.panelOpen
		) {
			if (nextProps.todo !== null) {
				let myDay;
				const todo = nextProps.todo ? nextProps.todo : null;
				const activeId = todo !== null ? todo.id : null;
				if (this.state.todo !== null || todo !== null) {
					myDay = todo.specialLists.myDay.val === true ? true : false;
					// console.log(`::: WILL RECEIVE ::: :: FIRST CHK `, myDay);
					this.setState({
						todo: todo,
						activeId: activeId,
						date: null,
						myDay: myDay
						// loaded: true
					});
				}
			}
			// console.log(`::: WILL RECEIVE ::: :: SETSTATE CHK `, this.state);
		}
		if (nextProps.panelOpen !== this.props.panelOpen) {
			let myDay;
			if (this.state.todo !== null) {
				const todo = this.state.todo ? this.state.todo : null;
				myDay = todo.specialLists.myDay.val === true ? true : false;
				// console.log(`::: WILL RECEIVE ::: :: SECOND CHK `, todo);
			}
			this.setState({
				panelOpen: nextProps.panelOpen,
				myDay: myDay
			});
		}
	}

	componentDidMount() {
		// console.log(`:::MOUNTED:::`);
	}

	changeDate = date => {
		let dateObj = {};
		if (date === null) {
			this.setState({ date: new Date() });
			this.props.setDueDate(this.props.todo, dateObj, this.props.token);
		} else {
			const dStr = JSON.stringify(date)
				.split(' ')[0]
				.split('-');
			const m = dStr[1];
			const d = dStr[2].split('T')[0];
			const y = dStr[0].slice(1);
			dateObj = {
				month: m,
				day: d,
				year: y
			};
			this.props.setDueDate(this.props.todo, dateObj, this.props.token);
			this.setState({ date: date });
		}
	};

	specialListsToggle = type => {
		console.log(`SPECIAL_ADD`);
		const today = makeNow('today');
		const tomorrow = makeNow('tomorrow');
		const todayExp = makeNow('todayExp');
		const tomorrowExp = makeNow('tomorrowExp');

		let newTodo = { ...this.state.todo };

		switch (type) {
			case 'myYesterday':
				{
					const val =
						newTodo.specialLists.myYesterday.val === true ? false : true;
					newTodo = updateObject(newTodo, {
						specialLists: {
							myYesterday: {
								val: val,
								exp: tomorrow,
								added: today
							},
							myDay: {
								val: false,
								exp: today,
								added: today
							},
							myTomorrow: {
								val: false,
								exp: today,
								added: today
							}
						}
					});
				}
				break;
			case 'myDay':
				{
					let md = this.state.myDay === true ? false : true;
					this.setState({
						myDay: md
					});
					const val = newTodo.specialLists.myDay.val === true ? false : true;
					newTodo = updateObject(newTodo, {
						specialLists: {
							myYesterday: {
								val: false,
								exp: tomorrow,
								added: today
							},
							myDay: {
								val: val,
								exp: todayExp,
								added: today
							},
							myTomorrow: {
								val: false,
								exp: today,
								added: today
							}
						}
					});
				}
				break;
			case 'myTomorrow':
				{
					const val =
						newTodo.specialLists.myYesterday.val === true ? false : true;
					newTodo = updateObject(newTodo, {
						specialLists: {
							myYesterday: {
								val: false,
								exp: tomorrow,
								added: today
							},
							myDay: {
								val: false,
								exp: today,
								added: today
							},
							myTomorrow: {
								val: val,
								exp: tomorrowExp,
								added: today
							}
						}
					});
				}
				break;
		}
		this.setState({
			todo: newTodo
		});
		this.props.updateTodo(newTodo, this.props.token);
	};

	myYesterday = () => {
		this.specialListsToggle('yesterday');
	};
	myDay = () => {
		this.specialListsToggle('myDay');
	};
	myTomorrow = () => {
		this.specialListsToggle('myTomorrow');
	};

	render() {
		// Initial Panel State

		let todo, activeId, day, month, year, containerClasses, notes, mD;

		if (this.props.todo !== null) {
			if (this.state.loaded === false) {
				[todo, activeId, notes, mD] = [
					this.props.todo,
					this.props.todo.id,
					this.props.todo.notes,
					this.props.todo.specialLists.myDay.val
				];
				// console.log(`::: INITIAL RENDER :::`, this.state.todo);
				this.setState({
					todo: todo,
					activeId: activeId,
					notes: notes,
					loaded: true,
					myDay: mD
				});
			}
		}

		// console.log(`:::LOAD PANEL STATE::: `, this.state);
		// console.log(`:::LOAD PANEL PROPS::: `, this.props);

		[day, month, year, todo] = [null, null, null, this.state.todo];

		if (todo !== null) {
			if (todo.dueDate !== undefined && todo.dueDate !== null) {
				let date = { ...todo.dueDate };
				[day, month, year] = [date.day, date.month, date.year];
			}
			if (todo.dueDate === undefined || todo.dueDate === null) {
				const d = new Date();
				[day, month, year] = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
			}
		}

		// DYNAMIC STYLING
		containerClasses = this.state.panelOpen
			? [classes.RightPanelContainer, classes.PanelOpen]
			: [classes.RightPanelContainer, classes.PanelClosed];

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
						<div>
							<DatePicker
								yearPlaceholder={year}
								monthPlaceholder={month}
								dayPlaceholder={day}
								onChange={this.changeDate}
								value={this.state.date}
							/>
						</div>

						<div onClick={this.myDay} className={classes.EditButton}>
							<img src={require('../../assets/myDay-dark.png')} />
							<p>
								{this.state.myDay === true ? `remove from` : `add to`} My Day
							</p>
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
		token: state.auth.token,
		todo: state.app.currTodo
	};
};

const mapDispatchToProps = dispatch => {
	return {
		closeTodo: () => dispatch(actions.closeTodo()),
		setDueDate: (todo, date, token) =>
			dispatch(actions.setTodoDueDate(todo, date, token)),
		updateTodo: (todo, token) => dispatch(actions.updateTodo(todo, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RightPanel);
