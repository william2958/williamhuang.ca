import styled, { css } from 'styled-components';
import {sizes} from "../../styles";

export const HomePageWrapper = styled.div`
    min-height: 80vh;
    
    .row {
    	margin-left: -12px;
    	margin-right: -12px;
    	
    	@media only screen and (max-width: ${sizes.phone}px) {
    		margin-left: 0;
    		margin-right: 0;
    	}
    }
    
    @media only screen and (max-width: ${sizes.phone}px) {
    	h4 {
    		margin-left: 12px;
    	}
    }
`;

export const HomePageSection = styled.div`
    //margin-top: 24px;
    padding: 24px 0;
    
    & > .container {
    	padding: 0;
    }
    
    .blogList {
    	& > * + * {
    		margin-top: 32px;
    	}
    }
    
    ${({dark}) =>
		dark && css`
			background-color: ${({theme}) => theme.primary};
		`
	};
    
    //& > * + * {
    //	margin-top: 24px;
    //}
`;

export const HomePageSectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.seeAllLink {
		border-bottom: 2px solid transparent;
		cursor: pointer;
		&:hover {
			border-bottom: 2px solid ${({theme, color}) => 
				color === 'highlight' 
					? theme.highlight
					: theme.color
			};
		}
	}
	
    @media only screen and (max-width: ${sizes.phone}px) {
    	.seeAllLink {
    		margin-right: 12px;
    	}
    }
`;
