import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {ListEventsWrapper} from "./styles";
import EventPreview from "../../Events/EventPreview";

const PublishedEvents = () => {

	const [publishedEvents, setPublishedEvents] = useState([]);

	useEffect(() => {
		async function getPublishedEvents() {
			try {

				const response = (await axios.get('/event/getEventAdmin?isPublished=true')).data;

				setPublishedEvents(response.events);

			} catch (e) {
				toast.error('Could not find published events.');
			}
		}
		getPublishedEvents();
	}, []);

	return (
		<ListEventsWrapper className="container">
			<div className="row">
				{
					publishedEvents.map(event => (
						<EventPreview event={event} editable key={event._id} />
					))
				}
			</div>
		</ListEventsWrapper>
	)

};

export default PublishedEvents;
