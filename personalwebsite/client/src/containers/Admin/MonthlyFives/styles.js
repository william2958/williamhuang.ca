import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";

export const ListMonthlyFivesWrapper = styled.div`
	${clearHeader}
`;

export const MonthlyFiveEditorWrapper = styled.div`
    padding-bottom: 80vh;
    
    .metadata {
    	border-bottom: 1px solid #ddd;
    	padding-bottom: 24px;
    }
`;

export const EditMonthlyFiveImagePreview = styled.img`
	max-width: 100%;
`;
