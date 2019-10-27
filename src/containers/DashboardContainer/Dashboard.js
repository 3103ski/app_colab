// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Helper functions
// import genId from '../../components/HelperFunctions/uniqueID';

// Components
import DashList from '../../components/DashComponents/DashListContainer/DashListContainer';
import TodoList from '../../components/TodoComponents/TodoList/TodoList';

// Styles
import classes from './Dashboard.module.css';

class Dashboard extends Component {
	render() {
		const todos = [...this.props.todos];
		return (
			<div className={classes.DashContainer}>
				<div className={classes.TopDash}>
					<DashList title='Recently Added Todos'>
						<TodoList todoArr={this.props.todos} size='small'></TodoList>
					</DashList>

					<DashList title='Recent Files'>
						<div className={classes.FileItem}>
							<img
								alt='file '
								src={require('../../assets/audiofileicon.png')}
							/>
							<div className={classes.FileInfo}>
								<h4>rough mix.mp3</h4>
								<p>Jimmy Jones - Do It Again • Today</p>
							</div>
						</div>
						<div className={classes.FileItem}>
							<img
								alt='file '
								src={require('../../assets/audiofileicon.png')}
							/>
							<div className={classes.FileInfo}>
								<h4>guitar part 2.wav</h4>
								<p>Jimmy Jones - Do It Again • yesterday</p>
							</div>
						</div>
						<div className={classes.FileItem}>
							<img alt='file ' src={require('../../assets/zipfileicon.png')} />
							<div className={classes.FileInfo}>
								<h4>Do It Again Stems.zip</h4>
								<p>Jimmy Jones - Do It Again • 8/11/19</p>
							</div>
						</div>
						<div className={classes.FileItem}>
							<img
								alt='file '
								src={require('../../assets/audiofileicon.png')}
							/>
							<div className={classes.FileInfo}>
								<h4>Album Art.jpeg</h4>
								<p>Jimmy Jones - Do It Again • 8/8/19</p>
							</div>
						</div>
					</DashList>

					<DashList title='Recent Comments'>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>Please bring up the guitar here</h4>
								<p>Jimmy Jones - Do It Again • Today</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>
									This is amazing. You did exactly what I needed to the track
								</h4>
								<p>Jimmy Jones - Do It Again • 8/15/19</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>
									These vocals are too loud. Can you use a diff compressor
								</h4>
								<p>Jimmy Jones - Do It Again • 8/13/19</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>This intro is sounding awesome</h4>
								<p>Jimmy Jones - Do It Again • 8/10/19</p>
							</div>
						</div>
						<div className={classes.CommentItem}>
							<img alt='comment ' src={require('../../assets/msgbubble.png')} />
							<div className={classes.CommentInfo}>
								<h4>Shakers are too loud here</h4>
								<p>Jimmy Jones - Do It Again • 8/10/19</p>
							</div>
						</div>
					</DashList>
				</div>
				<div className={classes.BottomDash}>
					<h1>TRELLO-LIKE LISTS GO HERE</h1>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.user.userName,
		firstName: state.user.firstName,
		lastName: state.user.lastName,
		password: state.user.password,
		todos: state.todo.todos
	};
};

const mapDispatchToProp = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(Dashboard);
