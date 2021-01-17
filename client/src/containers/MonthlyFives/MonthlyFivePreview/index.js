import React from 'react';
import {MonthlyFivePreviewContent, MonthlyFivePreviewImage, MonthlyFivePreviewTitle, MonthlyFivePreviewWrapper} from "./styles";
import {parseMonthAndYear} from "../helpers";
import {withRouter} from "react-router-dom";

const MonthlyFivePreview = ({ monthlyFive, editable, history, fullWidth=false }) => {

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
				history.push('/monthlyBullets/' + monthlyFive.urlString);
			} else {
				history.push('/monthlyBullets/id/' + monthlyFive._id);
			}
		}
	};

	return (
		<div className={fullWidth ? '' : 'col-md-6'}>
			<MonthlyFivePreviewWrapper onClick={goToDetails} fullWidth>
				{/*<MonthlyFivePreviewImage bg={heroURL} onClick={goToDetails} />*/}
				<MonthlyFivePreviewContent>
					<MonthlyFivePreviewTitle>{parseMonthAndYear(month, year)}</MonthlyFivePreviewTitle>
					<p className="metadata">{contentPreview}</p>
				</MonthlyFivePreviewContent>
			</MonthlyFivePreviewWrapper>
		</div>
	)

};

export default withRouter(MonthlyFivePreview);
