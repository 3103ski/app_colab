// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Utility Functions
import { updateObject, checkValidity, randomId } from '../../../shared/utility';

// Components
import Input from '../../UI/Input/Input';

// Styles
import classes from './AddSong.module.css';

class AddSong extends Component {
	state = {
		userId: this.props.userId ? this.props.userId : null,
		entryForm: {
			songName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Song Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			songKey: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Song Key'
				},
				value: '',
				validation: {
					required: false
				},
				valid: false,
				touched: false
			},
			bpm: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Song Tempo'
				},
				value: '',
				validation: {
					required: false
				},
				valid: false,
				touched: false
			},
			length: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Song Length'
				},
				value: '',
				validation: {
					required: false
				},
				valid: false,
				touched: false
			},
			reference: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Style Reference'
				},
				value: '',
				validation: {
					required: false
				},
				valid: false,
				touched: false
			},
			notes: {
				elementType: 'input',
				elementConfig: {
					type: 'textarea',
					placeholder: 'Notes'
				},
				value: '',
				validation: {
					required: false
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
		const form = this.state.entryForm;
		const song = {
			userId: this.props.userId,
			songId: randomId(),
			artist: this.props.currArtist,
			projectName: this.props.activeProject,
			name: form.songName.value,
			songKey: form.songKey.value ? form.songKey.value : null,
			bpm: form.bpm.value ? form.bpm.value : null,
			length: form.length.value ? form.length.value : null,
			reference: form.reference.value ? form.reference.value : null,
			notes: form.notes.value ? form.notes.value : null,
			status: 'New Song',
			users: [this.props.userId],
			engineerPrivs: [this.props.userId],
			comments: null,
			todos: null
		};
		this.props.addSong(song, this.props.token);
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
				<h1>Add Song To Project</h1>
				<form onSubmit={this.submitHandler}>
					{form}
					<button>Add Song</button>
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
		currArtist: state.app.currArtist
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addSong: (song, token) => dispatch(actions.addSong(song, token)),
		toggleModal: () => dispatch(actions.closeModal())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddSong);
