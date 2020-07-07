import React, {useEffect} from 'react';
import {ListMonthlyFivesWrapper} from "./styles";
import MonthlyFivePreview from "../../MonthlyFives/MonthlyFivePreview";
import {connect} from "react-redux";
import {getAdminMonthlyFive} from "../../../actions";

const DraftMonthlyFives = ({ draft, getAdminMonthlyFive }) => {
	useEffect(() => {
		getAdminMonthlyFive(false)
	}, []);

	return (
		<ListMonthlyFivesWrapper className="container">
			<div className="row">
				{
					draft.map(monthlyFive => (
						<MonthlyFivePreview key={monthlyFive._id} monthlyFive={monthlyFive} editable />
					))
				}
			</div>
		</ListMonthlyFivesWrapper>
	)

};

const mapStateToProps = (state) => ({
	draft: state.monthlyFives.draftMonthlyFives
})

export default {
	component: connect(mapStateToProps, { getAdminMonthlyFive })(DraftMonthlyFives),
	loadData: ({ dispatch }) => dispatch(getAdminMonthlyFive(false))
};
