// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Utility Functions
import { updateObject, checkValidity } from '../../../shared/utility';

// Components
import Input from '../../UI/Input/Input';

// Styles
import classes from './AddProject.module.css';

class AddProject extends Component {
	state = {
		userId: this.props.userId ? this.props.userId : null,
		songs: [],
		usersWithAccess: null,
		entryForm: {
			artist: {
				'data-role': 'materialinput',
				'data-label': 'User email',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Project Artist'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			projectName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Project Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
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
		const project = {
			userId: this.props.userId,
			artist: this.state.entryForm.artist.value,
			projectName: this.state.entryForm.projectName.value,
			engineer: [this.props.userId],
			users: [this.props.userId],
			usersWithAccess: this.state.usersWithAccess
		};
		this.props.addProject(project, this.props.token);
		this.props.closeModal();
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
				<h1>Add Project</h1>
				<form onSubmit={this.submitHandler}>
					{form}
					<button>Add Project</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userId: state.auth.userId,
		token: state.auth.token
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addProject: (project, token) =>
			dispatch(actions.addProject(project, token)),
		closeModal: () => dispatch(actions.closeModal())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddProject);
