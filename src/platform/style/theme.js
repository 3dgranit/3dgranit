import { createMuiTheme } from '@material-ui/core/styles';
// import './fonts/fonts.css';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f0f07d'
    },
    secondary: {
      main: '#c0c047',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
        },
      },
    }
  },
});
export default theme;
