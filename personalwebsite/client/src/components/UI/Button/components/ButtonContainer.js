import styled from 'styled-components';

import { BUTTON_HEIGHT } from '../styles';
import BaseButton from './BaseButton';

const ButtonContainer = styled(BaseButton)`
  height: ${BUTTON_HEIGHT}px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1.25px;
  line-height: 16px;
`;

export default ButtonContainer;
