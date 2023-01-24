import React, { useState } from 'react';
import '../../styles.css';
import { Box, Icon, Typography, Zoom } from '@mui/material';
import { SiteHeadLogo, SiteHeadSlogan } from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import { MdRestaurantMenu } from 'react-icons/md';
import VarietiesDropdown from '../VarietiesDropdown';

const TAWNY = '#dcc098';

const SiteHeadSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        <MenuToggle handleToggle={handleToggle} isOpen={isOpen} />
        <SiteHeadLogo />
        <SiteHeadSlogan />
      </Box>
      <SmLinkContainer isOpen={isOpen} />
    </>
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '100vw',
          color: 'flash.tawny',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          '&:hover': {
            color: '#593c05',
            background: 'radial-gradient(circle, #c2914c 60%, #212121 100%)',
          },
        }}
      >
        <Typography
          className='header'
          sx={{
            fontFamily: 'Ribeye Marrow',
            fontSize: {
              xs: '1.75rem',
              sm: '1.5rem',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Ribeye',
            textTransform: 'uppercase',
            fontSize: '14px',
          }}
        >
          {description}
        </Typography>
      </Box>
    </PGlink>
  );
};

const SmLinkContainer = ({ isOpen }) => {
  return isOpen ? (
    <Box sx={{ backgroundColor: '#333' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          background: 'radial-gradient(circle, #c44431 60%, #212121 100%)',
          minWidth: '100vw',
          boxShadow: '0px 5px 25px #242424',
        }}
      >
        <VarietiesDropdown />
        <SmLinkItem
          to={'/get'}
          description={'Where to purchase'}
          title={'Get.'}
        />
        <SmLinkItem
          to={'/us'}
          description={"Papa G's Vegan Organics"}
          title={'Us.'}
        />
      </Box>
    </Box>
  ) : null;
};

export default SiteHeadSm;
