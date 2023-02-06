import { Typography } from '@mui/material';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';

const Contact = () => {
  return (
    <RouteContainer sx={{ display: 'flex', flexGrow: 2 }}>
      <PageHead title={'Contact.'} />
      <FlexContainer column sx={{ display: 'flex', flexGrow: 2 }}>
        <Typography
          sx={{
            color: 'MED_TAWNY',
            fontSize: { xs: '20px', sm: '24px' },
            fontFamily: 'Ribeye',
            fontWeight: 600,
          }}
        >
          503 664-0274
        </Typography>
        <Typography
          sx={{
            color: 'MED_TAWNY',
            fontSize: { xs: '14px', sm: '24px' },
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
