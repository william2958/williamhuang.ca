import React from 'react';
import moment from 'moment';
import { convertFromRaw, EditorState } from "draft-js";
import axios from '../../../utils/axios';
import RichTextEditor from "../../../components/RichTextEditor";

import SvgIcon from "../../../components/SvgIcon";
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {GuideDetailContentWrapper, GuideDetailIcon, GuideDetailMetadata, GuideDetailWrapper} from "./styles";
import {H2, H5} from "../../../styles/typography/Headers";
import {BackArrow} from "../../../styles/globalStyles";
import {BodyParagraph} from "../../../styles/typography/P";
import Button from "../../../components/UI/Button";
import {getGuideDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class GuideDetail extends React.Component {

	state = {
		content: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getGuideDetails(searchableId, !!id);

		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.guideDetails.content !== this.props.guideDetails.content) {
			let contentToFill;
			if (IsValidJSONString(this.props.guideDetails.content)) {

				const dbEditorState = convertFromRaw(JSON.parse(this.props.guideDetails.content));
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
		this.props.history.push('/guides');
	};

	render() {
		const {
			title,
			contentPreview,
			technology,

			publishDate: formattedDate,

			iconURL
		} = this.props.guideDetails;

		const { content } = this.state;

		if (!title) {
			return (
				<div style={{minHeight: '100vh'}}>Loading...</div>
			)
		}

		return (
			<GuideDetailWrapper>
				<div className="container">
					<BackArrow onClick={this.goBack}>
						<SvgIcon icon="BackCaret" />
						<h6>All Guides</h6>
					</BackArrow>
				</div>
				<GuideDetailContentWrapper className="container">
					<GuideDetailIcon bg={iconURL} />
					<GuideDetailMetadata className="metadata">
						<H2>{title}</H2>
						<H5 color="secondary" className="desktopMetadata">{technology.join(', ')} - Published {formattedDate}</H5>
						<H5 color="secondary" className="mobileMetadata">{technology.join(', ')}</H5>
						<H5 color="secondary" className="mobileMetadata">Published {formattedDate}</H5>
						<BodyParagraph className="desktopMetadata">{contentPreview}</BodyParagraph>
					</GuideDetailMetadata>
				</GuideDetailContentWrapper>
				<div className="container">
					<BodyParagraph className="mobileMetadata mobileContentPreview">{contentPreview}</BodyParagraph>
				</div>
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
			</GuideDetailWrapper>
		)
	}

};

function mapStateToProps(state) {
	return {
		guideDetails: state.guides.guideDetails
	}
}

function loadData(store, match) {
	const id = match.params.id;
	const searchableId = id || match.params.urlString;
	return store.dispatch(getGuideDetails(searchableId, !!id));
}

export default {
	component: connect(mapStateToProps, { getGuideDetails })(withRouter(GuideDetail)),
	loadData
};
