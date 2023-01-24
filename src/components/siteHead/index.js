import React, { useState } from 'react';
import '../../styles.css';
import { Box, Icon, Typography, Zoom } from '@mui/material';
import { SiteHeadLogo, SiteHeadSlogan } from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import { MdRestaurantMenu } from 'react-icons/md';
import VarietiesDropdown from '../VarietiesDropdown';
import SiteHeadLg from './SiteHeadLg';

const TAWNY = '#dcc098';

const SiteHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <SiteHeadContainer>
      <SiteHeadLg />
      <Box
        sx={{
          display: {xs: 'flex', md: 'none'},
          flexDirection: 'row',
          justifyContent: { xs: 'space-between', md: 'flex-start' },
          alignItems: 'center',
        }}
      >
        <MenuToggle handleToggle={handleToggle} isOpen={isOpen} />
        <SiteHeadLogo />
        <SiteHeadSlogan />
        <SmLinkContainer isOpen={isOpen} />
      </Box>
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
          marginTop: '-10px',
        }}
      >
        MENU
      </Typography>
    </Box>
  );
};

const SmLinkItem = ({ to, description, title }) => {
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
              '&:hover': { color: '#333', opacity: '80%' },
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

const SmLinkContainer = ({ isOpen }) => {
  return isOpen ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#333',
        minWidth: '100vw',
      }}
    >
      <VarietiesDropdown />
      <Box
        sx={{
          minWidth: '100vw',
          backgroundColor: 'transparent',
          '&:hover': { backgroundColor: '#dcc098', opacity: '80%' },
        }}
      >
        <SmLinkItem
          to={'/get'}
          description={'Where to purchase'}
          title={'Get.'}
          sx={{
            '&:hover': { color: '#333', opacity: '80%' },
          }}
        />
        <SmLinkItem
          to={'/us'}
          description={"Papa G's Vegan Organics"}
          title={'Us.'}
          sx={{
            '&:hover': { color: '#333', opacity: '80%' },
          }}
        />
      </Box>
    </Box>
  ) : null;
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
        {children}
      </Box>
    </Box>
  );
};

export default SiteHead;
