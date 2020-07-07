import React from 'react';
import {H4, H5, H6} from "../../../styles/typography/Headers";
import {
	MonthlyFiveHeroWrapper, MonthlyFiveSpotlightContent, MonthlyFiveSpotlightImage,
} from "./styles";

import {parseMonthAndYear} from "../helpers";
import {withRouter} from "react-router-dom";

const MonthlyFiveHero = ({ monthlyFive, editable, fit, noTitle, history }) => {

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/monthlyFives/edit/' + monthlyFive._id);
		} else {
			if (monthlyFive.urlString) {
				history.push('/monthlyFives/' + monthlyFive.urlString);
			} else {
				history.push('/monthlyFives/id/' + monthlyFive._id);
			}
		}
	};

	return (
		<MonthlyFiveHeroWrapper onClick={goToDetails} fit={fit}>
			{!noTitle && <H4>{parseMonthAndYear(monthlyFive.month, monthlyFive.year)}</H4>}
			<MonthlyFiveSpotlightImage bg={monthlyFive.heroURL} fit={fit}>
				<MonthlyFiveSpotlightContent>
					<H5 color="highlight">{monthlyFive.title}</H5>
					<H6 color="secondary">{monthlyFive.contentPreview}</H6>
				</MonthlyFiveSpotlightContent>
			</MonthlyFiveSpotlightImage>
		</MonthlyFiveHeroWrapper>
	)

};

export default withRouter(MonthlyFiveHero);
