import axios from "../../utils/axios";
import {toast} from "react-toastify";
import {H4} from "../../styles/typography/Headers";
import React from "react";
import {
	EventsPageHeader,
	EventsPageWrapper, PastEventsHeader, UpcomingEventWrapper
} from "./styles";
import EventPreview from "./EventPreview";
import {GutteredRow, HeroRow, LoadMoreButtonContainer} from "../../styles/globalStyles";
import EventHero from "./EventHero";

class EventsPage extends React.Component {

	state = {
		currentEvents: [],
		pastEvents: [],
		anotherPage: false,
		numToSkip: 0,
	};

	componentDidMount() {
		this.getFirstPage();
		window.scrollTo(0, 0);
	}

	getFirstPage = async () => {
		try {

			const response = (await axios.get(`/event/getRecentEvents`)).data;

			const currentEvents = [];
			const pastEvents = [];

			const todayDate = new Date();
			for (let event of response.allEvents) {
				const parsedDate = new Date(event.eventDate);
				if (parsedDate > todayDate) {
					currentEvents.push(event)
				} else {
					pastEvents.push(event)
				}
				console.log('event: ', event);
			}

			this.setState({
				currentEvents,
				pastEvents,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			})

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	loadNextPage = async () => {
		try {
			const {pastEvents, numToSkip} = this.state;

			let filteredCategory = this.state.filterCategory;
			if (filteredCategory === 'all') {
				filteredCategory = '';
			}

			const newEvents = [...pastEvents];
			const response = (await axios.get(`/event/getRecentEvents?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
			newEvents.push(...response.allEvents);

			this.setState({
				pastEvents: newEvents,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			});

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	render() {

		const {anotherPage} = this.state;

		return (
			<EventsPageWrapper className="container">

				<EventsPageHeader className="row">
					<H4>Upcoming Events:</H4>
				</EventsPageHeader>
				<HeroRow>
					{
						this.state.currentEvents.map(event => (
							<UpcomingEventWrapper key={event._id}>
								<EventHero event={event} fit />
							</UpcomingEventWrapper>
						))
					}
				</HeroRow>

				<PastEventsHeader className="row">
					<H4>Past Events:</H4>
				</PastEventsHeader>
				<GutteredRow className="row no-gutters">
					{
						this.state.pastEvents.map(event => (
							<EventPreview event={event} key={event._id}/>
						))
					}
				</GutteredRow>
				{anotherPage && (
					<LoadMoreButtonContainer>
						<button onClick={this.loadNextPage}>Load More</button>
					</LoadMoreButtonContainer>
				)}
			</EventsPageWrapper>
		)
	}

}

export default EventsPage;
