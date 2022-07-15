import { createTheme } from '@mui/material';
import { blue, green, red, yellow } from '@mui/material/colors';

const PGtheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: yellow[500],
      light: green[400],
      dark: green[900],
      text: green[900],
    },
    background: {
      main: '#212121',
      head: green[900],
    },
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
    fontWeightBold: 700,
    fontFamily: "'Corben', 'Fredoka One', 'Permanent Marker', cursive",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    caption: {
      fontWeight: 400,
    },
    navLink: {
      fontWeight: 700,
      fontSize: {
        xs: '18px',
        sm: '14px',
        md: '18px',
        lg: '24px',
      },
    },
  },
});

export default PGtheme;
