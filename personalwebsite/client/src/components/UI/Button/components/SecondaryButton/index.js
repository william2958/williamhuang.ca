import React from 'react';

import Container, { Label } from './SecondaryButtonContainer';

function SecondaryButton({ icon, children, ...props }, ref) {
  return (
    <Container {...props} ref={ref}>
      <Label>{children}</Label>
    </Container>
  );
}

export default React.forwardRef(SecondaryButton);
