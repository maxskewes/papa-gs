import React from 'react';
import { Box, CardMedia } from '@mui/material';

export const PPbbq = () => {
  return (
    <Box
      height='100vh'
      width='100vw'
      position={'fixed'}
      padding={'.5rem'}
      bgcolor={'white'}
      zIndex={2}
    >
      <CardMedia
        component='img'
        height='100%'
        image={'/images/product_pics/bbq.png'}
        alt='Curry Masala image'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

export const PPoriginal = () => {
  return (
    <Box
      height='100vh'
      width='100vw'
      position={'fixed'}
      padding={'.5rem'}
      bgcolor={'white'}
      zIndex={2}
    >
      <CardMedia
        component='img'
        height='100%'
        image={'/images/product_pics/original.png'}
        alt='Curry Masala image'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

export const PPsesame = () => {
  return (
    <Box
      height='100vh'
      width='100vw'
      position={'fixed'}
      padding={'.5rem'}
      bgcolor={'white'}
      zIndex={2}
    >
      <CardMedia
        component='img'
        height='100%'
        image={'/images/product_pics/sesame.png'}
        alt='Curry Masala image'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

export const PPtaco = () => {
  return (
    <Box
      height='100vh'
      width='100vw'
      position={'fixed'}
      padding={'.5rem'}
      bgcolor={'white'}
      zIndex={2}
    >
      <CardMedia
        component='img'
        height='100%'
        image={'/images/product_pics/taco.png'}
        alt='Curry Masala image'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};
