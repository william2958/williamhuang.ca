import React from 'react';
import { DividerWrapper } from './styles';

const Divider = ({ content, backgroundColor, textColor, faded }) => {
  return <DividerWrapper content={content} backgroundColor={backgroundColor} textColor={textColor} faded={faded} />;
};

export default Divider;
