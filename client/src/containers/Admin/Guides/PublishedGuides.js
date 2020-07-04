import React, {useEffect, useState} from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify'
import {ListGuidesWrapper} from "./styles";
import GuidePreview from "../../Guides/GuidePreview";

const PublishedGuides = () => {

	const [publishedGuides, setPublishedGuides] = useState([]);

	useEffect(() => {
		async function getPublishedGuides() {
			try {

				const response = (await axios.get('/guide/getGuideAdmin?isPublished=true')).data;

				setPublishedGuides(response.guides);

			} catch (e) {
				toast.error('Could not find published guides.');
			}
		}
		getPublishedGuides();
	}, []);

	return (
		<ListGuidesWrapper className="container">
			<div className="row">
				{
					publishedGuides.map(guide => (
						<GuidePreview guide={guide} editable key={guide._id} />
					))
				}
			</div>
		</ListGuidesWrapper>
	)

};

export default PublishedGuides;
