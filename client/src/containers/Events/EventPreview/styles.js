import styled from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
const DEFAULT_PROJECT_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const EventPreviewWrapper = styled.div`
	padding: 12px;
    display: flex;
    flex-direction: column;
    text-align: left;

    border-radius: 5px;
    cursor: pointer;
    
    position: relative;
`;

export const EventPreviewImage = styled.div`
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    position: relative;
	
	// Images are displayed as 7 x 10
	width: 100%;
	padding-top: 56%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
    @media only screen and (max-width: ${sizes.phone}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    }
`;

export const EventPreviewOverlay = styled.div`
	
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	
	background-color: #00000030;
`;

export const EventPreviewContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	
	.buttonRow {
		display: flex;
	}
`;

export const EventPreviewTitle = styled.div`
	margin-top: 24px;
	margin-left: 24px;
`;

export const EventPreviewDate = styled.div`
	position: absolute;
	bottom: 24px;
	left: 24px;
`;
