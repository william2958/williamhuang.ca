import React, {useEffect} from 'react';
import {PublishedProjectsWrapper} from "./styles";
import ProjectPreview from "../../Projects/ProjectPreview";
import {getAdminProject} from "../../../actions";
import {connect} from "react-redux";

const DraftProjects = ({ draftProjects, getAdminProject }) => {

	useEffect(() => {
		getAdminProject(false);
	}, []);

	return (
		<PublishedProjectsWrapper className="container">
			<div className="row">
				{
					draftProjects.map(project => (
						<ProjectPreview project={project} editable key={project._id} />
					))
				}
			</div>
		</PublishedProjectsWrapper>
	)

};

const mapStateToProps = (state) => ({
	draftProjects: state.projects.draftProjects
})

export default {
	component: connect(mapStateToProps, { getAdminProject })(DraftProjects),
	loadData: ({ dispatch }) => dispatch(getAdminProject(false))
};
