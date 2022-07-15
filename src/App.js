import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteFoot from './components/SiteFoot';
import SiteHead from './components/siteHead';
import Welcome from './routes/Welcome';
import Eat from './routes/Eat';
import Get from './routes/Get';
import Cook from './routes/Cook';
import Live from './routes/Live';
import Us from './routes/Us';
import Contact from './routes/Contact';

function App() {
  return (
    <BrowserRouter>
      <SiteHead />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='eat' element={<Eat />} />
        <Route path='get' element={<Get />} />
        <Route path='cook' element={<Cook />} />
        <Route path='live' element={<Live />} />
        <Route path='us' element={<Us />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <SiteFoot />
    </BrowserRouter>
  );
}

export default App;
