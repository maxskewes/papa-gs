import { Box, Typography } from '@mui/material';
import React from 'react';
import PageHead from '../components/PageHead';
import RouteContainer from '../components/RouteContainer';

const Live = () => {
  return (
    <RouteContainer>
      <PageHead
        title={'Live.'}
        subtitle={
          "A sustainable and harm-free existence, prolonging the life of the planet, etc., despite the fact that nobody else gives a shit and our future looks bleak and depressing as fuck most of the time."
        }
      />
    </RouteContainer>
  );
};

export default Live;
