// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../../store/actions/index';

// Components
import ProjectItem from './ProjectListItem/ProjectListItem';

// HOCs
import Aux from '../../../hoc/Aux/Aux';

// Styles
import classes from './ProjectFolders.module.css';

class ProjectFolders extends Component {
	render() {
		// Returns Project Nav Items
		const projects = this.props.projects.map(project => {
			return (
				<ProjectItem
					key={project.projectName}
					songs={this.props.songs}
					artist={project.artist}
					projectName={project.projectName}></ProjectItem>
			);
		});

		return (
			// Project Navigation Container
			<Aux>
				<div className={classes.FoldersNav}>
					<div className={classes.ListTitles}>
						<h4 className={classes.LeftTitle}>Name</h4>
						<h4 className={classes.RightTitle}>Status</h4>
					</div>
					<div className={classes.FolderList}>{projects}</div>
					<ProjectItem add={true}></ProjectItem>
				</div>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects.projects,
		songs: state.projects.songs
	};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(ProjectFolders);
