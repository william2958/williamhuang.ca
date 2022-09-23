import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";
import {sizes} from "../../../styles";

export const MonthlyFiveDetailWrapper = styled.div`
	${clearHeader};
	min-height: 80vh;
`;

export const MonthlyFiveDetailContentWrapper = styled.div`
	font-family: 'Georgia', serif;
    text-align: left;
    max-width: 780px !important;
    margin: 12px auto;
    
    position: relative;
    
    @media only screen and (max-width: ${sizes.phone}px) {
    	margin-bottom: 0;
    }
    
`;

export const MonthlyFiveDetailContent = styled.div`
	margin-top: 24px;
`;
