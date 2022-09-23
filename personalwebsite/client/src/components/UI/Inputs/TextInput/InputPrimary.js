import React from 'react';

import TextField from '@material-ui/core/TextField';
import { InputWrapper } from '../styles';
import bindControl from '../bindControl';

const InputPrimary = ({ input, type = 'text', placeholder = '', id, label, fullWidth, meta, onKeyPress, step }) => {
  let touched,
    error,
    warning = false;
  if (meta) {
    touched = meta.touched;
    error = meta.error;
    warning = meta.warning;
  }
  return (
    <InputWrapper filled={input.value && input.value.length > 0}>
      <TextField
        {...input}
        type={type}
        id={id}
        autoComplete="off"
        margin="normal"
        variant="outlined"
        label={label || placeholder}
        fullWidth={fullWidth}
        error={touched && !!error}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        inputProps={{
          step: step,
        }}
      />
      {touched && error && <div className="helperText errorText">{error}</div>}
      {touched && warning && <div className="helperText warningText">{warning}</div>}
    </InputWrapper>
  );
};

export const FormInputPrimary = bindControl(InputPrimary);

export const PlainInputPrimary = ({ value, onChange, disabled, fullWidth, label, type, id, step }) => {
  return (
    <InputWrapper filled={value && value.length > 0}>
      <TextField
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        autoComplete="off"
        margin="normal"
        variant="outlined"
        label={label}
        fullWidth={fullWidth}
        disabled={disabled}
        inputProps={{
          step: step,
        }}
      />
    </InputWrapper>
  );
};
