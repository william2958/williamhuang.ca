import styled, {css} from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
import {hoverShadow} from "../../../styles/shadows";
const DEFAULT_PROJECT_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const BlogPreviewWrapper = styled.div`
	padding: 12px;
	position: relative;
	
	.content {
		padding-left: 24px;
	}
	
	@media only screen and (max-width: ${sizes.tablet}px) {
		& > * {
			padding: 0;
		}
		.content {
			padding: 0;
		}
	}
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
	
	${hoverShadow};
	
    @media only screen and (max-width: ${sizes.phone}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    }
`;

export const BlogPreviewImageLarge = styled.div`
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    position: relative;
	
	// Images are displayed as 7 x 10
	width: 100%;
	padding-top: 28%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	${hoverShadow};
	
    @media only screen and (max-width: ${sizes.tablet}px) {
    	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_PROJECT_PREVIEW_IMAGE});
    	padding-top: 56%;
    }
`;

export const BlogDetailsRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
`;

export const BlogPreviewContent = styled.div`
	margin-top: 24px;
    @media only screen and (max-width: ${sizes.tablet}px) {
    	margin-top: 0;
    }
`;
