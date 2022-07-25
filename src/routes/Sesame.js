import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import RouteContainer from '../components/RouteContainer';
import PGlink from '../components/PGlink';

const Sesame = () => {
  return (
    <RouteContainer>
      <Grid container sx={{ padding: ' 0 100px'}}>
        <Grid item xs={12} sm={4} sx={{ zIndex: 2}}>
          <Box sx={{ zIndex: 2}}>
            <img
              src='/images/products/Savory_Sesame_Pack_B.png'
              alt='Savory Sesame'
              width='100%'
              zIndex={2}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ zIndex: 0}}>
          <Box sx={{ zIndex: 0, display: 'flex', alignItems:'center', alignContent:'center', justifyContent:'center', minHeight:'100%', marginLeft: '-250px', marginTop:'30px' }}>
            <img
              src='/images/on_board/Savory_Sesame_On_Board_Flipped.png'
              alt='Savory Sesame'
              width='70%'
              zIndex= {0}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          xs={12}
          sm={4}
        >
          <Grid item>
            <PGlink to='/cook'>
              <Typography variant='h2' textShadow='-1px 1px 10px rgba(0, 0, 0, 0.75)'>
                Check out our on-line recipe book.
              </Typography>
            </PGlink>
          </Grid>

          <Grid item>
            <Typography variant='h3'>Ingredients:</Typography>
            <Typography variant='h4'>
              Shit, Piss, Fuck, Cunt, Cocksucker, Motherfucker, Organic Tits
            </Typography>
            <Typography variant='h3'>Great on dead Jews!</Typography>
          </Grid>
        </Grid>
      </Grid>
    </RouteContainer>
  );
};

export default Sesame;
