import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";
import {sizes} from "../../../styles";
import {getImageUrl} from "../../../utils/getImageUrl";
const DEFAULT_GUIDE_ICON = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const GuideDetailWrapper = styled.div`
	${clearHeader};
	min-height: 80vh;
	
	.desktopMetadata {
		display: block;
	}
	.mobileMetadata {
		display: none;
	}
	
	@media only screen and (max-width: ${sizes.phone}px) {
		.desktopMetadata {
			display: none;
		}
		.mobileMetadata {
			display: block;
		}
	}
	
	.mobileContentPreview {
		margin: 12px auto;
	}
`;

export const GuideDetailContentWrapper = styled.div`
	font-family: 'Georgia', serif;
    text-align: left;
    max-width: 780px;
    margin: 12px auto 12px;
    
    position: relative;

    display: flex;
    
    @media only screen and (max-width: ${sizes.phone}px) {
    	margin-bottom: 0;
    	
    	flex-direction: row-reverse;
    }
	
`;

export const GuideDetailIcon = styled.div`
	
	width: 80px;
	min-width: 80px;
    height: 80px;
    min-height: 80px;
    
    border-radius: 8px;
    
    background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_GUIDE_ICON});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;

export const GuideDetailMetadata = styled.div`
	margin-left: 24px;
	
	& > * + * {
		margin-top: 4px;
	}
    @media only screen and (max-width: ${sizes.phone}px) {
    	margin-left: 0;
    	margin-right: 12px;
    }
`;
