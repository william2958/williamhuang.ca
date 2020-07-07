import React, {useEffect} from 'react';
import {ListGuidesWrapper} from "./styles";
import GuidePreview from "../../Guides/GuidePreview";
import {connect} from "react-redux";
import {getAdminGuide} from "../../../actions";

const PublishedGuides = ({ published, getAdminGuide }) => {

	useEffect(() => {
		getAdminGuide(true);
	}, []);

	return (
		<ListGuidesWrapper className="container">
			<div className="row">
				{
					published.map(guide => (
						<GuidePreview guide={guide} editable key={guide._id} />
					))
				}
			</div>
		</ListGuidesWrapper>
	)

};

const mapStateToProps = (state) => ({
	published: state.guides.publishedGuides
})

export default {
	component: connect(mapStateToProps, { getAdminGuide })(PublishedGuides),
	loadData: ({ dispatch }) => dispatch(getAdminGuide(true))
};
