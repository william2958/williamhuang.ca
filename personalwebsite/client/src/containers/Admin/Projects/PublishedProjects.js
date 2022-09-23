import React, {useEffect} from 'react';
import {PublishedProjectsWrapper} from "./styles";
import ProjectPreview from "../../Projects/ProjectPreview";
import {connect} from "react-redux";
import {getAdminProject} from "../../../actions";

const PublishedProjects = ({ publishedProjects, getAdminProject }) => {

	useEffect(() => {
		getAdminProject(true);
	}, []);

	return (
		<PublishedProjectsWrapper className="container">
			<div className="row">
				{
					publishedProjects.map(project => (
						<ProjectPreview project={project} editable key={project._id} />
					))
				}
			</div>
		</PublishedProjectsWrapper>
	)

};

const mapStateToProps = (state) => ({
	publishedProjects: state.projects.publishedProjects
})

export default {
	component: connect(mapStateToProps, { getAdminProject })(PublishedProjects),
	loadData: ({ dispatch }) => dispatch(getAdminProject(true))
};
