import React, {useEffect} from 'react';
// import ReactGA from 'react-ga';
import BookReviewPreview from "../../../BookReviews/BookReviewPreview";
import {HomePageSection, HomePageSectionHeader} from "../../styles";
import {H4, H5} from "../../../../styles/typography/Headers";
import {withRouter} from "react-router-dom";
import {getNumRecentBookReviews} from "../../../../actions";
import {connect} from "react-redux";

const RecentBookReviews = ({ history, getNumRecentBookReviews, recentBookReviews }) => {

	useEffect(() => {

		getNumRecentBookReviews(4);

	}, []);

	const viewAllBookReviews = () => {
		// ReactGA.event({
		// 	category: 'Home',
		// 	action: 'View All Book Reviews',
		// 	transport: 'beacon'
		// });
		history.push('/bookReviews')
	};

	if (!recentBookReviews.length) {
		return null;
	}

	return (
		<HomePageSection dark>
			<div className="container">
				<HomePageSectionHeader>
					<H4 left underline color="highlight">Latest Book Reviews</H4>
					<H5 uppercase className="seeAllLink" color="highlight" onClick={viewAllBookReviews}>See All</H5>
				</HomePageSectionHeader>
				<div className="row no-gutters">
					{
						recentBookReviews.map(bookReview => (
							<BookReviewPreview light bookReview={bookReview} key={bookReview._id} />
						))
					}
				</div>
			</div>
		</HomePageSection>
	)

};

const mapStateToProps = (state) => ({
	recentBookReviews: state.bookReviews.recentBookReviews
})

export default connect(mapStateToProps, { getNumRecentBookReviews })(withRouter(RecentBookReviews));
