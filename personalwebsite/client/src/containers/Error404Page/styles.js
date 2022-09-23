import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";

export const Error404PageWrapper = styled.div`
	${clearHeader};
	min-height: 80vh;
	
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		& > * + * {
			margin-top: 16px;
		}
	}
	
`;

export const Error404Graphic = styled.div`
	background: url(https://storage.googleapis.com/williamhuang-prod/staticImages/resize_1024_cat.jpg) no-repeat scroll center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    max-height: 300px;
    max-width: 300px;
    height: 50vw;
    width: 50vw; 
`;
