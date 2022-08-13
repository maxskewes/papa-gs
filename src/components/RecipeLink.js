import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import PGlink from './PGlink';
import { FaBookOpen } from 'react-icons/fa';

const RecipeLink = ({ product }) => {
  return (
    <Box
      sx={{
        width: '250px',
        height: '200px',
        padding: '16px',
        border: '2px solid',
        borderColor: 'BLACK',
        borderRadius: 8,
        background: 'radial-gradient(circle, #1c6a9a 60%, #212121 100%)',
        textAlign: 'center',
      }}
    >
      <PGlink to='/cook'>
        <Typography
          variant='recipe'
          sx={{
            fontFamily: 'Ribeye',
            fontWeight: 400,
            color: 'flash.tawny',
          }}
        >
          Check out our
          <br />
          On-Line Recipe Book
          <br />
          <Button>
            <FaBookOpen />
          </Button>
          <br />
          for dishes recommending our
          <br />
          {product}
        </Typography>
      </PGlink>
    </Box>
  );
};

export default RecipeLink;
