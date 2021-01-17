import {H4} from "../../styles/typography/Headers";
import React from "react";
import {
	MonthlyFivesPageHeader,
	MonthlyFivesPageWrapper,
	MonthlyRecapList,
} from "./styles";
import MonthlyFivePreview from "./MonthlyFivePreview";
import {VALID_YEARS} from "../../constants";
import Dropdown from "../../components/Dropdown";
import {getYear} from "../../actions";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import {LeadParagraph} from "../../styles/typography/P";

class MonthlyFivesPage extends React.Component {

	state = {
		selectedYear: VALID_YEARS[0]
	};

	componentDidMount() {
		this.props.getYear(this.state.selectedYear);
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
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
			// mostRecentMonthlyFive
		} = this.props;

		return (
			<MonthlyFivesPageWrapper className="container">
				<Helmet>
					<title>{`Monthly Recap | WH`}</title>
					<meta property="og:title" content={`Monthly Recap | WH`} />
					<meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
					<meta property="description" content="Explore my blog, reviews, guides, and more." />
					<meta property="og:url" content={`https://williamhuang.ca/monthlyBullets`} />
				</Helmet>

				{/*{mostRecentMonthlyFive ? (*/}
				{/*	<MostRecentMonthlyFiveWrapper>*/}
				{/*		<MonthlyFiveHero monthlyFive={mostRecentMonthlyFive} fit noTitle />*/}
				{/*	</MostRecentMonthlyFiveWrapper>*/}
				{/*) : (*/}
				{/*	<>*/}
				{/*		<H4> </H4>*/}
				{/*		<MonthlyFiveSpotlightPlaceholder />*/}
				{/*	</>*/}
				{/*)}*/}

				<div className="row">
					<MonthlyFivesPageHeader className="col-sm-6">
						<div className="headerDescription">
							<H4>Monthly Bullets</H4>
							<LeadParagraph>Once a month I'll share a few things I think are great.</LeadParagraph>
						</div>
						<div className="headerDropdown">
							<Dropdown value={selectedYear} options={VALID_YEARS} onChange={this.selectYear} />
						</div>
					</MonthlyFivesPageHeader>
				</div>
				<MonthlyRecapList>
					{
						monthlyFives.map(monthlyFive => (
							<MonthlyFivePreview monthlyFive={monthlyFive} key={monthlyFive._id} />
						))
					}
				</MonthlyRecapList>
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
