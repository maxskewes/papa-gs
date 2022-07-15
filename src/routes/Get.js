import React from 'react';
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
      <img src='/images/new-seasons.png' alt='New Seasons' />
    </RouteContainer>
  );
};

export default Get;
