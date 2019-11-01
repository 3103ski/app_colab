// React Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux Actions
import * as actions from '../../../../store/actions/index';

// Styles
import classes from './NavLink.module.css';

class NLink extends Component {
	state = {
		filtersLoaded: false,
		filters: {
			all: 0,
			myDay: 0,
			today: 0,
			tomorrow: 0,
			nextSeven: 0
		}
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (this.props.todos !== nextProps.todos) {
			return true;
		} else if (this.props.filters !== nextProps.filters) {
			return true;
		}
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.todos !== nextProps.todos) {
			this.setState({
				filtersLoaded: false
			});
			return true;
		}
	}

	render() {
		let content, clickLink;

		if (this.state.filtersLoaded === false) {
			this.setState({
				filtersLoaded: true,
				filters: this.props.filters
			});
		}

		const linkProps = () => {
			switch (this.props.title) {
				case 'TODO':
					content = (
						<h2>
							{this.props.filters.all} • {this.props.filters.today} •{' '}
							{this.props.filters.myDay} • {this.props.filters.tomorrow} •{' '}
							{this.props.filters.nextSeven}
						</h2>
					);
					clickLink = this.props.linkNoCenter;
					return { content, clickLink };
				case 'MESSAGES':
					content = <h2>9</h2>;
					clickLink = this.props.linkWithCenter;
					return { content, clickLink };
				case 'LIVE STREAM':
					content = <h2>8</h2>;
					clickLink = this.props.linkWithCenter;
					return { content, clickLink };
				case 'DASHBOARD':
					clickLink = this.props.linkNoCenter;
					return { clickLink };
				case 'ALL FILES':
					content = <h2>78</h2>;
					clickLink = this.props.linkNoCenter;
					return { content, clickLink };
				case 'CONTACTS':
					content = <h2>29</h2>;
					clickLink = this.props.linkNoCenter;
					return { content, clickLink };
				default:
					return { content, clickLink };
			}
		};
		linkProps();
		return (
			<NavLink
				activeClassName={classes.Active}
				key={this.props.link}
				className={classes.NavItem}
				to={`/${this.props.link}`}
				onClick={clickLink}
				exact>
				<div className={classes.LeftItems}>
					<img
						alt={this.props.icon}
						src={require(`../../../../assets/${this.props.icon}.png`)}></img>
					<h2>{this.props.title}</h2>
				</div>
				<div className={classes.RightItems}>{content}</div>
			</NavLink>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.todo.filters,
		todos: state.todo.todos,
		centerPanel: state.app.centerPanel
	};
};

const mapDispatchToProp = dispatch => {
	return {
		linkWithCenter: () => dispatch(actions.linkWithCenter()),
		linkNoCenter: () => dispatch(actions.linkNoCenter()),
		filterUpdate: todos => dispatch(actions.filtersInit(todos))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(NLink);
