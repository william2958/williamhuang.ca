import React from 'react';
import { convertFromRaw, EditorState } from "draft-js";
import moment from 'moment';
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
import {getEventDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";
import {getImageUrl} from "../../../utils/getImageUrl";

class EventDetail extends React.Component {

	state = {
		viewingRecap: false
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const searchableId = id || this.props.match.params.urlString;
		this.props.getEventDetails(searchableId, !!id);

		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	render() {

		if (!this.props.eventDetails)
			return <EventDetailWrapper>Loading...</EventDetailWrapper>;

		const {
			content,
			recap,

			keyInfo,
			title,
			expiredEvent,
			lastUpdated,
			heroURL,
			contentPreview,
			urlString
		} = this.props.eventDetails;

		const formattedDate = moment(lastUpdated).format('h a MMMM D, YYYY')

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
		return (
			<EventDetailWrapper>

				<Helmet>
					<title>{`${title} | WH Events`}</title>
					<meta property="og:title" content={title} />
					<meta property="og:image" content={getImageUrl(heroURL, 'small')} />
					<meta property="description" content={contentPreview} />
					<meta property="og:url" content={`https://williamhuang.ca/events/${urlString}`} />
				</Helmet>

				<div>
					<UpcomingEventDetailWrapper>
						<EventHero event={this.props.eventDetails} fit staticHero />
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

function mapStateToProps(state) {
	return {
		eventDetails: state.events.eventDetails
	}
}

function loadData(store, match) {
	const id = match.params.id;
	const searchableId = id || match.params.urlString;
	return store.dispatch(getEventDetails(searchableId, !!id));
}

export default {
	component: connect(mapStateToProps, { getEventDetails })(withRouter(EventDetail)),
	loadData
};
