import styled, { css } from 'styled-components';

export const EditorPanelWrapper = styled.div`
	
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    text-align: center;

    z-index: 5;
    
`;

export const EditorLinkTag = styled.a`
	text-decoration: none;
	color: inherit;
	border-bottom: 2px solid ${({theme}) => theme.link};
	
	&:hover {
		text-decoration: none;
		color: inherit;
		border-bottom: 2px solid ${({theme}) => theme.primary};
	}
`;

export const InsertLinkWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    z-index: 3;

	.insertLinkInput {
	    margin-right: 10px;
	    padding: 4px;
	}
	
	.insertLinkInputButton {
	    background-color: #000;
	    border: 0;
	    border-radius: 0;
	    color: #fff;
	    font-family: sans-serif;
	    padding: 6px 12px;
	}
`;

export const RichEditorControlsWrapper = styled.div`
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
`;

export const RichEditorStyleButton = styled.span`
	color: #999;
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
	${({active}) => active && css`	
	    color: #5890ff;
	`}; 
`;
