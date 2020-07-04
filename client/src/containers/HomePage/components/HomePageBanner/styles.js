import styled from "styled-components";
import {sizes} from "../../../../styles";
import defaultHomeBackground from '../../../../assets/images/backgrounds/library.jpg';

export const HomePageBannerWrapper = styled.div`

    height: 80vh;
    position: relative;

    color: #fff;
    
    .highlightBadge {
    	position: absolute;
    	top: 24px;
    	left: 24px;
    	
    	padding: 12px;
    }
    
    @media only screen and (max-width: ${sizes.phone}px) {
		height: 70vh;    
    }
    
`;

export const HomePageBannerPlaceholder = styled.div`
	
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	
    background: url(${defaultHomeBackground}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
	
`;
