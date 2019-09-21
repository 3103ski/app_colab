// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/appReducer';

// import Aux from '../../../hoc/Aux/Aux';

import Backdrop from '../Backdrop/Backdrop';

// Styles
import classes from './Modal.module.css';

// import AddProject from '../../Forms/AddProject/AddProject';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.show !== this.props.show ||
			nextProps.children !== this.props.children
		);
	}

	render() {
		return (
			<div
				className={classes.ModalContainer}
				style={{ zIndex: this.props.show ? `500` : '-1' }}>
				<Backdrop show={this.props.show} clicked={this.props.closeModal} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translatey(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(actions.closeModal())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Modal);
