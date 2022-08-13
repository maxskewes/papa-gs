import React from 'react';
import '../styles.css';
import { Grid, Box, Typography } from '@mui/material';
import RouteContainer from '../components/RouteContainer';
import RecipeLink from '../components/RecipeLink';

const Taco = () => {
  return (
    <RouteContainer>
      <Typography
        variant='h1'
        className='shadow'
        sx={{ textAlign: 'center' }}
      >
        Organic Taco Tofu
      </Typography>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              margin: {
                xs: '0 0 0 20px',
                md: 0,
              },
            }}
          >
            <img
              width='100%'
              src='/images/pack-over-board/taco_PB.png'
              alt='Organic Taco Tofu'
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
            margin: {
              xs: '0 40px',
              md: 0,
            },
          }}
        >
          <Typography
            variant='h3'
            className='shade_sesame'
            sx={{ fontFamily: 'Ribeye', margin: 1 }}
          >
            Organic Taco Tofu
          </Typography>
          <Typography
            variant='h4'
            sx={{ fontFamily: 'Ribeye', margin: '16px 0 4px 64px' }}
          >
            Some stuff about it:
          </Typography>
          <Typography
            variant='h3'
            className='shade_original'
            sx={{
              fontFamily: 'Ribeye Marrow',
              fontWeight: 400,
              margin: '4px 32px 32px',
            }}
          >
            It slices, it dices, it wins the election...
          </Typography>
        </Grid>
      </Grid>
    </RouteContainer>
  );
};

export default Taco;
