import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import ProjectEditor from "./ProjectEditor";
import {getProjectDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditProject extends React.Component {

	state = {
		editorState: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const projectId = this.props.match.params.projectId;
		if (projectId) {
			this.props.getProjectDetails(projectId, true, true);
		} else {
			this.props.history.push('/admin');
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.projectDetails.content !== this.props.projectDetails.content) {
			let contentToFill;
			if (IsValidJSONString(this.props.projectDetails.content)) {

				const dbEditorState = convertFromRaw(JSON.parse(this.props.projectDetails.content));
				contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				contentToFill = EditorState.createEmpty(decoratorLink)
			}
			this.setState({
				editorState: contentToFill
			})
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
		const projectData = {
			...this.props.projectDetails,
			content: this.state.editorState
		}
		return (
			<div>
				<ProjectEditor
					save={this.saveProject}
					delete={this.deleteProject}
					projectData={projectData}
					setHighlight={this.setHighlight} />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	projectDetails: state.projects.editProjectDetails
})

function loadData(store, match) {
	const id = match.params.projectId;
	return store.dispatch(getProjectDetails(id, true, true));
}

export default {
	component: connect(mapStateToProps, { getProjectDetails })(withRouter(EditProject)),
	loadData
};


