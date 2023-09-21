import React from 'react';
import { Box, CardMedia } from '@mui/material';

export const NFbbq = () => {
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
        image={'/images/product_pics/nutrition-bbq.png'}
        alt='Nutrition Facts BBQ'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

export const NForiginal = () => {
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
        image={'/images/product_pics/nutrition-original.png'}
        alt='Nutrition Facts Original'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

export const NFsesame = () => {
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
        image={'/images/product_pics/nutrition-sesame.png'}
        alt='Nutrition Facts Sesame'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

export const NFtaco = () => {
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
        image={'/images/product_pics/nutrition-taco.png'}
        alt='Nutrition Facts Taco'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};
