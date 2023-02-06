import React from 'react';
import '../styles.css';
import { Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const PageHead = ({ title, subtitle, subtitle2 }) => {
  return (
    <FlexContainer column>
      <Typography
        className='shadow_bbq'
        variant='h2'
        sx={{
          color: 'BLACK',
          marginBottom: { xs: '.5rem', md: '1rem' },
          textAlign: 'center',
          lineHeight: { xs: 1, lg: 1.5 },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '20px', sm: '24px', md: '28px' },
          lineHeight: 1.2,
          fontFamily: 'Ribeye',
          textAlign: 'center',
          maxWidth: 900,
          color: 'MED_TAWNY',
          fontWeight: 600,
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant='h5'
        sx={{
          textAlign: 'center',
          maxWidth: 900,
          color: 'MED_TAWNY',
          fontWeight: 600,
        }}
      >
        {subtitle2}
      </Typography>
    </FlexContainer>
  );
};

export default PageHead;
