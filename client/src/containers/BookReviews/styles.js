import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";
import {sizes} from "../../styles";

export const BookReviewsWrapper = styled.div`
    min-height: 80vh;
    ${clearHeader};
    
    .bookReviewHeader {
	    display: flex;
	    align-content: center;
	    justify-content: space-between;
	    
        @media only screen and (max-width: ${sizes.phone}px) {
            margin-left: 0;
            margin-right: 0;
        }
	}
	
	.bookReviewFilters {
	    display: flex;
	}

`;

export const BookReviewsEmpty = styled.div`
  padding: 12px;
`;

export const BookReviewRatingWrapper = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;

    & > * + * {
        margin-left: 8px;
    }
`;
