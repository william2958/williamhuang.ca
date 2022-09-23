import React from 'react';
import LinkWrapper from "./styles";

const Link = ({ isPrimary = false, isDanger = false, children, onClick }) => {
  
  return (
    <LinkWrapper isPrimary={isPrimary} isDanger={isDanger} onClick={onClick}>
      {children}
    </LinkWrapper>
  )
  
};

export default Link;
