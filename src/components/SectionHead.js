import React from 'react';
import '../styles.css';
import { Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const RICH_TAWNY = '#593c05';

const SectionHead = ({ title, subtitle }) => {
  return (
    <FlexContainer column sx={{ paddingTop: 4 }}>
      <Typography
        variant='h4'
        className='shadow_sesame'
        sx={{
          textAlign: 'center',
          maxWidth: 900,

        }}
      >
        {title}
      </Typography>
      <Typography
        variant='h6'
        sx={{
          fontFamily: 'Ribeye',
          textAlign: 'center',
          maxWidth: 900,
          color: RICH_TAWNY,
          fontWeight: 600,
        }}
      >
        {subtitle}
      </Typography>
    </FlexContainer>
  );
};

export default SectionHead;
