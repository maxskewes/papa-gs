import React from 'react';
import '../../styles.css';
import { Box, Typography } from '@mui/material';
import PGlink from '../PGlink';

export const SiteHeadLogo = () => {
  return (
    <PGlink to='/'>
      <Box
        padding={{ xs: 0, md: '0 0 0 1.5rem' }}
        width={{ xs: '200px', sm: '250px', md: '300px', lg: '360px' }}
        marginTop={{ xs: '0', sm: '-10px', md: '-24px', lg: '-32px' }}
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
        display={'flex'}
        paddingBottom={{ xs: 0, md: '4.5rem', lg: '6rem' }}
        marginLeft={{ xs: 0, md: '-1.25rem', lg: '-1.5rem' }}
      >
        <Typography
          className='slogan'
          textAlign={{ xs: 'right', md: 'left' }}
          sx={{
            fontFamily: 'Ribeye',
            fontSize: { xs: '18px', sm: '22px', lg: '24px' },
            lineHeight: { xs: 1.25, md: 1.125 },
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
