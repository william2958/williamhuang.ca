import styled, {css} from "styled-components";
import {sizes} from "../../../../styles";
const defaultHomeBackground = 'https://storage.cloud.google.com/williamhuang-prod/staticImages/library.jpg';
import {getImageUrl} from "../../../../utils/getImageUrl";

export const HomePageBannerWrapper = styled.div`

	height: 60vw;
    max-height: 80vh;
    position: relative;

    color: #fff;
    
    .highlightBadge {
    	position: absolute;
    	top: 24px;
    	left: 24px;
    	
    	z-index: 10;
    }
    
    @media only screen and (max-width: ${sizes.phone}px) {
		height: 70vw;
		max-height: 70vh;
		h4 {
			margin-left: 0;
		}
		.highlightBadge {
			top: 12px;
			left: 12px;
		}
    }
    
`;

export const HomePageBannerPlaceholder = styled.div`
	
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	
	${({empty}) => empty 
		? css`
			background-color: #000;
		` 
		: css`
		    background: url(${getImageUrl(defaultHomeBackground, 'medium')}) no-repeat center center;
		    -webkit-background-size: cover;
		    -moz-background-size: cover;
		    -o-background-size: cover;
		    background-size: cover;
		`};
	
    
    @media only screen and (min-width: ${sizes.desktop}px) {
		background-image: url(${getImageUrl(defaultHomeBackground, 'large')});
	}
	
`;
