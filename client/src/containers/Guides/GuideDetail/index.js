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

class GuideDetail extends React.Component {

	state = {
		title: '',
		content: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.getGuideDetails(searchableId, !!id);

		window.scrollTo(0, 0);
	}

	getGuideDetails = async (id, isId) => {
		const urlString = isId
			? `/guide/getGuide?guideId=${id}`
			: `/guide/getGuideFromString?urlString=${id}`;
		try {
			const response = (await axios.get(urlString)).data;
			const guide = response.guide;

			const {
				title,
				contentPreview,
				technology,

				publishDate,
				content,

				iconURL,
				previewImageURL
			} = guide;

			const formattedDate = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;

			let contentToFill;
			if (IsValidJSONString(content)) {

				const dbEditorState = convertFromRaw(JSON.parse(content));
				contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				contentToFill = EditorState.createEmpty(decoratorLink)
			}

			this.setState({
				title,
				contentPreview,
				technology,

				publishDate: formattedDate,
				content: contentToFill,

				iconURL,
				previewImageURL
			});

		} catch (err) {
			console.error('There was an error fetching that book detail: ', err);
		}
	};

	goBack = () => {
		this.props.history.push('/guides');
	};

	render() {
		const {
			title,
			contentPreview,
			technology,

			publishDate: formattedDate,
			content: contentToFill,

			iconURL
		} = this.state;

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

export default GuideDetail;
