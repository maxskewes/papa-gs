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
import { PPbbq } from './routes/ProductImages';
import { PPoriginal } from './routes/ProductImages';
import { PPsesame } from './routes/ProductImages';
import { PPtaco } from './routes/ProductImages';

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
          <Route path='/product-pics/*'>
            <Route path='bbq' element={<PPbbq />} />
            <Route path='original' element={<PPoriginal />} />
            <Route path='sesame' element={<PPsesame />} />
            <Route path='taco' element={<PPtaco />} />
          </Route>
        </Routes>
        <SiteFoot />
      </Box>
    </BrowserRouter>
  );
}

export default App;
