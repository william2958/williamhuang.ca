import styled, { css } from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
import {defaultShadow} from "../../../styles/shadows";

export const BlogHeroWrapper = styled.div`
	display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
	border-radius: inherit;

    cursor: pointer;
    
    ${({fit}) => fit && css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`};
`;


export const BlogSpotlightImage = styled.div`

	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : ''});
	
	// Images are displayed as 7 x 10
	width: 100%;
	padding-top: 56%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	position: relative;
	
	${defaultShadow};
	${({rounded}) => rounded ? css`border-radius: 5px` : css`border-radius: inherit`};
	
	${({fit}) => fit && css`
		padding-top: 0;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	`};
	
    @media only screen and (max-width: ${sizes.phone}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : ''});
    }
    @media only screen and (min-width: ${sizes.desktop}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'large') : ''});
    }
`;


export const BlogSpotlightContent = styled.div`
	position: absolute;
	bottom: 12px;
	left: 12px;
	
	background-color: ${({theme}) => theme.primary};
	
	width: fit-content;
	max-width: 300px;
	display: table;
	
	padding: 12px;
	
`;
