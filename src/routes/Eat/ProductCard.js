import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = () => {
  return (
    <Card sx={{ maxWidth: 345, padding: '16px', margin: '16px' }}>
      <CardMedia
        component='img'
        height='200'
        image='/images/products/savory-sesame.png'
        alt='Savory Sesame Tofu'
        sx={{ borderRadius: '4px' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          textAlign={'center'}
        >
          Savory Sesame
        </Typography>
        <Typography variant='body2' color='text.secondary' textAlign={'center'}>
          Ingredients: Organic Tofu, Organic Sunflower Oil, Organic Sesame Oil,
          Organic Tamari, Organic Garlic, Sea Salt, Organic Tumeric
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          size='small'
          sx={{ color: 'primary.dark', alignSelf: 'center' }}
          href='/cook'
        >
          Recipes
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;