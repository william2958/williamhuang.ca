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
import MonthlyFivePreview from "../../../MonthlyFives/MonthlyFivePreview";

const RecentMonthlyFive = ({ history, getNumRecentMonthlyFives, recentMonthlyFive }) => {

	useEffect(() => {

		getNumRecentMonthlyFives(3)

	}, []);

	const viewAllEvents = () => {
		// ReactGA.event({
		// 	category: 'Home',
		// 	action: 'View All Monthly Fives',
		// 	transport: 'beacon'
		// });
		history.push('/monthlyBullets')
	};

	if (!recentMonthlyFive) {
		return null;
	}

	return (
		<HomePageSection className="container">
			<HomePageSectionHeader>
				<H4 left underline>Monthly Bullets</H4>
				<H5 uppercase className="seeAllLink" onClick={viewAllEvents}>See All</H5>
			</HomePageSectionHeader>
			<HomeMonthlyFiveHeroWrapper>
				{recentMonthlyFive.map(monthlyBullets => (
					<MonthlyFivePreview
						key={monthlyBullets._id}
						monthlyFive={monthlyBullets}
						fullWidth
					/>
				))}
				{/*<MonthlyFiveHero monthlyFive={recentMonthlyFive} noTitle fit />*/}
			</HomeMonthlyFiveHeroWrapper>
		</HomePageSection>
	)

};

const mapStateToProps = (state) => ({
	recentMonthlyFive: state.monthlyFives.recentMonthlyFive
})

export default connect(mapStateToProps, { getNumRecentMonthlyFives })(withRouter(RecentMonthlyFive));

