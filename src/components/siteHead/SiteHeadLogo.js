import React from 'react';
import '../../styles.css';
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
        <Box
          width={{xs: '200px', sm: '250px', md: '300px', lg:'350px'}}
          marginTop={{ xs: '0',sm: '-10px', lg:'-30px' }}
          component='img'
          src='/images/logo-yellow-halo.png'
          alt="Papa G's logo"
        />
        <Box sx={{ margin: '16px', color: 'pg.nav' }}>
          <Typography
            variant='h5'
            className='slogan'
            sx={{ fontFamily: 'Ribeye', fontWeight: 400, color: 'flash.tawny' }}
          >
            Seasoned. Baked. Organic.
          </Typography>
        </Box>
      </Box>
    </PGlink>
  );
};

export default SiteHeadLogo;
