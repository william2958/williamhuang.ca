import styled from 'styled-components';
import {sizes} from "../../../styles";
import {getImageUrl} from "../../../utils/getImageUrl";
const DEFAULT_GUIDE_ICON = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const GuidePreviewWrapper = styled.div`
	background-color: ${({theme}) => theme.highlight};
	border-radius: 5px;
	padding: 12px;
	margin: 12px;
	
	&:hover {
		cursor: pointer;
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		//padding: 0;
		//margin: 0;
	}
	
	.iconAndDetails {
	
		display: flex;
		align-items: flex-start;
		margin-bottom: 4px;
		
		& > * + * {
			margin-left: 8px;
		}
		
	}
	
	.guideContentPreview {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
		max-height: 42px;
	}
	
`;

export const GuidePreviewIcon = styled.div`
    background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_GUIDE_ICON});
	
	// Images are displayed as 7 x 10
	width: 40px;
	min-width: 40px;
	height: 40px;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	border-radius: 5px;
`;

export const GuidePreviewContent = styled.div`
	width: calc(100% - 48px);
	
	& > * + * {
		margin-top: 4px;
	}
`;
