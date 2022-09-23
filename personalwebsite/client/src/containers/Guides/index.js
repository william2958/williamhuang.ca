import {H4} from "../../styles/typography/Headers";
import React from "react";
import {
	GuidesPageHeader,
	GuidesPageWrapper
} from "./styles";
import GuidePreview from "./GuidePreview";
import {LoadMoreButtonContainer} from "../../styles/globalStyles";
import {getFirstPageGuides, getNextPageGuides} from "../../actions";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

class GuidesPage extends React.Component {

	componentDidMount() {
		this.props.getFirstPageGuides('all');
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	loadNextPage = () => {
		this.props.getNextPageGuides();
	};

	render() {

		const { anotherPage, guides } = this.props;

		return (
			<GuidesPageWrapper className="container">

				<Helmet>
					<title>{`Guides | WH`}</title>
					<meta property="og:title" content={`Guides | WH`} />
					<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
					<meta property="description" content="Explore my blog, reviews, guides, and more." />
					<meta property="og:url" content={`https://williamhuang.ca/guides`} />
				</Helmet>

				<GuidesPageHeader className="row">
					<div className="col-sm-6">
						<H4>All Guides</H4>
					</div>
				</GuidesPageHeader>
				<div className="guidesRow">
					{
						guides.map(guide => (
							<GuidePreview guide={guide} key={guide._id} />
						))
					}
				</div>
				{anotherPage && (
					<LoadMoreButtonContainer>
						<button onClick={this.loadNextPage}>Load More</button>
					</LoadMoreButtonContainer>
				)}
			</GuidesPageWrapper>
		)
	}

}

function mapStateToProps(state) {
	return {
		guides: state.guides.guides,
		anotherPage: state.guides.anotherPage
	}
}

function loadData(store) {
	return store.dispatch(getFirstPageGuides('all'))
}

export default {
	component: connect(mapStateToProps, { getFirstPageGuides, getNextPageGuides })(GuidesPage),
	loadData
};
