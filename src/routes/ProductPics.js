import React from 'react';
import { Box, CardMedia } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const ProductImage = ({ imgSrc }) => {
  return (
    <Box height='100vh' width='100vw' position={'fixed'} padding={'.5rem'} bgcolor={'white'}>
      <CardMedia
        component='img'
        height='100%'
        image={imgSrc}
        alt='Curry Masala image'
        sx={{ objectFit: 'contain' }}
      />
    </Box>
  );
};

const ProductPics = () => {
    const productPics = [
        'bbq',
        'nutrition-bbq',
        'original',
        'nutrition-original',
        'sesame-front',
        'nutrition-sesame',
        'taco',
        'nutrition-taco',
      ];
  return (
    <Routes>
      {productPics.map((pp, i) => {
        return (
        <Route
          key={i}
          path={pp}
          element={
            <ProductImage imgSrc={`/images/product_pics/${pp}.png`} />
          }
        />
      )})
    }
    </Routes>
  );
};

export default ProductPics;
