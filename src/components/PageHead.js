import React from 'react';
import { Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const PageHead = ({ title, subtitle, subtitle2 }) => {
  return (
      <FlexContainer column>
        <Typography variant='h3' sx={{ lineHeight: { xs: 1, lg: 1.5 } }}>
          {title}
        </Typography>
        <Typography variant='h5' sx={{ textAlign: 'center', maxWidth: 900 }}>
          {subtitle}
        </Typography>
        <Typography variant='h5' sx={{ textAlign: 'center', maxWidth: 900 }}>
          {subtitle2}
        </Typography>
      </FlexContainer>
  );
};

export default PageHead;
