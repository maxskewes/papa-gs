import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Collapse, Grid } from '@mui/material';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export default function RecipeCard() {
  const [expanded, setExpanded] = useState(false);

  const handleSetExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      justifyContent='center'
      alignItems='center'
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345, margin: { xs: '8px', md: '16px' } }}>
          <CardHeader
            title="Papa G's Curry Masala Tofu"
            subheader='prep: 10min / cook: 20min'
          />
          <CardMedia
            component='img'
            height='194'
            image='/images/recipes/curry-masala.jpeg'
            alt='Curry Masala image'
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              A quick and easy Tofu Curry with a delicious tomato-onion sauce
              that comes together in a blender. Creamy and perfectly spiced.
              Serve with rice or naan. This is a vegan, gluten-free recipe that
              can also be made soy and nut-free.
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h3'>
              {expanded ? (
                <RiArrowUpSFill onClick={handleSetExpand} />
              ) : (
                <RiArrowDownSFill onClick={handleSetExpand} />
              )}
            </Typography>
          </Box>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Card>
                <CardContent>
                  <Typography>Ingredients:</Typography>
                  <Typography variant='body2'>
                    1 package Papa G&apos;s CURRY TOFU <b />1 medium onion -
                    roughly chopped 3 medium tomatoes - rougly chopped 1 inch
                    knob ginger 4 cloves garlic 1 tablespoon coriander powder 1
                    tablespoon garam masala 2 teaspoon paprika ½ to 1 teaspoon
                    cayenne 1 teaspoon sugar 1 tablespoon kasoori methi - dry
                    fenugreek leaves 1 tablespoon vegetable oil 2 tablespoon
                    vegan butter 2 tablespoon cilantro for garnish
                  </Typography>
                </CardContent>
              </Card>

              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Place all the ingredients, except the vegetable oil, tofu,
                butter, cilantro and salt, into a blender and blitz into a very
                smooth paste.
              </Typography>
              <Typography paragraph>
                Heat the oil in a wide saucepan or wok. Add the tomato-onion
                paste and cook it, covered, over a medium-high flame, stirring
                frequently, until the moisture is mostly gone, the paste looks
                darker, and shimmers with oil droplets. The paste should look
                quite sticky at this point and should not taste raw. This step
                should take you anywhere from 10-15 minutes.
              </Typography>
              <Typography paragraph>
                Add 2-3 cups of water or vegetable stock, depending on the
                thickness you want for your curry, along with the tofu cubes.
                Add salt, stir to mix everything, bring back to a boil and cover
                and cook another five minutes. Stir in the vegan butter
              </Typography>
              <Typography>
                Serve hot or warm, garnished with cilantro.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </Grid>
  );
}
