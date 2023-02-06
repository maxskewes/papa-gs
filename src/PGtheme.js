import { createTheme, responsiveFontSizes } from '@mui/material';

let PGtheme = createTheme({
  palette: {
    mode: 'light',
    BLACK: '#333',
    SOFT_BLACK: '#242424',
    WHITE: '#FFFDFA',
    TAWNY: '#dcc098',
    RICH_TAWNY: '#c2914c',
    MED_TAWNY: '#593c05',
    DARK_TAWNY: '#3d2a05',
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
      textAlign: 'center',
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
