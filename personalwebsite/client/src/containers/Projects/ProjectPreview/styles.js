import styled from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
import {hoverShadow} from "../../../styles/shadows";
const DEFAULT_PROJECT_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const ProjectPreviewWrapper = styled.div`
	padding: 12px;
    display: flex;
    flex-direction: column;
    text-align: left;

    //cursor: pointer;
`;

export const ProjectPreviewImage = styled.div`
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_PROJECT_PREVIEW_IMAGE});
	// border: 1px solid ${({theme}) => theme.secondary};
	
	// Images are displayed as 7 x 10
	width: 100%;
	padding-top: 56%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	border-radius: 5px;
	
	${hoverShadow};
	
    @media only screen and (max-width: ${sizes.phone}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    }
`;

export const ProjectPreviewContent = styled.div`
	width: 100%;
	position: relative;
	
	& > * {
		margin-top: 12px;
	}
	
	.metadata {
	    color: ${({theme}) => theme.secondary};
	    font-size: 11px;
	    text-transform: uppercase;
	}
	
	.buttonRow {
		display: flex;
	}
`;

export const ProjectPreviewTitle = styled.h3`
	font-family: Montserrat, sans-serif;
	font-size: 20px;
	line-height: 25px;
	font-weight: bold;
	margin-top: 12px;
`;
