import React, {useEffect} from 'react';
import {ListGuidesWrapper} from "./styles";
import GuidePreview from "../../Guides/GuidePreview";
import {connect} from "react-redux";
import {getAdminGuide} from "../../../actions";

const DraftGuides = ({ draft, getAdminGuide }) => {

	useEffect(() => {
		getAdminGuide(false)
	}, []);

	return (
		<ListGuidesWrapper className="container">
			<div className="row">
				{
					draft.map(guide => (
						<GuidePreview guide={guide} editable key={guide._id} />
					))
				}
			</div>
		</ListGuidesWrapper>
	)

};

const mapStateToProps = (state) => ({
	draft: state.guides.draftGuides
})

export default {
	component: connect(mapStateToProps, { getAdminGuide })(DraftGuides),
	loadData: ({ dispatch }) => dispatch(getAdminGuide(false))
};
