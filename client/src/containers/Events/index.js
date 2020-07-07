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
import {NEXT_PAGE_EVENTS_LOADED} from "../../actions/types";
import {getFirstPageEvents} from "../../actions";
import {connect} from "react-redux";

class EventsPage extends React.Component {

	componentDidMount() {
		this.props.getFirstPageEvents();
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	loadNextPage = async () => {
		try {
			const {pastEvents, numToSkip} = this.props;

			// let filteredCategory = this.state.filterCategory;
			// if (filteredCategory === 'all') {
			// 	filteredCategory = '';
			// }

			const newEvents = [...pastEvents];
			const response = (await axios.get(`/event/getRecentEvents?numSkip=${numToSkip}&category=`)).data;
			newEvents.push(...response.allEvents);

			this.props.dispatch({
				type: NEXT_PAGE_EVENTS_LOADED,
				payload: {
					pastEvents: newEvents,
					anotherPage: response.anotherPage,
					numToSkip: response.numToSkip
				}
			});

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	render() {

		const {anotherPage, currentEvents, pastEvents} = this.props;

		return (
			<EventsPageWrapper className="container">

				<EventsPageHeader className="row">
					<H4>Upcoming Events:</H4>
				</EventsPageHeader>
				<HeroRow>
					{
						currentEvents.map(event => (
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
						pastEvents.map(event => (
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

function mapStateToProps(state) {
	return {
		currentEvents: state.events.currentEvents,
		pastEvents: state.events.pastEvents,
		anotherPage: state.events.anotherPage,
		numToSkip: state.events.numToSkip
	}
}

function loadData(store) {
	return store.dispatch(getFirstPageEvents('all'))
}

export default {
	component: connect(mapStateToProps, { getFirstPageEvents })(EventsPage),
	loadData
};
