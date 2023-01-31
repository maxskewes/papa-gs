import React from 'react';
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
      <Typography
        variant='h2'
        className={shadowClassName}
        sx={{
          color: 'pg.black',
          textAlign: 'center',
          margin: { xs: 0, md: '0 0 1rem 0' },
        }}
      >
        {varietyName}
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: 'flash.dark_tawny',
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
        </Grid>
      </Grid>
    </RouteContainer>
  );
};

export default VarietyPage;
