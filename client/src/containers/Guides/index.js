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

class GuidesPage extends React.Component {

	state = {
		guides: [],
		anotherPage: false,
		numToSkip: 0,
		filterCategory: 'all'
	};

	componentDidMount() {
		this.getFirstPage();
		window.scrollTo(0, 0);
	}

	getFirstPage = async () => {
		try {

			const response = (await axios.get(`/guide/getRecentGuides`)).data;

			this.setState({
				guides: response.allGuides,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			})

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	loadNextPage = async () => {
		try {
			const { guides, numToSkip } = this.state;

			const newGuides = [...guides];
			const response = (await axios.get(`/guide/getRecentGuides?numSkip=${numToSkip}`)).data;
			newGuides.push(...response.allGuides);

			this.setState({
				guides: newGuides,
				anotherPage: response.anotherPage,
				numToSkip: response.numToSkip
			});

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	render() {

		const { anotherPage } = this.state;

		return (
			<GuidesPageWrapper className="container">

				<GuidesPageHeader className="row">
					<div className="col-sm-6">
						<H4>All Guides</H4>
					</div>
				</GuidesPageHeader>
				<div className="guidesRow">
					{
						this.state.guides.map(guide => (
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

export default GuidesPage;
