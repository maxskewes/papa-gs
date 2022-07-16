import React from 'react';
import { Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const SectionHead = ({ title, subtitle }) => {
  return (
    <FlexContainer column sx={{ paddingTop: 4 }}>
      <Typography variant='h4' sx={{ textAlign: 'center', maxWidth: 900 }}>
        {title}
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center', maxWidth: 900 }}>
        {subtitle}
      </Typography>
    </FlexContainer>
  );
};

export default SectionHead;
