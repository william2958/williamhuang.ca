import React from 'react';

import TextField from '@material-ui/core/TextField';
import { InputWrapper } from '../styles';

const InputSimple = ({ value, onChange, label, placeholder, fullWidth, id, type = 'text', errorField, name }) => {
  return (
    <InputWrapper filled={value && value.length > 0} errorField={errorField}>
      <TextField
        id={id}
        name={name}
        label={label || placeholder}
        value={value}
        onChange={onChange}
        margin="normal"
        fullWidth={fullWidth}
        variant="outlined"
        type={type}
      />
      {errorField && <div className="helperText errorText">{errorField}</div>}
    </InputWrapper>
  );
};

export default InputSimple;
