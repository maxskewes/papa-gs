import React from 'react';
import '../../styles.css';
import { motion } from 'framer-motion';
import { Box, Container, Typography } from '@mui/material';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiMailFill,
} from 'react-icons/ri';
import PGlink from '../PGlink';

const SiteFoot = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: '100%' }}
    >
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
                sx={{
                  color: 'TAWNY',
                  padding: '16px',
                  cursor: 'pointer',
                  '&:hover': { color: 'RICH_TAWNY' },
                }}
              >
                <RiFacebookCircleFill />
              </Typography>
            </a>

            <a href='https://www.instagram.com/explore/locations/986157498/papa-gs-pizza-and-pasta/?hl=en'>
              <Typography
                variant='h3'
                sx={{
                  color: 'TAWNY',
                  padding: '16px',
                  cursor: 'pointer',

                  '&:hover': { color: 'RICH_TAWNY' },
                }}
              >
                <RiInstagramFill m={4} />
              </Typography>
            </a>

            <PGlink to='/contact'>
              <Typography
                variant='h3'
                className='footer'
                sx={{
                  color: 'TAWNY',
                  padding: '16px',
                  cursor: 'pointer',
                  '&:hover': { color: 'RICH_TAWNY' },
                }}
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
            <Typography
              variant='footer'
              className='footer'
              sx={{ color: 'TAWNY', fontSize: { xs: '20px', sm: '24px' } }}
            >
              Papa G&apos;s Vegan Organics
            </Typography>
            <Typography
              variant='footer'
              className='footer'
              sx={{ color: 'TAWNY', fontSize: { xs: '20px', sm: '24px' } }}
            >
              Portland, OR
            </Typography>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SiteFoot;
