import React from 'react';
import { toast } from 'react-toastify';
import axios from '../../../utils/axios';
import ProjectEditor from "./ProjectEditor";

const NewProject = ({ history }) => {

	const createProject = async (projectData) => {

		try {
			const response = (await axios.post('/project/createProject', projectData)).data;
			if (response) {
				const projectId = response.projectId;
				toast.success('Created project');
				history.push('/admin/project/edit/' + projectId);
			} else {
				toast.error('Could not create project.');
			}
		} catch (e) {
			toast.error('There was an error creating the project.');
		}

	};

	const cancelCreate = () => {
		toast.success('Cancelled project creation.');
		history.goBack();
	};

	return (
		<div>
			<ProjectEditor save={createProject} delete={cancelCreate} />
		</div>
	)

};

export default {
	component: NewProject
};
