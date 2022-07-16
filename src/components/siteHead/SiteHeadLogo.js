import React from 'react';
import { Box } from '@mui/material';
import PGlink from '../PGlink';

const SiteHeadLogo = () => {
  return (
    <PGlink to='/'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },
          alignItems: 'center',
        }}
      >
        <Box sx={{ height: '120px', width: 'auto' }}>
          <img
            height='100%'
            width='auto'
            src='/images/site-head-logo.png'
            alt="Papa G's logo"
          />
        </Box>
        <Box sx={{ height: '70px', width: 'auto' }}>
          <img
            height='100%'
            width='auto'
            src='/images/vegan-organics.png'
            alt='Vegan Organics'
          />
        </Box>
      </Box>
    </PGlink>
  );
};

export default SiteHeadLogo;
