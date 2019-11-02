// React Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Components
import ProjectItem from './ProjectListItem/ProjectListItem';
import Spinner from '../../UI/Spinner/Spinner';

// HOCs
import Aux from '../../../hoc/Aux/Aux';

// Styles
import classes from './ProjectFolders.module.css';

class ProjectFolders extends Component {
	componentDidMount() {
		this.props.getProjects(this.props.auth.userId);
		this.props.getSongs(this.props.auth.userId);
	}
	render() {
		// Returns Project Nav Items
		let projects = null;
		if (this.props.projects) {
			projects = this.props.projects.map(project => {
				return (
					<ProjectItem
						key={project.projectName}
						songs={this.props.songs}
						artist={project.artist}
						projectName={project.projectName}></ProjectItem>
				);
			});
		}

		if (this.props.loading) {
			projects = <Spinner></Spinner>;
		}

		return (
			// Project Navigation Container
			<Aux>
				<div className={classes.FoldersNav}>
					<div className={classes.ListTitles}>
						<h4 className={classes.LeftTitle}>Projects</h4>
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
		songs: state.projects.songs,
		auth: state.auth,
		loading: state.projects.loading
	};
};

const mapDispatchToState = dispatch => {
	return {
		getProjects: (token, userId) =>
			dispatch(actions.projectsInit(token, userId)),
		getSongs: (token, userId) => dispatch(actions.songsInit(token, userId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToState
)(ProjectFolders);
