import {H4} from "../../styles/typography/Headers";
import React from "react";
import {
	EventsPageHeader,
	EventsPageWrapper, PastEventsHeader, UpcomingEventWrapper
} from "./styles";
import EventPreview from "./EventPreview";
import {GutteredRow, HeroRow, LoadMoreButtonContainer} from "../../styles/globalStyles";
import EventHero from "./EventHero";
import {getFirstPageEvents, getNextPageEvents} from "../../actions";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

class EventsPage extends React.Component {

	componentDidMount() {
		this.props.getFirstPageEvents();
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	loadNextPage = () => {
		this.props.getNextPageEvents()
	};

	render() {

		const {anotherPage, currentEvents, pastEvents} = this.props;

		return (
			<EventsPageWrapper className="container">

				<Helmet>
					<title>{`Events | WH`}</title>
					<meta property="og:title" content={`Events | WH`} />
					<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
					<meta property="description" content="Explore my blog, reviews, guides, and more." />
					<meta property="og:url" content={`https://williamhuang.ca/events`} />
				</Helmet>

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
		anotherPage: state.events.anotherPage
	}
}

function loadData(store) {
	return store.dispatch(getFirstPageEvents('all'))
}

export default {
	component: connect(mapStateToProps, { getFirstPageEvents, getNextPageEvents })(EventsPage),
	loadData
};
