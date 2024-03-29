import React from 'react';
import '../../styles.css';
import { Box } from '@mui/material';
import SiteHeadLg from './SiteHeadLg';
import SiteHeadSm from './SiteHeadSm';

const SiteHead = () => {
  return (
    <SiteHeadBackground>
      <SiteHeadLg />
      <SiteHeadSm />
    </SiteHeadBackground>
  );
};

const SiteHeadBackground = ({ children }) => {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle, #c44431 60%, #111 100%)',
        boxShadow: '0px 5px 25px #242424',
        position: 'relative',
        minWidth: '100vw',
        maxHeight: { xs: null, md: '160px', lg: '192px' },
      }}
    >
      <Box
        sx={{
          minWidth: '100vw',
          maxHeight: { xs: null, md: '160px', lg: '192px' },
          background:
            'linear-gradient( to top, rgba(51,51,51,.2), rgba(196,69,49,0), rgba(51,51,51,.5))',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SiteHead;
