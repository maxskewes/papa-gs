import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import RouteContainer from '../components/RouteContainer';

const Sesame = () => {
  return (
    <RouteContainer>
      <Typography
        variant='h2'
        className='shadow_sesame'
        sx={{ color: 'pg.black', textAlign: 'center', margin: { xs: 0, md: '0 0 1rem 0' } }}
      >
        Savory Sesame Tofu
      </Typography>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              maxWidth: '600px',
              padding: {
                xs: '.5rem 0 0 1rem',
                md: 0,
              },
            }}
          >
            <img
              width='100%'
              src='/images/pack-over-board/sesame_pack_on_board_120psi.png'
              alt='Savory Sesame Tofu'
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: 'flash.dark_tawny',
              textIndent: '1rem',
              textAlign: {
                xs: 'justify',
                md: 'left',
              },
              marginTop: { xs: '-.5rem', md: 0 },
              paddingX: { xs: '.5rem', md: 0 },
              fontSize: {
                xs: '.875rem',
                sm: '1rem',
                md: '1.125',
                lg: '1.25rem',
              },
              fontFamily: 'Ribeye',
              fontWeight: 600,
            }}
          >
            Organic tofu is marinated in tamari and sesame oil, seasoned with
            garlic, turmeric, sesame seeds, other organic spices, and baked to
            perfection. The result is an incredibly tender, chewy bite, and
            savory flavor. Naturally low in fat and cholesterol-free, each bag
            is packed with over 30 grams of protein, calcium, and iron to give
            you the fuel you need to live your best life! We use only the
            highest quality, organic ingredients to provide you with superior
            taste, and nutrition in every bite. Papa G&apos;s Savory Sesame Tofu
            adds instant flavor and texture to soups, salads, curries and rice
            dishes. Just as good straight from the bag as it is on your favorite
            meals, you&apos;ll find Papa G&apos;s Savory Sesame Tofu is the most
            convenient and versatile item in your refrigerator!
          </Typography>
        </Grid>
      </Grid>
    </RouteContainer>
  );
};

export default Sesame;
