import styled from 'styled-components';

export const HomeMonthlyFiveHeroWrapper = styled.div`
	margin-top: 12px;
	cursor: pointer;
	
	max-height: 300px;
	position: relative;
	
	& > * + * {
		border-top: 1px solid ${({theme}) => theme.secondary}50;
	}
`;
