import React, {useEffect, useState} from 'react';
import axios from "../../../../utils/axios";
import {toast} from "react-toastify";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import ProjectPreview from "../../../Projects/ProjectPreview";
import {withRouter} from "react-router-dom";
import {getNumRecentProjects} from "../../../../actions";
import {connect} from "react-redux";

const RecentProjects = ({ history, getNumRecentProjects, recentProjects }) => {

	useEffect(() => {

		getNumRecentProjects(3)

	}, []);

	if (!recentProjects.length) {
		return null;
	}

	return (
		<HomePageSection dark>
			<div className="container">
				<HomePageSectionHeader>
					<H4 left color="highlight" underline>Latest Projects</H4>
					<H5 className="seeAllLink" color="highlight" onClick={() => history.push('/projects')}>See All</H5>
				</HomePageSectionHeader>
				<div className="row no-gutters">
					{
						recentProjects.map(project => (
							<ProjectPreview project={project} key={project._id} light />
						))
					}
				</div>
			</div>
		</HomePageSection>
	)

};

const mapStateToProps = (state) => ({
	recentProjects: state.projects.recentProjects
})

export default connect(mapStateToProps, { getNumRecentProjects })(withRouter(RecentProjects))
