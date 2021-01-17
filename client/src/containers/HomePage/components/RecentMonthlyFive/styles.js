import styled from 'styled-components';
import {sizes} from "../../../../styles";

export const HomeMonthlyFiveHeroWrapper = styled.div`
	margin-top: 12px;
	cursor: pointer;
	
	max-height: 300px;
	position: relative;
	
	& > * + * {
		border-top: 1px solid ${({theme}) => theme.secondary}50;
	}

  @media only screen and (max-width: ${sizes.phone}px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;
