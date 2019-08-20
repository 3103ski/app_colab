import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './NavLink.module.css';

const navLink = props => {
	let content = null;
	const linkNotifications = () => {
		switch (props.title) {
			case 'TODO':
				content = (
					<h2>
						{props.filters.all} • {props.filters.inbox} • {props.filters.today}{' '}
						• {props.filters.myDay} • {props.filters.tomorrow} •{' '}
						{props.filters.nextSeven}
					</h2>
				);
				return content;
			case 'MESSAGES':
				content = <h2>9</h2>;
				return content;
			case 'LIVE STREAM':
				content = <h2>8</h2>;
				return content;
			case 'ALL FILES':
				content = <h2>78</h2>;
				return content;
			case 'CONTACTS':
				content = <h2>29</h2>;
				return content;
			default:
				return content;
		}
	};
	content = linkNotifications();
	return (
		<NavLink className={classes.NavItem} to={`/${props.link}`} exact>
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
		todos: state.todo.todos
	};
};

const mapDispatchToProp = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(navLink);
