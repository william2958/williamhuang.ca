import React from 'react';
import { toast } from 'react-toastify';
import axios from '../../../utils/axios';
import EventEditor from "./EventEditor";

const NewEvent = ({ history }) => {

	const createEvent = async (eventData) => {

		try {
			const response = (await axios.post('/event/createEvent', eventData)).data;
			if (response) {
				const eventId = response.eventId;
				toast.success('Created event');
				history.push('/admin/event/edit/' + eventId);
			} else {
				toast.error('Could not create event.');
			}
		} catch (e) {
			toast.error('There was an error creating the event.');
		}

	};

	const cancelCreate = () => {
		toast.success('Cancelled event creation.');
		history.goBack();
	};

	return (
		<div>
			<EventEditor save={createEvent} delete={cancelCreate} />
		</div>
	)

};

export default {
	component: NewEvent
};
