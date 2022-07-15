import { Box, Typography } from '@mui/material';
import React from 'react';
import RouteContainer from '../components/RouteContainer';
import PageHead from '../components/PageHead';
import SectionHead from '../components/SectionHead';
import PGlink from '../components/PGlink';
import FlexContainer from '../components/FlexContainer';

const Welcome = () => {
  return (
    <RouteContainer>
      <PageHead
        title='Welcome.'
        subtitle={"Papa G's is All Organic, All Vegan, and All Awesome."}
      />
      <Box p={4}>
        <SectionHead
          title='Reviews'
          subtitle={<i>...from Green Vegan Living:</i>}
        />
        <FlexContainer column>
          <Typography>
            I already teased you a few weeks ago, when I said that within a
            weekend, D and I ate three packages of flavored tofu from one local
            company. And you got to see a picture:
          </Typography>
          <img
            src='http://1.bp.blogspot.com/-HXUNeh0sDFk/TpUUx0ZsTxI/AAAAAAAASfY/qPa2nN3qo9s/s640/IMG_1352.JPG'
            alt='tofu tacos'
          />
          <Typography>
            This doesn't even give the tofu justice, but lemme just tell you
            right here and right now: this stuff will absolutely ROCK your
            world.
          </Typography>
          <Typography>
            Now, here is the very sad news: it's only sold in Portland, Oregon.
          </Typography>
          <PGlink to='http://www.greenveganliving.com/2011/10/product-review-papa-gs-organic-tofu.html'>
            <Typography>
              http://www.greenveganliving.com/2011/10/product-review-papa-gs-organic-tofu.html
            </Typography>
          </PGlink>
        </FlexContainer>
      </Box>
    </RouteContainer>
  );
};

export default Welcome;
