import React from 'react';
import { Box, Container } from '@mui/material';
import Shade from '../assets/shade-route.png';

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
              xs: '16px 0 40px',
              // sm: '0 40px 40px',
              md: '32px 40px 80px',
              lg: '32px 0 80px',
            },
          }}
        >
          {children}
        </Box>

    </Box>
  );
};

export default RouteContainer;
