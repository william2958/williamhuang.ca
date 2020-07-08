import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";

export const ListEventsWrapper = styled.div`
	${clearHeader}
`;

export const EventEditorWrapper = styled.div`
    padding-bottom: 80vh;
    
    .metadata {
    	border-bottom: 1px solid #ddd;
    	padding-bottom: 24px;
    }
    
    .keyInfoItem {
    	padding: 4px 12px;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	& > * + * {
    		margin-left: 12px;
    	}
    }
`;

export const EventRecapToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	& > * + * {
		border-left: 2px solid #000;
	}
	& > * {
		padding: 0 16px;
		cursor: pointer;
	}
    
    .active {
    	color: #000;
    }
    .inactive {
    	color: #ddd;
    }
`;

export const EditEventImagePreview = styled.img`
	max-width: 100%;
`;
