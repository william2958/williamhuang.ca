import React from 'react';
import { toast } from 'react-toastify';
import axios from '../../../utils/axios';
import GuideEditor from "./GuideEditor";

const NewGuide = ({ history }) => {

	const createGuide = async (guideData) => {

		try {
			const response = (await axios.post('/guide/createGuide', guideData)).data;
			if (response) {
				const guideId = response.guideId;
				toast.success('Created guide');
				history.push('/admin/guide/edit/' + guideId);
			} else {
				toast.error('Could not create guide.');
			}
		} catch (e) {
			toast.error('There was an error creating the guide.');
		}

	};

	const cancelCreate = () => {
		toast.success('Cancelled guide creation.');
		history.goBack();
	};

	return (
		<div>
			<GuideEditor save={createGuide} delete={cancelCreate} />
		</div>
	)

};

export default NewGuide;
