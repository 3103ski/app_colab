/* eslint-disable no-mixed-spaces-and-tabs */
// React Imports
import React from 'react';

// Style
import classes from './Comment.module.css';

const Comment = props => {
	const thisUserComment = (comment, userName, time) => {
		let timestamp = time ? `@${time}` : null;
		return (
			<div className={classes.ThisUserComment}>
				<img
					alt='userPic'
					src={require(`../../../../../assets/userPic-${userName}.png`)}
				/>
				<p className={classes.Timestamp}>{timestamp}</p>
				<p className={classes.BlueComment}>{comment}</p>
			</div>
		);
	};

	const otherUserComment = (comment, userName, time) => {
		let timestamp = time ? `@${time}` : null;
		return (
			<div className={classes.OtherUserComment}>
				<p className={classes.GreyComment}>{comment}</p>
				<p className={classes.Timestamp}>{timestamp}</p>
				<img
					alt='userPic'
					src={require(`../../../../../assets/userPic-${userName}.png`)}
				/>
			</div>
		);
	};

	const responses = props.responses
		? props.responses.map((response, index) => {
				let res = !response.isOtherUser
					? thisUserComment(response.comment, response.user)
					: otherUserComment(response.comment, response.user);
				return res;
		  })
		: null;
	const comment = !props.isOtherUser
		? thisUserComment(props.comment, props.userName, props.timestamp)
		: otherUserComment(props.comment, props.userName, props.timestamp);

	return (
		<div className={classes.Comment}>
			{comment}
			<div
				className={classes.Responses}
				style={
					props.isOtherUser
						? { marginRight: `auto`, marginLeft: `35px` }
						: { marginLeft: `auto`, marginRight: `35px` }
				}>
				{responses}
			</div>
		</div>
	);
};

export default Comment;
