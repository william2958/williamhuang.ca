import React from 'react';
import { RadioGroupWrapper } from './styles';
import bindControl from '../Inputs/bindControl';
import { RadioGroup } from '@material-ui/core';

const CustomRadioGroup = ({ input, children, ...props }) => {
  return (
    <RadioGroupWrapper>
      <RadioGroup {...input} {...props}>
        {children}
      </RadioGroup>
    </RadioGroupWrapper>
  );
};

export const FormRadioGroup = bindControl(CustomRadioGroup);
