import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import history from '../../../history';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import ProjectEditor from "./ProjectEditor";

class EditProject extends React.Component {

	state = {
		projectData: null,
		editorState: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const projectId = this.props.match.params.projectId;
		if (projectId) {
			axios.get(`/project/getProject?projectId=${projectId}`)
				.then(({data}) => {
					const project = data.project;
					let contentToFill;
					if (IsValidJSONString(project.content)) {

						const dbEditorState = convertFromRaw(JSON.parse(project.content));
						contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

					} else {
						contentToFill = EditorState.createEmpty(decoratorLink)
					}
					project.content = contentToFill;
					this.setState({
						projectData: project,
					});
				})
				.catch(e => {
					console.error('Error getting project: ', e)
				})
		} else {
			history.push('/admin');
		}
	}

	saveProject = async (projectData) => {
		const dataToUpdate = {
			...projectData,
			projectId: projectData._id
		};
		try {
			await axios.put('/project/updateProject', dataToUpdate);
			toast.success('Successfully saved project!');
		} catch (e) {
			toast.error('Could not save the project.');
			console.error('There was an error creating this project');
		}
	};

	deleteProject = async (projectData) => {
		const toDeleteId = projectData._id;

		try {
			await axios.delete('/project/deleteProject', { data: { projectId: toDeleteId} });
			toast.success('Deleted project.');
			this.props.history.goBack();
		} catch (e) {
			toast.error('Could not delete project.');
			console.error('Error deleting project: ', e);
		}
	};

	setHighlight = async (projectData) => {
		try {
			await axios.put('/highlight/updateHighlight', { type: 'project', id: projectData._id });
			toast.success('Updated highlight.');
		} catch (e) {
			toast.error('Could not update the highlight');
		}
	};

	render() {
		return (
			<div>
				<ProjectEditor
					save={this.saveProject}
					delete={this.deleteProject}
					projectData={this.state.projectData}
					setHighlight={this.setHighlight} />
			</div>
		)
	}

}

export default EditProject;
