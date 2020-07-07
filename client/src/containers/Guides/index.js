import axios from "../../utils/axios";
import {toast} from "react-toastify";
import {H4} from "../../styles/typography/Headers";
import React from "react";
import {
	GuidesPageHeader,
	GuidesPageWrapper
} from "./styles";
import GuidePreview from "./GuidePreview";
import {LoadMoreButtonContainer} from "../../styles/globalStyles";
import {getFirstPageGuides} from "../../actions";
import {connect} from "react-redux";
import {NEXT_PAGE_GUIDES_LOADED} from "../../actions/types";

class GuidesPage extends React.Component {

	componentDidMount() {
		this.props.getFirstPageGuides('all');
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
	}

	loadNextPage = async () => {
		try {
			const { guides, numToSkip } = this.props;

			const newGuides = [...guides];
			const response = (await axios.get(`/guide/getRecentGuides?numSkip=${numToSkip}`)).data;
			newGuides.push(...response.allGuides);

			this.props.dispatch({
				type: NEXT_PAGE_GUIDES_LOADED,
				guides: newGuides,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			})

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	render() {

		const { anotherPage, guides } = this.props;

		return (
			<GuidesPageWrapper className="container">

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
		anotherPage: state.guides.anotherPage,
		numToSkip: state.guides.numToSkip
	}
}

function loadData(store) {
	return store.dispatch(getFirstPageGuides('all'))
}

export default {
	component: connect(mapStateToProps, { getFirstPageGuides })(GuidesPage),
	loadData
};
