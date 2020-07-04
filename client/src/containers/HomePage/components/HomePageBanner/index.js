import React, {useEffect, useState} from "react";

import axios from "../../../../utils/axios";
import {H5} from "../../../../styles/typography/Headers";
import {HomePageBannerPlaceholder, HomePageBannerWrapper} from "./styles";
import {toast} from "react-toastify";
import EventHero from "../../../Events/EventHero";
import MonthlyFiveHero from "../../../MonthlyFives/MonthlyFiveHero";
import ProjectHero from "../../../Projects/ProjectHero";

const HomePageBanner = () => {

	const [type, setType] = useState(null);
	const [highlight, setHighlight] = useState(null);

	useEffect(() => {

		async function getHighlight() {
			try {
				const response = (await axios.get('/highlight/getHighlight')).data;

				if (response && response.highlightObject) {
					setType(response.highlight.dataType);
					setHighlight(response.highlightObject)
				}
			} catch (error) {
				toast.error('Error loading highlight data.')
			}
		}

		getHighlight();

	}, []);

	let heroToRender = null;
	if (type && highlight) {
		console.log('type: ', type);
		console.log('highlight: ', highlight);
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

export default HomePageBanner;

