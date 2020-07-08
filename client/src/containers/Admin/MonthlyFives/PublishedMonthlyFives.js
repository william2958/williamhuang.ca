import React, {useEffect} from 'react';
import {ListMonthlyFivesWrapper} from "./styles";
import MonthlyFivePreview from "../../MonthlyFives/MonthlyFivePreview";
import {connect} from "react-redux";
import {getAdminMonthlyFive} from "../../../actions";

const PublishedMonthlyFives = ({ published, getAdminMonthlyFive }) => {

	useEffect(() => {
		getAdminMonthlyFive(true);
	}, []);

	return (
		<ListMonthlyFivesWrapper className="container">
			<div className="row">
				{
					published.map(monthlyFive => (
						<MonthlyFivePreview key={monthlyFive._id} monthlyFive={monthlyFive} editable />
					))
				}
			</div>
		</ListMonthlyFivesWrapper>
	)

};

const mapStateToProps = (state) => ({
	published: state.monthlyFives.publishedMonthlyFives
})

export default {
	component: connect(mapStateToProps, { getAdminMonthlyFive })(PublishedMonthlyFives),
	loadData: ({ dispatch }) => dispatch(getAdminMonthlyFive(true))
};
