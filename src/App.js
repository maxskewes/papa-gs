import './App.css';
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteFoot from './components/SiteFoot';
import SiteHead from './components/siteHead';
import Landing from './routes/Landing';
import Eat from './routes/Eat';
import Get from './routes/Get';
import Cook from './routes/Cook';
import Live from './routes/Live';
import Us from './routes/Us';
import Contact from './routes/Contact';
import Original from './routes/Original';
import Sesame from './routes/Sesame';
import Taco from './routes/Taco';
import BBQ from './routes/BBQ';
import { Box } from '@mui/material';
import { PPbbq, PPoriginal, PPsesame, PPtaco } from './routes/ProductImages';
import { NFbbq, NForiginal, NFsesame, NFtaco } from './routes/NutritionImages';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SiteHead />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='original-recipe' element={<Original />} />
          <Route path='savory-sesame' element={<Sesame />} />
          <Route path='street-taco' element={<Taco />} />
          <Route path='barbeque' element={<BBQ />} />
          <Route path='get' element={<Get />} />
          <Route path='cook' element={<Cook />} />
          <Route path='eat' element={<Eat />} />
          <Route path='live' element={<Live />} />
          <Route path='us' element={<Us />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product-pics/original' element={<PPoriginal />} />
          <Route path='product-pics/bbq' element={<PPbbq />} />
          <Route path='product-pics/sesame' element={<PPsesame />} />
          <Route path='product-pics/taco' element={<PPtaco />} />
          <Route path='nutrition-facts/original' element={<NForiginal />} />
          <Route path='nutrition-facts/bbq' element={<NFbbq />} />
          <Route path='nutrition-facts/sesame' element={<NFsesame />} />
          <Route path='nutrition-facts/taco' element={<NFtaco />} />
        </Routes>
        <SiteFoot />
      </Box>
    </BrowserRouter>
  );
}

export default App;
