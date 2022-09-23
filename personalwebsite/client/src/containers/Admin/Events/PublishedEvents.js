import React, {useEffect} from 'react';
import {ListEventsWrapper} from "./styles";
import EventPreview from "../../Events/EventPreview";
import {connect} from "react-redux";
import {getAdminEvent} from "../../../actions";

const PublishedEvents = ({ published, getAdminEvent }) => {

	useEffect(() => {
		getAdminEvent(true);
	}, []);

	return (
		<ListEventsWrapper className="container">
			<div className="row">
				{
					published.map(event => (
						<EventPreview event={event} editable key={event._id} />
					))
				}
			</div>
		</ListEventsWrapper>
	)

};

const mapStateToProps = (state) => ({
	published: state.events.publishedEvents
})

export default {
	component: connect(mapStateToProps, { getAdminEvent })(PublishedEvents),
	loadData: ({ dispatch }) => dispatch(getAdminEvent(true))
};
