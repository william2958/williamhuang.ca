import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {ListEventsWrapper} from "./styles";
import EventPreview from "../../Events/EventPreview";

const DraftEvents = () => {

	const [draftEvents, setDraftEvents] = useState([]);

	useEffect(() => {
		async function getDraftEvents() {
			try {

				const response = (await axios.get('/event/getEventAdmin?isPublished=false')).data;

				setDraftEvents(response.events);

			} catch (e) {
				toast.error('Could not find drafts.');
			}
		}
		getDraftEvents();
	}, []);

	return (
		<ListEventsWrapper className="container">
			<div className="row">
				{
					draftEvents.map(event => (
						<EventPreview event={event} editable key={event._id} />
					))
				}
			</div>
		</ListEventsWrapper>
	)

};

export default DraftEvents;
