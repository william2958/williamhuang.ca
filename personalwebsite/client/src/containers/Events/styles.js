import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";
import {sizes} from "../../styles";

export const EventsPageWrapper = styled.div`
	${clearHeader};
    min-height: 80vh;
`;

export const UpcomingEventWrapper = styled.div`
	width: 100%;
	height: 35vh;
	min-height: 380px;
	max-height: 50vh;
	position: relative;
`;

export const EventsPageHeader = styled.div`
	
    display: flex;
    align-content: center;
    justify-content: space-between;
	margin-bottom: 24px;
	    
    @media only screen and (max-width: ${sizes.phone}px) {
        margin-left: 0;
        margin-right: 0;
    }
	    
`;

export const PastEventsHeader = styled.div`
	margin-top: 40px;
    @media only screen and (max-width: ${sizes.phone}px) {
	    margin-left: 0;
	    margin-right: 0;
    }
`;
