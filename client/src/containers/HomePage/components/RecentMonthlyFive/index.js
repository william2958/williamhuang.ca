import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import ReactGA from "react-ga";
import {withRouter} from "react-router-dom";

import axios from "../../../../utils/axios";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import MonthlyFiveHero from "../../../MonthlyFives/MonthlyFiveHero";
import {parseMonthAndYear} from "../../../MonthlyFives/helpers";
import {HomeMonthlyFiveHeroWrapper} from "./styles";

const RecentMonthlyFive = ({ history }) => {

	const [recentMonthlyFive, setRecentMonthlyFive] = useState(null);

	useEffect(() => {

		async function getMonthlyFive() {
			try {
				const response = (await axios.get(`/monthlyFive/getNumRecentMonthlyFives?numMonthlyFives=1`)).data;

				if (response.allMonthlyFives.length)
					setRecentMonthlyFive(response.allMonthlyFives[0]);
			} catch (error) {
				toast.error('Could not load data.')
			}
		}

		getMonthlyFive()

	}, []);

	const viewAllEvents = () => {
		ReactGA.event({
			category: 'Home',
			action: 'View All Monthly Fives',
			transport: 'beacon'
		});
		history.push('/monthlyFives')
	};

	if (!recentMonthlyFive) {
		return null;
	}

	return (
		<HomePageSection className="container">
			<HomePageSectionHeader>
				<H4 left underline>{parseMonthAndYear(recentMonthlyFive.month, recentMonthlyFive.year)}</H4>
				<H5 className="seeAllLink" onClick={viewAllEvents}>See All</H5>
			</HomePageSectionHeader>
			<HomeMonthlyFiveHeroWrapper>
				<MonthlyFiveHero monthlyFive={recentMonthlyFive} noTitle fit />
			</HomeMonthlyFiveHeroWrapper>
		</HomePageSection>
	)

};

export default withRouter(RecentMonthlyFive);
