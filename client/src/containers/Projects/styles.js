import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";
import {sizes} from "../../styles";

export const ProjectsPageWrapper = styled.div`
	${clearHeader};
    min-height: 80vh;
    
    @media only screen and (max-width: ${sizes.phone}px) {
	    .spotlightTitle {
	        margin-left: 12px;
	    }
    }
`;

export const ProjectsPageHeader = styled.div`
	
	    display: flex;
	    align-content: center;
	    justify-content: space-between;
	    
	    @media only screen and (max-width: ${sizes.phone}px) {
	    	margin-left: 0;
	    	margin-right: 0;
	    }
	    
`;

export const ProjectSpotlightPlaceholder = styled.div`
	margin-top: 12px;
	margin-bottom: 24px;
	width: 100%;
	height: 30vh;
`;

export const ProjectHeroWrapper = styled.div`
	margin-top: 12px;
	margin-bottom: 24px;
	width: 100%;
	height: 30vh;
	min-height: 250px;
	max-height: 300px;
	position: relative;
	@media only screen and (max-width: ${sizes.phone}px) {
		margin-top: 24px;
	}
`;
