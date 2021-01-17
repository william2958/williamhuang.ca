import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
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
import {Helmet} from "react-helmet";
import {getImageUrl} from "../../../utils/getImageUrl";
import {BookReviewDetailWrapper} from "../../BookReviews/BookReviewDetail/styles";

class GuideDetail extends React.Component {

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getGuideDetails(searchableId, !!id);

		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	goBack = () => {
		this.props.history.push('/guides');
	};

	render() {

		if (!this.props.guideDetails)
			return <GuideDetailWrapper>Loading...</GuideDetailWrapper>;

		const {
			title,
			contentPreview,
			technology,
			content,
			publishDate: formattedDate,

			iconURL,
			urlString
		} = this.props.guideDetails;

		let contentToFill;
		if (IsValidJSONString(content)) {

			const dbEditorState = convertFromRaw(JSON.parse(content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}

		return (
			<GuideDetailWrapper>

				<Helmet>
					<title>{`${title} | WH Guides`}</title>
					<meta property="og:title" content={title} />
					<meta property="og:image" content={getImageUrl(iconURL, 'small')} />
					<meta property="description" content={contentPreview} />
					<meta property="og:url" content={`https://williamhuang.ca/guides/${urlString}`} />
				</Helmet>

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
						<H5 uppercase color="secondary" className="desktopMetadata">{technology.join(', ')} - Published {formattedDate}</H5>
						<H5 uppercase color="secondary" className="mobileMetadata">{technology.join(', ')}</H5>
						<H5 uppercase color="secondary" className="mobileMetadata">Published {formattedDate}</H5>
						<BodyParagraph className="desktopMetadata">{contentPreview}</BodyParagraph>
					</GuideDetailMetadata>
				</GuideDetailContentWrapper>
				<div className="container">
					<BodyParagraph className="mobileMetadata mobileContentPreview">{contentPreview}</BodyParagraph>
				</div>
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
