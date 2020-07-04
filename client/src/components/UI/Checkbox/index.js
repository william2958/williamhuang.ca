import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import bindControl from '../Inputs/bindControl';
import { CheckBoxWrapped } from './styles';

const CheckBox = ({ input, label, isPrimary, labelPosition = 'end' }) => {
  return (
    <CheckBoxWrapped>
      <FormControlLabel
        control={<Checkbox checked={!!input.value} onChange={input.onChange} color={isPrimary ? 'primary' : 'default'} />}
        label={label}
        labelPlacement={labelPosition}
      />
    </CheckBoxWrapped>
  );
};

export const FormCheckBox = bindControl(CheckBox);

export default CheckBox;
