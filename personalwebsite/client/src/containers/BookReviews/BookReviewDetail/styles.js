import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";
import {sizes} from "../../../styles";
import {getImageUrl} from "../../../utils/getImageUrl";
import {DEFAULT_BOOK_REVIEW_ICON} from "../BookReviewPreview/styles";
import {defaultShadow} from "../../../styles/shadows";

export const BookReviewDetailWrapper = styled.div`
	${clearHeader};
	min-height: 80vh;
`;

export const BookReviewDetailContentWrapper = styled.div`
	font-family: 'Georgia', serif;
    text-align: left;
    max-width: 780px !important;
    margin: 12px auto 32px;
    
    position: relative;

    display: flex;
	
	@media only screen and (max-width: ${sizes.phone}px) {
		flex-direction: column;
		margin-bottom: 0;
	}
	
`;

export const BookReviewDetailImage = styled.div`
	
	width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin-right: 32px;
    
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_BOOK_REVIEW_ICON}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    ${defaultShadow};
    
    @media only screen and (max-width: ${sizes.phone}px) {
    	margin: 0 auto;
    	padding-top: 100%;
    	width: 100%;
    	position: relative;
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_BOOK_REVIEW_ICON}); 
    }

`;

export const BookReviewDetailContent = styled.div`
	margin-top: 12px;
	
	.ratingWrapper {
		position: absolute;
		top: 12px;
		right: 0;
	}
	
	.bookReviewMetadata {
		margin-top: 12px;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
	
		margin-bottom: 12px;
	
		.ratingWrapper {
			position: relative;
			top: 0;
		}
		
	}
`;
