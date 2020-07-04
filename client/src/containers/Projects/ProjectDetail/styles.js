import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";
import {sizes} from "../../../styles";
import {getImageUrl} from "../../../utils/getImageUrl";
const DEFAULT_PROJECT_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const ProjectDetailWrapper = styled.div`
	${clearHeader};
	min-height: 80vh;
	
	position: relative;
`;

export const ProjectHeroImageWrapper = styled.div`
	background: url(${({bg}) => bg}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    height: 30vh;
    
	@media only screen and (max-width: ${sizes.phone}px) {
		display: none;
	}
`;

export const ProjectDetailContentWrapper = styled.div`
	font-family: 'Georgia', serif;
    text-align: left;
    max-width: 780px;
    margin: 15vh auto 8px;
    padding: 24px;
    
    background-color: #fff;
    
    position: relative;

    display: flex;
	
	.seeItLiveContainer {
		position: absolute;
		bottom: 16px;
		right: 16px;
		
		.buttonContent {
			display: flex;
			align-items: center;
			& > * + * {
				margin-left: 4px;
			}
		}
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		flex-direction: column;
		margin-bottom: 0;
		margin-top: 0;
		
		.seeItLiveContainer {
			position: relative;
			margin: 0 auto;
			bottom: 0;
			right: 0;
		}
	}
	
`;

export const ProjectDetailImage = styled.div`
	
	width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin-right: 32px;
    
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media only screen and (max-width: ${sizes.phone}px) {
    	margin: 0 auto;
    	width: 80%;
    	position: relative;
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    }

`;

export const ProjectDetailContent = styled.div`
	margin-top: 12px;
	
	.publishDate {
		position: absolute;
		bottom: 0;
		& > * + * {
			margin-top: 8px;
		}
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
	
		margin-bottom: 12px;
	
		.publishDate {
			position: relative;
			margin-top: 12px;
		}
		
	}
`;
