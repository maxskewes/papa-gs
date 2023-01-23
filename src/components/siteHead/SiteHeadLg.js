import React from 'react';
import '../../styles.css';
import { Box, Container, Typography, Zoom } from '@mui/material';
import { SiteHeadLogo, SiteHeadSlogan } from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import VarietiesDropdown from '../VarietiesDropdown';

const SiteHeadLg = () => {
  return (
    <Container
      sx={{
        display: {xs: 'none', md: 'flex'},
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <SiteHeadLogo />
      <SiteHeadSlogan />
      <LgLinkContainer />
    </Container>
  );
};

const LgLinkItem = ({ to, description, title }) => {
  return (
    <PGlink to={to}>
      <PGtooltip
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
        title={description}
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 300 }}
      >
        <Box>
          <Typography
            className='header'
            sx={{
              color: 'flash.tawny',
              fontFamily: 'Ribeye Marrow',
              fontWeight: 400,
              fontSize: '2.5rem',
              '&:hover': { color: '#c2914c' },
            }}
          >
            {title}
          </Typography>
          <Typography
            className='description'
            display={{
              xs: 'flex',
              md: 'none',
            }}
            sx={{
              color: 'flash.tawny',
              fontFamily: 'Ribeye',
              textTransform: 'uppercase',
              fontSize: '14px',
              fontWeight: 400,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: { xs: 1 },
              padding: {
                xs: '4px',
              },
              '&:hover': { color: '#333', opacity: '80%' },
            }}
          >
            {description}
          </Typography>
        </Box>
      </PGtooltip>
    </PGlink>
  );
};

const LgLinkContainer = () => {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <VarietiesDropdown />
      <LgLinkItem
        to={'/get'}
        description={'Where to purchase'}
        title={'Get.'}
      />
      <LgLinkItem
        to={'/us'}
        description={"Papa G's Vegan Organics"}
        title={'Us.'}
      />
    </Box>
  );
};

export default SiteHeadLg;

