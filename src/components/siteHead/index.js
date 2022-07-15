import React, { useState } from 'react';
import { Box, Container, Typography, Zoom, Grid } from '@mui/material';
import SiteHeadLogo from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import { navigation } from './navigation';
import { MenuPanOpen } from './MenuPanOpen';
import { MenuPanClosed } from './MenuPanClosed';

const SiteHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <SiteHeadContainer>
      <SiteHeadLogo sx={{ padding: '0 300px 0 0', margin: '0 300px 0 0' }} />
      <MenuToggle handleToggle={handleToggle} isOpen={isOpen} />
      <LinkContainer isOpen={isOpen} />
    </SiteHeadContainer>
  );
};

const MenuToggle = ({ handleToggle, isOpen }) => {
  return (
    <Box
      onClick={handleToggle}
      sx={{
        width: '50px',
        color: 'white',
        cursor: 'pointer',
        display: { xs: 'flex', md: 'none' },
        position: 'relative',
      }}
    >
      {isOpen ? <MenuPanOpen /> : <MenuPanClosed />}
    </Box>
  );
};

const LinkItem = ({ to, description, title }) => {
  return (
    <PGlink to={to}>
      <PGtooltip
        title={description}
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 300 }}
      >
        <Box
          sx={{
            margin: {
              xs: 0,
              sm: '0',
            },
          }}
        >
          <Typography
            display='flex'
            justifyContent={{ xs: 'space-around' }}
            alignItems={{ xs: 'center', sm: 'baseline' }}
            sx={{
              lineHeight: { xs: 1, lg: 1.5 },
              fontWeight: 700,
              fontSize: {
                xs: '1.75rem',
                sm: '1.5rem',
                md: '1.5rem',
                lg: '2.5rem',
              },
              color: 'white',
              '&:hover': {
                color: 'primary.main',
              },
              // '&:active': {
              //   color: 'primary.main',
              // },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant='caption'
            display={{
              xs: 'flex',
              lg: 'none',
            }}
            sx={{
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: { xs: 1 },
              padding: {
                xs: '4px 0',
              },
            }}
          >
            {description}
          </Typography>
        </Box>
      </PGtooltip>
    </PGlink>
  );
};

const LinkContainer = ({ isOpen }) => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          display: {
            xs: isOpen ? 'flex' : 'none',
            md: 'flex',
          },
          justifyContent: {
            xs: 'center',
          },
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {navigation.map((nav, index) => {
          return (
            <Grid item xs={12} sm={2} md={4} key={index}>
              <LinkItem
                to={nav.route}
                key={index}
                description={nav.description}
                title={nav.title}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const SiteHeadContainer = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', padding: '0 0 24px' }}>
      <Box
        sx={{
          bgcolor: 'background.head',
          boxShadow: '-1px -1px 11px 0px rgba(0,13,7,0.87)',
        }}
      >
        <Container
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default SiteHead;
