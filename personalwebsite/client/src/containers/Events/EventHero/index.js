import React from 'react';
import {H1, H4} from "../../../styles/typography/Headers";
import {
	EventHeroContent,
	EventHeroImage, EventHeroOverlay, EventHeroTime, EventHeroTitle,
	EventHeroWrapper, EventMobileHeroTime, TimeDisplayUnitWrapper
} from "./styles";
import moment from "moment";
import {withRouter} from "react-router-dom";

const TimeDisplayUnit = ({ unit, value }) => {
	return (
		<TimeDisplayUnitWrapper>
			<div className="value"><span>{value}</span></div>
			<div className="unit"><H4 color="highlight">{unit}</H4></div>
		</TimeDisplayUnitWrapper>
	)
};

const EventHero = ({ event, editable, fit, staticHero, history }) => {

	const {
		title,
		contentPreview,

		eventDate,

		heroURL
	} = event;

	let formattedDate;
	let smallerFormattedDate;
	let diffMonths;
	let diffWeeks;
	let diffDays;
	if (eventDate) {
		const mEventDate = moment(eventDate);
		const currDate = moment();
		formattedDate = mEventDate.format('MMMM D, h a');
		smallerFormattedDate = mEventDate.format('MMMM D, YYYY, h a');
		diffMonths = Math.floor(mEventDate.diff(currDate, 'months', true));
		diffWeeks = Math.floor(mEventDate.diff(currDate, 'weeks', true)) % 4;
		diffDays = Math.floor(mEventDate.diff(currDate, 'days', true)) % 7;
	}

	const goToDetails = () => {
		if (staticHero)
			return;
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
		<EventHeroWrapper onClick={goToDetails} fit={fit} staticHero={staticHero} >
			<EventHeroImage bg={heroURL} fit={fit} />
			<EventHeroOverlay />
			<EventHeroContent>
				<EventHeroTitle>
					<H1 color="highlight">{title}</H1>
					<H4 color="highlight">{contentPreview}</H4>
				</EventHeroTitle>
				<EventHeroTime>
					<H4 color="highlight">{formattedDate}</H4>
					<div className="timeRow">
						<TimeDisplayUnit unit="months" value={diffMonths} />
						<TimeDisplayUnit unit="weeks" value={diffWeeks} />
						<TimeDisplayUnit unit="days" value={diffDays} />
					</div>
				</EventHeroTime>
				<EventMobileHeroTime>
					<H4 color="highlight">{smallerFormattedDate}</H4>
				</EventMobileHeroTime>
			</EventHeroContent>
		</EventHeroWrapper>
	)

};

export default withRouter(EventHero);
