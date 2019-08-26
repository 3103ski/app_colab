// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ProjectItem from './ProjectListItem/ProjectListItem';

// Styles
import classes from './ProjectFolders.module.css';

class ProjectFolders extends Component {
	render() {
		// Returns Project Nave Items
		const projects = this.props.projects.map(project => {
			return (
				<ProjectItem
					key={project.projectName}
					songs={project.songs}
					artist={project.artist}
					projectName={project.projectName}></ProjectItem>
			);
		});

		return (
			// Project Navigation Container
			<div className={classes.FoldersNav}>
				<div className={classes.ListTitles}>
					<h4 className={classes.LeftTitle}>Name</h4>
					<h4 className={classes.RightTitle}>Status</h4>
				</div>
				<div className={classes.FolderList}>{projects}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects.projects
	};
};

const mapDispatchToState = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(ProjectFolders);
