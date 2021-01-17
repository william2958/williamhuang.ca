import styled, { css } from 'styled-components';
import {sizes} from "./index";

export const ButtonRow = styled.div`
	display: flex;
	justify-content: space-between;
	${({top}) => top && css`margin-top: ${top}px`};
	${({bottom}) => bottom && css`margin-bottom: ${bottom}px`};
`;

export const clearHeader = css`
	margin-top: 53px;
	padding-top: 24px;
	padding-bottom: 40px;
`;

export const HeroRow = styled.div`
	margin-left: -15px;
	margin-right: -15px;
	
    // @media only screen and (max-width: ${sizes.phone}px) {
	//     margin-left: 0;
	//     margin-right: 0;
	// }
`;

export const GutteredRow = styled.div`
    // 15px for row, 12px for project preview
	margin-left: -27px;
	margin-right: -27px;
	
  @media only screen and (max-width: ${sizes.phone}px) {
    margin-left: -12px;
    margin-right: -12px;
	}
`;

export const LoadMoreButtonContainer = styled.div`

    margin: 40px auto;
    text-align: center;

	& > button {
	    display: inline;
	    text-transform: uppercase;
	    font-weight: 600;
	    cursor: pointer;
	    background: transparent;
	    border: none;
	    border-bottom: 2px solid transparent;
	    outline: none;
	    
	    &:hover {   	
	    	border-bottom: 2px solid #000;
	    }
    }
    
`;

export const BackArrow = styled.div`
	color: ${({theme}) => theme.secondary};
	
    display: flex;
    max-width: 780px !important;
    margin: 0 auto;
    font-size: 16px;
    align-items: center;
    cursor: pointer;
    
    h6 {
	    margin-bottom: 0;
	}
`;
