import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiMailFill,
} from 'react-icons/ri';
import PGlink from './PGlink';

const SiteFoot = () => {
  return (
    <Box bgcolor='background.foot' padding='40px 0'>
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
            variant='h2'
            sx={{ color: 'primary.text', padding: '16px', cursor: 'pointer' }}
          >
            <RiFacebookCircleFill sx={{ cursor: 'pointer' }} />
          </Typography>
        </a>

        <a href='https://twitter.com/papagees?lang=en'>
          <Typography
            variant='h2'
            sx={{ color: 'primary.text', padding: '16px', cursor: 'pointer' }}
          >
            <RiTwitterFill m={4} />
          </Typography>
        </a>

        <a href='https://www.instagram.com/explore/locations/986157498/papa-gs-pizza-and-pasta/?hl=en'>
          <Typography
            variant='h2'
            sx={{ color: 'primary.text', padding: '16px', cursor: 'pointer' }}
          >
            <RiInstagramFill m={4} />
          </Typography>
        </a>

        <PGlink to='/contact'>
          <Typography
            variant='h2'
            sx={{ color: 'primary.text', padding: '16px', cursor: 'pointer' }}
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
        <Typography variant='h7' color='primary.text'>
          Papa G&apos;s Vegan Organics
        </Typography>
        <Typography variant='h7' color='primary.text'>
          Portland, OR
        </Typography>
      </Container>
    </Box>
  );
};

export default SiteFoot;
