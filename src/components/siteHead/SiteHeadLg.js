import { React, useState, useEffect, useRef } from 'react';
import '../../styles.css';
import { Box, Typography, Button, Zoom } from '@mui/material';
import { SiteHeadLogo, SiteHeadSlogan } from './SiteHeadLogo';
import PGlink from '../PGlink';
import PGtooltip from './PGtooltip.tsx';
import VarietiesMenu from '../VarietiesMenu';

const SiteHeadLg = () => {
  const [varietiesMenuOpen, setVarietiesMenuOpen] = useState(false);
  const handleClick = () => {
    setVarietiesMenuOpen(!varietiesMenuOpen);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handleClose = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setVarietiesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
  });

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
                color: 'TAWNY',
                fontFamily: 'Ribeye Marrow',
                fontWeight: 400,
                fontSize: '2.5rem',
                '&:hover': { color: 'RICH_TAWNY' },
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
                color: 'TAWNY',
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

  const LgLinkContainer = () => {
    return (
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
          postion: 'relative',
          flexGrow: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          maxWidth: '800px',
        }}
      >
        <Button onClick={handleClick}>
          <Typography
            className='header'
            sx={{
              color: 'TAWNY',
              fontFamily: 'Ribeye Marrow',
              fontWeight: 400,
              textTransform: 'none',
              fontSize: '2.5rem',
              '&:hover': { color: 'RICH_TAWNY' },
            }}
          >
            Varieties.
          </Typography>
          <Box ref={menuRef}>{varietiesMenuOpen && <VarietiesMenu />}</Box>
        </Button>
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1400px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: { md: '1rem', lg: '2rem' },
            flexGrow: 2,
          }}
        >
          <SiteHeadLogo />
          <SiteHeadSlogan />
          <LgLinkContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default SiteHeadLg;
