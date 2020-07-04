import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {PublishedProjectsWrapper} from "./styles";
import ProjectPreview from "../../Projects/ProjectPreview";

const PublishedProjects = () => {

	const [publishedProjects, setPublishedProjects] = useState([]);

	useEffect(() => {
		async function getPublishedProjects() {
			try {

				const response = (await axios.get('/project/getProjectAdmin?isPublished=true')).data;

				setPublishedProjects(response.projects);

			} catch (e) {
				toast.error('Could not find published projects.');
			}
		}
		getPublishedProjects();
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

export default PublishedProjects;
