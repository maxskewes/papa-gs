import React from 'react';
import { Box, Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const SectionHead = ({ title, subtitle }) => {
  return (
    <Box pt={4}>
      <FlexContainer column>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='h6' sx={{ textAlign: 'center', maxWidth: 900 }}>
          {subtitle}
        </Typography>
      </FlexContainer>
    </Box>
  );
};

export default SectionHead;
