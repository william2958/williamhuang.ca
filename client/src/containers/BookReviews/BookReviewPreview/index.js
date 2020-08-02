import React from 'react';

import TypeLabel from "../../../components/TypeLabel";
import {H5} from "../../../styles/typography/Headers";
import {BookPreviewContent, BookPreviewCover, BookPreviewTypeAndRating, BookReviewPreviewWrapper} from "./styles";
import {BodyParagraph} from "../../../styles/typography/P";
import {BookReviewRatingWrapper} from "../styles";
import {withRouter} from "react-router-dom";
import SvgIcon from "../../../components/SvgIcon";

const BookReviewPreview = ({bookReview, editable, history, light}) => {

	const {title, coverURL, category, contentPreview, author, recommended, rating} = bookReview;

	const goToDetails = () => {
		if (editable) {
			history.push('/admin/bookReview/edit/' + bookReview._id);
		} else {

			if (bookReview.urlString) {
				history.push('/bookReviews/' + bookReview.urlString);
			} else {
				history.push('/bookReviews/id/' + bookReview._id);
			}
		}
	};

	const color = light ? 'highlight' : 'primary';

	return (
		<div className="col-md-3">
			<BookReviewPreviewWrapper>
				<BookPreviewCover bg={coverURL} onClick={goToDetails} />
				<BookPreviewContent>
					<BookPreviewTypeAndRating>
						<TypeLabel type={category} author={author}/>
						<BookReviewRatingWrapper>
							{recommended && (<SvgIcon icon='Star' title="Highly Recommended" size={16}/>)}
							<H5 color={color}>{rating}&nbsp;/&nbsp;5</H5>
						</BookReviewRatingWrapper>
					</BookPreviewTypeAndRating>
					<H5 color={color}>{title}</H5>
					{/*<H6 color="secondary">{author}</H6>*/}
					<BodyParagraph color={color}>{contentPreview}</BodyParagraph>

				</BookPreviewContent>
			</BookReviewPreviewWrapper>
		</div>
	)

};

export default withRouter(BookReviewPreview);
