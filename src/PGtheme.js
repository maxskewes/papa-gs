import { createTheme, responsiveFontSizes } from '@mui/material';
import {
  red,
  yellow,
  green,
  blue,
  purple,
  orange,
  pink,
  brown,
} from '@mui/material/colors';

const BLACK = '#212121';
const WHITE = '#FFFDFA';
const NAV = brown[900];
const YELLOW = '#deb20b';
const RED = '#c44431';
const BLUE = '#1c6a9a';
const GREEN = '#6c7e19';
const ORANGE = '#e26107';

let PGtheme = createTheme({
  palette: {
    mode: 'light',
    pg: { black: BLACK, white: WHITE, nav: NAV },
    primary: {
      main: green[800],
      light: red[400],
      dark: red[500],
      text: YELLOW,
      hover: red[800],
      test: blue[300],
    },
    flash: {
      yellow: YELLOW,
      red: RED,
      blue: BLUE,
      green: GREEN,
      orange: ORANGE,
    },
    background: {
      main: '#f7e8b7',
      head: RED,
      foot: RED,
    },
  },
  typography: {
    fontWeightLight: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
    fontFamily: "'Amatic SC', 'Corben', 'Permanent Marker', cursive",
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

PGtheme = responsiveFontSizes(PGtheme);

export default PGtheme;
