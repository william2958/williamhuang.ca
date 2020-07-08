import styled from 'styled-components';
import {sizes} from "../../styles";

export const FooterWrapper = styled.div`

    text-align: left;
    padding-top: 24px;
    background-color: #000;
    color: #fff;
    
    .terms {
	    display: flex;
	    justify-content: space-between;
	    padding: 16px 0;
	    border-top: 1px solid #ddd;
	    margin-top: 35px;
	    
	    & > h5 {
		    font-weight: normal;
		    font-size: 11px;
		    text-transform: uppercase;
		}
	}
	
	.footerInfoRow {
		margin-left: -30px;
		margin-right: -30px;
	}
    
	@media only screen and (max-width: ${sizes.phone}px) {
		.terms {
			padding-left: 12px;
			padding-right: 12px;
			display: block;
		}
		.footerInfoRow {
			margin-left: -15px;
			margin-right: -15px;
		}
	}
`;

export const FooterSocialIcons = styled.div`
	
    display: flex;
    margin-top: 24px;
    color: #fff;
    
    & > * + * {
	    margin-left: 40px;
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		width: fit-content;
		margin: 24px 0;
	}
`;

export const FooterLinksColumn = styled.div`
	
	text-align: right;
	
	@media only screen and (max-width: ${sizes.phone}px) {
		text-align: left;	
	}
	
`;

export const FooterLink = styled.a`
  	font-family: 'Roboto Condensed', 'Montserrat', sans-serif;
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: ${({highlight}) => highlight ? '#c00' : '#A1AEB7'};
    text-transform: uppercase;
    margin: 8px 0;
    
    &:hover {
    	text-decoration: none;
    	color: ${({highlight}) => highlight ? '#c00' : '#A1AEB7'};
    }
`;
