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
      <Grid item xs={6} md={3}>
        <PGlink to={productPage}>
          <Box
            key={key}
            backgroundColor={cardColor}
            sx={{
              padding: '4% 0 4% 4%',
              borderRadius: '4px',
              height: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
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
          productImage={'/images/trimmed/original_pack_120psi.png'}
          cardColor={YELLOW}
        />
        <ProductCard
          key='1'
          productName={'Savory Sesame'}
          productPage={'/savory-sesame'}
          productImage={'/images/trimmed/sesame_pack_120psi.png'}
          cardColor={GREEN}
        />
        <ProductCard
          key='1'
          productName={'Taco Tofu'}
          productPage={'/taco-tofu'}
          productImage={'/images/trimmed/taco_pack_120psi.png'}
          cardColor={RED}
        />
        <ProductCard
          key='1'
          productName={'BBQ'}
          productPage={'/bbq'}
          productImage={'/images/trimmed/bbq_pack_120psi.png'}
          cardColor={BLUE}
        />
      </Grid>
      <Box
        sx={{
          width: '500px',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={'/images/dietary_icons.png'}
          alt='dietary icon list'
          width='100%'
        />
      </Box>
    </RouteContainer>
  );
};

export default Landing;
