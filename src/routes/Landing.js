import React from 'react';
import { Box, Grid } from '@mui/material';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';
import PGlink from '../components/PGlink';

const YELLOW = '#deb20b';
const RED = '#c44431';
const BLUE = '#1c6a9a';
const GREEN = '#6c7e19';

const Landing = () => {
  const ProductCard = ({
    key,
    productName,
    productPage,
    productImage,
    cardColor,
  }) => {
    return (
      <Grid item xs={12} sm={6} lg={3}>
        <PGlink to={productPage}>
          <Box
            key={key}
            backgroundColor={cardColor}
            sx={{
              padding: '16px 8px 0 16px',
              borderRadius: '4px',
            }}
          >
            <img
              src={productImage}
              alt={productName}
              position='absolute'
              width='100%'
            />
          </Box>
        </PGlink>
      </Grid>
    );
  };

  return (
    <RouteContainer>
      <PageHead title={'All Vegan. All Awesome.'} />
      <Grid container spacing={2} padding={2}>
        <ProductCard
          key='1'
          productName={'Original Recipe'}
          productPage={'/original-recipe'}
          productImage={'/images/trimmed/Original_Pack_A_Fitted.png'}
          cardColor={YELLOW}
        />
        <ProductCard
          key='1'
          productName={'Savory Sesame'}
          productPage={'/savory-sesame'}
          productImage={'/images/trimmed/Savory_Sesame_Pack_A_Fitted.png'}
          cardColor={GREEN}
        />
        <ProductCard
          key='1'
          productName={'Taco Tofu'}
          productPage={'/taco-tofu'}
          productImage={'/images/trimmed/TACO_Pack_A_Fitted.png'}
          cardColor={RED}
        />
        <ProductCard
          key='1'
          productName={'BBQ'}
          productPage={'/bbq'}
          productImage={'/images/trimmed/BBQ_Pack_A_Fitted.png'}
          cardColor={BLUE}
        />
      </Grid>
      <Box>
        Put in icons from back label
      </Box>
    </RouteContainer>
  );
};

export default Landing;
