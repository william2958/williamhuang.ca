import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";
import {sizes} from "../../../styles";

export const EventDetailWrapper = styled.div`
	${clearHeader};
	min-height: 80vh;
	padding-top: 0;
	
	.eventContent {
		position: relative;
	}
`;

export const UpcomingEventDetailWrapper = styled.div`
	width: 100%;
	height: 55vh;
	min-height: 380px;
	max-height: 50vh;
	position: relative;
`;

export const EventDetailContentWrapper = styled.div`
	font-family: 'Georgia', serif;
    text-align: left;
    max-width: 780px !important;
    margin: 12px auto;
    
    position: relative;
    
    @media only screen and (max-width: ${sizes.phone}px) {
    	margin-bottom: 0;
    }
    
`;

export const KeyInfoBox = styled.div`
	position: absolute;
	top: 0;
	left: 24px;
	width: calc(((100% - 780px) / 2) - 48px);
	border: 2px solid ${({theme}) => theme.palette.primary};
	
	padding: 16px;
	
	ul {
		padding-left: 18px;
		margin-bottom: 0;
	}
	
	h4 {
		padding-top: 0;
	}
	
	@media only screen and (max-width: 1400px) {
    	position: relative;
    	margin: 0 15px 24px;
    	width: auto;
    	max-width: 780px !important;
    	left: 50%;
    	transform: translateX(-50%);
    	right: auto;
    	top: 24px;
    }
	
`;

export const EventExtraInfo = styled.div`
	margin: 40px auto 24px;
	padding: 0 15px;
    max-width: 780px !important;
`;

export const EventDetailContent = styled.div`
	margin-top: 24px;
`;
