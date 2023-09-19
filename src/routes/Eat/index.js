import React from 'react';
import { recipeImgs } from '../../assets/recipe_imgs';
import { Box, Container, Grid, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';
import PageHead from '../../components/PageHead';
import RouteContainer from '../../components/RouteContainer';
import SectionHead from '../../components/SectionHead';

const PlatePicCard = ({ imgSrc, title }) => {
  return (
    <Box display={'flex'} >
      <motion.img
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5 }}
       src={imgSrc} alt={title} />
    </Box>
  );
};

const Eat = () => {
  return (
    <RouteContainer>
      <PageHead title='Eat.' />
      {/* <Grid container spacing={0}>
        {recipeImgs.map((rcp, i) => (
          <Grid item xs={6} key={i} justifyContent={'center'} alignItems={'center'}>
            <PlatePicCard imgSrc={rcp.img_src} title={rcp.title} />
          </Grid>
        ))}
      </Grid> */}
<Container>
<ImageList sx={{ width: '1000px'}}>
  <ImageListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth:'450px' }}>
  <motion.img
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5 }}
       src={'/images/recipe_imgs/bbq_sando.png'} alt={'Recipe Item'} />
  </ImageListItem> 
  <ImageListItem sx={{ objectFit: 'cover', maxWidth:'450px' }}>
  <motion.img
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5 }}
       src={'/images/recipe_imgs/bbq_sando_above.png'} alt={'Recipe Item'} />
  </ImageListItem>
</ImageList>
</Container>


    </RouteContainer>
  );
};

export default Eat;
