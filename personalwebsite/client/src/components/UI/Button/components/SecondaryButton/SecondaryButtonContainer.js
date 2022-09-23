import styled, { css } from 'styled-components';

import ButtonContainer from '../ButtonContainer';

const SecondaryButtonContainer = styled(ButtonContainer)`
  color: ${({theme}) => theme.primary};
  border: 2px solid ${({theme}) => theme.primary};
  background: none;
  background-color: ${({theme}) => theme.highlight};
  box-shadow: 0 4px 8px rgba(17, 49, 96, 0.16), 0 0 4px rgba(17, 49, 96, 0.08);

  ${({disabled, canHover}) =>
    disabled
        ? css`
          color: ${({theme}) => theme.palette.button.secondary.disabled.text};
          background: ${({theme}) => theme.palette.button.secondary.disabled.background} border;
          border: none;
        `
        : canHover &&
        css`
          &:hover {
            color: ${({theme}) => theme.primary};
            border-color: ${({theme}) => theme.primary};
          }
        `}

  &:active {
    color: ${({theme}) => theme.highlight};
    background: ${({theme}) => theme.primary};
    box-shadow: 0 6px 12px rgba(17, 49, 96, 0.2), 0 0 6px rgba(17, 49, 96, 0.1);
  }
`;

const SecondaryButtonLabel = styled.span`
  padding: 0 22px;
`;

export { SecondaryButtonLabel as Label };

SecondaryButtonContainer.defaultProps = {
  canHover: true,
};

export default SecondaryButtonContainer;
