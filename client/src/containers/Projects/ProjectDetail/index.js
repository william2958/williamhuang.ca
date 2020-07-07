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

class ProjectDetail extends React.Component {

	state = {
		content: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getProjectDetails(searchableId, !!id);

		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.projectDetails.content !== this.props.projectDetails.content) {
			let contentToFill;
			if (IsValidJSONString(this.props.projectDetails.content)) {

				const dbEditorState = convertFromRaw(JSON.parse(this.props.projectDetails.content));
				contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				contentToFill = EditorState.createEmpty(decoratorLink)
			}
			this.setState({
				content: contentToFill
			})
		}
	}

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

			heroURL,
			previewImageURL
		} = this.props.projectDetails;

		const { content } = this.state;

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

				<RichTextEditor editorState={content} readOnly={true} />

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
