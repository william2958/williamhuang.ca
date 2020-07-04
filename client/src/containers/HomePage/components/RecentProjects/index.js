import React, {useEffect, useState} from 'react';
import axios from "../../../../utils/axios";
import {toast} from "react-toastify";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import ProjectPreview from "../../../Projects/ProjectPreview";
import {withRouter} from "react-router-dom";

const RecentProjects = ({ history }) => {

	const [recentProjects, setRecentProjects] = useState([]);

	useEffect(() => {

		async function getProjects() {
			try {
				const response = (await axios.get('/project/getNumRecentProjects?numProjects=3')).data;

				setRecentProjects(response.allProjects);
			} catch (error) {
				toast.error('Error loading data.')
			}
		}

		getProjects();

	}, []);

	if (!recentProjects.length) {
		return null;
	}

	return (
		<HomePageSection className="container">
			<HomePageSectionHeader>
				<H4 left underline>Latest Projects</H4>
				<H5 className="seeAllLink" onClick={() => history.push('/projects')}>See All</H5>
			</HomePageSectionHeader>
			<div className="row no-gutters">
				{
					recentProjects.map(project => (
						<ProjectPreview project={project} key={project._id} />
					))
				}
			</div>
		</HomePageSection>
	)

};

export default withRouter(RecentProjects);
