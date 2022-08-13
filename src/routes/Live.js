import React from 'react';
import PageHead from '../components/PageHead';
import RouteContainer from '../components/RouteContainer';

const Live = () => {
  return (
    <RouteContainer>
      <PageHead
        title={'Live.'}
        subtitle={
          'A sustainable and harm-free existence whilst prolonging the life of the planet, despite the fact that nobody else cares.'
        }
      />
    </RouteContainer>
  );
};

export default Live;
