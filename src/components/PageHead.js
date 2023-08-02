import React from 'react';
import '../styles.css';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import FlexContainer from './FlexContainer';

const PageHead = ({ title, subtitle, subtitle2 }) => {
  return (
    <FlexContainer column>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Typography
          className='shadow_bbq'
          variant='h2'
          sx={{
            color: 'SOFT_BLACK',
            marginBottom: { xs: '.5rem', md: '1rem' },
            textAlign: 'center',
            lineHeight: { xs: 1, lg: 1.5 },
          }}
        >
          {title}
        </Typography>
      </motion.div>
      <motion.div
        initial={{opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
      >
        <Typography
          sx={{
            fontSize: { xs: '20px', sm: '24px', md: '28px' },
            lineHeight: 1.2,
            fontFamily: 'Ribeye',
            textAlign: 'center',
            maxWidth: 900,
            color: 'MED_TAWNY',
            fontWeight: 600,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            textAlign: 'center',
            maxWidth: 900,
            color: 'MED_TAWNY',
            fontWeight: 600,
          }}
        >
          {subtitle2}
        </Typography>
      </motion.div>
    </FlexContainer>
  );
};

export default PageHead;
