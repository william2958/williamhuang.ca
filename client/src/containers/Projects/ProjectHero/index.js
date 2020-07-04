import React from 'react';
import {H5, H6} from "../../../styles/typography/Headers";
import Button from "../../../components/UI/Button";
import SvgIcon from "../../../components/SvgIcon";
import history from '../../../history';
import {ProjectsPageSpotlight, ProjectsPageSpotlightContent, ProjectsPageSpotlightImage} from "./styles";

const ProjectHero = ({ project, fit, staticHero, editable }) => {

	const {
		heroURL,
		title,
		contentPreview,
		liveLink
	} = project;

	const goToDetails = () => {
		if (staticHero)
			return;
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

	const visitProjectLive = () => {
		if (liveLink) {
			window.open(liveLink, "_blank")
		}
	};

	return (
		<ProjectsPageSpotlight fit={fit}>
			<ProjectsPageSpotlightImage bg={heroURL} fit={fit}>
				<ProjectsPageSpotlightContent>
					<H5 color="highlight">{title}</H5>
					<H6 color="secondary">{contentPreview}</H6>
				</ProjectsPageSpotlightContent>
				<div className="liveButton">
					<Button
						noShadow
						small
						className=""
						variant="secondary"
						onClick={goToDetails}
					>
						Read More
					</Button>

					{liveLink && (
						<Button noShadow small onClick={visitProjectLive}>
							<div className="buttonContent">
								<span>See Live</span> <SvgIcon icon='OpenInNew'/>
							</div>
						</Button>
					)}
				</div>
			</ProjectsPageSpotlightImage>
		</ProjectsPageSpotlight>
	)

};

export default ProjectHero;
