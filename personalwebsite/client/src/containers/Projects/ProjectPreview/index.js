import React from 'react';
import {ProjectPreviewContent, ProjectPreviewImage, ProjectPreviewTitle, ProjectPreviewWrapper} from "./styles";
import ProjectCategoryTag from "./ProjectCategoryTag";
import {withRouter} from "react-router-dom";
import {H4} from "../../../styles/typography/Headers";

const ProjectPreview = ({ project, editable, history, light }) => {

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
			<ProjectPreviewWrapper>
				<ProjectPreviewImage bg={previewImageURL} onClick={goToDetails}>
					{/*<ProjectCategoryTag category={category} />*/}
				</ProjectPreviewImage>
				<ProjectPreviewContent>
					<H4 color={light ? 'highlight' : 'primary'}>{title}</H4>
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
