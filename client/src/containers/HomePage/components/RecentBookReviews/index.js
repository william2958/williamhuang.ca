import React, {useEffect, useState} from 'react';
import ReactGA from 'react-ga';
import axios from "../../../../utils/axios";
import {toast} from "react-toastify";
import BookReviewPreview from "../../../BookReviews/BookReviewPreview";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import {sizes} from "../../../../styles";
import {withRouter} from "react-router-dom";

const RecentBookReviews = ({ history }) => {

	const [recentBookReviews, setRecentBookReviews] = useState([]);

	useEffect(() => {

		async function getBookReviews() {
			try {
				let numReviews = 4;
				if (window.innerWidth <= sizes.phone) {
					numReviews = 2;
				}
				const response = (await axios.get(`/bookReview/getNumRecentBookReviews?numReviews=${numReviews}`)).data;

				setRecentBookReviews(response.allReviews);
			} catch (error) {
				toast.error('Error loading data.')
			}
		}

		getBookReviews();

	}, []);

	const viewAllBookReviews = () => {
		ReactGA.event({
			category: 'Home',
			action: 'View All Book Reviews',
			transport: 'beacon'
		});
		history.push('/bookReviews')
	};

	if (!recentBookReviews.length) {
		return null;
	}

	return (
		<HomePageSection className="container">
			<HomePageSectionHeader>
				<H4 left underline>Latest Book Reviews</H4>
				<H5 className="seeAllLink" onClick={viewAllBookReviews}>See All</H5>
			</HomePageSectionHeader>
			<div className="row no-gutters">
				{
					recentBookReviews.map(bookReview => (
						<BookReviewPreview bookReview={bookReview} key={bookReview._id} />
					))
				}
			</div>
		</HomePageSection>
	)

};

export default withRouter(RecentBookReviews);
