import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './NavLink.module.css';
import * as actionTypes from '../../../../store/actions';

const navLink = props => {
	let content, clickLink;
	const linkProps = () => {
		switch (props.title) {
			case 'TODO':
				content = (
					<h2>
						{props.filters.all} • {props.filters.inbox} • {props.filters.today}{' '}
						• {props.filters.myDay} • {props.filters.tomorrow} •{' '}
						{props.filters.nextSeven}
					</h2>
				);
				clickLink = props.closeCenter;
				return { content, clickLink };
			case 'MESSAGES':
				content = <h2>9</h2>;
				clickLink = props.openCenter;
				return { content, clickLink };
			case 'LIVE STREAM':
				content = <h2>8</h2>;
				clickLink = props.openCenter;
				return { content, clickLink };
			case 'ALL FILES':
				content = <h2>78</h2>;
				clickLink = props.closeCenter;
				return { content, clickLink };
			case 'CONTACTS':
				content = <h2>29</h2>;
				clickLink = props.closeCenter;
				return { content, clickLink };
			default:
				return { content, clickLink };
		}
	};
	linkProps();
	return (
		<NavLink
			className={classes.NavItem}
			to={`/${props.link}`}
			onClick={clickLink}
			exact>
			<div className={classes.LeftItems}>
				<img
					alt={props.icon}
					src={require(`../../../../assets/${props.icon}.png`)}></img>
				<h2>{props.title}</h2>
			</div>
			<div className={classes.RightItems}>{content}</div>
		</NavLink>
	);
};

const mapStateToProps = state => {
	return {
		filters: state.todo.filters,
		todos: state.todo.todos,
		centerPanel: state.app.centerPanel
	};
};

const mapDispatchToProp = dispatch => {
	return {
		openCenter: () => dispatch({ type: actionTypes.OPEN_CENTER }),
		closeCenter: () => dispatch({ type: actionTypes.CLOSE_CENTER })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(navLink);
