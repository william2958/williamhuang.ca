import React from 'react';
import {H5, H6} from "../../../styles/typography/Headers";
import {GuidePreviewContent, GuidePreviewIcon, GuidePreviewWrapper} from "./styles";
import {BodyParagraph} from "../../../styles/typography/P";
import moment from "moment";
import {withRouter} from "react-router-dom";

const GuidePreview = ({ guide, editable, history }) => {

	const {
		title,
		technology,
		contentPreview,

		publishDate,

		iconURL
	} = guide;

	const formattedDate = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/guide/edit/' + guide._id);
		} else {
			if (guide.urlString) {
				history.push('/guides/' + guide.urlString);
			} else {
				history.push('/guides/id/' + guide._id);
			}
		}
	};

	return (
		<div className="col-md-6">
			<GuidePreviewWrapper onClick={goToDetails}>
				<div className="iconAndDetails">
					<GuidePreviewIcon bg={iconURL} />
					<GuidePreviewContent>
						<H5 uppercase>{title}</H5>
						<H6 color="secondary">{technology.join(', ')} - {formattedDate}</H6>
					</GuidePreviewContent>
				</div>
				<BodyParagraph className="guideContentPreview">{contentPreview}</BodyParagraph>
			</GuidePreviewWrapper>
		</div>
	)

};

export default withRouter(GuidePreview);
