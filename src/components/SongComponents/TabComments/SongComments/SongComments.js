// React Imports
import React from 'react';

// Components
import Comment from './Comment/Comment';

// Styles
import classes from './SongComments.module.css';

const Comments = props => {
	const comments = props.comments.map(comment => {
		console.log(`This is the comment`, comment);
		return (
			<Comment
				comment={comment.comment}
				responses={comment.responses}
				key={comment.timeStamp}
				userName={comment.userName}
				isOtherUser={comment.isOtherUser}
				timestamp={comment.timeStamp}></Comment>
		);
	});

	return <div className={classes.CommentList}>{comments}</div>;
};

export default Comments;
