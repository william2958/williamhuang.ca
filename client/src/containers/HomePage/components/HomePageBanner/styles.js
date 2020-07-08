import styled from "styled-components";
import {sizes} from "../../../../styles";
const defaultHomeBackground = 'https://storage.cloud.google.com/williamhuang-prod/staticImages/library.jpg';
import {getImageUrl} from "../../../../utils/getImageUrl";

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
	
    background: url(${getImageUrl(defaultHomeBackground, 'medium')}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    @media only screen and (min-width: ${sizes.desktop}px) {
		background-image: url(${getImageUrl(defaultHomeBackground, 'large')});
	}
	
`;
