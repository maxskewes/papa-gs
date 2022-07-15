import React from 'react';
import { Box, Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const PageHead = ({ title, subtitle }) => {
  return (
    <Box>
      <FlexContainer column>
        <Typography variant='h2' sx={{ lineHeight: { xs: 1, lg: 1.5 } }}>
          {title}
        </Typography>
        <Typography variant='h5' sx={{ textAlign: 'center', maxWidth: 900 }}>
          {subtitle}
        </Typography>
      </FlexContainer>
    </Box>
  );
};

export default PageHead;
