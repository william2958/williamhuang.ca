import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
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
import {getProjectDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";
import {getImageUrl} from "../../../utils/getImageUrl";

class ProjectDetail extends React.Component {

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getProjectDetails(searchableId, !!id);

		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	goBack = () => {
		this.props.history.push('/projects');
	};

	render() {

		if (!this.props.projectDetails)
			return <ProjectDetailWrapper>Loading...</ProjectDetailWrapper>;

		const {
			title,
			category,
			contentPreview,
			techStack,
			liveLink,
			content,

			publishDate: formattedDate,

			heroURL,
			previewImageURL,
			urlString
		} = this.props.projectDetails;

		let contentToFill;
		if (IsValidJSONString(content)) {

			const dbEditorState = convertFromRaw(JSON.parse(content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}

		if (!title) {
			return (
				<div style={{minHeight: '100vh'}}>Loading...</div>
			)
		}

		return (
			<ProjectDetailWrapper>

				<Helmet>
					<title>{`${title} | WH Projects`}</title>
					<meta property="og:title" content={title} />
					<meta property="og:image" content={getImageUrl(previewImageURL, 'small')} />
					<meta property="description" content={contentPreview} />
					<meta property="og:url" content={`https://williamhuang.ca/projects/${urlString}`} />
				</Helmet>

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
							<H5 uppercase color="secondary">Written With: {techStack.join(', ')}</H5>
							<H6 color="secondary">Published: {formattedDate}</H6>
						</div>
					</ProjectDetailContent>
					{liveLink && (
						<div className="seeItLiveContainer">
							<Button
								small
								variant="secondary"
								onClick={() => window.open(liveLink, "_blank")}
							>
								<div className="buttonContent">
									<span>See Live</span> <SvgIcon icon='OpenInNewDark' />
								</div>
							</Button>
						</div>
					)}
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

function mapStateToProps(state) {
	return {
		projectDetails: state.projects.projectDetails
	}
}

function loadData(store, match) {
	const id = match.params.id;
	const searchableId = id || match.params.urlString;
	return store.dispatch(getProjectDetails(searchableId, !!id));
}

export default {
	component: connect(mapStateToProps, { getProjectDetails })(withRouter(ProjectDetail)),
	loadData
};
