import styled, { css } from 'styled-components';
import { setRem } from '../../../styles';

export const InputWrapper = styled.div`
  .helperText {
    font-size: ${setRem(12)};
    height: ${setRem(16)};
    line-height: ${setRem(16)};
    margin-top: 8px;
    font-family: Roboto, sans-serif;
  }

  .MuiFormLabel-root {
    color: ${(props) => props.theme.palette.form.input.label};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.palette.form.input.focusBorder};
  }
  .MuiInputBase-input {
    background-color: ${(props) => props.theme.palette.form.input.background};
    color: ${(props) => props.theme.palette.form.input.text};
    border-radius: 5px;
  }
  .MuiInputBase-input.Mui-focused {
    background-color: ${(props) => props.theme.palette.form.input.focusBackground};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.form.input.border};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.form.input.focusBorder};
  }
  .MuiFormLabel-root.Mui-disabled {
        color: ${(props) => props.theme.palette.form.input.label};
  }
  .MuiInputBase-input.Mui-disabled {
    color: ${({ theme }) => theme.palette.form.input.disabledText};
  }
  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  ${({ filled }) =>
    filled
      ? css`
          .MuiOutlinedInput-notchedOutline {
            border-color: ${(props) => props.theme.palette.form.input.focusBorder};
          }
        `
      : ''};

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.form.input.focusBorder};
  }
  
  // Text box styles
  .MuiOutlinedInput-multiline {
        background-color: ${(props) => props.theme.palette.form.input.background};
  }

  ${({ errorField }) =>
    errorField
      ? css`
          .MuiInputBase-input {
            background-color: ${(props) => props.theme.palette.form.input.errorBackground};
            //color: ${(props) => props.theme.palette.form.input.errorText};
          }
          .MuiInputBase-input.Mui-focused {
            background-color: ${(props) => props.theme.palette.form.input.errorBackground};
            //color: ${(props) => props.theme.palette.form.input.errorText};
          }
          .MuiFormLabel-root.Mui-focused,
          .MuiFormLabel-root {
            color: ${(props) => props.theme.palette.form.input.errorHelperText};
          }
          .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
          .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline,
          .MuiOutlinedInput-notchedOutline {
            border-color: ${(props) => props.theme.palette.form.input.errorBorder};
          }
        `
      : ''}
  // Error states
  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.form.input.errorBorder};
  }
  .MuiFormLabel-root.Mui-focused.Mui-error,
  .MuiFormLabel-root.Mui-error {
    color: ${(props) => props.theme.palette.form.input.errorHelperText};
  }
  .Mui-error {
    .MuiInputBase-input {
      background-color: ${(props) => props.theme.palette.form.input.errorBackground};
      // color: ${(props) => props.theme.palette.form.input.errorText};
    }
    .MuiInputBase-input.Mui-focused {
      background-color: ${(props) => props.theme.palette.form.input.errorBackground};
      //color: ${(props) => props.theme.palette.form.input.errorText};
    }
  }
  .errorText {
    text-align: right;
    color: ${(props) => props.theme.palette.form.input.errorHelperText};
  }
`;
