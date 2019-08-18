import React from 'react';

import classes from './Navigation.module.css';

const navigation = props => {
	return (
		<div className={classes.NavContainer}>
			<div className={classes.NavItem}>
				<div className={classes.LeftItems}>
					<img
						alt="dashboard"
						src={require('../../../assets/dashboard.png')}></img>
					<h2>DASHBOARD</h2>
				</div>
				<div className={classes.RightItems}>{/* <h2></h2> */}</div>
			</div>
			<div className={classes.NavItem}>
				<div className={classes.LeftItems}>
					<img
						alt="checkmark"
						src={require('../../../assets/checkmark.png')}></img>
					<h2>TODO</h2>
				</div>
				<div className={classes.RightItems}>
					<h2>3 • 0 • 0 • 1 • 2</h2>
				</div>
			</div>

			<div className={classes.NavItem}>
				<div className={classes.LeftItems}>
					<img
						alt="allfiles"
						src={require('../../../assets/allfiles.png')}></img>
					<h2>ALL FILES</h2>
				</div>
				<div className={classes.RightItems}>
					<h2>76</h2>
				</div>
			</div>
			<div className={classes.NavItem}>
				<div className={classes.LeftItems}>
					<img
						alt="livestream"
						src={require('../../../assets/livestream.png')}></img>
					<h2>LIVE STREAM</h2>
				</div>
				<div className={classes.RightItems}>
					<h2>2</h2>
				</div>
			</div>
			<div className={classes.NavItem}>
				<div className={classes.LeftItems}>
					<img
						alt="messages"
						src={require('../../../assets/messages.png')}></img>
					<h2>MESSAGES</h2>
				</div>
				<div className={classes.RightItems}>
					<h2>13</h2>
				</div>
			</div>
			<div className={classes.NavItem}>
				<div className={classes.LeftItems}>
					<img
						alt="contacts"
						src={require('../../../assets/contacts.png')}></img>
					<h2>CONTACTS</h2>
				</div>
				<div className={classes.RightItems}>
					<h2>36</h2>
				</div>
			</div>
		</div>
	);
};

export default navigation;
