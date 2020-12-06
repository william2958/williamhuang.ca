import styled, { css } from "styled-components";
import {sizes} from "../../../styles";
import {getImageUrl} from "../../../utils/getImageUrl";
const DEFAULT_PROJECT_SPOTLIGHT_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const ProjectsPageSpotlight = styled.div`

	border-radius: inherit;
    
    ${({fit}) => fit && css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`};
    
	@media only screen and (max-width: ${sizes.phone}px) {
		margin-top: -12px;
		
		h4 {
			margin-left: 12px;
		}
	}
`;

export const ProjectsPageSpotlightImage = styled.div`

	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_PROJECT_SPOTLIGHT_IMAGE});
	
	// Images are displayed as 7 x 10
	width: 100%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: inherit;
	
	position: relative;
    
    ${({fit}) => fit && css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`};
	
    @media only screen and (max-width: ${sizes.phone}px) {
	    background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_SPOTLIGHT_IMAGE});
    }
    @media only screen and (min-width: ${sizes.desktop}px) {
	    background-image: url(${({bg}) => bg ? getImageUrl(bg, 'large') : DEFAULT_PROJECT_SPOTLIGHT_IMAGE});
    }
	
	.liveButton {
		position: absolute;
		bottom: 12px;
		right: 12px;
		
		display: flex;
		& > * + * {
			margin-left: 8px;
		}
		
		.buttonContent {
			display: flex;
			align-items: center;
			& > * + * {
				margin-left: 4px;
			}
		}
	}
	
`;

export const ProjectsPageSpotlightContent = styled.div`
	position: absolute;
	bottom: 12px;
	left: 12px;
	
	background-color: ${({theme}) => theme.primary};
	
	width: fit-content;
	display: table;
	max-width: 300px;
	
	padding: 12px;
	
	@media only screen and (max-width: ${sizes.phone}px) {
		top: 24px;
		bottom: auto;
	}
`;
