import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";
import {sizes} from "../../styles";
import {hoverShadow} from "../../styles/shadows";

export const MonthlyFivesPageWrapper = styled.div`
	${clearHeader};
    min-height: 80vh;
    
    // @media only screen and (max-width: ${sizes.phone}px) {
    // 	padding-top: 0;
    // }
`;

export const MonthlyFivesPageHeader = styled.div`

    display: flex;
    align-content: center;
    justify-content: space-between;
	    
    @media only screen and (max-width: ${sizes.phone}px) {
	    margin-left: 0;
	    margin-right: 0;
	    
	    .headerDescription {
	    	max-width: 60%;
	    }
	    
	    .headerDropdown {
	    	margin-top: 5px;
	    }
    }
`;

export const MostRecentMonthlyFiveWrapper = styled.div`
	margin-bottom: 24px;
	cursor: pointer;
	margin-left: -15px;
	margin-right: -15px;
	
	height: 40vh;
	min-height: 250px;
	max-height: 350px;
	position: relative;
	
	${hoverShadow};
	
	@media only screen and (max-width: ${sizes.phone}px) {
		h4 {
			margin-left: 12px;
		}
	}
`;

export const MonthlyFiveSpotlightPlaceholder = styled.div`
	margin-top: 12px;
	margin-bottom: 24px;
	width: 100%;
	height: 40vh;
	min-height: 250px;
	max-height: 350px;
`;
