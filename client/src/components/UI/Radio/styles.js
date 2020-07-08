import styled from 'styled-components';

export const RadioGroupWrapper = styled.div`
  .MuiFormControlLabel-label {
    color: ${({ theme }) => theme.palette.form.radio.label};
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${({ theme }) => theme.palette.form.radio.color};
  }
`;
