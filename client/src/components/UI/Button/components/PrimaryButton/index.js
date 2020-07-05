import React from 'react';

import Container, { Label } from './PrimaryButtonContainer';

function PrimaryButton({ icon, children, ...props }) {
  return (
    <Container {...props}>
      <Label>{children}</Label>
    </Container>
  );
}

export default PrimaryButton;
