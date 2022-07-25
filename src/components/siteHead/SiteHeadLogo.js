import React from 'react';
import { Box, Typography } from '@mui/material';
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
        <Box sx={{}}>
          <Typography variant='h1' noWrap sx={{ color: 'pg.nav' }}>
            PAPA G&apos;s
          </Typography>
          {/* <img
            height='100%'
            width='auto'
            src='/images/site-head-logo.png'
            alt="Papa G's logo"
          /> */}
        </Box>
        <Box sx={{ margin: '16px', color: 'pg.nav' }}>
          <Typography variant='h5'>Seasoned. Baked. Organic.</Typography>
        </Box>
      </Box>
    </PGlink>
  );
};

export default SiteHeadLogo;
