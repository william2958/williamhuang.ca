import React from 'react';
import { toast } from 'react-toastify';
import { EditorState, convertFromRaw } from 'draft-js';

import axios from '../../../utils/axios';
import history from '../../../history';
import {decoratorLink} from "../../../components/RichTextEditor/linkDecorator";
import {IsValidJSONString} from "../../../utils/isValidJSON";
import EventEditor from "./EventEditor";

class EditEvent extends React.Component {

	state = {
		eventData: null,
		editorState: EditorState.createEmpty(decoratorLink)
	};

	componentDidMount() {
		const eventId = this.props.match.params.eventId;
		if (eventId) {
			axios.get(`/event/getEvent?eventId=${eventId}`)
				.then(({data}) => {
					const event = data.event;
					let contentToFill;
					let recapToFill;
					if (IsValidJSONString(event.content)) {

						const dbEditorState = convertFromRaw(JSON.parse(event.content));
						contentToFill = EditorState.createWithContent(dbEditorState, decoratorLink);

					} else {
						contentToFill = EditorState.createEmpty(decoratorLink)
					}
					if (IsValidJSONString(event.recap)) {

						const dbRecapState = convertFromRaw(JSON.parse(event.recap));
						recapToFill = EditorState.createWithContent(dbRecapState, decoratorLink)

					} else {
						recapToFill = EditorState.createEmpty(decoratorLink)
					}
					event.content = contentToFill;
					event.recap = recapToFill;
					event.eventDate = new Date(event.eventDate);
					this.setState({
						eventData: event,
					});
				})
				.catch(e => {
					console.error('Error getting event: ', e)
				})
		} else {
			history.push('/admin');
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
		return (
			<div>
				<EventEditor
					setEventUpdated={this.setEventUpdated}
					setHighlight={this.setHighlight}
					save={this.saveEvent}
					delete={this.deleteEvent}
					eventData={this.state.eventData} />
			</div>
		)
	}

}

export default EditEvent;
