import { Typography, Container } from '@mui/material';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import PageHead from '../components/PageHead';
import RouteContainer from '../components/RouteContainer';

const Us = () => {
  return (
    <RouteContainer>
      <FlexContainer column>
        <PageHead title={'Us.'} />
        <Container sx={{ marginBottom:{ xs: '1rem', lg: '2rem' }}}>
        <Typography
          variant='h4'
          className='shadow_sesame'
          sx={{
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Our Story
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'Ribeye',
            textAlign: 'center',
            maxWidth: 900,
            color: 'flash.med_tawny',
            fontWeight: 600,
          }}
        >
          Papa G&apos;s Tofu is a small family-owned company based in Portland,
          Oregon. Using only organic non-GMO soybeans, we carefully marinate,
          season, and bake our tofu to perfection in our kitchen in Portland,
          OR.
        </Typography>
        </Container>
        <Container marginBottom={{ xs: '2rem' }}>
        <Typography
          variant='h4'
          className='shadow_sesame'
          sx={{
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Our Tofu
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'Ribeye',
            textAlign: 'center',
            maxWidth: 900,
            color: 'flash.med_tawny',
            fontWeight: 600,
          }}
        >
          You can&apos;t eat a brick. <br /> Tofu sold in bricks can&apos;t absorb
          marinade, which is why we cut ours into small pieces: to ensure every
          bite is infused evenly with flavour and has the perfect texture. Our
          organic ingredients and commitment to quality make Papa G&apos;s Tofu the
          perfect addition to any meal or a tasty snack straight out of the bag.
          We cater to all dietary needs and are dedicated to providing
          high-quality, delicious vegan food for everyone.
        </Typography>
        </Container>
      </FlexContainer>
    </RouteContainer>
  );
};

export default Us;
