import React from 'react';
import { toast } from 'react-toastify';
import axios from '../../../utils/axios';
import MonthlyFiveEditor from "./MonthlyFiveEditor";

const NewMonthlyFive = ({ history }) => {

	const createMonthlyFive = async (monthlyFiveData) => {

		try {
			const response = (await axios.post('/monthlyFive/createMonthlyFive', monthlyFiveData)).data;
			if (response) {
				const monthlyFiveId = response.monthlyFiveId;
				toast.success('Created monthlyFive');
				history.push('/admin/monthlyFive/edit/' + monthlyFiveId);
			} else {
				toast.error('Could not create monthlyFive.');
			}
		} catch (e) {
			toast.error('There was an error creating the monthlyFive: ');
		}

	};

	const cancelCreate = () => {
		toast.success('Cancelled monthlyFive creation.');
		history.goBack();
	};

	return (
		<div>
			<MonthlyFiveEditor save={createMonthlyFive} delete={cancelCreate} />
		</div>
	)

};

export default NewMonthlyFive;
