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
    productName,
    productPage,
    productImage,
    cardColor,
  }) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <PGlink to={productPage}>
          <Box
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
      <Grid container spacing={2} sx={{ padding: { xs: '24px', sm: '48px' } }}>
        <ProductCard
          productName={'Original Recipe'}
          productPage={'/original-recipe'}
          productImage={'/images/trimmed/original_pack_120psi.png'}
          cardColor={YELLOW}
        />
        <ProductCard
          productName={'Savory Sesame'}
          productPage={'/savory-sesame'}
          productImage={'/images/trimmed/sesame_pack_120psi.png'}
          cardColor={GREEN}
        />
        <ProductCard
          productName={'Taco Tofu'}
          productPage={'/street-taco'}
          productImage={'/images/trimmed/taco_pack_120psi.png'}
          cardColor={RED}
        />
        <ProductCard
          productName={'BBQ'}
          productPage={'/barbeque'}
          productImage={'/images/trimmed/bbq_pack_120psi.png'}
          cardColor={BLUE}
        />
      </Grid>
      <Box
        sx={{
          width: '400px',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          opacity: '85%',
        }}
      >
        <img
          src={'/images/dietary_icons_120dpi.png'}
          alt='dietary icon list'
          width='100%'
        />
      </Box>
    </RouteContainer>
  );
};

export default Landing;
