import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Box, Typography } from '@mui/material';
import RouteContainer from '../components/RouteContainer';

const VarietyPage = ({
  varietyName,
  shadowClassName,
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <RouteContainer>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Typography
          variant='h2'
          className={shadowClassName}
          sx={{
            color: 'SOFT_BLACK',
            textAlign: 'center',
            margin: { xs: 0, md: '0 0 1rem 0' },
          }}
        >
          {varietyName}
        </Typography>
      </motion.div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                maxWidth: '600px',
                padding: {
                  xs: '.5rem 0 0 1rem',
                  md: 0,
                },
              }}
            >
              <img width='100%' src={imageSrc} alt={imageAlt} />
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
          >
            <Typography
              sx={{
                color: 'DARK_TAWNY',
                textIndent: '1rem',
                textAlign: {
                  xs: 'justify',
                  md: 'left',
                },
                marginTop: { xs: '-.5rem', md: '1.5rem' },
                paddingX: { xs: '.5rem', md: 0 },
                fontSize: {
                  xs: '.875rem',
                  sm: '1rem',
                  md: '1.125',
                  lg: '1.25rem',
                },
                fontFamily: 'Ribeye',
                fontWeight: 600,
              }}
            >
              {children}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </RouteContainer>
  );
};

export default VarietyPage;
