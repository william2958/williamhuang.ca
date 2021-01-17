import styled from 'styled-components';
import {clearHeader} from "../../styles/globalStyles";
import {sizes} from "../../styles";
import {hoverShadow} from "../../styles/shadows";

export const MonthlyFivesPageWrapper = styled.div`
	${clearHeader};
  min-height: 80vh;
  
  // @media only screen and (max-width: ${sizes.phone}px) {
  // 	padding-top: 0;
  // }
`;

export const MonthlyFivesPageHeader = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
	margin: 12px auto;
	padding: 0;

  .headerDropdown {
    height: fit-content;
  }
	
	@media only screen and (max-width: ${sizes.tablet}px) {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 12px;
    padding-right: 12px;
	}

  @media only screen and (max-width: ${sizes.phone}px) {
	  
    .headerDescription {
      max-width: 60%;
    }

    .headerDropdown {
      margin-top: 5px;
    }
  }
	
`;

export const MonthlyRecapList = styled.div`
	& > * + * {
		border-top: 1px solid ${({theme}) => theme.secondary}50;
	}

  & > * {
    display: block;
    width: 100%;
    margin: 12px auto;
	  padding: 0;
  }
`

export const MostRecentMonthlyFiveWrapper = styled.div`
	margin-bottom: 24px;
	cursor: pointer;
	margin-left: -15px;
	margin-right: -15px;
	
	height: 40vh;
	min-height: 250px;
	max-height: 350px;
	position: relative;
	
	${hoverShadow};
	
	@media only screen and (max-width: ${sizes.phone}px) {
		h4 {
			margin-left: 12px;
		}
	}
`;

export const MonthlyFiveSpotlightPlaceholder = styled.div`
	margin-top: 12px;
	margin-bottom: 24px;
	width: 100%;
	height: 40vh;
	min-height: 250px;
	max-height: 350px;
`;
