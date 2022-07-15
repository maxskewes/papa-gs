import { Box } from '@mui/material';
import React from 'react';
import PageHead from '../components/PageHead';
import RecipeCard from '../components/RecipeCard';
import RouteContainer from '../components/RouteContainer';

const Cook = () => {
  return (
    <RouteContainer>
      <PageHead
        title={'Cook.'}
        subtitle={
          'On-line recipe book. Feel free to peruse or create your own and let us know!'
        }
      />
      <Box>
        <RecipeCard />
      </Box>
    </RouteContainer>
  );
};

export default Cook;
