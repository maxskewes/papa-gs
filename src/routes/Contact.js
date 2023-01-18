import { Typography } from '@mui/material';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';

const Contact = () => {
  return (
    <RouteContainer>
      <PageHead title={'Contact.'} />
      <FlexContainer column>
        <Typography>503 664-0274</Typography>
        <Typography>papagstofu@secretsocietyorgaincs.com</Typography>
      </FlexContainer>
    </RouteContainer>
  );
};

export default Contact;
