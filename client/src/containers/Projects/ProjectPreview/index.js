import React from 'react';
import {ProjectPreviewContent, ProjectPreviewImage, ProjectPreviewTitle, ProjectPreviewWrapper} from "./styles";
import ProjectCategoryTag from "./ProjectCategoryTag";
import {withRouter} from "react-router-dom";

const ProjectPreview = ({ project, editable, history }) => {

	const {
		title,
		category,
		// liveLink,
		previewImageURL,
		contentPreview
	} = project;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/project/edit/' + project._id);
		} else {
			if (project.urlString) {
				history.push('/projects/' + project.urlString);
			} else {
				history.push('/projects/id/' + project._id);
			}
		}
	};

	return (
		<div className="col-md-4">
			<ProjectPreviewWrapper onClick={goToDetails}>
				<ProjectPreviewImage bg={previewImageURL} />
				<ProjectPreviewContent>
					<ProjectCategoryTag category={category} />
					<ProjectPreviewTitle>{title}</ProjectPreviewTitle>
					<h5 className="metadata">{contentPreview}</h5>
					{/*<ButtonRow top={16}>*/}
					{/*	<Button small>Read</Button>*/}
					{/*	<Button variant="secondary" small>See It Live</Button>*/}
					{/*</ButtonRow>*/}
				</ProjectPreviewContent>
			</ProjectPreviewWrapper>
		</div>
	)

};

export default withRouter(ProjectPreview);
