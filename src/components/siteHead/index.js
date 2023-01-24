import React from 'react';
import '../../styles.css';
import { Box } from '@mui/material';
import SiteHeadLg from './SiteHeadLg';
import SiteHeadSm from './SiteHeadSm';

const SiteHead = () => {
  return (
    <SiteHeadContainer maxWidth={'1400px'}>
      <SiteHeadLg />
      <SiteHeadSm />
    </SiteHeadContainer>
  );
};

const SiteHeadContainer = ({ children }) => {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle, #c44431 60%, #212121 100%)',
        boxShadow: '0px 5px 25px #242424',
        position: 'relative',
        maxHeight: { xs: null, md: '200px' },
      }}
    >
      <Box
        sx={{
          maxHeight: { xs: null, md: '200px' },
          background:
            'linear-gradient( to top, rgba(36,36,36,.2), rgba(255,0,0,0), rgba(36,36,36,.5))',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SiteHead;
