import { Typography } from '@mui/material';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';

const RICH_TAWNY = '#593c05';

const Contact = () => {
  return (
    <RouteContainer>
      <PageHead title={'Contact.'} />
      <FlexContainer column>
        <Typography
          sx={{
            color: RICH_TAWNY,
            fontSize: '24px',
            fontFamily: 'Ribeye',
            fontWeight: 600,
          }}
        >
          503 664-0274
        </Typography>
        <Typography
          sx={{
            color: RICH_TAWNY,
            fontSize: '24px',
            fontFamily: 'Ribeye',
            fontWeight: 600,
          }}
        >
          papagstofu@secretsocietyorgaincs.com
        </Typography>
      </FlexContainer>
    </RouteContainer>
  );
};

export default Contact;
