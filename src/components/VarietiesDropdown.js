import { React, useState } from 'react';
import '../styles.css';
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import PGlink from './PGlink';

export default function VarietiesDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClick = () => {

  // }

  return (
    <>
      <Button
        id='varieties-list'
        aria-controls={open ? 'varieties-list' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      //  onClick={handleClick}
        onMouseEnter={handleOpen}
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
            textTransform: 'capitalize',
            lineHeight: { xs: 1, lg: 1.5 },
            fontSize: {
              xs: '1.75rem',
              sm: '1.5rem',
              md: '2.5rem',
              lg: '2.5rem',
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
        // MenuListProps={{
        //   'aria-labelledby': 'varieties-list',
        // }}
      >
        <Box sx={{ backgroundColor: 'red' }}>
          <MenuItem onClick={handleClose}>
            <PGlink to='/original-recipe'>Original Recipe</PGlink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PGlink to='/savory-sesame'>Savory Sesame</PGlink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PGlink to='/taco-tofu'>Taco Tofu</PGlink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PGlink to='/bbq'>Barbeque</PGlink>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
}
