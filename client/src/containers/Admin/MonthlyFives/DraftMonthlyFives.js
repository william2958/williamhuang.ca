import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {ListMonthlyFivesWrapper} from "./styles";
import MonthlyFivePreview from "../../MonthlyFives/MonthlyFivePreview";

const DraftMonthlyFives = () => {

	const [draftMonthlyFives, setDraftMonthlyFives] = useState([]);

	useEffect(() => {
		async function getDraftMonthlyFives() {
			try {

				const response = (await axios.get('/monthlyFive/getMonthlyFiveAdmin?isPublished=false')).data;

				setDraftMonthlyFives(response.monthlyFives);

			} catch (e) {
				toast.error('Could not find drafts.');
			}
		}
		getDraftMonthlyFives();
	}, []);

	return (
		<ListMonthlyFivesWrapper className="container">
			<div className="row">
				{
					draftMonthlyFives.map(monthlyFive => (
						<MonthlyFivePreview key={monthlyFive._id} monthlyFive={monthlyFive} editable />
					))
				}
			</div>
		</ListMonthlyFivesWrapper>
	)

};

export default DraftMonthlyFives;
