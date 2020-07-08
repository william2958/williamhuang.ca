import React, {useEffect} from 'react';
import GuidePreview from "../../../Guides/GuidePreview";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import {withRouter} from "react-router-dom";
import {getNumRecentGuides} from "../../../../actions";
import {connect} from "react-redux";

const RecentGuides = ({ history, getNumRecentGuides, recentGuides }) => {

	useEffect(() => {

		getNumRecentGuides(4)

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

const mapStateToProps = (state) => ({
	recentGuides: state.guides.recentGuides
})

export default connect(mapStateToProps, { getNumRecentGuides })(withRouter(RecentGuides));
