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
              xs: '1rem .5rem 2.5rem',
              sm: '1rem 1rem 2.5rem',
              md: '2rem 1rem 5rem',
              lg: '2.5rem 1rem 5rem',
            },
          }}
        >
          {children}
        </Box>
    </Box>
  );
};

export default RouteContainer;
