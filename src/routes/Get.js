import React from 'react';
import { Box } from '@mui/material';
import PageHead from '../components/PageHead';
import RouteContainer from '../components/RouteContainer';

const Get = () => {
  return (
    <RouteContainer>
      <PageHead
        title={'Get.'}
        subtitle={
          'Our products are available in peurveyors of conscious grocery products as well as by special order. Let us know how much of this shit you can stuff your fat face in. '
        }
      />
      <Box sx={{ padding: '16px', maxWidth: { xs: '200px', sm: '300px' } }}>
        <img src='/images/new-seasons.png' alt='New Seasons' width='100%' />
      </Box>
    </RouteContainer>
  );
};

export default Get;
