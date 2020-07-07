import React from 'react';
import {MonthlyFivePreviewContent, MonthlyFivePreviewImage, MonthlyFivePreviewTitle, MonthlyFivePreviewWrapper} from "./styles";
import {parseMonthAndYear} from "../helpers";
import {withRouter} from "react-router-dom";

const MonthlyFivePreview = ({ monthlyFive, editable, history }) => {

	const {
		title,
		heroURL,
		month,
		year,
		contentPreview
	} = monthlyFive;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/monthlyFive/edit/' + monthlyFive._id);
		} else {
			if (monthlyFive.urlString) {
				history.push('/monthlyFives/' + monthlyFive.urlString);
			} else {
				history.push('/monthlyFives/id/' + monthlyFive._id);
			}
		}
	};

	return (
		<div className="col-md-4">
			<MonthlyFivePreviewWrapper onClick={goToDetails}>
				<MonthlyFivePreviewImage bg={heroURL} />
				<MonthlyFivePreviewContent>
					<MonthlyFivePreviewTitle>{parseMonthAndYear(month, year)} - {title}</MonthlyFivePreviewTitle>
					<h5 className="metadata">{contentPreview}</h5>
				</MonthlyFivePreviewContent>
			</MonthlyFivePreviewWrapper>
		</div>
	)

};

export default withRouter(MonthlyFivePreview);
