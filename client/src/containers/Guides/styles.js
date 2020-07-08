import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";
import {sizes} from "../../styles";

export const GuidesPageWrapper = styled.div`
	${clearHeader};
    min-height: 80vh;
    
    .guidesRow {
    	& > * {
    		display: block;
    		width: 100%;
    		margin: 12px auto;
    	}
    	& > * + * {
    		border-top: 1px solid ${({theme}) => theme.secondary}50;
    	}
    }
    
	@media only screen and (max-width: ${sizes.phone}px) {
		.guidesRow {
			margin-top: 24px;
			
			* {
				padding-left: 0;
				padding-right: 0;
			}
		}
	}
`;

export const GuidesPageHeader = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;
