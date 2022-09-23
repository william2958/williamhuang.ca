import styled, { css } from 'styled-components';

import { setRem, setColor } from '../../../styles';

const LinkWrapper = styled.div`
  width: fit-content;
  cursor: pointer;
  font-size: ${setRem(16)};
  
  ${({isPrimary}) => isPrimary ? css`
    color: ${setColor.primaryColorMain};
    &:active {
      color: ${setColor.primaryColorDark};
    }
` : ''}
  
  ${({isDanger}) => isDanger ? css`
    color: ${setColor.error};
    &:active {
      color: ${setColor.errorDark};
    }
` : ''}

`;

export default LinkWrapper;
