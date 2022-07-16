import React from 'react';
import { Container, Box } from '@mui/material';

const FlexContainer = ({ children, column }) => {
  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(column === true && { flexDirection: 'column' }),
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default FlexContainer;
