import { createMuiTheme } from '@material-ui/core/styles';

// カラー設定
const myTheme = createMuiTheme({
  palette: {
    primary: {
      // lightGreen
      light: '#a2cf6e',
      main: '#8bc34a',
      dark: '#618833',
      contrastText: '#fff',

    },
    secondary: {
      // purple
      light: '#dd33fa',
      main: '#d500f9',
      dark: '#9500ae',
      contrastText: '#fff',
      buttonColor: '#CE95C8',
    }
  },
});

export default myTheme;