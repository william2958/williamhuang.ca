import styled from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
import {hoverShadow} from "../../../styles/shadows";
export const DEFAULT_BOOK_REVIEW_ICON = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const BookReviewPreviewWrapper = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    text-align: left;

    max-width: 940px;

    border-radius: 5px;
    
    h6 {
    	margin-top: 4px;
    }
    
    @media only screen and (max-width: ${sizes.tablet}px) {
		flex-direction: row;	
	}
`;

export const BookPreviewCover = styled.div`

	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_BOOK_REVIEW_ICON}); 
	
    padding-top: 100%;
    width: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    ${hoverShadow};
	
    @media only screen and (max-width: ${sizes.tablet}px) {
		height: 130px;
		width: 130px;
		min-width: 130px;
		padding-top: 0;
		margin-right: 12px;
	}
	
	
    @media only screen and (max-width: ${sizes.phone}px) {
		background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_BOOK_REVIEW_ICON});
		height: 100px;
		width: 100px;
		min-width: 100px;
	}
`;

export const BookPreviewContent = styled.div`
    width: 100%;
    position: relative;
`;

export const BookPreviewTypeAndRating = styled.div`
	
    margin: 12px 0 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h6 {
        margin-top: 0;
    }
    
    @media only screen and (max-width: ${sizes.tablet}px) {
		margin-top: 0;
	    align-items: flex-start; 
	}
    
`;
