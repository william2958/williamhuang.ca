import styled from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
const DEFAULT_PROJECT_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const BlogPreviewWrapper = styled.div`
	position: relative;
	
    cursor: pointer;
`;

export const BlogPreviewImage = styled.div`
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

export const BlogHeaderRow = styled.div`
	position: absolute;
	
	bottom: 0;
	left: 0;
	right: 0;
	
	display: flex;
	align-items: center;
	justify-content: flex-start;
	
	background-color: ${({theme}) => theme.primary};
	
	padding: 16px 24px;
	
	.desktopTitle {
		padding-top: 0;
		max-width: 80%;
		
		@media only screen and (max-width: ${sizes.tablet}px) {
			max-width: 60%;
		}
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		padding: 12px;
		display: none;
	}
`;

export const BlogHeaderNum = styled.div`
	width: fit-content;
	min-width: 142px;
	text-align: center;
	
	padding: 12px;
	
	position: absolute;
	right: 24px;
	top: -23px;
	
	background-color: ${({theme}) => theme.highlight};
	
	@media only screen and (max-width: ${sizes.phone}px) {
		top: -48px;
		right: 12px;
	}
`;

export const BlogHeaderDate = styled.div`
	position: absolute;
	right: 24px;
	bottom: 12px;
`;

export const BlogHeaderMobileNum = styled.div`

	display: none;
	
	padding: 12px;
	
	position: absolute;
	right: 12px;
	top: 12px;
	
	background-color: ${({theme}) => theme.highlight};
	
	@media only screen and (max-width: ${sizes.phone}px) {
		display: block;
	}
	
`;

export const BlogPreviewMobileTitle = styled.div`
	display: none;
	
	@media only screen and (max-width: ${sizes.phone}px) {
		display: block;
	}
`;

export const BlogPreviewContent = styled.div`
	margin-top: 12px;
`;
