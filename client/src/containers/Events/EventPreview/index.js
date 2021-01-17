import React from 'react';
import {H3, H4, H5} from "../../../styles/typography/Headers";
import {
	EventPreviewContent, EventPreviewDate,
	EventPreviewImage, EventPreviewOverlay,
	EventPreviewTitle,
	EventPreviewWrapper
} from "./styles";
import moment from "moment";
import {withRouter} from "react-router-dom";

const EventPreview = ({ event, editable, history }) => {

	const {
		title,
		contentPreview,
		eventDate,

		heroURL
	} = event;

	const formattedDate = eventDate ? moment(eventDate).format('MMMM D, YYYY') : null;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/event/edit/' + event._id);
		} else {
			if (event.urlString) {
				history.push('/events/' + event.urlString);
			} else {
				history.push('/events/id/' + event._id);
			}
		}
	};

	return (
		<div className="col-md-6">
			<EventPreviewWrapper onClick={goToDetails}>
				<EventPreviewImage bg={heroURL}>
					<EventPreviewOverlay />
				</EventPreviewImage>
				<EventPreviewContent>
					<EventPreviewTitle>
						<H3 color="highlight">{title}</H3>
						<H4 color="highlight">{contentPreview}</H4>
					</EventPreviewTitle>
					<EventPreviewDate>
						<H5 uppercase color="highlight"> Took Place {formattedDate}</H5>
					</EventPreviewDate>
					{/*<ButtonRow top={16}>*/}
					{/*	<Button small>Read</Button>*/}
					{/*	<Button variant="secondary" small>See It Live</Button>*/}
					{/*</ButtonRow>*/}
				</EventPreviewContent>
			</EventPreviewWrapper>
		</div>
	)

};

export default withRouter(EventPreview);
