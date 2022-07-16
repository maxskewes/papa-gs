import React from 'react';
import { Box } from '@mui/material';

const RouteContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.text',
        minHeight: {
          xs: 500,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default RouteContainer;
