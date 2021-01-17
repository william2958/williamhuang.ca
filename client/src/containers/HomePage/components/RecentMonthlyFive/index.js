import React, {useEffect} from 'react';
// import ReactGA from "react-ga";
import {withRouter} from "react-router-dom";

import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import MonthlyFiveHero from "../../../MonthlyFives/MonthlyFiveHero";
import {parseMonthAndYear} from "../../../MonthlyFives/helpers";
import {HomeMonthlyFiveHeroWrapper} from "./styles";
import {connect} from "react-redux";
import {getNumRecentMonthlyFives} from "../../../../actions";

const RecentMonthlyFive = ({ history, getNumRecentMonthlyFives, recentMonthlyFive }) => {

	useEffect(() => {

		getNumRecentMonthlyFives()

	}, []);

	const viewAllEvents = () => {
		// ReactGA.event({
		// 	category: 'Home',
		// 	action: 'View All Monthly Fives',
		// 	transport: 'beacon'
		// });
		history.push('/monthlyRecap')
	};

	if (!recentMonthlyFive) {
		return null;
	}

	return (
		<HomePageSection className="container">
			<HomePageSectionHeader>
				<H4 left underline>{parseMonthAndYear(recentMonthlyFive.month, recentMonthlyFive.year)}</H4>
				<H5 uppercase className="seeAllLink" onClick={viewAllEvents}>See All</H5>
			</HomePageSectionHeader>
			<HomeMonthlyFiveHeroWrapper>
				<MonthlyFiveHero monthlyFive={recentMonthlyFive} noTitle fit />
			</HomeMonthlyFiveHeroWrapper>
		</HomePageSection>
	)

};

const mapStateToProps = (state) => ({
	recentMonthlyFive: state.monthlyFives.recentMonthlyFive
})

export default connect(mapStateToProps, { getNumRecentMonthlyFives })(withRouter(RecentMonthlyFive));

