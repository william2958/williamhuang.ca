import React from 'react';
import moment from 'moment';
import { convertFromRaw, EditorState } from "draft-js";
import axios from '../../../utils/axios';
import RichTextEditor from "../../../components/RichTextEditor";

import SvgIcon from "../../../components/SvgIcon";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {
	ProjectDetailContent,
	ProjectDetailContentWrapper,
	ProjectDetailImage,
	ProjectDetailWrapper,
	ProjectHeroImageWrapper
} from "./styles";
import ProjectCategoryTag from "../ProjectPreview/ProjectCategoryTag";
import {H1, H5, H6} from "../../../styles/typography/Headers";
import Button from "../../../components/UI/Button";
import {BodyParagraph} from "../../../styles/typography/P";
import {BackArrow} from "../../../styles/globalStyles";

class ProjectDetail extends React.Component {

	state = {
		title: '',
		content: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.getProjectDetails(searchableId, !!id);

		window.scrollTo(0, 0);
	}

	getProjectDetails = async (id, isId) => {
		try {
			const urlString = isId
				? `/project/getProject?projectId=${id}`
				: `/project/getProjectFromString?urlString=${id}`;
			const response = (await axios.get(urlString)).data;
			const project = response.project;

			const {
				title,
				category,
				techStack,
				liveLink,
				contentPreview,

				heroURL,
				previewImageURL,

				publishDate
			} = project;

			const formattedDate = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;

			let contentToFill;
			if (IsValidJSONString(project.content)) {

				const dbEditorState = convertFromRaw(JSON.parse(project.content));
				contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				contentToFill = EditorState.createEmpty(decoratorLink)
			}

			this.setState({
				title,
				category,
				techStack,
				liveLink,
				contentPreview,

				publishDate: formattedDate,
				content: contentToFill,

				heroURL,
				previewImageURL
			});

		} catch (err) {
			console.error('There was an error fetching that book detail: ', err);
		}
	};

	goBack = () => {
		this.props.history.push('/projects');
	};

	render() {
		const {
			title,
			category,
			contentPreview,
			techStack,
			liveLink,

			publishDate: formattedDate,
			content: contentToFill,

			heroURL,
			previewImageURL
		} = this.state;

		if (!title) {
			return (
				<div style={{minHeight: '100vh'}}>Loading...</div>
			)
		}

		return (
			<ProjectDetailWrapper>
				<ProjectHeroImageWrapper bg={heroURL} />

				<div className="container">
					<BackArrow onClick={this.goBack}>
						<SvgIcon icon="BackCaret" />
						<h6>All Projects</h6>
					</BackArrow>
				</div>
				<ProjectDetailContentWrapper className="container">
					<ProjectDetailImage bg={previewImageURL}>
						<ProjectCategoryTag category={category} />
					</ProjectDetailImage>
					<ProjectDetailContent>
						<H1>{title}</H1>
						<BodyParagraph>{contentPreview}</BodyParagraph>
						<div className="publishDate">
							<H5 color="secondary">Written With: {techStack.join(', ')}</H5>
							<H6 color="secondary">Published: {formattedDate}</H6>
						</div>
					</ProjectDetailContent>
					<div className="seeItLiveContainer">
						<Button
							small
							variant="secondary"
							onClick={() => window.open(liveLink, "_blank")}
						>
							<div className="buttonContent">
								<span>See Live</span> <SvgIcon icon='OpenInNew' />
							</div>
						</Button>
					</div>
				</ProjectDetailContentWrapper>

				<RichTextEditor editorState={contentToFill} readOnly={true} />

				<Button
					center
					variant="secondary"
					onClick={() => window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth'
					})}
					style={{ marginTop: '35px' }}
				>Back To Top</Button>

			</ProjectDetailWrapper>
		)
	}

};

export default ProjectDetail;
