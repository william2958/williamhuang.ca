import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {ListGuidesWrapper} from "./styles";
import GuidePreview from "../../Guides/GuidePreview";

const DraftGuides = () => {

	const [draftGuides, setDraftGuides] = useState([]);

	useEffect(() => {
		async function getDraftGuides() {
			try {

				const response = (await axios.get('/guide/getGuideAdmin?isPublished=false')).data;

				setDraftGuides(response.guides);

			} catch (e) {
				toast.error('Could not find drafts.');
			}
		}
		getDraftGuides();
	}, []);

	return (
		<ListGuidesWrapper className="container">
			<div className="row">
				{
					draftGuides.map(guide => (
						<GuidePreview guide={guide} editable key={guide._id} />
					))
				}
			</div>
		</ListGuidesWrapper>
	)

};

export default DraftGuides;
