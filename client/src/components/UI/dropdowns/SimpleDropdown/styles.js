import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.form.input.text};
  }
  .MuiInput-underline:before {
    border-color: ${({ theme }) => theme.palette.form.input.focusBorder};
  }
  .MuiInput-underline:after {
    border-color: ${({ theme }) => theme.palette.form.input.focusBorder};
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid ${({ theme }) => theme.palette.form.input.focusBorder};
  }
  .MuiFormHelperText-root {
    color: ${({ theme }) => theme.palette.form.input.helperText};
  }
  .MuiFormLabel-root,
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette.form.input.label};
  }
  .MuiSelect-icon {
    color: ${({ theme }) => theme.palette.form.input.label};
  }
`;
