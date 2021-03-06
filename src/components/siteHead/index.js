import React, { useState } from 'react';
import { Box, Container, Typography, Zoom, Grid } from '@mui/material';
import SiteHeadLogo from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import { navigation } from './navigation';
import { MenuPanOpen } from './MenuPanOpen';
import { MenuPanClosed } from './MenuPanClosed';
import ImageBG from './download.jpeg';

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
        cursor: 'pointer',
        display: { xs: 'flex', md: 'none' },
        position: 'relative',
        marginBottom: '4px',
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
            color: 'pg.nav',
            '&:hover': {
              color: 'primary.main',
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
                md: '2.5rem',
                lg: '2.5rem',
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            display={{
              xs: 'flex',
              lg: 'none',
            }}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: { xs: 1 },
              padding: {
                xs: '3px',
                fontSize: '24px',
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
        // spacing={2}
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
            <Grid
              item
              xs={12}
              sm={2}
              md={2}
              key={index}
              sx={{
                margin: { xs: '4px', sm: '4px', md: '8px' },
                minWidth: { xs: '100%', sm: 'auto' },
                // '&:hover': {
                //   backgroundColor: { xs: 'primary.hover', sm: 'primary.text' },
                //   color: 'background.head',
                // },
              }}
            >
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
    <Box sx={{ backgroundColor: 'background.main', padding: '0 0 24px' }}>
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
