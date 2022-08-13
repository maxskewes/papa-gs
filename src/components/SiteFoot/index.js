import React from 'react';
import '../../styles.css';
import { Box, Container, Typography } from '@mui/material';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiMailFill,
} from 'react-icons/ri';
import PGlink from '../PGlink';

const SiteFoot = () => {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle, #c44431 30%, #212121 100%)',
        boxShadow: '0px 5px 25px #242424',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          padding: '40px 0',
          background:
            'linear-gradient( to top, rgba(36,36,36,.2), rgba(255,0,0,0), rgba(36,36,36,.5))',
        }}
      >
        <Container
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a href='https://www.facebook.com/PapaGsVeganOrganicDeli'>
            <Typography
              variant='h3'
              sx={{ color: 'flash.tawny', padding: '16px', cursor: 'pointer' }}
            >
              <RiFacebookCircleFill sx={{ cursor: 'pointer' }} />
            </Typography>
          </a>

          <a href='https://www.instagram.com/explore/locations/986157498/papa-gs-pizza-and-pasta/?hl=en'>
            <Typography
              variant='h3'
              sx={{ color: 'flash.tawny', padding: '16px', cursor: 'pointer' }}
            >
              <RiInstagramFill m={4} className='footer' />
            </Typography>
          </a>

          <PGlink to='/contact'>
            <Typography
              variant='h3'
              className='footer'
              sx={{ color: 'flash.tawny', padding: '16px', cursor: 'pointer' }}
            >
              <RiMailFill m={4} />
            </Typography>
          </PGlink>
        </Container>
        <Container
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Typography variant='footer' className='footer'>
            Papa G&apos;s Vegan Organics
          </Typography>
          <Typography variant='footer' className='footer'>
            Portland, OR
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default SiteFoot;
