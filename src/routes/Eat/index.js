import React from 'react';
import { Container, Grid } from '@mui/material';
import PageHead from '../../components/PageHead';
import RouteContainer from '../../components/RouteContainer';
import SectionHead from '../../components/SectionHead';
import ProductCard from './ProductCard';

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
        subtitle={"Always with love. And Chris' semen."}
      />
        <Grid container sx={{ maxWidth: {sm: '650px', lg: '1200px'}}}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
    </RouteContainer>
  );
};

export default Eat;
