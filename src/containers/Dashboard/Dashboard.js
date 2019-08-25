import React, { Component } from 'react';

import { connect } from 'react-redux';

import TodoItem from '../../components/Todo/DashTodo/DashTodoItem';

import classes from './Dashboard.module.css';

class Dashboard extends Component {
	state = {};
	render() {
		console.log(this.props.todos);

		const recentTodos = this.props.todos.map(todo => {
			return (
				<TodoItem
					key={todo.location.song}
					title={todo.title}
					artist={todo.location.artist}
					song={todo.location.song}></TodoItem>
			);
		});

		return (
			<div className={classes.DashContainer}>
				<div className={classes.TopDash}>
					<div className={classes.RecentTodo}>
						<h4 className={classes.TodoTitle}>Recently Added Todos</h4>
						<div className={classes.TodoList}>{recentTodos}</div>
					</div>
					{/* This is files break */}
					<div className={classes.RecentFiles}>
						{/* files template */}
						<h4 className={classes.FileTitle}>Recently Added Files</h4>
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
					</div>
					{/* This is comments break */}
					<div className={classes.RecentComments}>
						{/* Comments template */}
						<h4 className={classes.CommentTitle}>Recent Comments</h4>

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
					</div>
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
