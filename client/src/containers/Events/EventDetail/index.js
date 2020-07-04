import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
import moment from 'moment';
import axios from '../../../utils/axios';
import RichTextEditor from "../../../components/RichTextEditor";

import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import {
	EventDetailWrapper, EventExtraInfo,
	KeyInfoBox,
	UpcomingEventDetailWrapper
} from "./styles";
import {H4, H5} from "../../../styles/typography/Headers";
import Button from "../../../components/UI/Button";
import EventHero from "../EventHero";
import {EventRecapToggle} from "../../Admin/Events/styles";

class EventDetail extends React.Component {

	state = {
		title: '',
		content: EditorState.createEmpty(decoratorLink),
		viewingRecap: false
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.getEventDetails(searchableId, !!id);

		window.scrollTo(0, 0);
	}

	getEventDetails = async (id, isId) => {
		try {
			const urlString = isId
				? `/event/getEvent?eventId=${id}`
				: `/event/getEventFromString?urlString=${id}`;
			const response = (await axios.get(urlString)).data;
			const {event} = response;

			const {
				title,
				content,
				recap,
				keyInfo,
				contentPreview,
				eventDate,

				heroURL,
				lastUpdated

			} = event;

			let contentToFill;
			if (IsValidJSONString(content)) {

				const dbEditorState = convertFromRaw(JSON.parse(content));
				contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				contentToFill = EditorState.createEmpty(decoratorLink)
			}
			let recapToFill;
			if (IsValidJSONString(recap)) {

				const dbEditorState = convertFromRaw(JSON.parse(recap));
				recapToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

			} else {
				recapToFill = EditorState.createEmpty(decoratorLink)
			}

			const currDate = new Date();
			const parsedDate = new Date(eventDate);
			const expiredEvent = currDate > parsedDate;

			this.setState({
				title,
				contentPreview,

				content: contentToFill,
				recap: recapToFill,

				keyInfo,
				eventDate,

				heroURL,
				event,
				lastUpdated,

				expiredEvent,
				viewingRecap: expiredEvent
			});

		} catch (err) {
			console.error('There was an error fetching that book detail: ', err);
		}
	};

	render() {
		const {
			title,

			content: contentToFill,
			recap: recapToFill,

			keyInfo,

			event,
			expiredEvent,
			lastUpdated
		} = this.state;

		if (!title) {
			return (
				<div style={{minHeight: '100vh'}}>Loading...</div>
			)
		}

		const formattedDate = moment(lastUpdated).format('h a MMMM D, YYYY')

		return (
			<EventDetailWrapper>

				<div>
					<UpcomingEventDetailWrapper>
						<EventHero event={event} fit staticHero />
					</UpcomingEventDetailWrapper>
				</div>

				<div className="eventContent">
					<KeyInfoBox>
						<H4>Key Info</H4>
						<ul>
							{
								keyInfo.map(info => (
									<li key={info}>{info}</li>
								))
							}
						</ul>
					</KeyInfoBox>

					<EventExtraInfo>
						<H5 color="secondary">Last Updated: {formattedDate}</H5>
					</EventExtraInfo>

					{expiredEvent && (
						<EventRecapToggle>
							<H4 onClick={() => this.setState({ viewingRecap: true })} className={(this.state.viewingRecap ? "active" : 'inactive')}>Recap</H4>
							<H4 onClick={() => this.setState({ viewingRecap: false })} className={(!this.state.viewingRecap ? "active" : 'inactive')}>Content</H4>
						</EventRecapToggle>
					)}
					<RichTextEditor editorState={this.state.viewingRecap ? recapToFill : contentToFill} readOnly={true} />

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
				</div>
			</EventDetailWrapper>
		)
	}

};

export default EventDetail;
