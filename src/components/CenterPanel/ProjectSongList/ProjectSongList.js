// REACT
import React from 'react';
import { connect } from 'react-redux';
// Components
import SongList from './SongList/SongList';
// HOCs
import Aux from '../../../../hoc/Aux/Aux';
// Styles
import classes from './SongList.module.css';

const ProjectSongList = props => {
	return (
		<Aux>
			<div className={classes.SongListContainer}>
				<div className={classes.AddUserToProject}>
					<img alt='add user' src={require('../../../../assets/add.png')} />
					<h4>Add User To All Songs</h4>
				</div>
				<SongList projectName={props.activeProject}></SongList>
				<div className={classes.AddSongToProject}>
					<img alt='add song' src={require('../../../../assets/add.png')} />
					<p>Add Song To Project</p>
				</div>
			</div>
		</Aux>
	);
};

const mapStateToProps = state => {
	return {
		projectIsOpen: state.app.projectIsOpen,
		activeProject: state.app.activeProject
	};
};
const mapDispatchToState = dispatch => {
	return {};
};
export default connect(
	mapStateToProps,
	mapDispatchToState
)(ProjectSongList);
