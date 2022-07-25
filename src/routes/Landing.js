import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';
import PGlink from '../components/PGlink';

const BLACK = '#212121';
const WHITE = '#FFFDFA';
const YELLOW = '#deb20b';
const RED = '#c44431';
const BLUE = '#1c6a9a';
const GREEN = '#6c7e19';
const ORANGE = '#e26107';

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
            <img src={productImage} alt={productName} width='100%' />
          </Box>
        </PGlink>
      </Grid>
    );
  };

  return (
    <RouteContainer>
      <Typography
        variant='h1'
        sx={{
          textShadow: '5px',
          textShadowOffset: '10px',
          textShadowColor: 'blue',
          textShadowRadius: '5px',
        }}
      >
        HalleFuckingBooyah
      </Typography>
      <Typography
        variant='h1'
        textShadowOffset={{ height: 2, width: 2 }}
        textShadowColor={BLUE}
        textShadowRadius={10}
      >
        HalleFuckingBooyah
      </Typography>
      <Typography
        variant='h1'
        sx={{
          textShadowOffset: { height: 2, width: 2 },
          textShadowColor: BLUE,
          textShadowRadius: '5px',
        }}
      >
        HalleFuckingBooyah
      </Typography>
      <PageHead title={'All Vegan, All Awesome.'} />
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
      {/* <Grid item xs={12} sm={6} lg={3}>
          <Box
            backgroundColor={'flash.yellow'}
            sx={{ borderRadius: '6px', padding: '16px 8px 0 16px' }}
          >
            <img
              src='/images/products/Savory_Sesame_Pack_B_Fitted.png'
              alt='orignal'
              width='100%'
            />
          </Box>
        </Grid> */}
      {/* <Grid item xs={12} sm={6} lg={3}>
          <PGlink to='/savory-sesame'>
            <Box
              backgroundColor='flash.green'
              sx={{ borderRadius: '6px', padding: '16px 8px 0 16px' }}
            >
              <img
                src='/images/products/Savory_Sesame_Pack_B_Fitted.png'
                alt='orignal'
                width='100%'
              />
            </Box>
          </PGlink>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            backgroundColor={'flash.orange'}
            sx={{ borderRadius: '6px', padding: '16px 8px 0 16px' }}
          >
            <img
              src='/images/products/Savory_Sesame_Pack_B_Fitted.png'
              alt='orignal'
              width='100%'
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            backgroundColor={'flash.blue'}
            sx={{ borderRadius: '6px', padding: '16px 8px 0 16px' }}
          >
            <img
              src='/images/products/Savory_Sesame_Pack_B_Fitted.png'
              alt='orignal'
              width='100%'
            />
          </Box>
        </Grid>


      {/* <Box
        sx={{
          padding: { xs: '8px', md: '16px' },
          maxWidth: { xs: '400px', sm: '900px', md: '1200px', lg: '1200px' },
        }}
      >
        <SectionHead
          title='Reviews'
          subtitle={<i>...from Green Vegan Living:</i>}
        />
        <FlexContainer column>
          <Typography>
          &quot;I already teased you a few weeks ago, when I said that within a
            weekend, D and I ate three packages of flavored tofu from one local
            company. And you got to see a picture:
          </Typography>
          <Box sx={{ maxWidth: { xs: '300px', sm: '400px', md: '600px' } }}>
            <img
              src='http://1.bp.blogspot.com/-HXUNeh0sDFk/TpUUx0ZsTxI/AAAAAAAASfY/qPa2nN3qo9s/s640/IMG_1352.JPG'
              alt='tofu tacos'
              width='100%'
            />
          </Box>
          <Typography>
          &quot;This doesn&apos;t even give the tofu justice, but lemme just tell
            you right here and right now: this stuff will absolutely ROCK your
            world.
          </Typography>
          <Typography>
          &quot;Now, here is the very sad news: it&apos;s only sold in Portland,
            Oregon.&quot;
          </Typography>
          <PGlink to='http://www.greenveganliving.com/2011/10/product-review-papa-gs-organic-tofu.html'>
            <Typography variant='body2'>
              http://www.greenveganliving.com/papa-gs.html
            </Typography>
          </PGlink>
        </FlexContainer>
      </Box> */}
    </RouteContainer>
  );
};

export default Landing;
