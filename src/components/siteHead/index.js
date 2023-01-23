import React, { useState } from 'react';
import '../../styles.css';
import { Box, Container, Icon, Typography, Zoom } from '@mui/material';
import { SiteHeadLogo, SiteHeadSlogan } from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import { navigation } from './navigation';
import { MdRestaurantMenu } from 'react-icons/md';
import VarietiesDropdown from '../VarietiesDropdown';

const TAWNY = '#dcc098';

const SiteHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <SiteHeadContainer>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: { xs: 'space-between', md: 'flex-start' },
          alignItems: 'center',
        }}
      >
        <MenuToggle handleToggle={handleToggle} isOpen={isOpen} />
        <SiteHeadLogo />
        <SiteHeadSlogan />
      </Container>
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
      {isOpen ? <MenuIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuIcon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon
        sx={{
          width: '60px',
          height: 'auto',
       
          margin: 0,
        }}
      >
        <MdRestaurantMenu color={TAWNY} size='40px' />
      </Icon>
      <Typography
        className='slogan'
        sx={{
          fontFamily: 'Ribeye',
          fontWeight: 400,
          color: 'flash.tawny',
          marginTop: '-10px'
        }}
      >
        MENU
      </Typography>
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
        <Box>
          <Typography
            className='header'
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
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
    <Box
      sx={{
        display: {
          xs: isOpen ? 'flex' : 'none',
          md: 'flex',
        },
        justifyContent: {
          xs: 'center',
          md: 'space-around',
        },
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        item
        xs={12}
        sm={2}
        md={2}
        key={'varieties'}
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
        <VarietiesDropdown />
      </Box>

      {navigation.map((nav, index) => {
        return (
          <Box
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
          </Box>
        );
      })}
    </Box>
  );
};

const SiteHeadContainer = ({ children }) => {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle, #c44431 60%, #212121 100%)',
        boxShadow: '0px 5px 25px #242424',
        position: 'relative',
        maxHeight: '200px',
      }}
    >
      <Box
        sx={{
          maxHeight: '200px',
          background:
            'linear-gradient( to top, rgba(36,36,36,.2), rgba(255,0,0,0), rgba(36,36,36,.5))',
        }}
      >
        <Container
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            // {
            //   xs: 'row-reverse',
            //   md: 'row',
            // }
            // ,
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
