import React from 'react';
import styled from 'styled-components';

const FileInputLabel = styled.label`

	font-family: Montserrat-Bold, sans-serif;
	font-size: 10px;
	letter-spacing: 1.25px;
	line-height: 16px;
    padding: 6px 12px;
    background: #000;
    color: #fff;
    cursor: pointer;
    
    & > input[type=file] {
	    display: none;
	}
`;

const FileInput = ({onChange, text, name}) => {

	return (
		<FileInputLabel htmlFor={name}>
			<input type="file" id={name} onChange={onChange} title="&nbsp;"/>
			{text || 'Upload File'}
		</FileInputLabel>
	)

};

export default FileInput;
