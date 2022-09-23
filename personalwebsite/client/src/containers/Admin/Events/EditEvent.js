import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import EventEditor from "./EventEditor";
import {getEventDetails} from "../../../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditEvent extends React.Component {

	componentDidMount() {
		const eventId = this.props.match.params.eventId;
		if (eventId) {
			this.props.getEventDetails(eventId, true, true);
		} else {
			this.props.history.push('/admin');
		}
	}

	saveEvent = async (eventData) => {
		const dataToUpdate = {
			...eventData,
			eventId: eventData._id
		};

		try {
			await axios.put('/event/updateEvent', dataToUpdate);
			toast.success('Successfully saved event!');
		} catch (e) {
			toast.error('Could not save the event.');
		}
	};

	setEventUpdated = async (eventData) => {
		const dataToUpdate = {
			eventId: eventData._id
		};

		try {
			await axios.put('/event/setEventUpdated', dataToUpdate);
			toast.success('Event last updated changed.');
		} catch (e) {
			toast.error('Could not update the event.');
		}
	};

	deleteEvent = async (eventData) => {
		const toDeleteId = eventData._id;

		try {
			await axios.delete('/event/deleteEvent', { data: { eventId: toDeleteId} });
			toast.success('Deleted event.');
			this.props.history.goBack();
		} catch (e) {
			toast.error('Could not delete event.');
		}
	};

	setHighlight = async (eventData) => {
		try {
			await axios.put('/highlight/updateHighlight', { type: 'event', id: eventData._id });
			toast.success('Updated highlight.');
		} catch (e) {
			toast.error('Could not update the highlight');
		}
	};

	render() {
		let contentToFill;
		if (IsValidJSONString(this.props.eventDetails.content)) {

			const dbEditorState = convertFromRaw(JSON.parse(this.props.eventDetails.content));
			contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			contentToFill = EditorState.createEmpty(decoratorLink)
		}
		let recapToFill;
		if (IsValidJSONString(this.props.eventDetails.recap)) {

			const dbEditorState = convertFromRaw(JSON.parse(this.props.eventDetails.recap));
			recapToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

		} else {
			recapToFill = EditorState.createEmpty(decoratorLink)
		}
		const eventDetails = {
			...this.props.eventDetails,
			content: contentToFill,
			recap: recapToFill,
			eventDate: new Date(this.props.eventDetails.eventDate)
		}

		return (
			<div>
				<EventEditor
					setEventUpdated={this.setEventUpdated}
					setHighlight={this.setHighlight}
					save={this.saveEvent}
					delete={this.deleteEvent}
					eventData={eventDetails} />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	eventDetails: state.events.editEventDetails
})

function loadData(store, match) {
	const id = match.params.eventId;
	return store.dispatch(getEventDetails(id, true, true));
}

export default {
	component: connect(mapStateToProps, { getEventDetails })(withRouter(EditEvent)),
	loadData
};
