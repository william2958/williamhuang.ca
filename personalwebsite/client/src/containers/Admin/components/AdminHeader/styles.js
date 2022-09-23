import styled from 'styled-components';

export const AdminHeaderWrapper = styled.div`
	.nav-link {
		color: ${({theme}) => theme.highlight} !important;
		&:hover {
			cursor: pointer;
		}
	}
`;
