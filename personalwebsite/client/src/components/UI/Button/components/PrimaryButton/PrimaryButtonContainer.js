import styled, { css } from 'styled-components';

import ButtonContainer from '../ButtonContainer';

const PrimaryButtonContainer = styled(ButtonContainer)`
  color: ${({ theme }) => theme.palette.button.primary.default.text};
  background: ${({ theme }) => theme.palette.button.primary.default.background};
  box-shadow: 0 4px 8px rgba(17, 49, 96, 0.16), 0 0 4px rgba(17, 49, 96, 0.08);
  
  ${({ noShadow }) => noShadow && css`box-shadow: none;`};

  ${({ disabled, canHover }) =>
    disabled
      ? css`
          color: ${({ theme }) => theme.palette.button.primary.disabled.text};
          background: ${({ theme }) => theme.palette.button.primary.disabled.background};
          box-shadow: none;
        `
      : canHover &&
        css`
          &:hover {
            color: ${({ theme }) => theme.palette.button.primary.hover.text};
            background: ${({ theme }) => theme.palette.button.primary.hover.background};
          }
        `}

  &:active {
    color: ${({ theme }) => theme.palette.button.primary.active.text};
    background: ${({ theme }) => theme.palette.button.primary.active.background};
    box-shadow: 0 6px 12px rgba(17, 49, 96, 0.2), 0 0 6px rgba(17, 49, 96, 0.1);
  }
`;

const PrimaryButtonLabel = styled.span`
  padding: 0 22px;
`;

export { PrimaryButtonLabel as Label };

PrimaryButtonContainer.defaultProps = {
  canHover: true,
};

export default PrimaryButtonContainer;
