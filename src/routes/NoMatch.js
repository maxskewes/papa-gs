import { Box, Typography } from '@mui/material';
import React from 'react';
import PGlink from '../components/PGlink';

const NoMatch = () => {
  return (
    <Box width={'100vw'} height={'100vh'} bgcolor={'white'} paddingTop={'4rem'}>
      <Typography>
        Unfortunately we could not load that page. Please select your desination
        from the directory below.
      </Typography>
      <ul>
        <li>
          <PGlink to={'/product-pics/original'}>
            <h5>Product Image of Original Recipe Tofu</h5>
          </PGlink>
        </li>
        <li>
          <PGlink to={'/original-recipe'}>
            <h5>Description Page for Original Recipe</h5>
          </PGlink>
        </li>
        <li>
          <PGlink to={'/nutrition-facts/original'}>
            <h5>Nutrition Facts for Original Recipe</h5>
          </PGlink>
        </li>
      </ul>
    </Box>
  );
};

export default NoMatch;
