import { React, useState } from 'react';
import '../styles.css';
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import PGlink from './PGlink';

const RICH_TAWNY = '#593c05';

export default function VarietiesDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Button
        id='varieties-list'
        aria-controls={open ? 'varieties-list' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // onMouseEnter={handleOpen}
      >
        <Typography
          className='header'
          display='flex'
          justifyContent='center'
          alignItems='center'
          minWidth={'100%'}
          sx={{
            color: 'flash.tawny',
            fontFamily: 'Ribeye Marrow',
            fontWeight: 400,
            textTransform: 'capitalize',
            lineHeight: 1,
            fontSize: {
              xs: '1.75rem',
              sm: '1.5rem',
              md: '2.5rem',
            },
          }}
        >
          Varieties.
        </Typography>
      </Button>
      <Menu
        id='varieties-list'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          backgroundColor: 'transparent',
          'aria-labelledby': 'varieties-list',
        }}
      >
        <Box
          sx={{
            background: 'radial-gradient( #f7e5ba 60%, #e8ba4d 100%)',
            textDecoration: 'none',
            marginTop: '-8px',
            marginBottom: '-8px',
            backgroundColor: 'green',
          }}
        >
          <PGlink to='/original-recipe'>
            <MenuItem onClick={handleClose}>
              <Typography
                sx={{
                  color: 'BITCH_TAWNY',
                  fontSize: 12,
                  fontFamily: 'Ribeye',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Original Recipe
              </Typography>
            </MenuItem>
          </PGlink>
          <PGlink to='/savory-sesame'>
            <MenuItem onClick={handleClose}>
              <Typography
                sx={{
                  color: RICH_TAWNY,
                  fontSize: 12,
                  fontFamily: 'Ribeye',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Savory Sesame
              </Typography>
            </MenuItem>
          </PGlink>
          <PGlink to='/street-taco'>
            <MenuItem onClick={handleClose}>
              <Typography
                sx={{
                  color: RICH_TAWNY,
                  fontSize: 12,
                  fontFamily: 'Ribeye',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Street Taco
              </Typography>
            </MenuItem>
          </PGlink>
          <PGlink to='/barbeque'>
            <MenuItem onClick={handleClose}>
              <Typography
                sx={{
                  color: RICH_TAWNY,
                  fontSize: 12,
                  fontFamily: 'Ribeye',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Barbeque
              </Typography>
            </MenuItem>
          </PGlink>
        </Box>
      </Menu>
    </>
  );
}
