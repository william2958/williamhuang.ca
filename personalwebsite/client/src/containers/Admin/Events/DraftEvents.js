import React, {useEffect} from 'react';
import {ListEventsWrapper} from "./styles";
import EventPreview from "../../Events/EventPreview";
import {connect} from "react-redux";
import {getAdminEvent} from "../../../actions";

const DraftEvents = ({ draft, getAdminEvent }) => {

	useEffect(() => {
		getAdminEvent(false)
	}, []);

	return (
		<ListEventsWrapper className="container">
			<div className="row">
				{
					draft.map(event => (
						<EventPreview event={event} editable key={event._id} />
					))
				}
			</div>
		</ListEventsWrapper>
	)

};

const mapStateToProps = (state) => ({
	draft: state.events.draftEvents
})

export default {
	component: connect(mapStateToProps, { getAdminEvent })(DraftEvents),
	loadData: ({ dispatch }) => dispatch(getAdminEvent(false))
};
