import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";
import {sizes} from "../../../styles";

export const PublishedProjectsWrapper = styled.div`
	${clearHeader}
`;

export const ProjectEditorWrapper = styled.div`
    padding-bottom: 80vh;
    
    .metadata {
    	border-bottom: 1px solid #ddd;
    	padding-bottom: 24px;
    }
    
    .extraInfo {
    	& > * + * {
    		margin-left: 24px;
    	}
    }
    
    .techStackItem {
    	padding: 4px 12px;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	& > * + * {
    		margin-left: 12px;
    	}
    }
`;

export const EditProjectImagePreview = styled.img`
	max-width: 100%;
`;
