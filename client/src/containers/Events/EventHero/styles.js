import styled, { css } from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
const DEFAULT_PROJECT_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const EventHeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;

    border-radius: 5px;
    cursor: pointer;
    
    ${({fit}) => fit && css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`};
    
    ${({staticHero}) => staticHero && css`
		cursor: default;
	`};
`;

export const EventHeroImage = styled.div`
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_PROJECT_PREVIEW_IMAGE});
	
	// Images are displayed as 7 x 10
	width: 100%;
	padding-top: 56%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	${({fit}) => fit && css`
		padding-top: 0;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`};
	
    @media only screen and (max-width: ${sizes.phone}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    }
    @media only screen and (min-width: ${sizes.desktop}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'large') : ''});
    }
`;

export const EventHeroOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #00000030
`;

export const EventHeroContent = styled.div`
	width: 100%;
	position: relative;
	height: 100%;
	
	.metadata {
	    color: ${({theme}) => theme.secondary};
	    font-size: 11px;
	    text-transform: uppercase;
	}
	
	.buttonRow {
		display: flex;
	}
`;

export const EventHeroTitle = styled.div`
	margin: 40px;
`;

export const EventHeroTime = styled.div`
	position: absolute;
	bottom: 12px;
	right: 12px;
	
	background-color: #000;
	
	padding: 16px;
	
	.timeRow {
		display: flex;
		margin-top: 12px;
		& > * + * {
			margin-left: 24px;
		}
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		display: none;
	}
`;

export const EventMobileHeroTime = styled.div`
	
	position: absolute;
	bottom: 12px;
	right: 12px;
	
	background-color: #000;
	
	padding: 16px;
	
	width: fit-content;
	display: none;
	
	& > * {
		margin-top: 0;
		padding-top: 0;
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		display: block;
	}
`;

export const TimeDisplayUnitWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	.value {
		font-family: "Roboto Condensed", sans-serif;
		font-weight: 600;
		font-size: 24px;
		line-height: 24px;
		padding: 24px;
		color: ${({theme}) => theme.highlight};
		border: 5px solid ${({theme}) => theme.highlight};
		border-radius: 100%;
		
		& > * {
			margin-top: -15px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.unit {
		margin-top: 8px;
	}
`;
