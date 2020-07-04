import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {ListMonthlyFivesWrapper} from "./styles";
import MonthlyFivePreview from "../../MonthlyFives/MonthlyFivePreview";

const PublishedMonthlyFives = () => {

	const [publishedMonthlyFives, setPublishedMonthlyFives] = useState([]);

	useEffect(() => {
		async function getPublishedMonthlyFives() {
			try {

				const response = (await axios.get('/monthlyFive/getMonthlyFiveAdmin?isPublished=true')).data;

				setPublishedMonthlyFives(response.monthlyFives);

			} catch (e) {
				toast.error('Could not find published monthlyFives.');
			}
		}
		getPublishedMonthlyFives();
	}, []);

	return (
		<ListMonthlyFivesWrapper className="container">
			<div className="row">
				{
					publishedMonthlyFives.map(monthlyFive => (
						<MonthlyFivePreview key={monthlyFive._id} monthlyFive={monthlyFive} editable />
					))
				}
			</div>
		</ListMonthlyFivesWrapper>
	)

};

export default PublishedMonthlyFives;
