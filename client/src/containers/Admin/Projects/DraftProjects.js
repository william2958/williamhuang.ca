import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {PublishedProjectsWrapper} from "./styles";
import ProjectPreview from "../../Projects/ProjectPreview";

const DraftProjects = () => {

	const [draftProjects, setDraftProjects] = useState([]);

	useEffect(() => {
		async function getDraftProjects() {
			try {

				const response = (await axios.get('/project/getProjectAdmin?isPublished=false')).data;

				setDraftProjects(response.projects);

			} catch (e) {
				toast.error('Could not find drafts.');
			}
		}
		getDraftProjects();
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

export default DraftProjects;
