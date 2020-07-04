import React, {useEffect, useState} from 'react';
import axios from "../../../../utils/axios";
import {toast} from "react-toastify";
import GuidePreview from "../../../Guides/GuidePreview";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import {withRouter} from "react-router-dom";

const RecentGuides = ({ history }) => {

	const [recentGuides, setRecentGuides] = useState([]);

	useEffect(() => {

		async function getGuides() {
			try {
				const NUM_GUIDES_TO_FETCH = 2;
				const response = (await axios.get(`/guide/getNumRecentGuides?numGuides=${NUM_GUIDES_TO_FETCH}`)).data;

				setRecentGuides(response.allGuides);
			} catch (error) {
				toast.error('Error loading data.')
			}
		}

		getGuides();

	}, []);

	if (!recentGuides.length) {
		return null;
	}

	return (
		<HomePageSection dark>
			<div className="container">
				<HomePageSectionHeader>
					<H4 left color="highlight" underline>Recent Guides</H4>
					<H5
						color="highlight"
						className="seeAllLink"
						onClick={() => history.push('/guides')}
					>See All</H5>
				</HomePageSectionHeader>
				<div className="row no-gutters">
					{
						recentGuides.map(guide => (
							<GuidePreview guide={guide} key={guide._id} />
						))
					}
				</div>
			</div>
		</HomePageSection>
	)

};

export default withRouter(RecentGuides);
