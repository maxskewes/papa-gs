import React, { useState } from 'react';
import '../../styles.css';
import { Box, Icon, Typography } from '@mui/material';
import { SiteHeadLogo, SiteHeadSlogan } from './SiteHeadLogo';
import PGlink from '../PGlink';
import { MdRestaurantMenu } from 'react-icons/md';

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
          padding: { xs: '0 1rem', sm: '0 2rem' },
        }}
      >
        <MenuToggle
          handleToggle={handleToggle}
          isOpen={isOpen}
          sx={{ flexGrow: 1 }}
        />
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
        justifyContent: 'flex-start',
        color: 'flash.tawny',
        '&:hover': {
          color: '#e9d7be',
        },
      }}
    >
      <Icon
        sx={{
          width: '60px',
          height: 'auto',
          margin: 0,
        }}
      >
        <MdRestaurantMenu size= '40px' />
      </Icon>
      <Typography
        className='slogan'
        sx={{
          fontFamily: 'Ribeye',
          fontSize: { xs: '1rem', sm: '1.25rem' },
          fontWeight: 400,
          marginTop: '-10px',
        }}
      >
        MENU
      </Typography>
    </Box>
  );
};

const SmLinkItem = ({ to, title }) => {
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
          paddingTop: '.5rem',
          paddingBottom: '.5rem',
          '&:hover': {
            color: '#e9d7be',
            background: 'radial-gradient(circle, #9b3627 60%, #212121 100%)',
          },
        }}
      >
        <Typography
          className='header'
          sx={{
            fontFamily: 'Ribeye',
            textTransform: 'uppercase',
            fontSize: '14px',
          }}
        >
          {title}
        </Typography>
      </Box>
    </PGlink>
  );
};

const SmLinkContainer = ({ isOpen }) => {
  return isOpen ? (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'transparent',
        paddingBottom: '.5rem',
      }}
    >
      <SmLinkItem to={'/original-recipe'} title={'Original Recipe Tofu'} />
      <SmLinkItem to={'/savory-sesame'} title={'Savory Sesame'} />
      <SmLinkItem to={'/taco-tofu'} title={'Street Taco'} />
      <SmLinkItem to={'/bbq'} title={'Babeque'} />
      <SmLinkItem to={'/get'} title={'Where to purchase'} />
      <SmLinkItem to={'/us'} title={"Papa G's Vegan Organics"} />
    </Box>
  ) : null;
};

export default SiteHeadSm;
