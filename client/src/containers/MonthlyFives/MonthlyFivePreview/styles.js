import styled, { css } from 'styled-components';
import {getImageUrl} from "../../../utils/getImageUrl";
import {sizes} from "../../../styles";
import {hoverShadow} from "../../../styles/shadows";
const DEFAULT_MONTHLY_FIVE_PREVIEW_IMAGE = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

export const MonthlyFivePreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  cursor: pointer;
	
	${({fullWidth}) => fullWidth && css`margin-bottom: 12px;`};
`;

export const MonthlyFivePreviewImage = styled.div`
	background-image: url(${({bg}) => bg ? getImageUrl(bg, 'medium') : DEFAULT_MONTHLY_FIVE_PREVIEW_IMAGE});
	
	// Images are displayed as 7 x 10
	width: 100%;
	padding-top: 56%;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	${hoverShadow};
	
	@media only screen and (max-width: ${sizes.phone}px) {
		background-image: url(${({bg}) => bg ? getImageUrl(bg, 'small') : DEFAULT_MONTHLY_FIVE_PREVIEW_IMAGE});
	}
`;

export const MonthlyFivePreviewContent = styled.div`
	width: 100%;
	position: relative;
	
	.metadata {
    font-family: 'Georgia', serif;
    font-size: 16px;
		margin-bottom: 0;
	}
	
	.buttonRow {
		display: flex;
	}
`;

export const MonthlyFivePreviewTitle = styled.h3`
  font-family: 'Georgia', serif;
	font-size: 20px;
	line-height: 25px;
	font-weight: bold;
	margin-top: 12px;
`;
