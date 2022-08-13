import React, { useState } from 'react';
import '../../styles.css';
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
            className='header'
            display='flex'
            justifyContent={{ xs: 'space-around' }}
            alignItems={{ xs: 'center', sm: 'baseline' }}
            sx={{
              color: 'flash.tawny',
              fontFamily: 'Ribeye Marrow',
              fontWeight: 400,
              lineHeight: { xs: 1, lg: 1.5 },
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
                '&:hover': {
                  background: {
                    xs: 'radial-gradient(rgba(36,36,36,.50) 40%, rgba(255,0,0,0) 70%)',
                    md: 'transparent',
                  },
                  color: 'background.head',
                },
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
    // <Box sx={{ backgroundColor: 'background.main', padding: '0 0 24px' }}>
    <Box
      sx={{
        background: 'radial-gradient(circle, #c44431 60%, #212121 100%)',
        boxShadow: '0px 5px 25px #242424',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          background:
            'linear-gradient( to top, rgba(36,36,36,.2), rgba(255,0,0,0), rgba(36,36,36,.5))',
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
