import styled from 'styled-components';
import {sizes} from "../../styles";
import {clearHeader} from "../../styles/globalStyles";

export const BlogsPageWrapper = styled.div`
	${clearHeader};
    min-height: 80vh;
`;

export const BlogsPageHeader = styled.div`
	
    display: flex;
    align-content: center;
    justify-content: space-between;
    
    @media only screen and (max-width: ${sizes.phone}px) {
	    margin-left: 0;
	    margin-right: 0;
    }

`;

