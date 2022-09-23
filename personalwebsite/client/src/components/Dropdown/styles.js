import styled from 'styled-components';

export const DropdownWrapper = styled.button`
	padding: 6px 24px;
    background-color: transparent;
    border: 1px solid #ddd;
    color: #000;
    text-transform: uppercase;
    min-width: 40px;
    font-size: 14px;
    display: block;
    box-sizing: content-box;
    
    &:hover,
    &:focus {
    	outline: none;
    }
`;

export const DropdownItem = styled.button`
	
    cursor: pointer;
    text-transform: uppercase;
    
    &:active {
	    background-color: #f8f9fa;
	    color: #000;
    }
    
    &:hover,
    &:focus {
    	outline: none;
    }
`;
