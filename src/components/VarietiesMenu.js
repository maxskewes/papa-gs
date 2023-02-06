import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';
import { Box, Typography } from '@mui/material';

export default function VarietiesMenu() {
  const VarietyLink = ({ to, children }) => {
    return (
      <NavLink underline='none' to={to} cursor='pointer' margin='.5rem'>
        <Typography
          sx={{
            color: 'MED_TAWNY',
            fontSize: 12,
            fontFamily: 'Ribeye',
            fontWeight: 600,
            textTransform: 'uppercase',
            textAlign: 'center',
            padding: '.25rem',
          }}
        >
          {children}
        </Typography>
      </NavLink>
    );
  };

  return (
    <Box
      sx={{
        flexDirection: 'column',
        background: 'radial-gradient( #f7e5ba 60%, #e8ba4d 100%)',
        maxWidth: '200px',
        position: 'absolute',
        left: '20%',
        top: 'calc(100% - .5rem)',
        boxShadow: '0 5px 20px rgba(36, 36, 36, 1)',
        borderRadius: ' 0 0 .35rem .35rem',
        opacity: .70,
        // transform: 'translateY(10rem)',
        // transition: 'opacity 150ms ease-in-out(0)',
      }}
    >
      <VarietyLink to='/original-recipe'>Original Recipe</VarietyLink>
      <VarietyLink to='/savory-sesame'>Savory Sesame</VarietyLink>
      <VarietyLink to='/street-taco'>Street Taco</VarietyLink>
      <VarietyLink to='/barbeque'>Barbeque</VarietyLink>
    </Box>
  );
}

{
  /* <Button
id='variety-dropdown'
aria-controls={open ? 'dropdown-options' : undefined}
aria-haspopup='true'
aria-expanded={open ? 'true' : undefined}
onClick={handleClick}
width='auto'
height='auto'
cursor='pointer'
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
</Button> */
}
