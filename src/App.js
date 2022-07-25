import './App.css';
import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <SiteHead />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='original-recipe' element={<Original />} />
        <Route path='savory-sesame' element={<Sesame />} />
        <Route path='taco-tofu' element={<Taco />} />
        <Route path='bbq' element={<BBQ />} />
        <Route path='get' element={<Get />} />
        <Route path='cook' element={<Cook />} />
        <Route path='eat' element={<Eat />} />
        <Route path='live' element={<Live />} />
        <Route path='us' element={<Us />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <SiteFoot />
    </BrowserRouter>
  );
}

export default App;
