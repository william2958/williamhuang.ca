import React from 'react';
import { CheckBoxWrapped } from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxSimple = ({ value, onChange, label, isPrimary, labelPosition, name }) => {
  return (
    <CheckBoxWrapped>
      <FormControlLabel
        control={<Checkbox checked={!!value} onChange={onChange} color={isPrimary ? 'primary' : 'default'} name={name} />}
        label={label}
        labelPlacement={labelPosition}
      />
    </CheckBoxWrapped>
  );
};

export default CheckboxSimple;
