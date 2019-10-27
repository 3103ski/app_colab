// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Utility Functions
import { updateObject, checkValidity, randomId } from '../../../shared/utility';

// Components
import Input from '../../UI/Input/Input';

// Styles
import classes from './AddTodo.module.css';

class AddTodo extends Component {
	state = {
		userId: this.props.userId ? this.props.userId : null,
		entryForm: {
			todoTitle: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Todo'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			notes: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Notes'
				},
				value: '',
				validation: {
					required: false
				},
				valid: false,
				touched: false
			}
			// dueDate: {
			// 	elementType: 'input',
			// 	elementConfig: {
			// 		type: 'text',
			// 		placeholder: 'Due Date'
			// 	},
			// 	value: '',
			// 	validation: {
			// 		required: false
			// 	},
			// 	valid: false,
			// 	touched: false
			// }
		}
	};

	inputChangedHandler = (event, entryTitle) => {
		const updatedForm = updateObject(this.state.entryForm, {
			[entryTitle]: updateObject(this.state.entryForm[entryTitle], {
				value: event.target.value,
				touched: true,
				valid: checkValidity(
					event.target.value,
					this.state.entryForm[entryTitle].validation
				)
			})
		});
		this.setState({ entryForm: updatedForm });
	};

	submitHandler = event => {
		event.preventDefault();
		const form = this.state.entryForm;
		const todo = {
			userId: this.props.userId,
			song: this.props.currSong ? this.props.currSong : null,
			artist: this.props.currArtist ? this.props.currArtist : null,
			projectName: this.props.activeProject ? this.props.activeProject : null,
			title: form.todoTitle.value,
			notes: form.notes.value ? form.notes.value : null,
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
			},
			users: [this.props.userId],
			engineerPrivs: [this.props.userId],
			complete: false,
			todoId: randomId(),
			myDay: '',
			myTomorrow: '',
			myYesterday: '',
			archived: false
		};
		this.props.addTodo(todo, this.props.token);
		this.props.toggleModal();
	};

	render() {
		const formElArr = [];
		for (let key in this.state.entryForm) {
			formElArr.push({
				id: key,
				elementConfig: this.state.entryForm[key]
			});
		}

		let form = formElArr.map(config => (
			<Input
				shouldVal={config.elementConfig.validation}
				invalid={config.elementConfig.valid}
				key={config.id}
				elementType={config.elementConfig.elementType}
				elementConfig={config.elementConfig.elementConfig}
				value={config.elementConfig.value}
				changed={event => {
					this.inputChangedHandler(event, config.id);
				}}
				touched={config.elementConfig.touched}
			/>
		));
		return (
			<div className={classes.FormContainer}>
				<h1>Add Todo</h1>
				<form onSubmit={this.submitHandler}>
					{form}
					<button>Add Todo</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userId: state.auth.userId,
		token: state.auth.token,
		activeProject: state.app.activeProject,
		activeSong: state.app.activeSong,
		currArtist: state.app.currArtist,
		currSong: state.app.selectedSong
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addTodo: (todo, token) => dispatch(actions.addTodo(todo, token)),
		toggleModal: () => dispatch(actions.closeModal())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo);
