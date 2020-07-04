import styled from 'styled-components';
import {clearHeader} from "../../../styles/globalStyles";

export const ListBlogsWrapper = styled.div`
	${clearHeader}
`;

export const BlogEditorWrapper = styled.div`
    padding-bottom: 80vh;
    
    .metadata {
    	border-bottom: 1px solid #ddd;
    	padding-bottom: 24px;
    }
`;

export const EditBlogImagePreview = styled.img`
	max-width: 100%;
`;
