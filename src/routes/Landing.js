import React from 'react';
import { motion } from 'framer-motion';
import { Box, Grid } from '@mui/material';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';
import PGlink from '../components/PGlink';
import icons from '../assets/dietary_icons.png';

const Landing = () => {
  const ProductCard = ({
    productName,
    productPage,
    productImage,
    cardColor,
  }) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <PGlink to={productPage}>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ height: '100%' }}
          >
            <Box
              bgcolor={cardColor}
              sx={{
                width: '100%',
                height: '100%',
                padding: '4% 0 4% 4%',
                borderRadius: '4px',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.img
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={productImage}
                alt={productName}
                position='absolute'
                width='100%'
              />
            </Box>
          </motion.div>
        </PGlink>
      </Grid>
    );
  };

  const IconImageBox = ({ iconImgSrc }) => {
    return (
      <Box
        sx={{
          width: { xs: '280px', sm: '400px' },
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          opacity: '85%',
        }}
      >
        <img src={iconImgSrc} alt='dietary icon list' width='100%' />
      </Box>
    );
  };

  return (
    <RouteContainer>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <PageHead title={'All Vegan. All Awesome.'} />
      </motion.div>
      <Grid container spacing={2} sx={{ padding: { xs: '24px', sm: '48px' } }}>
        <ProductCard
          productName={'Original Recipe'}
          productPage={'/original-recipe'}
          productImage={'/images/bags/web-bag-original.png'}
          cardColor={'YELLOW'}
        />
        <ProductCard
          productName={'Savory Sesame'}
          productPage={'/savory-sesame'}
          productImage={'/images/bags/web-bag-sesame.png'}
          cardColor={'GREEN'}
        />
        <ProductCard
          productName={'Taco Tofu'}
          productPage={'/street-taco'}
          productImage={'/images/bags/web-bag-taco.png'}
          cardColor={'RED'}
        />
        <ProductCard
          productName={'BBQ'}
          productPage={'/barbeque'}
          productImage={'/images/bags/web-bag-bbq.png'}
          cardColor={'BLUE'}
        />
      </Grid>
      <IconImageBox iconImgSrc={icons} />
    </RouteContainer>
  );
};

export default Landing;
