// React Related Imports
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux Related Imports
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Utility Functions
import { updateObject, checkValidity } from '../../shared/utility';

// Components
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

// Styles
import classes from './Auth.module.css';

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email Address'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		isSignup: false
	};

	componentDidMount() {
		this.props.resetCenterNav();
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = updateObject(this.state.controls, {
			[controlName]: updateObject(this.state.controls[controlName], {
				value: event.target.value,
				touched: true,
				valid: checkValidity(
					event.target.value,
					this.state.controls[controlName].validation
				)
			})
		});
		this.setState({ controls: updatedControls });
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.onAuth(
			this.state.controls.email.value,
			this.state.controls.password.value,
			this.state.isSignup
		);
	};

	switchAuthModeHandler = () => {
		this.setState(prevState => {
			return {
				isSignup: !prevState.isSignup
			};
		});
	};

	render() {
		const formElArr = [];
		for (let key in this.state.controls) {
			formElArr.push({
				id: key,
				elementConfig: this.state.controls[key]
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

		if (this.props.loading) {
			form = <Spinner></Spinner>;
		}

		let errorMessage = this.props.error ? this.props.error.message : null;
		if (errorMessage === `INVALID_EMAIL`) {
			errorMessage = <p>Please check the email address</p>;
		}
		if (errorMessage === `EMAIL_EXISTS`) {
			errorMessage = <p>An account with this email address already exists</p>;
		}
		let autoRedirect = null;
		if (this.props.isAuth) {
			autoRedirect = <Redirect to='/dashboard'></Redirect>;
		}

		return (
			<div className={classes.Auth}>
				<form onSubmit={this.submitHandler}>
					{autoRedirect}
					{errorMessage}
					{form}
					<Button btnType='Success'>
						{this.state.isSignup ? `SIGNUP` : `LOGIN`}
					</Button>
				</form>
				<Button clicked={this.switchAuthModeHandler} btnType='Danger'>
					SWITCH TO {this.state.isSignup ? 'LOGIN' : 'SIGNUP'}
				</Button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuth: state.auth.token !== null,
		authRedirectPath: state.auth.authRedirectPath
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignup) =>
			dispatch(actions.auth(email, password, isSignup)),
		onSetRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
		resetCenterNav: () => dispatch(actions.linkNoCenter())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth);
