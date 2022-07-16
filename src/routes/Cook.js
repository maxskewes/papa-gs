import React from 'react';
import { Grid } from '@mui/material';
import PageHead from '../components/PageHead';
import RecipeCard from '../components/RecipeCard';
import RouteContainer from '../components/RouteContainer';

const Cook = () => {
  return (
    <RouteContainer>
      <PageHead title={'Cook.'} subtitle={"Papa G's On-line recipe book."} />
      <Grid container sx={{ maxWidth: { sm: '650px', lg: '1200px' } }}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Grid>
    </RouteContainer>
  );
};

export default Cook;
