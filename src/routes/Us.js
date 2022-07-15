import { Box, Typography } from '@mui/material';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import PageHead from '../components/PageHead';
import RouteContainer from '../components/RouteContainer';
import SectionHead from '../components/SectionHead';

const Us = () => {
  return (
    <RouteContainer>
      <FlexContainer column>
        <PageHead
          title={'Us.'}
          subtitle={
            "Back in highschool, someone bet Papa G that he couldn't go vegetarian for a month. Twenty-five years later he still is and has no idea why."
          }
        />
        <SectionHead
          title="Papa G's Vegan Organics"
          subtitle={
            'uses organic, local, sustainable ingredients and is committed to providing the best tasting, highest quality vegan food on the market. We specialize in offering options for people with food allegies.'
          }
        />
      </FlexContainer>
    </RouteContainer>
  );
};

export default Us;
