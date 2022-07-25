import React from 'react';
import { Box } from '@mui/material';

const RouteContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.text',
      }}
    >
      <Box
        sx={{
          minHeight: {
            xs: 500,
          },
          maxWidth: '1200px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default RouteContainer;
