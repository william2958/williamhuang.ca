import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";

export const ListGuidesWrapper = styled.div`
	${clearHeader}
`;

export const GuideEditorWrapper = styled.div`
    padding-bottom: 80vh;
    
    .metadata {
    	border-bottom: 1px solid #ddd;
    	padding-bottom: 24px;
    }
    
    .technologyItem {
    	padding: 4px 12px;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	& > * + * {
    		margin-left: 12px;
    	}
    }
`;

export const EditGuideIconPreview = styled.img`
	max-width: 80px;
	display: block;
`;

export const EditGuideImagePreview = styled.img`
	max-width: 100%;
`;
