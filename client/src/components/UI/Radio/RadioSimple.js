// Incomplete file

import React from 'react';
import { RadioGroupWrapper } from './styles';
import { RadioGroup } from '@material-ui/core';

const RadioSimple = ({ input, children, ...props }) => {
  return (
    <RadioGroupWrapper>
      <RadioGroup {...input} {...props}>
        {children}
      </RadioGroup>
    </RadioGroupWrapper>
  );
};
