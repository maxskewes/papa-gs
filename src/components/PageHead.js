import React from 'react';
import '../styles.css';
import { Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const RICH_TAWNY = '#593c05';

const PageHead = ({ title, subtitle, subtitle2 }) => {
  return (
    <FlexContainer column>
      <Typography
        className='shadow_bbq'
        variant='h2'
        sx={{ textAlign: 'center', lineHeight: { xs: 1, lg: 1.5 } }}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
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
      <Typography
        variant='h5'
        sx={{
          textAlign: 'center',
          maxWidth: 900,
          color: RICH_TAWNY,
          fontWeight: 600,
        }}
      >
        {subtitle2}
      </Typography>
    </FlexContainer>
  );
};

export default PageHead;
