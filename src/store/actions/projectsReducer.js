import * as actionTypes from '../actions/actionTypes';
import firebaseProjects from '../../components/FirebaseInstances/firebaseProjects';

const addProjectToServer = project => {
	firebaseProjects.post('/.json', project).then(res => console.log(res));
};

export const projectFormToggle = () => {
	return {
		type: actionTypes.PROJECT_FORM_TOGGLE
	};
};

export const addProject = project => {
	addProjectToServer(project);
	return {
		type: actionTypes.ADD_PROJECT,
		newProject: project
	};
};
