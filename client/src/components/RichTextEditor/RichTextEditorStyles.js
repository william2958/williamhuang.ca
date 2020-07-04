import styled, { css } from 'styled-components';

export const EditorWrapper = styled.div`
	${({hidePlaceholder}) => hidePlaceholder && css`
		display: none;
	`};
    cursor: text;
    font-size: 16px;
    margin-top: 10px;
    
    .DraftEditor-editorContainer {
    	z-index: 0;
    }
`;

const headerStyles = css`

	.header1 {
		margin-top: 32px;
		margin-bottom: 16px;
	}

	.header2 {
		margin-top: 28px;
		margin-bottom: 16px;
	}

	.header3 {
		margin-top: 24px;
		margin-bottom: 16px;
	}

	.header4 {
	
		margin-top: 22px;
		margin-bottom: 16px;
	
	    font-family: 'Montserrat', sans-serif;
	    font-weight: 600;
	    font-size: 16px;
	    border-bottom: 2px solid #000;
	    width: fit-content;
	    padding-bottom: 4px;
	    text-transform: uppercase;
	}
	
	.header5 {
	    font-size: 16px;
	    font-family: 'Helvetica', sans-serif;
	    color: #757575;
	}
	
	.header5-center div {
	    font-size: 16px;
	    font-family: 'Helvetica', sans-serif;
	    color: #757575;
	    text-align: center;
	}
	
	.header6 {
		margin-top: 14px;
		margin-bottom: 10px;
	    font-size: 12px;
	    font-family: 'Helvetica', sans-serif;
	    color: #757575;
	}
`;

const otherStyles = css`
	.RichEditor-blockquote {
	    border-left: 5px solid #eee;
	    color: #666;
	    font-family: 'Hoefler Text', 'Georgia', serif;
	    font-style: italic;
	    margin: 16px 40px;
	    padding: 10px 20px;
	    font-size: 18px;
	}
	
	.public-DraftStyleDefault-pre {
	    background-color: rgba(0, 0, 0, 0.05);
	    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
	    font-size: 16px;
	    padding: 20px;
	    margin-top: 16px;
	    & > pre {
	    	margin-bottom: 0;
	    }
	}
	
	.editorImage {
		margin-top: 12px;
		margin-bottom: 12px;
		
		& > img {
			margin-right: 16px;		
		}
	}
	
	// h5 center under image is caption, so move closer to image
	.editorImage + .header5-center {
		margin-top: -8px;
		margin-bottom: 16px;
	}
	
	.RichEditor-unstyled,
	.public-DraftStyleDefault-listLTR {
	    font-size: 18px;
	}
	
	.RichEditor-unstyled + .RichEditor-unstyled {
		margin-top: 16px;
	}
	
	.unordered-list-item + .unordered-list-item {
		margin-top: 6px;
	}
	
	.ordered-list-item + .ordered-list-item {
		margin-top: 6px;
	}
	
`;

const alignmentStyles = css`
	.align-right div {
	    text-align: right;
	    font-size: 18px;
	}
	.align-center div {
	    text-align: center;
	    font-size: 18px;
	}
	.align-left div {
	    text-align: left;
	    font-size: 18px;
	}
`;

export const RichTextEditorWrapper = styled.div`
    font-family: 'Georgia', serif;
    font-size: 14px;

    max-width: 780px;

    ${({readOnly}) => !readOnly && css`margin-bottom: 120px;`};
	
	.public-DraftEditorPlaceholder-root,
	.public-DraftEditor-content {
	    margin: 0 -15px -15px;
	    padding: 15px;
	}
	
	.public-DraftEditor-content {
	    min-height: 100px;
	    
	    // Remove the margin top of first element (prevent first header margin top)
	    & > div > *:first-child {
	    	margin-top: 0;
	    }
	}
	
	${headerStyles};
	${otherStyles};
	${alignmentStyles};

`;
