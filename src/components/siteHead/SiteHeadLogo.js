import React from 'react';
import '../../styles.css';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import PGlink from '../PGlink';

export const SiteHeadLogo = ({ imgSrc }) => {
  return (
    <PGlink to='/'>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          display={'flex'}
          padding={{ xs: '0 0 0 1.5rem', md: 0 }}
          width={{ xs: '200px', sm: '250px', md: '300px', lg: '360px' }}
          marginTop={{ xs: '0', sm: '-10px', md: '-24px', lg: '-32px' }}
          component='img'
          src={imgSrc}
          alt="Papa G's logo"
        />
      </motion.div>
    </PGlink>
  );
};

export const SiteHeadSloganLg = () => {
  return (
    <Box
      flexGrow={{ xs: 0, md: 1 }}
      display={'flex'}
      paddingBottom={{ xs: 0, md: '4.5rem', lg: '6rem' }}
      marginLeft={{ xs: 0, md: '-1.25rem', lg: '-1.5rem' }}
    >
      <Typography
        className='slogan'
        textAlign={{ xs: 'right', md: 'left' }}
        sx={{
          fontFamily: 'Ribeye',
          fontSize: { xs: '18px', sm: '22px', lg: '24px' },
          lineHeight: { xs: 1.25, md: 1.125 },
          fontWeight: 400,
          color: 'TAWNY',
        }}
      >
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Seasoned.
        </motion.p>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Baked.
        </motion.p>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Organic.
        </motion.p>
      </Typography>
    </Box>
  );
};

export const SiteHeadSloganSm = () => {
  return (
    <Box
      flexGrow={{ xs: 0, md: 1 }}
      display={'flex'}
      paddingBottom={{ xs: 0, md: '4.5rem', lg: '6rem' }}
      marginLeft={{ xs: 0, md: '-1.25rem', lg: '-1.5rem' }}
    >
      <Typography
        className='slogan'
        textAlign={{ xs: 'right', md: 'left' }}
        sx={{
          fontFamily: 'Ribeye',
          fontSize: { xs: '18px', sm: '22px', lg: '24px' },
          lineHeight: { xs: 1.25, md: 1.125 },
          fontWeight: 400,
          color: 'TAWNY',
        }}
      >
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Seasoned.
        </motion.p>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Baked.
        </motion.p>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Organic.
        </motion.p>
      </Typography>
    </Box>
  );
};
