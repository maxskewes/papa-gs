import React from 'react';
import '../../styles.css';
import { Box, Typography } from '@mui/material';
import PGlink from '../PGlink';

export const SiteHeadLogo = () => {
  return (
    <PGlink to='/'>
      <Box
        width={{ xs: '200px', sm: '250px', md: '300px', lg: '350px' }}
        marginTop={{ xs: '0', sm: '-10px', lg: '-30px' }}
        component='img'
        src='/images/logo-yellow-halo.png'
        alt="Papa G's logo"
      />
    </PGlink>
  );
};

export const SiteHeadSlogan = () => {
  return (
    <PGlink to='/'>
      <Box
        paddingBottom={{ xs: 0, md: '50px' }}
        marginLeft={{ xs: 0, md: '-1.5rem' }}
      >
        <Typography
          variant='h5'
          className='slogan'
          textAlign={{ xs: 'right', md: 'left' }}
          sx={{
            fontFamily: 'Ribeye',
            fontWeight: 400,
            color: 'flash.tawny',
          }}
        >
          Seasoned. <br />
          Baked.
          <br /> Organic.
        </Typography>
      </Box>
    </PGlink>
  );
};
