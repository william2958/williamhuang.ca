import styled from 'styled-components';

export const TypeLabelWrapper = styled.div`
    border-radius: 24px;
    height: 24px;
    width: fit-content;
    padding: 8px 0 8px 12px;

    display: flex;
    align-items: center;
`;

export const TypeLabelName = styled.label`
	margin-top: 1px;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', sans-serif;
    color: #A1AEB7;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 0;
`;

export const TypeIconWrapper = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 100%;
    margin-left: 4px;
    
    background-color: ${(props) => props.backgroundColor};

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`;
