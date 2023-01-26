import React from 'react';
import { Box } from '@mui/material';

const RouteContainer = ({ children }) => {
  return (
    <Box
      sx={{
        background: 'radial-gradient( #f7e5ba 60%, #e8ba4d 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.text',
      }}
    >
        <Box
          sx={{
            minHeight: {
              xs: 0,
              md: '400px',
            },
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: {
              xs: '2rem .5rem 3.5rem',
              sm: '2rem 1rem 3.5rem',
              md: '3rem 1rem 5rem',
              lg: '3.5rem 1rem 5rem',
            },
          }}
        >
          {children}
        </Box>
    </Box>
  );
};

export default RouteContainer;
