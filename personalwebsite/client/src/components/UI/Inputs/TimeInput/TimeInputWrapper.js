import styled, { css } from 'styled-components';

export const TimeInputWrapper = styled.div`
  .MuiFormControl-root {
    width: 270px;
  }
  .MuiFormLabel-root {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette.form.timeInput.focus};
  }
  .MuiInputBase-root {
    padding: 8px 0px 8px 14px;
    background-color: #212428;
    border-radius: 5px;
    color: #9fafb5;
    margin-top: 24px;
  }
  .MuiInput-underline {
    &:before {
      display: none;
    }
  }
  .MuiButtonBase-root {
    color: #9fafb5;
    &:focus {
      outline: none;
    }
  }
  .MuiInput-underline {
    &:after {
      border-bottom: 2px solid ${({ theme }) => theme.palette.form.timeInput.focus};
    }
  }
  .MuiPickersToolbar-toolbar {
    background-color: ${({ theme }) => theme.palette.form.timeInput.pickerBackground};
  }
  ${({ small }) =>
    small &&
    css`
      .MuiFormControl-root {
        width: 180px;
      }
    `};
`;
