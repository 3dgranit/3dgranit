import { makeStyles } from '@material-ui/core/styles';
import bg from '../images/bg.jpg';

export const useStyles = makeStyles(theme => ({
  bg: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    fontFamily: 'Roboto, Arial, sans-serif',
    [theme.breakpoints.down('sm')]: {
    },

    '&:before': {
      content: '\'\'',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'black',
      opacity: .8,
      zIndex: 5,
    },
    '&:after': {
      content: '\'\'',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url(${bg})`,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      opacity: .5,
      zIndex: 5,
 
    },
    '& div': {
      position: 'relative',
      zIndex: 10,
      color: 'white',
    },
    '& h3': {
      fontSize: 16,
      letterSpacing: 2,
      [theme.breakpoints.up('sm')]: {
        fontSize: 22
      },
    },
    '& h1': {
      fontSize: 22,
      letterSpacing: 2,
      maxWidth: 720,
      [theme.breakpoints.up('sm')]: {
        fontSize: 72
      },
      
    }
  },
  btnHeader: {
    padding: '10px 20px',
    border: '1px solid red'
  }
}));