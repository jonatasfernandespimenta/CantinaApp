import React from 'react';

import {
  Container,
  Text
} from './styles';

const Button = ({ children, height }) => (
  <Container height={height}>
    {children && <Text>{children}</Text>}
  </Container>
);

export default Button;
