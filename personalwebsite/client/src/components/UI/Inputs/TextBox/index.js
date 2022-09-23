import React from 'react';

import TextField from '@material-ui/core/TextField';
import { InputWrapper } from '../styles';
import bindControl from '../bindControl';

const TextBox = ({ input, type, label, placeholder = '', id, fullWidth, helperText, meta, numRows = 4, fixedRows = true, onKeyPress }) => {
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
        label={label}
        placeholder={placeholder}
        fullWidth={fullWidth}
        multiline
        helperText={helperText}
        rows={numRows}
        onKeyPress={onKeyPress}
        rowsMax={fixedRows ? numRows : null}
      />
      <div className="helperText errorText">
        {touched && error && <div className="errorText">{error}</div>}
        {touched && warning && <div className="warningText">{warning}</div>}
      </div>
    </InputWrapper>
  );
};

export const FormTextBox = bindControl(TextBox);

export default TextBox;
