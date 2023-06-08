import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/HelloSailorDemo-dJ2x.ttf';
import './fonts/HerSongDemo-ywZ7Y.ttf';
import './index.css';
import App from './App';
import PGtheme from './PGtheme';
import { ThemeProvider, CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={PGtheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
