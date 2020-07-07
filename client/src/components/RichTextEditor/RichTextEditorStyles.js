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

    max-width: 780px !important;

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

	.draftJsEmojiPlugin__alignmentTool__2mkQr {
	  left: 50%;
	  -webkit-transform: translate(-50%) scale(0);
	          transform: translate(-50%) scale(0);
	  position: absolute;
	  border: 1px solid #ddd;
	  background: #fff;
	  border-radius: 2px;
	  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);
	  z-index: 2;
	  box-sizing: border-box;
	}
	
	.draftJsEmojiPlugin__alignmentTool__2mkQr:after, .draftJsEmojiPlugin__alignmentTool__2mkQr:before {
	  top: 100%;
	  left: 50%;
	  border: solid transparent;
	  content: " ";
	  height: 0;
	  width: 0;
	  position: absolute;
	  pointer-events: none;
	}
	
	.draftJsEmojiPlugin__alignmentTool__2mkQr:after {
	  border-color: rgba(255, 255, 255, 0);
	  border-top-color: #fff;
	  border-width: 4px;
	  margin-left: -4px;
	}
	.draftJsEmojiPlugin__alignmentTool__2mkQr:before {
	  border-color: rgba(221, 221, 221, 0);
	  border-top-color: #ddd;
	  border-width: 6px;
	  margin-left: -6px;
	}
	.draftJsEmojiPlugin__buttonWrapper__1Dmqh {
	  display: inline-block;
	}
	
	.draftJsEmojiPlugin__button__qi1gf {
	  background: #fbfbfb;
	  color: #888;
	  font-size: 18px;
	  border: 0;
	  padding-top: 5px;
	  vertical-align: bottom;
	  height: 34px;
	  width: 36px;
	}
	
	.draftJsEmojiPlugin__button__qi1gf svg {
	  fill: #888;
	}
	
	.draftJsEmojiPlugin__button__qi1gf:hover, .draftJsEmojiPlugin__button__qi1gf:focus {
	  background: #f3f3f3;
	  outline: 0; /* reset for :focus */
	}
	
	.draftJsEmojiPlugin__active__3qcpF {
	  background: #efefef;
	  color: #444;
	}
	
	.draftJsEmojiPlugin__active__3qcpF svg {
	  fill: #444;
	}


`;
