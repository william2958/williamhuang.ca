import styled from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
export const DEFAULT_BOOK_REVIEW_ICON = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const BookReviewPreviewWrapper = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    text-align: left;

    max-width: 940px;

    border-radius: 5px;
    cursor: pointer;
    
    h6 {
    	margin-top: 4px;
    }
`;

export const BookPreviewCover = styled.div`

	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_BOOK_REVIEW_ICON}); 
	
    padding-top: 100%;
    width: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media only screen and (max-width: ${sizes.phone}px) {
		background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_BOOK_REVIEW_ICON});
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
    
`;
