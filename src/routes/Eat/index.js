import React from 'react';
import PageHead from '../../components/PageHead';
import RouteContainer from '../../components/RouteContainer';
import SectionHead from '../../components/SectionHead';

const Eat = () => {
  return (
    <RouteContainer>
      <PageHead
        title='Eat.'
        subtitle={
          'Add to pasta, serve with beans & rice, enjoy on top of salad or eat as is: hot or cold. Available in four different flavors to suit a variety of recipe needs.'
        }
      />
      <SectionHead
        title='Ingredients: 100% Organic'
        subtitle={'Always with love.'}
      />
    </RouteContainer>
  );
};

export default Eat;
