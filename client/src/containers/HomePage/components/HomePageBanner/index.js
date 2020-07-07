import React, {useEffect} from "react";
import {H5} from "../../../../styles/typography/Headers";
import {HomePageBannerPlaceholder, HomePageBannerWrapper} from "./styles";
import EventHero from "../../../Events/EventHero";
import MonthlyFiveHero from "../../../MonthlyFives/MonthlyFiveHero";
import ProjectHero from "../../../Projects/ProjectHero";
import {getHomeHighlight} from "../../../../actions/homeActions";
import {connect} from "react-redux";

const HomePageBanner = ({ type, highlight, getHomeHighlight }) => {

	useEffect(() => {

		getHomeHighlight();

	}, []);

	let heroToRender;
	if (type && highlight) {
		switch (type) {
			case 'event':
				heroToRender = <EventHero event={highlight} fit />;
				break;
			case 'monthlyFive':
				heroToRender = <MonthlyFiveHero monthlyFive={highlight} fit />;
				break;
			case 'project':
				heroToRender = <ProjectHero project={highlight} fit />
				break;
			default:
				heroToRender = <HomePageBannerPlaceholder />
		}
	} else {
		heroToRender = <HomePageBannerPlaceholder />
	}

	return (
		<HomePageBannerWrapper bg={null}>
			<div className="highlightBadge">
				<H5 color="#fff">Highlight</H5>
			</div>
			{heroToRender}
		</HomePageBannerWrapper>
	)

};

const mapStateToProps = (state) => ({
	type: state.home.type,
	highlight: state.home.highlight
})

export default connect(mapStateToProps, { getHomeHighlight })(HomePageBanner);

