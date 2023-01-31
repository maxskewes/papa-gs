import { createTheme, responsiveFontSizes } from '@mui/material';
import { brown } from '@mui/material/colors';

const BLACK = '#333';
const WHITE = '#FFFDFA';
const NAV = brown[900];
const YELLOW = '#deb20b';
const RED = '#c44431';
const BLUE = '#1c6a9a';
const GREEN = '#6c7e19';
const ORANGE = '#e26107';
const SOFT_BLACK = '#242424';
const TAWNY = '#dcc098';
const RICH_TAWNY = '#c2914c';
const MED_TAWNY = '#593c05';
const DARK_TAWNY = '#3d2a05';

let PGtheme = createTheme({
  palette: {
    mode: 'light',
    BITCH_TAWNY: '#e26107',
    pg: { softBlack: SOFT_BLACK, black: BLACK, white: WHITE, nav: NAV },
    primary: {
      main: GREEN,
      light: RED,
      dark: RED,
      text: SOFT_BLACK,
      hover: RED,
      test: BLUE,
    },
    flash: {
      yellow: YELLOW,
      red: RED,
      blue: BLUE,
      green: GREEN,
      orange: ORANGE,
      tawny: TAWNY,
      rich_tawny: RICH_TAWNY,
      med_tawny: MED_TAWNY,
      dark_tawny: DARK_TAWNY,
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
    fontFamily: "'Ribeye Marrow',  cursive",
    h1: {
      fontFamily: "'Ribeye Marrow',  cursive",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Ribeye Marrow',  cursive",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Ribeye Marrow',  cursive",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Ribeye Marrow',  cursive",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Ribeye Marrow',  cursive",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Ribeye Marrow',  cursive",
      fontWeight: 700,
    },
    recipe: {
      fontFamily: 'Ribeye',
      fontWeight: 400,
      fontSize: '16px',
      textAlign: 'center',
    },
    caption: {
      fontWeight: 400,
    },
    footer: {
      fontFamily: 'Ribeye',
      fontWeight: 500,
      fontSize: '24px',
      color: TAWNY,
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
