import {H4, H6} from "../../styles/typography/Headers";
import React from "react";
import {
	MonthlyFivesPageHeader,
	MonthlyFivesPageWrapper,
	MonthlyFiveSpotlightPlaceholder,
	MostRecentMonthlyFiveWrapper
} from "./styles";
import MonthlyFivePreview from "./MonthlyFivePreview";
import {VALID_YEARS} from "../../constants";
import Dropdown from "../../components/Dropdown";
import {GutteredRow} from "../../styles/globalStyles";
import MonthlyFiveHero from "./MonthlyFiveHero";
import {getYear} from "../../actions";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import {BookReviewsWrapper} from "../BookReviews/styles";

class MonthlyFivesPage extends React.Component {

	state = {
		selectedYear: VALID_YEARS[0]
	};

	componentDidMount() {
		this.props.getYear(this.state.selectedYear);
		window.scrollTo(0, 0);
	}

	selectYear = (year) => {
		this.props.getYear(year);
	};

	render() {

		const {
			selectedYear
		} = this.state;
		const {
			monthlyFives,
			mostRecentMonthlyFive
		} = this.props;

		return (
			<MonthlyFivesPageWrapper className="container">
				<Helmet>
					<title>{`Monthly Fives | WH`}</title>
					<meta property="og:title" content={`Monthly Fives | WH`} />
					<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
					<meta property="description" content="Explore my blog, reviews, guides, and more." />
					<meta property="og:url" content={`https://williamhuang.ca/monthlyFives`} />
				</Helmet>

				{mostRecentMonthlyFive ? (
					<MostRecentMonthlyFiveWrapper>
						<MonthlyFiveHero monthlyFive={mostRecentMonthlyFive} fit />
					</MostRecentMonthlyFiveWrapper>
				) : (
					<>
						<H4> </H4>
						<MonthlyFiveSpotlightPlaceholder />
					</>
				)}

				<MonthlyFivesPageHeader className="row">
					<div className="headerDescription">
						<H4>The Monthly Five</H4>
						<H6 color="secondary">No structure, no template. Just five things, every month. Enjoy :)</H6>
					</div>
					<div className="headerDropdown">
						<Dropdown value={selectedYear} options={VALID_YEARS} onChange={this.selectYear} />
					</div>
				</MonthlyFivesPageHeader>
				<GutteredRow className="row no-gutters">
					{
						monthlyFives.map(monthlyFive => (
							<MonthlyFivePreview monthlyFive={monthlyFive} key={monthlyFive._id} />
						))
					}
				</GutteredRow>
			</MonthlyFivesPageWrapper>
		)
	}

}

function mapStateToProps(state) {
	return {
		monthlyFives: state.monthlyFives.monthlyFives,
		mostRecentMonthlyFive: state.monthlyFives.mostRecentMonthlyFive
	}
}

function loadData(store) {
	return store.dispatch(getYear(VALID_YEARS[0]))
}

export default {
	component: connect(mapStateToProps, { getYear })(MonthlyFivesPage),
	loadData
};
