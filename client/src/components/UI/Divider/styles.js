import styled, { css } from 'styled-components';

export const DividerWrapper = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  margin: 8px 0;
  &:before {
    content: '';
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    ${({ faded }) =>
      faded
        ? css`
            background: linear-gradient(to right, transparent, #818078, transparent);
          `
        : css`
            background: #818078;
          `};
    //background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: '${({ content }) => content || ''}';
    position: relative;
    display: inline-block;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: ${({ textColor }) => textColor || '#000'};
    background-color: ${({ backgroundColor }) => backgroundColor || '#000'};
  }
`;
