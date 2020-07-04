import styled from 'styled-components';

export const CheckBoxWrapped = styled.div`
  .MuiTypography-body1 {
    color: ${(props) => props.theme.palette.form.checkbox.label};
  }
  .MuiCheckbox-root {
    color: ${(props) => props.theme.primary};
  }
  .Mui-checked.MuiCheckbox-root {
    color: ${(props) => props.theme.primary};
  }
`;
